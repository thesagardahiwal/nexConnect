'use client';

import { use, useEffect } from "react";
import ChatArea from "@/components/room/ChatArea";
import RoomDetails from "@/components/room/RoomDetails";
import JoinRoomModal from "@/components/room/JoinRoomModal";
import { useRouter } from "next/navigation";
import { RoomService } from "@/services/room.service";

// Hooks
import { useRoom } from "@/hooks/useRoom";
import { useRoomMembers } from "@/hooks/useRoomMembers";
import { useMessages } from "@/hooks/useMessages";
import { useSession } from "@/hooks/useSession";

// import { useAppDispatch } from "@/store/hooks";

// ... imports ...
// ... imports ...
import { useState, useCallback, useMemo, useRef } from "react";
import { useAppDispatch } from "@/store/hooks";
import { deleteRoom } from "@/store/slices/roomSlice";

export default function RoomPage({ params }: { params: Promise<{ roomId: string }> }) {
    const { roomId } = use(params);
    const router = useRouter();

    // UI State
    const [showDetails, setShowDetails] = useState(true);
    const [showJoinModal, setShowJoinModal] = useState(false);
    const [joinIntent, setJoinIntent] = useState<'chat' | 'media' | null>(null);
    const [kickedOut, setKickedOut] = useState(false);
    const kickedHandledRef = useRef(false);
    const hadMembershipRef = useRef(false);

    // Hooks
    // Hooks
    const { session, user, loading: authLoading } = useSession();
    const dispatch = useAppDispatch();
    const { room, loading: roomLoading } = useRoom(roomId);
    // useMedia is no longer needed for RoomDetails media source, but maybe for upload? 
    // ChatArea handles upload via StorageService directly now.
    // We can keep it or remove it if unused. Keeping for safety if used elsewhere.


    // ... Auth Protection & Cleanup ...
    // ... Join Room Logic ...
    // ... Auth Protection & Cleanup ...
    // ... Join Room Logic ...
    const handleCloseRoom = useCallback(async () => {
        if (!room) return;
        try {
            await RoomService.close(room.$id);
        } catch (error) {
            console.error("Failed to close room:", error);
        }
    }, [room]);

    // ... Loading & Session checks ...

    const handleKicked = useCallback(() => {
        if (kickedHandledRef.current) return;
        kickedHandledRef.current = true;
        setShowJoinModal(false);
        setJoinIntent(null);
        setKickedOut(true);
        dispatch(deleteRoom(roomId as any));
        setTimeout(() => {
            router.push('/rooms');
        }, 1200);
    }, [dispatch, roomId, router]);

    const { members, loading: membersLoading, kickMember } = useRoomMembers(roomId, {
        currentUserId: user?.$id,
        onKicked: handleKicked
    });

    const { messages, loading: messagesLoading, sendMessage } = useMessages(roomId);

    const membership = useMemo(() => {
        if (!user) return null;
        return members.find(m => m.user.$id === user.$id) || null;
    }, [members, user]);

    const isCreator = room?.creator?.$id === user?.$id;
    const canJoinOnDemand = !!room && room.isPublic && !isCreator;
    const canInteract = !!membership || !!isCreator;

    const requireJoin = useCallback((intent: 'chat' | 'media') => {
        setJoinIntent(intent);
        setShowJoinModal(true);
    }, []);

    const handleExitRoom = useCallback(async () => {
        if (!user || !room) return;
        const member = members.find(m => m.user.$id === user.$id);
        if (member) {
            try {
                // Leaving is essentially kicking oneself
                await kickMember(member.$id);
                router.push('/rooms');
            } catch (error) {
                console.error("Failed to exit room:", error);
            }
        }
    }, [user, room, members, kickMember, router]);

    useEffect(() => {
        if (membership?.isActive) {
            hadMembershipRef.current = true;
        }
        if (!membersLoading && hadMembershipRef.current && !membership && !isCreator) {
            handleKicked();
        }
    }, [membership, membersLoading, isCreator, handleKicked]);

    // Check for kicked status
    useEffect(() => {
        // Wait for all data to load
        if (!roomLoading && !authLoading && !membersLoading && roomId && user) {
            // Find current user in members list
            // Use $id for comparison as both are Documents
            console.log(members, user)

            // STRICT ACCESS CONTROL
            // 1. If we have a membership record but it's inactive (kicked/left) -> Redirect
            if (membership && !membership.isActive) {
                router.push('/rooms');
                return;
            }

            // 2. If NO membership record, show Join Modal for both Public and Private
            // We wait for members to be loaded (length > 0 check removed because we want to join even if empty? No, members includes creator)
            // Wait, if members not loaded yet, members.length might be 0. useRoomMembers returns loading state? 
            // It uses useAppSelector. It has loading state?
            // Let's assume !roomLoading implies members are somewhat ready or we rely on component re-render.
            // Actually `members` comes from `useRoomMembers`. Let's assume valid data flow.

            // If room exists and user is not in members list -> Prompt Join
            // EXCEPTION: Creator automatically owns the room, so if they are strangely missing from members list (due to latency), allow them.

            const isCreator = room?.creator?.$id === user.$id;

            if (room && !membership && !isCreator) {
                if (!room.isPublic) {
                    setShowJoinModal(true);
                } else if (!joinIntent) {
                    setShowJoinModal(false);
                }
            } else {
                // User is a member OR is Creator, ensure modal is closed
                setShowJoinModal(false);
            }
        }
    }, [members, roomLoading, authLoading, membersLoading, roomId, user, router, room, joinIntent, membership]);

    if (!session) {
        return null; // Should redirect
    }

    return (
        <>
            {kickedOut && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm kicked-overlay">
                    <div className="bg-surface-base dark:bg-surface-darkElevated rounded-2xl border border-border-default dark:border-border-darkDefault px-6 py-5 shadow-2xl kicked-card">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-status-danger/15 text-status-danger dark:text-status-dangerDark flex items-center justify-center">
                                <span className="text-sm font-bold">!</span>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-text-primary dark:text-text-darkPrimary">Removed from room</p>
                                <p className="text-xs text-text-secondary dark:text-text-darkSecondary">Taking you back to the rooms list…</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <ChatArea
                room={room}
                messages={messages}
                loading={messagesLoading}
                roomLoading={roomLoading}
                canChat={canInteract}
                onRequireJoin={canJoinOnDemand ? () => requireJoin('chat') : undefined}
                currentUser={user?.userId || null}
                onSendMessage={sendMessage}
                onToggleDetails={() => setShowDetails(!showDetails)}
                detailsOpen={showDetails}
            />
            {showDetails && (
                <RoomDetails
                    room={room}
                    members={members}
                    currentUserId={user?.userId || null}
                    loading={roomLoading || membersLoading}
                    canAccessMedia={canInteract}
                    onRequireJoin={canJoinOnDemand ? () => requireJoin('media') : undefined}
                    onCloseRoomAction={handleCloseRoom}
                    onToggleUI={() => setShowDetails(false)}
                    onExitRoomAction={handleExitRoom}
                    onSendMessage={sendMessage}
                    onKickMember={kickMember}
                />
            )}

            <JoinRoomModal
                isOpen={showJoinModal}
                intent={joinIntent}
                onClose={() => {
                    if (canJoinOnDemand) {
                        setShowJoinModal(false);
                        setJoinIntent(null);
                    } else {
                        router.push('/rooms');
                    }
                }} // For public rooms allow close; for private redirect
                onSuccess={() => {
                    setShowJoinModal(false);
                    setJoinIntent(null);
                }} // Stay on room after join
                initialRoomId={roomId}
            />
        </>
    );
}
