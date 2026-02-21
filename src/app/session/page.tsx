'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSession } from '@/hooks/useSession';
import { useRouter, useSearchParams } from 'next/navigation';
import { Icons } from '@/components/icons';
import { SessionService } from '@/services/session.service';
import { Session } from '@/types/session';

function SessionPageContent() {
    const [username, setUsername] = useState('');
    const { createSession, loading, error, user } = useSession();
    const router = useRouter();
    const searchParams = useSearchParams();
    const forceNew = searchParams.get('mode') === 'new';
    const [existingSessions, setExistingSessions] = useState<Session[]>([]);
    const [checkingSessions, setCheckingSessions] = useState(true);

    useEffect(() => {
        if (forceNew) {
            setExistingSessions([]);
            setCheckingSessions(false);
            return;
        }
        if (user?.$id) {
            SessionService.listActive(user.$id)
                .then(sessions => setExistingSessions(sessions))
                .catch(console.error)
                .finally(() => setCheckingSessions(false));
        } else {
            setCheckingSessions(false);
        }
    }, [user, forceNew]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!username.trim()) return;

        await createSession(username);
        router.push('/rooms');
    };

    const handleResume = (session: Session) => {
        localStorage.setItem('nexconnect_session_id', session.$id);
        localStorage.setItem('nexconnect_private_id', session.privateId);
        window.location.href = '/rooms'; // Force reload to re-init auth with new session
    };

    return (
        <div className="min-h-screen bg-surface-base dark:bg-surface-darkBase flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icons.Lock className="w-8 h-8 text-white" />
                </div>

                <h1 className="text-3xl font-bold text-text-primary dark:text-text-darkPrimary mb-2">
                    {forceNew ? 'Anonymous Session' : 'Secure Session'}
                </h1>

                {checkingSessions ? (
                    <div className="py-8 flex justify-center">
                        <Icons.Loader className="w-6 h-6 animate-spin text-brand-primary" />
                    </div>
                ) : existingSessions.length > 0 ? (
                    <div className="text-left space-y-6 animate-in fade-in slide-in-from-bottom-4">
                        <p className="text-center text-text-secondary dark:text-text-darkMuted mb-4">
                            Resume an active session or create a new one.
                        </p>

                        <div className="space-y-3">
                            {existingSessions.map((session, idx) => (
                                <div key={session.$id} className="bg-surface-subtle dark:bg-surface-darkElevated p-4 rounded-xl border border-border-default dark:border-border-darkDefault flex items-center justify-between">
                                    <div>
                                        <p className="font-semibold text-text-primary dark:text-text-darkPrimary">Session #{existingSessions.length - idx}</p>
                                        <p className="text-xs text-text-secondary dark:text-text-darkMuted">
                                            Started {new Date(session.$createdAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => handleResume(session)}
                                        className="px-4 py-2 bg-brand-primary dark:bg-brand-primaryDark text-white text-sm font-medium rounded-lg hover:opacity-90 transition"
                                    >
                                        Resume
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="relative py-2">
                            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border-default dark:border-border-darkDefault"></div></div>
                            <div className="relative flex justify-center"><span className="bg-surface-base dark:bg-surface-darkBase px-2 text-xs text-text-muted dark:text-text-darkMuted">OR</span></div>
                        </div>

                        <button
                            onClick={() => setExistingSessions([])} // Clear list to show form
                            className="w-full py-3 text-brand-primary dark:text-brand-primaryDark font-medium hover:underline text-sm"
                        >
                            Create New Identity
                        </button>
                    </div>
                ) : (
                    <>
                        <p className="text-text-secondary dark:text-text-darkMuted mb-8">
                            Enter a pseudonym for this session. It will be discarded when you leave.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="e.g. Secret Agent 007"
                                className="w-full px-5 py-4 bg-surface-subtle dark:bg-surface-darkSubtle text-text-primary dark:text-text-darkPrimary border border-border-default dark:border-border-darkDefault rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-primaryDark transition placeholder-text-muted dark:placeholder-text-darkMuted"
                                autoFocus
                            />

                            {error && (
                                <p className="text-status-danger dark:text-status-dangerDark text-sm">{error}</p>
                            )}

                            <button
                                type="submit"
                                disabled={loading || !username.trim()}
                                className="w-full bg-text-primary dark:bg-text-inverse text-text-inverse dark:text-text-primary font-medium py-4 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? 'Creating Identity...' : (
                                    <>
                                        Start Anonymous Session <Icons.ChevronRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                        <p className="mt-8 text-xs text-center text-text-muted dark:text-text-darkMuted">
                            By continuing, you agree to our ephemeral data policy.
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}

export default function SessionPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen bg-surface-base dark:bg-surface-darkBase flex flex-col items-center justify-center p-4">
                    <Icons.Loader className="w-6 h-6 animate-spin text-brand-primary" />
                </div>
            }
        >
            <SessionPageContent />
        </Suspense>
    );
}
