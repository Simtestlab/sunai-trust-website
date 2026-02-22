/**
 * Firebase Authentication Helper
 *
 * Provides sign-in / sign-out functions and a React hook (`useAuth`)
 * that tracks the current authenticated user via `onAuthStateChanged`.
 *
 * Usage:
 *   1. Enable **Email / Password** sign-in in Firebase Console →
 *      Authentication → Sign-in method.
 *   2. Create at least one admin user in Authentication → Users.
 *   3. Import `useAuth` wherever auth state is needed.
 */

import { useState, useEffect } from "react";
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut as fbSignOut,
    onAuthStateChanged,
    type User,
} from "firebase/auth";
import app from "./firebase";

/** Firebase Auth instance */
export const auth = getAuth(app);

/* ── Sign-in / Sign-out ─────────────────────────────────────────────── */

/**
 * Signs in with email + password.
 * Throws on invalid credentials (caller should catch & display error).
 */
export async function signIn(email: string, password: string): Promise<User> {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    return credential.user;
}

/** Signs out the current user. */
export async function signOutUser(): Promise<void> {
    await fbSignOut(auth);
}

/* ── React Hook ─────────────────────────────────────────────────────── */

interface AuthState {
    /** Currently signed-in user, or `null` if signed out */
    user: User | null;
    /** `true` while the initial auth state is being determined */
    loading: boolean;
}

/**
 * Hook that subscribes to Firebase auth state changes.
 * Returns `{ user, loading }`.
 */
export function useAuth(): AuthState {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    return { user, loading };
}
