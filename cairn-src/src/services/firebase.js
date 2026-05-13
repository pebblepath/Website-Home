import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
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

/** On-demand calendar scope grant + access-token return. */
export async function connectGoogleCalendar() {
  if (!auth || !calendarProvider) throw new Error('Firebase not configured.');
  if (_calendarAccessToken && Date.now() < _calendarTokenExpiresAt - 60_000) {
    return _calendarAccessToken;
  }
  const result = await signInWithPopup(auth, calendarProvider);
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
