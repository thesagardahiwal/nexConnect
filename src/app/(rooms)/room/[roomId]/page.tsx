'use client';

import { use, useEffect } from "react";
import ChatArea from "@/components/room/ChatArea";
import RoomDetails from "@/components/room/RoomDetails";
import { useRouter } from "next/navigation";
import { RoomService } from "@/services/room.service";

// Hooks
import { useRoom } from "@/hooks/useRoom";
import { useRoomMembers } from "@/hooks/useRoomMembers";
import { useMessages } from "@/hooks/useMessages";
import { useSession } from "@/hooks/useSession";

// import { useAppDispatch } from "@/store/hooks";

// ... imports ...
import { useState, useCallback } from "react";

export default function RoomPage({ params }: { params: Promise<{ roomId: string }> }) {
    const { roomId } = use(params);
    const router = useRouter();

    // UI State
    const [showDetails, setShowDetails] = useState(true);

    // Hooks
    const { session, user, loading: authLoading } = useSession();
    const { room, loading: roomLoading } = useRoom(roomId);
    const { members, kickMember } = useRoomMembers(roomId);
    const { messages, loading: messagesLoading, sendMessage } = useMessages(roomId);
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

    // Check for kicked status
    useEffect(() => {
        if (!roomLoading && !authLoading && roomId && user) {
            // Find current user in members list
            // Use $id for comparison as both are Documents
            const membership = members.find(m => m.user.$id === user.$id);

            // STRICT ACCESS CONTROL
            // 1. If we have a membership record but it's inactive (kicked/left) -> Redirect
            if (membership && !membership.isActive) {
                router.push('/rooms');
                return;
            }

            // 2. If room is PRIVATE (not public) and we have NO membership record (kicked and removed from list) -> Redirect
            // We wait for members to be loaded (length > 0) to avoid premature redirect on initial fetch
            // Exception: The creator might not be in the list initially if something is weird, but they should be.
            if (room && !room.isPublic && members.length > 0 && !membership) {
                router.push('/rooms');
            }
        }
    }, [members, roomLoading, authLoading, roomId, user, router, room]);

    if (!session) {
        return null; // Should redirect
    }

    return (
        <>
            <ChatArea
                room={room}
                messages={messages}
                loading={messagesLoading}
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
                    onCloseRoomAction={handleCloseRoom}
                    onToggleUI={() => setShowDetails(false)}
                    onExitRoomAction={handleExitRoom}
                    onSendMessage={sendMessage}
                    onKickMember={kickMember}
                />
            )}
        </>
    );
}
