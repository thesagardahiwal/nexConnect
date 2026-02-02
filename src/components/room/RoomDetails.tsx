import { RoomMember } from "@/types/room-member";
import { Room } from "@/types/room";
import { Icons } from "@/components/icons";
import { StorageService } from "@/services/storage.service";
import { useState, useRef, useMemo } from "react";
import MembersModal from "./MembersModal";
import MediaModal from "./MediaModal";
import { useMedia } from "@/hooks/useMedia";
import { Media } from "@/types/media";
import Image from "next/image";

interface RoomDetailsProps {
    room: Room | null;
    members: RoomMember[];
    currentUserId: string | null;
    onCloseRoomAction?: () => void; // Destructive action
    onToggleUI?: () => void; // UI Toggle
    onSendMessage?: (payload: import("@/types/message").MessagePayload) => Promise<void>;
    onKickMember?: (memberId: string) => Promise<void>;
    onExitRoomAction?: () => void;
}

function RoomDetails({ room, members, currentUserId, onCloseRoomAction, onToggleUI, onSendMessage, onKickMember, onExitRoomAction }: RoomDetailsProps) {
    const [activeModal, setActiveModal] = useState<'members' | 'media' | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const { media, loading, uploadMedia, error, refresh } = useMedia(room?.$id || '');
    const fileInputRef = useRef<HTMLInputElement>(null);
    if (!room) return null;

    const isCreator = room.creator.$id === currentUserId;
    console.log("isCreator", isCreator);

    // Filter media items
    const mediaItems = useMemo(() => media.filter(m => ['IMAGE', 'PDF', 'VIDEO'].includes(m.fileType)), [media]);
    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || !onSendMessage || !room || !currentUserId) return;

        setIsUploading(true);
        try {
            console.log("Uploading file:", file);
            await uploadMedia(file, currentUserId);
        } catch (error) {
            console.error("Failed to upload file:", error);
            alert("Failed to upload file");
        } finally {
            setIsUploading(false);
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    };

    const renderMediaPreview = (m: Media) => {
        if (m.fileType === 'IMAGE') {
            return (
                // eslint-disable-next-line @next/next/no-img-element
                <Image
                    src={StorageService.getFileView(m.fileId).toString()}
                    alt={m.fileName || 'Image'}
                    height={150}
                    width={150}
                    className="w-full h-full object-cover"
                />
            );
        }

        let Icon = Icons.Paperclip;
        if (m.fileType === 'VIDEO') Icon = Icons.Video;
        if (m.fileType === 'PDF') Icon = Icons.File;

        return (
            <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center">
                <Icon className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark mb-1" />
                <span className="text-[10px] text-text-secondary dark:text-text-darkSecondary truncate w-full">{m.fileName}</span>
            </div>
        );
    };


    return (
        <>
            {/* Overlay for mobile */}
            <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={onToggleUI} />

            <aside className="fixed inset-y-0 right-0 z-50 w-full sm:w-80 bg-surface-base dark:bg-surface-darkElevated border-l border-border-default dark:border-border-darkDefault p-6 overflow-y-auto md:static md:block h-full animate-in slide-in-from-right-10 md:animate-none shadow-2xl md:shadow-none">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-semibold text-text-primary dark:text-text-darkPrimary">Room Details</h3>
                    <button onClick={onToggleUI} className="text-text-muted hover:text-text-primary dark:text-text-darkMuted dark:hover:text-text-darkPrimary transition"><Icons.Close className="w-5 h-5" /></button>
                </div>

                {/* Creator or Actions */}
                <section className="mb-8">
                    <p className="text-xs text-text-secondary dark:text-text-darkSecondary mb-2 font-medium">ACTIONS</p>
                    {isCreator ? (
                        <button
                            onClick={onCloseRoomAction}
                            disabled={room.status === 'CLOSED'}
                            className={`w-full border py-3 rounded-xl transition flex items-center justify-center gap-2 ${room.status === 'CLOSED' ? 'border-border-default dark:border-border-darkDefault text-text-muted dark:text-text-darkMuted cursor-not-allowed' : 'border-status-danger/30 text-status-danger dark:text-status-dangerDark hover:bg-status-danger/10'}`}
                        >
                            {room.status === 'CLOSED' ? 'Room Closed' : <><Icons.Lock className="w-4 h-4" /> Close Room</>}
                        </button>
                    ) : (
                        <button onClick={onExitRoomAction} className="w-full border border-border-default dark:border-border-darkDefault text-text-secondary dark:text-text-darkSecondary py-3 rounded-xl hover:bg-surface-subtle dark:hover:bg-surface-darkSubtle transition flex items-center justify-center gap-2">
                            <Icons.LogOut className="w-4 h-4" /> Exit Room
                        </button>
                    )}
                </section>

                {/* Members */}
                <section className="mb-8">
                    <div className="flex justify-between mb-4">
                        <p className="text-xs text-text-secondary dark:text-text-darkSecondary font-medium">MEMBERS ({members.length})</p>
                        <button onClick={() => setActiveModal('members')} className="text-xs text-brand-primary dark:text-brand-primaryDark cursor-pointer hover:underline">View All</button>
                    </div>
                    {members.slice(0, 5).map(member => {
                        const userId = member.user?.$id || 'unknown';
                        const username = member.user?.username || (userId !== 'unknown' ? `User ${userId.substring(0, 4)}` : 'Unknown User');
                        const displayName = userId === currentUserId ? "You" : username;

                        return (
                            <Member
                                key={member.$id}
                                name={displayName}
                                online={member.isActive}
                                canKick={isCreator && !room.isPublic && userId !== 'unknown' && userId !== currentUserId}
                                onKick={() => onKickMember?.(member.$id)}
                            />
                        );
                    })}
                </section>

                {/* Media */}
                <section>
                    <div className="flex justify-between mb-3 items-center">
                        <p className="text-xs text-text-secondary dark:text-text-darkSecondary font-medium">SHARED MEDIA</p>
                        <div className="flex items-center gap-3">
                            {onSendMessage && room.status === 'OPEN' && (
                                <>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        className="hidden"
                                        onChange={handleFileUpload}
                                        disabled={isUploading}
                                    />
                                    <button
                                        onClick={() => fileInputRef.current?.click()}
                                        disabled={isUploading}
                                        className="text-xs flex items-center gap-1 text-brand-primary dark:text-brand-primaryDark hover:underline disabled:opacity-50"
                                    >
                                        {isUploading ? <Icons.Loader className="w-3 h-3 animate-spin" /> : <Icons.Plus className="w-3 h-3" />}
                                        Upload
                                    </button>
                                </>
                            )}
                            <button onClick={() => setActiveModal('media')} className="text-xs text-brand-primary dark:text-brand-primaryDark cursor-pointer hover:underline">View All</button>
                        </div>
                    </div>

                    {loading && mediaItems.length === 0 ? (
                        <div className="h-28 rounded-xl bg-surface-subtle dark:bg-surface-darkSubtle flex items-center justify-center border border-border-default dark:border-border-darkDefault border-dashed">
                            <Icons.Loader className="w-5 h-5 text-brand-primary dark:text-brand-primaryDark animate-spin" />
                        </div>
                    ) : error ? (
                        <div className="h-28 rounded-xl bg-surface-subtle dark:bg-surface-darkSubtle flex flex-col items-center justify-center text-xs text-status-danger dark:text-status-dangerDark border border-border-default dark:border-border-darkDefault border-dashed p-4 text-center">
                            <p className="mb-2">Failed to load media</p>
                            <button
                                onClick={refresh}
                                className="text-brand-primary dark:text-brand-primaryDark hover:underline font-medium"
                            >
                                Retry
                            </button>
                        </div>
                    ) : (mediaItems.length === 0 && !isUploading) ? (
                        <div className="h-28 rounded-xl bg-surface-subtle dark:bg-surface-darkSubtle flex items-center justify-center text-xs text-text-muted dark:text-text-darkMuted border border-border-default dark:border-border-darkDefault border-dashed">
                            No Media
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-3">
                            {isUploading && (
                                <div className="aspect-square rounded-xl bg-surface-subtle dark:bg-surface-darkSubtle border border-border-default dark:border-border-darkDefault flex flex-col items-center justify-center gap-2 animate-pulse">
                                    <Icons.Loader className="w-5 h-5 text-brand-primary dark:text-brand-primaryDark animate-spin" />
                                    <span className="text-[10px] text-text-secondary dark:text-text-darkSecondary font-medium">Uploading...</span>
                                </div>
                            )}
                            {!loading && mediaItems.slice(0, 6).map(m => {
                                if (!m.fileId) return null;

                                return (
                                    <a
                                        key={m.$id}
                                        href={StorageService.getFileView(m.fileId).toString()}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="block aspect-square rounded-xl overflow-hidden bg-surface-subtle dark:bg-surface-darkSubtle border border-border-default dark:border-border-darkDefault hover:opacity-90 transition relative group"
                                    >
                                        {renderMediaPreview(m as Media)}
                                    </a>
                                );
                            })}
                        </div>
                    )}
                </section>
            </aside>

            {/* Modals */}
            {activeModal === 'members' && (
                <MembersModal
                    isOpen={true}
                    onClose={() => setActiveModal(null)}
                    members={members}
                    currentUserId={currentUserId}
                />
            )}
            {activeModal === 'media' && (
                <MediaModal
                    isOpen={true}
                    onClose={() => setActiveModal(null)}
                    mediaMessages={mediaItems} // Type checked now
                />
            )}
        </>
    );
}

import React from "react";

// ... existing RoomDetails ...

export default React.memo(RoomDetails);

const Member = React.memo(function Member({ name, online, canKick, onKick }: { name: string; online?: boolean; canKick?: boolean; onKick?: () => void }) {
    return (
        <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-brand-muted dark:bg-brand-mutedDark flex items-center justify-center text-xs text-brand-primary dark:text-brand-primaryDark font-bold">
                {name.charAt(0)}
            </div>
            <div>
                <p className="text-sm font-medium text-text-primary dark:text-text-darkPrimary">{name}</p>
                <p className={`text-xs ${online ? "text-status-success dark:text-status-successDark" : "text-text-muted dark:text-text-darkMuted"}`}>
                    {online ? "active" : "inactive"}
                </p>
            </div>
            {canKick && (
                <button
                    onClick={onKick}
                    className="ml-auto text-xs text-status-danger dark:text-status-dangerDark hover:underline"
                    title="Remove from room"
                >
                    Kick
                </button>
            )}
        </div>
    );
});
