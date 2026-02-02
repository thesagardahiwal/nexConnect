import { useEffect, useCallback } from 'react';
import { RoomMember, RoomMemberPayload } from '@/types/room-member';
import { client, DB_ID, COLLECTIONS } from '@/lib/appwrite';
import { useSession } from './useSession';
import { RoomMemberService } from '@/services/room-member.service';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import {
    enterRoom,
    joinRoom,
    leaveRoom,
    addMember as addMemberAction,
    updateMember as updateMemberAction,
    removeMember as removeMemberAction
} from '@/store/slices/roomSlice';

export function useRoomMembers(roomId: string) {
    const { isAuthenticated, session } = useSession();
    const dispatch = useAppDispatch();
    const { members, loading, error } = useAppSelector((state) => state.rooms);

    const fetchMembers = useCallback(() => {
        if (roomId) dispatch(enterRoom(roomId));
    }, [dispatch, roomId]);

    useEffect(() => {
        // Fetch if needed or just rely on parent. 
        // We'll call it to ensure data consistency if this hook is mounted.
        fetchMembers();

        let mounted = true;
        let unsubscribe: (() => void) | undefined;
        let timeoutId: NodeJS.Timeout;

        const subscribe = async () => {
            if (!roomId) return;

            try {
                unsubscribe = client.subscribe(
                    `databases.${DB_ID}.collections.${COLLECTIONS.ROOM_MEMBERS}.documents`,
                    async (response) => {
                        if (!mounted) return;

                        const payload = response.payload as RoomMember;
                        // Check if this event belongs to current room
                        // payload.room might be object or string depending on expansion
                        const payloadRoomId = typeof payload.room === 'object' ? (payload.room as any).$id : payload.room;

                        if (payloadRoomId !== roomId) return;

                        if (response.events.includes('databases.*.collections.*.documents.*.create')) {
                            // Fetch full member details to get expanded user
                            try {
                                const fullMember = await RoomMemberService.get(payload.$id); // Assuming get method exists or use list with ID
                                if (fullMember && fullMember.isActive && mounted) dispatch(addMemberAction(fullMember));
                            } catch (e) {
                                console.error("Failed to fetch new member details", e);
                            }
                        } else if (response.events.includes('databases.*.collections.*.documents.*.update')) {
                            if (payload.isActive) {
                                try {
                                    // Fetch full member to ensure we have user details if they were missing or updated
                                    const fullMember = await RoomMemberService.get(payload.$id);
                                    if (fullMember && mounted) dispatch(updateMemberAction(fullMember));
                                } catch (e) {
                                    if (mounted) dispatch(updateMemberAction(payload)); // Fallback
                                }
                            } else {
                                if (mounted) dispatch(removeMemberAction(payload));
                            }
                        } else if (response.events.includes('databases.*.collections.*.documents.*.delete')) {
                            if (mounted) dispatch(removeMemberAction(payload));
                        }
                    }
                );
            } catch (err) {
                console.error("Failed to subscribe to members:", err);
            }
        };

        // Debounce to allow strict mode double-invocation to clear safely before starting connection
        timeoutId = setTimeout(() => {
            if (mounted) subscribe();
        }, 500);

        return () => {
            mounted = false;
            clearTimeout(timeoutId);
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, [dispatch, fetchMembers, roomId]);

    const addMember = useCallback(async (payload: RoomMemberPayload) => {
        if (!isAuthenticated || !session) throw new Error("Active session required");
        await dispatch(joinRoom(payload)).unwrap();
    }, [dispatch, isAuthenticated, session]);

    const kickMember = useCallback(async (memberId: string) => {
        await dispatch(leaveRoom(memberId)).unwrap();
    }, [dispatch]);

    return {
        members,
        loading,
        error,
        addMember,
        kickMember
    };
}
