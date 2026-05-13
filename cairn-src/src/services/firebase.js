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

export { app as firebaseApp, httpsCallable };

const googleProvider = isConfigured ? new GoogleAuthProvider() : null;
if (googleProvider) {
  // Phase 1: profile + email only. Calendar scopes added in Phase 3
  // (gated behind a separate "Connect calendar" action so first sign-in
  // doesn't trip the sensitive-scope consent screen).
  googleProvider.setCustomParameters({ prompt: 'select_account' });
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
