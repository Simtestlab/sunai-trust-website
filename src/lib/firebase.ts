/**
 * Firebase App Initialization
 *
 * Reads configuration from environment variables (Vite's `import.meta.env`).
 * Exports the Firestore database instance and Firebase Storage instance
 * so they can be consumed by the form-submission service and other modules.
 *
 * To set up:
 *   1. Copy `.env.example` → `.env`
 *   2. Fill in the values from your Firebase Console → Project Settings
 *   3. Restart the dev server (`npm run dev`)
 */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

/** Firebase application instance */
const app = initializeApp(firebaseConfig);

/** Firestore database — used for storing form submissions */
export const db = getFirestore(app);

/** Firebase Storage — used for uploading files (photos, documents, resumes) */
export const storage = getStorage(app);

export default app;
