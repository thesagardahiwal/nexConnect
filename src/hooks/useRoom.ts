import { useEffect, useCallback } from 'react';
import { Room } from '@/types/room';
import { client, DB_ID, COLLECTIONS } from '@/lib/appwrite';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { updateRoom, deleteRoom, enterRoom } from '@/store/slices/roomSlice';

export function useRoom(roomId: string) {
    const dispatch = useAppDispatch();
    const { currentRoom: room, loading, error } = useAppSelector((state) => state.rooms);

    const refresh = useCallback(() => {
        if (roomId) dispatch(enterRoom(roomId));
    }, [dispatch, roomId]);

    useEffect(() => {
        // Only fetch if we don't have it or have the wrong one
        if (!room || room.$id !== roomId) {
            refresh();
        }

        const unsubscribe = client.subscribe(
            `databases.${DB_ID}.collections.${COLLECTIONS.ROOMS}.documents.${roomId}`,
            (response) => {
                if (response.events.includes('databases.*.collections.*.documents.*.update')) {
                    dispatch(updateRoom(response.payload as Room));
                } else if (response.events.includes('databases.*.collections.*.documents.*.delete')) {
                    dispatch(deleteRoom(response.payload as Room));
                }
            }
        );

        return () => {
            unsubscribe();
        };
    }, [dispatch, refresh, roomId, room]);

    return {
        room,
        loading,
        error,
        refresh
    };
}
