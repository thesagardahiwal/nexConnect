'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Icons } from '@/components/icons';
import { RoomService } from '@/services/room.service';
import { RoomMemberService } from '@/services/room-member.service';
import { useSession } from '@/hooks/useSession';

interface JoinRoomModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialRoomId?: string;
}

export default function JoinRoomModal({ isOpen, onClose, initialRoomId = '' }: JoinRoomModalProps) {
    const [roomId, setRoomId] = useState(initialRoomId);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();
    const { session } = useSession();

    // Effect to set room ID if provided
    if (isOpen && initialRoomId && roomId !== initialRoomId) {
        setRoomId(initialRoomId);
    }

    if (!isOpen) return null;

    const handleJoin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // 1. Validate Room Exists & Open
            const room = await RoomService.get(roomId);

            if (room.status !== 'OPEN') {
                throw new Error("This room is closed.");
            }

            // 2. Add Member
            if (session?.userId) {
                await RoomMemberService.add({
                    room: room.$id,
                    user: session.userId, // Non-null assertion safe due to hooks logic usually
                    role: 'MEMBER'
                });
            }

            // 3. Navigate
            router.push(`/room/${room.$id}`);
            onClose();
        } catch (err: any) {
            console.error(err);
            if (err.message.includes("Document not found")) {
                setError("Room not found. Check the ID.");
            } else {
                setError(err.message || "Failed to join room.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-surface-base dark:bg-surface-darkElevated w-full max-w-md rounded-2xl p-6 shadow-2xl border border-border-default dark:border-border-darkDefault">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-text-primary dark:text-text-darkPrimary">
                        {initialRoomId ? 'Join Room' : 'Join Private Room'}
                    </h3>
                    <button onClick={onClose} className="text-text-secondary dark:text-text-darkSecondary hover:text-text-primary dark:hover:text-text-darkPrimary">
                        <Icons.Close className="w-6 h-6" />
                    </button>
                </div>

                <form onSubmit={handleJoin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-text-secondary dark:text-text-darkSecondary mb-1">
                            Room ID
                        </label>
                        <input
                            type="text"
                            value={roomId}
                            onChange={e => setRoomId(e.target.value)}
                            placeholder="Enter Room ID..."
                            className="w-full px-4 py-3 rounded-xl bg-surface-subtle dark:bg-surface-darkSubtle border-none text-text-primary dark:text-text-darkPrimary placeholder-text-muted dark:placeholder-text-text-darkMuted focus:ring-2 focus:ring-brand-primary outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                            required
                            disabled={!!initialRoomId}
                        />
                        {error && <p className="text-sm text-status-danger mt-2">{error}</p>}
                    </div>

                    <div className="flex gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-3 rounded-xl bg-surface-subtle dark:bg-surface-darkSubtle text-text-primary dark:text-text-darkPrimary font-semibold hover:bg-border-default dark:hover:bg-border-darkDefault transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading || !roomId.trim()}
                            className="flex-1 py-3 rounded-xl bg-brand-primary dark:bg-brand-primaryDark text-white font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {loading ? <Icons.Loader className="w-5 h-5 animate-spin" /> : "Join Room"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
