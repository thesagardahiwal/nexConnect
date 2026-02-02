'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Icons } from '@/components/icons';
import { useRooms } from '@/hooks/useRooms';
import { useSession } from '@/hooks/useSession';

interface CreateRoomModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CreateRoomModal({ isOpen, onClose }: CreateRoomModalProps) {
    const [name, setName] = useState('');
    const [isPublic, setIsPublic] = useState(true);
    const [loading, setLoading] = useState(false);
    const { createRoom } = useRooms();
    const { user } = useSession();
    const router = useRouter();

    if (!isOpen) return null;

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (!user) throw new Error("User not found");
            const newRoom = await createRoom({
                name,
                isPublic,
                creator: user.$id // Handled by useRooms hook logic (using session)
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
                            disabled={loading || !name.trim()}
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
