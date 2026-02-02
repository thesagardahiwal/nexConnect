'use client';

import { useState, useEffect } from 'react';
import { useRooms } from '@/hooks/useRooms';
import { useSession } from '@/hooks/useSession';
import { useRouter } from 'next/navigation';
import { Icons } from '@/components/icons';

export default function RoomsIndexPage() {
    const [roomName, setRoomName] = useState('');
    const [isPublic, setIsPublic] = useState(true);
    const { createRoom } = useRooms();
    const { user, session, loading: sessionLoading } = useSession();
    const router = useRouter();
    const [creating, setCreating] = useState(false);

    useEffect(() => {
        if (!sessionLoading && !session) {
            router.push('/session');
        }
    }, [session, sessionLoading, router]);

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!roomName.trim() || !user) return;

        setCreating(true);
        try {
            const newRoom = await createRoom({
                name: roomName,
                creator: user.userId,
                isPublic,
                roomCode: !isPublic ? Math.random().toString(36).substring(7) : undefined // Simple random code
            });
            router.push(`/room/${newRoom.$id}`);
        } catch (error) {
            console.error(error);
            alert("Failed to create room");
        } finally {
            setCreating(false);
        }
    };

    if (sessionLoading) {
        return <div className="flex-1 flex items-center justify-center bg-surface-subtle dark:bg-surface-darkElevated text-text-muted dark:text-text-darkMuted">Loading...</div>;
    }

    if (!session) {
        return null; // Will redirect via useEffect
    }

    return (
        <div className="hidden md:flex flex-1 items-center justify-center bg-surface-base dark:bg-surface-darkBase p-6">
            <div className="max-w-md w-full bg-surface-base dark:bg-surface-darkElevated p-8 rounded-3xl border border-border-default dark:border-border-darkDefault shadow-sm">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-text-primary dark:text-text-darkPrimary">Create a Room</h2>
                    <p className="text-text-secondary dark:text-text-darkMuted mt-2">Start a new secure channel for your team</p>
                </div>

                <form onSubmit={handleCreate} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-text-secondary dark:text-text-darkMuted mb-1">Room Name</label>
                        <input
                            type="text"
                            value={roomName}
                            onChange={(e) => setRoomName(e.target.value)}
                            placeholder="e.g. Project Alpha"
                            className="w-full px-4 py-3 bg-surface-subtle dark:bg-surface-darkSubtle text-text-primary dark:text-text-darkPrimary border border-border-default dark:border-border-darkDefault rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-primaryDark placeholder-text-muted dark:placeholder-text-darkMuted"
                        />
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-surface-subtle dark:bg-surface-darkSubtle rounded-xl">
                        <input
                            type="checkbox"
                            checked={isPublic}
                            onChange={(e) => setIsPublic(e.target.checked)}
                            className="w-5 h-5 text-brand-primary dark:text-brand-primaryDark rounded focus:ring-brand-primary dark:focus:ring-brand-primaryDark bg-surface-base dark:bg-surface-darkElevated border-border-default dark:border-border-darkDefault"
                        />
                        <div className="flex-1">
                            <p className="text-sm font-medium text-text-primary dark:text-text-darkPrimary">Public Room</p>
                            <p className="text-xs text-text-secondary dark:text-text-darkMuted">Visible to everyone in the lobby</p>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={creating || !roomName.trim()}
                        className="w-full bg-brand-primary dark:bg-brand-primaryDark text-text-inverse font-medium py-3 rounded-xl hover:bg-brand-secondary transition disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                        {creating ? 'Creating...' : <>Create Room <Icons.Plus className="w-5 h-5" /></>}
                    </button>
                </form>
            </div>
        </div>
    );
}
