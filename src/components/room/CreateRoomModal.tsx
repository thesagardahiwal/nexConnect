'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Icons } from '@/components/icons';
import { useRooms } from '@/hooks/useRooms';
import { useSession } from '@/hooks/useSession';
import { RoomService } from '@/services/room.service';

interface CreateRoomModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CreateRoomModal({ isOpen, onClose }: CreateRoomModalProps) {
    const [name, setName] = useState('');
    const [isPublic, setIsPublic] = useState(true);
    const [roomCode, setRoomCode] = useState('');
    const [codeStatus, setCodeStatus] = useState<'idle' | 'checking' | 'available' | 'error'>('idle');
    const [loading, setLoading] = useState(false);
    const { createRoom } = useRooms();
    const { user } = useSession();
    const router = useRouter();

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
        if (!isOpen) return;
        ensureAvailableCode();
    }, [ensureAvailableCode, isOpen]);

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (!user) throw new Error("User not found");
            let codeToUse = roomCode.trim();
            if (codeStatus !== 'available' || !codeToUse) {
                const ensured = await ensureAvailableCode();
                codeToUse = ensured?.trim() || roomCode.trim();
            }
            const newRoom = await createRoom({
                name,
                isPublic,
                creator: user.$id, // Handled by useRooms hook logic (using session)
                roomCode: codeToUse
            });

            router.push(`/room/${newRoom.$id}`);
            onClose();
        } catch (err) {
            console.error(err);
            // Error handling usually in hook, but we can add local state if needed
            alert("Failed to create room. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-surface-base dark:bg-surface-darkElevated w-full max-w-md rounded-2xl p-6 shadow-2xl border border-border-default dark:border-border-darkDefault">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-text-primary dark:text-text-darkPrimary">Create New Room</h3>
                    <button onClick={onClose} className="text-text-secondary dark:text-text-darkSecondary hover:text-text-primary dark:hover:text-text-darkPrimary">
                        <Icons.Close className="w-6 h-6" />
                    </button>
                </div>

                <form onSubmit={handleCreate} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-text-secondary dark:text-text-darkSecondary mb-1">
                            Room Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="e.g. Project Alpha Discussion"
                            className="w-full px-4 py-3 rounded-xl bg-surface-subtle dark:bg-surface-darkSubtle border-none text-text-primary dark:text-text-darkPrimary placeholder-text-muted dark:placeholder-text-text-darkMuted focus:ring-2 focus:ring-brand-primary outline-none transition"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-secondary dark:text-text-darkSecondary mb-1">
                            Room Code
                        </label>
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                value={roomCode}
                                readOnly
                                className="w-full px-4 py-3 rounded-xl bg-surface-subtle dark:bg-surface-darkSubtle border-none text-text-primary dark:text-text-darkPrimary font-mono tracking-widest text-center focus:ring-2 focus:ring-brand-primary outline-none transition"
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
                        <div className="mt-1 text-[10px] flex items-center gap-2 text-text-secondary dark:text-text-darkSecondary">
                            {codeStatus === 'checking' && <span>Checking availability…</span>}
                            {codeStatus === 'available' && <span className="text-status-success dark:text-status-successDark">Code available</span>}
                            {codeStatus === 'error' && <span className="text-status-danger dark:text-status-dangerDark">Couldn’t verify. Try again.</span>}
                            <span>Join using this code or the room ID.</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-surface-subtle dark:bg-surface-darkSubtle">
                        <div>
                            <p className="font-medium text-text-primary dark:text-text-darkPrimary">Public Room</p>
                            <p className="text-xs text-text-secondary dark:text-text-darkSecondary">Visible in search results</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsPublic(!isPublic)}
                            className={`relative w-12 h-6 rounded-full transition-colors ${isPublic ? 'bg-brand-primary dark:bg-brand-primaryDark' : 'bg-gray-300 dark:bg-gray-600'}`}
                        >
                            <span className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${isPublic ? 'translate-x-6' : 'translate-x-0'}`} />
                        </button>
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
                            disabled={loading || !name.trim() || codeStatus !== 'available'}
                            className="flex-1 py-3 rounded-xl bg-brand-primary dark:bg-brand-primaryDark text-white font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {loading ? <Icons.Loader className="w-5 h-5 animate-spin" /> : "Create Room"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
