'use client';

import { useState, useEffect } from 'react';
import { useRooms } from '@/hooks/useRooms';
import { useSession } from '@/hooks/useSession';
import { useTheme } from '@/context/ThemeContext';
import { useRouter, useParams } from 'next/navigation';
import { Icons } from '@/components/icons';
import JoinRoomModal from './JoinRoomModal';
import CreateRoomModal from './CreateRoomModal';

export default function RoomSidebar() {
    const { rooms, loading: roomsLoading, error } = useRooms();
    const { user } = useSession();
    const router = useRouter();
    const params = useParams();
    const currentRoomId = params?.roomId as string;
    const { theme, toggleTheme } = useTheme();

    const [search, setSearch] = useState('');
    const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <aside className={`w-full md:w-72 bg-surface-base dark:bg-surface-darkElevated border-r border-border-default dark:border-border-darkDefault flex flex-col h-full ${currentRoomId ? 'hidden md:flex' : 'flex'}`}>
                {/* Header */}
                <div className="px-4 py-4 shrink-0 space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold text-text-primary dark:text-text-darkPrimary flex items-center gap-2">
                            <Icons.Hash className="w-4 h-4 text-brand-primary dark:text-brand-primaryDark" /> Rooms
                        </h2>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setIsJoinModalOpen(true)}
                                title="Join via ID"
                                className="w-8 h-8 rounded-full bg-surface-subtle dark:bg-surface-darkSubtle text-text-secondary dark:text-text-darkSecondary hover:text-brand-primary dark:hover:text-brand-primaryDark transition flex items-center justify-center p-1"
                            >
                                <Icons.Join className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setIsCreateModalOpen(true)}
                                title="Create Room"
                                className="w-8 h-8 rounded-full bg-brand-primary dark:bg-brand-primaryDark text-white hover:opacity-90 transition flex items-center justify-center p-1"
                            >
                                <Icons.Plus className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="relative">
                        <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted dark:text-text-darkMuted" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search public rooms..."
                            className="w-full pl-9 pr-4 py-2 rounded-xl bg-surface-subtle dark:bg-surface-darkSubtle text-sm text-text-primary dark:text-text-darkPrimary placeholder-text-muted dark:placeholder-text-text-darkMuted focus:outline-none focus:ring-1 focus:ring-brand-primary"
                        />
                    </div>
                </div>

                {/* Room List */}
                <div className="flex-1 px-3 space-y-2 overflow-y-auto">
                    {rooms
                        .filter(room => room.name.toLowerCase().includes(search.toLowerCase()))
                        .map(room => (
                            <RoomItem
                                key={room.$id}
                                name={room.name}
                                status={room.status}
                                active={room.$id === currentRoomId}
                                onClick={() => router.push(`/room/${room.$id}`)}
                            />
                        ))}

                    {!roomsLoading && rooms.length === 0 && (
                        <div className="text-center py-8">
                            <p className="text-sm text-text-secondary dark:text-text-darkSecondary">No public rooms found.</p>
                        </div>
                    )}
                    {roomsLoading && (
                        <div className="h-1 w-full bg-surface-subtle dark:bg-surface-darkSubtle rounded-full overflow-hidden mt-4">
                            <div className="h-full bg-brand-primary dark:bg-brand-primaryDark animate-pulse" />
                        </div>
                    )}
                    {error && <p className="text-center text-xs text-status-danger dark:text-status-dangerDark mt-4">Error loading rooms</p>}
                </div>

                {/* User */}
                <div className="border-t border-border-default dark:border-border-darkDefault p-4 flex items-center justify-between shrink-0 bg-surface-subtle dark:bg-surface-darkSubtle">
                    <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-full bg-brand-muted/50 dark:bg-brand-mutedDark/50 flex items-center justify-center text-brand-primary dark:text-brand-primaryDark text-xs font-bold shrink-0">
                            {user?.username ? user.username.charAt(0).toUpperCase() : '?'}
                        </div>
                        <div className="min-w-0">
                            <p className="text-sm font-medium truncate text-text-primary dark:text-text-darkPrimary w-24 sm:w-auto">{user?.username || 'Guest'}</p>
                            <p className="text-xs text-status-success dark:text-status-successDark flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-status-success dark:bg-status-successDark"></span>
                                Online
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-surface-base dark:hover:bg-surface-darkElevated text-text-secondary dark:text-text-darkSecondary transition"
                        title="Toggle Theme"
                    >
                        {mounted ? (theme === 'light' ? <Icons.Moon className="w-5 h-5" /> : <Icons.Sun className="w-5 h-5" />) : <div className="w-5 h-5" />}
                    </button>
                </div>
            </aside>

            <JoinRoomModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
            <CreateRoomModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
        </>
    );
}

function RoomItem({
    name,
    status,
    active,
    onClick
}: {
    name: string;
    status: string;
    active?: boolean;
    onClick?: () => void;
}) {
    return (
        <div
            onClick={onClick}
            className={`px-4 py-3 rounded-xl cursor-pointer transition flex items-center gap-3 ${active
                ? "bg-brand-primary dark:bg-brand-primaryDark text-text-inverse shadow-md"
                : "hover:bg-surface-subtle dark:hover:bg-surface-darkSubtle text-text-secondary dark:text-text-darkSecondary"
                }`}
        >
            <Icons.Hash className={`w-4 h-4 shrink-0 ${active ? "text-white" : "text-gray-400 dark:text-gray-500"}`} />
            <div className="min-w-0">
                <p className="font-medium truncate">{name}</p>
                <p className={`text-xs ${active ? "opacity-90" : "opacity-60"}`}>{status}</p>
            </div>
        </div>
    );
}
