/**
 * Admin Login Component
 *
 * A full-page login form shown when the user is not authenticated.
 * Uses Firebase Email/Password auth via the `signIn` helper.
 */

import { useState } from "react";
import { signIn } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Lock, Mail, ShieldCheck, AlertCircle } from "lucide-react";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            await signIn(email, password);
            // onAuthStateChanged in the parent will handle the redirect
        } catch (err: unknown) {
            const message =
                err instanceof Error ? err.message : "Authentication failed";
            // Make Firebase error messages more friendly
            if (message.includes("invalid-credential") || message.includes("wrong-password") || message.includes("user-not-found")) {
                setError("Invalid email or password. Please try again.");
            } else if (message.includes("too-many-requests")) {
                setError("Too many failed attempts. Please try again later.");
            } else {
                setError(message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-900 px-4">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="relative w-full max-w-md">
                {/* Card */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl shadow-2xl p-8 md:p-10">
                    {/* Logo / Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                            <ShieldCheck className="w-8 h-8 text-emerald-300" />
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-white mb-2">
                            Admin Access
                        </h1>
                        <p className="text-emerald-200/70 text-sm">
                            Sign in to manage SUNAI submissions
                        </p>
                    </div>

                    {/* Error */}
                    {error && (
                        <div className="mb-6 bg-red-500/15 border border-red-400/30 rounded-xl px-4 py-3 flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                            <p className="text-sm text-red-200">{error}</p>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label
                                htmlFor="admin-email"
                                className="block text-xs font-semibold uppercase tracking-wider text-emerald-200/60 mb-2"
                            >
                                Email
                            </label>
                            <div className="relative">
                                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-300/50" />
                                <Input
                                    id="admin-email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    placeholder="admin@sunaitrust.org"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="pl-10 bg-white/10 border-white/15 text-white placeholder:text-white/30 rounded-xl h-12 focus:border-emerald-400 focus:ring-emerald-400/30"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="admin-password"
                                className="block text-xs font-semibold uppercase tracking-wider text-emerald-200/60 mb-2"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-300/50" />
                                <Input
                                    id="admin-password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="pl-10 bg-white/10 border-white/15 text-white placeholder:text-white/30 rounded-xl h-12 focus:border-emerald-400 focus:ring-emerald-400/30"
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full h-12 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-base transition-all shadow-lg shadow-emerald-500/25"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    Signing in…
                                </>
                            ) : (
                                "Sign In"
                            )}
                        </Button>
                    </form>
                </div>

                {/* Footer text */}
                <p className="text-center text-emerald-300/40 text-xs mt-6">
                    SUNAI Trust · Admin Dashboard
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;
