'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Icons } from '@/components/icons';
import { RoomService } from '@/services/room.service';
import { RoomMemberService } from '@/services/room-member.service';
import { useSession } from '@/hooks/useSession';
import { useAppDispatch } from '@/store/hooks';
import { addRoom, enterRoom } from '@/store/slices/roomSlice';

interface JoinRoomModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialRoomId?: string;
    intent?: 'chat' | 'media' | null;
}

export default function JoinRoomModal({ isOpen, onClose, initialRoomId = '', intent, onSuccess }: JoinRoomModalProps & { onSuccess?: () => void }) {
    const [roomId, setRoomId] = useState(initialRoomId);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();
    const { session, user } = useSession();
    const dispatch = useAppDispatch();

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
            const value = roomId.trim();
            if (!value) throw new Error("Room ID or code is required.");
            // 1. Validate Room Exists & Open (ID or Code)
            const room = await RoomService.getByIdOrCode(value);

            if (room.status !== 'OPEN') {
                throw new Error("This room is closed.");
            }

            // 2. Add Member
            const memberUserId = user?.$id || session?.userId;
            if (memberUserId) {
                await RoomMemberService.add({
                    room: room.$id,
                    user: memberUserId,
                    role: 'MEMBER'
                });
                dispatch(addRoom(room));
                dispatch(enterRoom(room.$id));
            } else {
                throw new Error("Session not ready. Please try again.");
            }

            // 3. Navigate or Success Callback
            if (onSuccess) {
                onSuccess();
            } else {
                router.push(`/room/${room.$id}`);
                onClose();
            }
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm join-backdrop">
            <div className="bg-surface-base dark:bg-surface-darkElevated w-full max-w-md rounded-2xl p-6 shadow-2xl border border-border-default dark:border-border-darkDefault join-modal-pop relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 join-accent" />
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-text-primary dark:text-text-darkPrimary">
                        {initialRoomId ? 'Join Room' : 'Join Private Room'}
                    </h3>
                    <button onClick={onClose} className="text-text-secondary dark:text-text-darkSecondary hover:text-text-primary dark:hover:text-text-darkPrimary">
                        <Icons.Close className="w-6 h-6" />
                    </button>
                </div>
                <p className="text-sm text-text-secondary dark:text-text-darkSecondary mb-6">
                    {intent === 'chat' && 'Join to start chatting in this room.'}
                    {intent === 'media' && 'Join to view and share media in this room.'}
                    {!intent && 'Join to chat, share files, and view media with the room.'}
                </p>

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

                    {loading && (
                        <div className="rounded-xl border border-border-default dark:border-border-darkDefault bg-surface-subtle dark:bg-surface-darkSubtle p-3">
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-text-secondary dark:text-text-darkSecondary">Joining room</span>
                                <span className="join-dots text-xs text-text-secondary dark:text-text-darkSecondary">
                                    <span>.</span><span>.</span><span>.</span>
                                </span>
                            </div>
                            <div className="mt-2 h-1.5 rounded-full bg-border-default dark:bg-border-darkDefault join-bar" />
                        </div>
                    )}

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
