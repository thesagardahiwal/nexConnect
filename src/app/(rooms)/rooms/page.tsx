'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRooms } from '@/hooks/useRooms';
import { useSession } from '@/hooks/useSession';
import { RoomService } from '@/services/room.service';
import { RoomMemberService } from '@/services/room-member.service';
import { useRouter } from 'next/navigation';
import { Icons } from '@/components/icons';
import { useAppDispatch } from '@/store/hooks';
import { addRoom, enterRoom } from '@/store/slices/roomSlice';

export default function RoomsIndexPage() {
    const [roomName, setRoomName] = useState('');
    const [isPublic, setIsPublic] = useState(true);
    const [roomCode, setRoomCode] = useState('');
    const [codeStatus, setCodeStatus] = useState<'idle' | 'checking' | 'available' | 'error'>('idle');
    const [joinValue, setJoinValue] = useState('');
    const [joinError, setJoinError] = useState('');
    const { createRoom } = useRooms();
    const { user, session, loading: sessionLoading } = useSession();
    const router = useRouter();
    const [creating, setCreating] = useState(false);
    const [joining, setJoining] = useState(false);
    const dispatch = useAppDispatch();

    const generateCodeValue = useCallback(() => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }, []);

    const ensureAvailableCode = useCallback(async () => {
        setCodeStatus('checking');
        let lastCandidate = '';
        for (let i = 0; i < 6; i += 1) {
            const candidate = generateCodeValue();
            lastCandidate = candidate;
            setRoomCode(candidate);
            try {
                const existing = await RoomService.findByCode(candidate);
                if (!existing) {
                    setCodeStatus('available');
                    return candidate;
                }
            } catch (e) {
                setCodeStatus('error');
                return candidate;
            }
        }
        setCodeStatus('error');
        return lastCandidate;
    }, [generateCodeValue]);

    useEffect(() => {
        ensureAvailableCode();
    }, [ensureAvailableCode]);

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
            let codeToUse = roomCode.trim();
            if (codeStatus !== 'available' || !codeToUse) {
                const ensured = await ensureAvailableCode();
                codeToUse = ensured?.trim() || roomCode.trim();
            }
            const newRoom = await createRoom({
                name: roomName,
                creator: user.$id,
                isPublic,
                roomCode: codeToUse
            });
            router.push(`/room/${newRoom.$id}`);
        } catch (error) {
            console.error(error);
            alert("Failed to create room");
        } finally {
            setCreating(false);
        }
    };

    const handleJoin = async (e: React.FormEvent) => {
        e.preventDefault();
        setJoinError('');
        const memberUserId = user?.$id || session?.userId || '';
        if (!joinValue.trim()) return;
        if (!memberUserId) {
            setJoinError("Session not ready. Please try again.");
            return;
        }

        setJoining(true);
        try {
            const room = await RoomService.getByIdOrCode(joinValue.trim());
            if (room.status !== 'OPEN') {
                throw new Error("This room is closed.");
            }
            await RoomMemberService.add({
                room: room.$id,
                user: memberUserId,
                role: 'MEMBER'
            });
            dispatch(addRoom(room));
            dispatch(enterRoom(room.$id));
            router.push(`/room/${room.$id}`);
        } catch (err: any) {
            const isNotFound = err?.code === 404 || String(err?.message || '').includes('Document not found');
            if (isNotFound) {
                setJoinError("Room not found. Check the ID or code.");
            } else {
                setJoinError(err?.message || "Failed to join room.");
            }
        } finally {
            setJoining(false);
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
            <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-surface-base dark:bg-surface-darkElevated p-8 rounded-3xl border border-border-default dark:border-border-darkDefault shadow-sm">
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

                        <div>
                            <label className="block text-sm font-medium text-text-secondary dark:text-text-darkMuted mb-1">Room Code</label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={roomCode}
                                    readOnly
                                    className="w-full px-4 py-3 bg-surface-subtle dark:bg-surface-darkSubtle text-text-primary dark:text-text-darkPrimary border border-border-default dark:border-border-darkDefault rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-primaryDark font-mono tracking-widest text-center"
                                />
                                <button
                                    type="button"
                                    onClick={ensureAvailableCode}
                                    className="px-3 py-2 rounded-xl bg-surface-subtle dark:bg-surface-darkSubtle text-text-secondary dark:text-text-darkSecondary hover:text-text-primary dark:hover:text-text-darkPrimary transition"
                                    title="Regenerate code"
                                >
                                    <Icons.RotateCcw className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="mt-1 text-[10px] flex items-center gap-2 text-text-secondary dark:text-text-darkMuted">
                                {codeStatus === 'checking' && <span>Checking availability…</span>}
                                {codeStatus === 'available' && <span className="text-status-success dark:text-status-successDark">Code available</span>}
                                {codeStatus === 'error' && <span className="text-status-danger dark:text-status-dangerDark">Couldn’t verify. Try again.</span>}
                                <span>People can join using this code or the room ID.</span>
                            </div>
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
                            disabled={creating || !roomName.trim() || codeStatus !== 'available'}
                            className="w-full bg-brand-primary dark:bg-brand-primaryDark text-text-inverse font-medium py-3 rounded-xl hover:bg-brand-secondary transition disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {creating ? 'Creating...' : <>Create Room <Icons.Plus className="w-5 h-5" /></>}
                        </button>
                    </form>
                </div>

                <div className="bg-surface-base dark:bg-surface-darkElevated p-8 rounded-3xl border border-border-default dark:border-border-darkDefault shadow-sm">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-text-primary dark:text-text-darkPrimary">Join a Room</h2>
                        <p className="text-text-secondary dark:text-text-darkMuted mt-2">Enter a room ID or code to jump in</p>
                    </div>

                    <form onSubmit={handleJoin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-text-secondary dark:text-text-darkMuted mb-1">Room ID or Code</label>
                            <input
                                type="text"
                                value={joinValue}
                                onChange={(e) => {
                                    setJoinValue(e.target.value);
                                    if (joinError) setJoinError('');
                                }}
                                placeholder="e.g. 65c9f... or 01123"
                                className="w-full px-4 py-3 bg-surface-subtle dark:bg-surface-darkSubtle text-text-primary dark:text-text-darkPrimary border border-border-default dark:border-border-darkDefault rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-primaryDark placeholder-text-muted dark:placeholder-text-darkMuted"
                            />
                            {joinError && <p className="text-sm text-status-danger mt-2">{joinError}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={joining || !joinValue.trim()}
                            className="w-full bg-brand-primary dark:bg-brand-primaryDark text-text-inverse font-medium py-3 rounded-xl hover:bg-brand-secondary transition disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {joining ? 'Joining...' : <>Join Room <Icons.ChevronRight className="w-5 h-5" /></>}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
