import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
  reauthenticateWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  collection,
  onSnapshot,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

export {
  doc,
  collection,
  onSnapshot,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
};

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const isConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);

export const app = isConfigured ? initializeApp(firebaseConfig) : null;
export const auth = isConfigured ? getAuth(app) : null;
export const db = isConfigured ? getFirestore(app) : null;
export const functions = isConfigured ? getFunctions(app, 'us-central1') : null;
export const storage = isConfigured ? getStorage(app) : null;

export { app as firebaseApp, httpsCallable, storageRef, uploadBytes, getDownloadURL };

const googleProvider = isConfigured ? new GoogleAuthProvider() : null;
if (googleProvider) {
  // Phase 1: profile + email only. Calendar scope is added on-demand
  // via connectGoogleCalendar() below.
  googleProvider.setCustomParameters({ prompt: 'select_account' });
}

const calendarProvider = isConfigured ? new GoogleAuthProvider() : null;
if (calendarProvider) {
  calendarProvider.addScope('https://www.googleapis.com/auth/calendar.readonly');
}

// Memory-only cache for the Google OAuth access token. ~60-min lifetime.
let _calendarAccessToken = null;
let _calendarTokenExpiresAt = 0;

/**
 * On-demand Google Calendar scope grant + access-token return.
 *
 * 2026-05-15 — ROOT-CAUSE FIX for "calendar import broken end-to-end".
 * The previous implementation called `signInWithPopup(auth,
 * calendarProvider)` — a full SIGN-IN — just to obtain the
 * `calendar.readonly` scope. Cairn supports email/password, Apple AND
 * Google sign-in, so for any user who didn't authenticate with the
 * exact same Google account this either threw
 * `auth/account-exists-with-different-credential` or silently switched
 * `auth.currentUser` to a different uid mid-session (the data store
 * then subscribed to the wrong user → permission-denied / wrong
 * family). Net effect: broken for every non-Google user and a session-
 * corruption hazard for Google users who picked a different account.
 *
 * Correct approach: `reauthenticateWithPopup` on the SAME current user
 * (preserves the Firebase session, still returns a Google OAuth
 * credential with the added scope). Firebase can only mint a Google
 * access token for a user whose account is Google-linked, so non-Google
 * users get a clear, honest failure instead of a corrupting one. (Full
 * support for email/Apple users would require standalone Google
 * Identity Services with a Cloud OAuth client ID — operational,
 * tracked as a follow-up.)
 */
export async function connectGoogleCalendar() {
  if (!auth || !calendarProvider) throw new Error('Firebase not configured.');
  if (_calendarAccessToken && Date.now() < _calendarTokenExpiresAt - 60_000) {
    return _calendarAccessToken;
  }
  const user = auth.currentUser;
  if (!user) throw new Error('Please sign in before importing your calendar.');

  const isGoogleUser = (user.providerData ?? []).some(
    (p) => p.providerId === 'google.com',
  );
  if (!isGoogleUser) {
    const err = new Error(
      "Calendar import needs a Google account. You're signed in another " +
        "way, so Cairn can't read your Google Calendar here yet — add " +
        'events manually for now.',
    );
    err.code = 'calendar/needs-google-account';
    throw err;
  }

  let result;
  try {
    result = await reauthenticateWithPopup(user, calendarProvider);
  } catch (e) {
    if (e?.code === 'auth/user-mismatch') {
      const err = new Error(
        'Please choose the same Google account you use to sign in to Cairn.',
      );
      err.code = e.code;
      throw err;
    }
    if (e?.code === 'auth/popup-closed-by-user' || e?.code === 'auth/cancelled-popup-request') {
      const err = new Error('Calendar connection cancelled.');
      err.code = e.code;
      throw err;
    }
    throw e;
  }
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential?.accessToken;
  if (!token) throw new Error("Couldn't get a Calendar access token — try again.");
  _calendarAccessToken = token;
  _calendarTokenExpiresAt = Date.now() + 60 * 60 * 1000;
  return token;
}

export function clearCalendarToken() {
  _calendarAccessToken = null;
  _calendarTokenExpiresAt = 0;
}

export function signIn() {
  if (!auth) throw new Error('Firebase not configured — fill in .env first.');
  return signInWithPopup(auth, googleProvider);
}

/**
 * Apple Sign-in. Uses the OAuthProvider for `apple.com` (Firebase Auth's
 * native Apple integration). Requires the Apple provider to be enabled
 * in Firebase Console → Authentication → Sign-in method. Same Firebase
 * project as PebblePath iOS, so anyone with Apple-linked PP credentials
 * lands on Cairn with their existing account.
 */
const appleProvider = isConfigured ? new OAuthProvider('apple.com') : null;
if (appleProvider) {
  appleProvider.addScope('email');
  appleProvider.addScope('name');
}

export function signInWithApple() {
  if (!auth || !appleProvider) {
    throw new Error('Firebase not configured — fill in .env first.');
  }
  return signInWithPopup(auth, appleProvider);
}

/**
 * Email + password sign-in. Firebase Auth's email/password provider is
 * shared with PP iOS (same Firebase project), so a user who registered
 * via the iOS app's manual email path can sign into Cairn web with
 * the same credentials. No verification flow to manage on the web side.
 */
export function signInWithEmail(email, password) {
  if (!auth) throw new Error('Firebase not configured.');
  return signInWithEmailAndPassword(auth, email, password);
}

/**
 * Email + password sign-up. Creates a fresh Firebase Auth user, then
 * sets their displayName so the cairn-stack greeting + memberProfiles
 * write have a name to use. Caller is responsible for routing to
 * the create-family / join-family path afterwards.
 */
export async function signUpWithEmail(email, password, displayName) {
  if (!auth) throw new Error('Firebase not configured.');
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  if (displayName && displayName.trim()) {
    try {
      await updateProfile(cred.user, { displayName: displayName.trim() });
    } catch {
      /* non-fatal — name will be empty until they set it in profile sheet */
    }
  }
  return cred;
}

/**
 * Password-reset email — Firebase sends from the project's auth domain.
 * Idempotent for non-existent emails (no information leak).
 */
export function sendPasswordReset(email) {
  if (!auth) throw new Error('Firebase not configured.');
  return sendPasswordResetEmail(auth, email);
}

export function signOutUser() {
  if (!auth) return Promise.resolve();
  return signOut(auth);
}

export function onAuth(callback) {
  if (!auth) {
    callback(null);
    return () => {};
  }
  return onAuthStateChanged(auth, callback);
}
