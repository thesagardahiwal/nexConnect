import { useEffect, useCallback } from 'react';
import { Room, RoomPayload } from '@/types/room';
import { client, DB_ID, COLLECTIONS } from '@/lib/appwrite';
import { useSession } from './useSession';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import {
    fetchRooms,
    createRoom as createRoomThunk,
    addRoom,
    updateRoom,
    deleteRoom
} from '@/store/slices/roomSlice';

export function useRooms() {
    const { isAuthenticated, session } = useSession(); // Usage of useSession still valid as it likely wraps auth slice usage or local, we'll check it next.
    // Ideally useSession should also be Redux-ified.

    const dispatch = useAppDispatch();
    const { rooms, loading, error } = useAppSelector((state) => state.rooms);

    const refresh = useCallback(() => {
        dispatch(fetchRooms({ userId: session?.userId }));
    }, [dispatch, session?.userId]);

    useEffect(() => {
        // Initial fetch
        refresh();

        const unsubscribe = client.subscribe(
            `databases.${DB_ID}.collections.${COLLECTIONS.ROOMS}.documents`,
            (response) => {
                if (response.events.includes('databases.*.collections.*.documents.*.create')) {
                    const newRoom = response.payload as Room;
                    if (newRoom.status === 'OPEN' && newRoom.isPublic) {
                        dispatch(addRoom(newRoom));
                    }
                } else if (response.events.includes('databases.*.collections.*.documents.*.update')) {
                    const updatedRoom = response.payload as Room;
                    dispatch(updateRoom(updatedRoom));
                } else if (response.events.includes('databases.*.collections.*.documents.*.delete')) {
                    const deletedRoom = response.payload as Room;
                    dispatch(deleteRoom(deletedRoom));
                }
            }
        );

        return () => {
            unsubscribe();
        };
    }, [dispatch, refresh]);

    const createRoom = async (payload: RoomPayload) => {
        if (!isAuthenticated || !session?.userId) {
            throw new Error("Active session required to create room");
        }
        // Dispatch returns the action object. We want the result.
        // unwrap() gives us the payload or throws error.
        const result = await dispatch(createRoomThunk(payload)).unwrap();
        // The thunk already adds it to the list via extraReducers, so we just return it.
        return result;
    };

    return {
        rooms,
        loading,
        error,
        createRoom,
        refresh
    };
}
