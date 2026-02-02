import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchMedia, addMedia, uploadMedia, removeMedia } from "@/store/slices/mediaSlice";
import { client, COLLECTIONS, DB_ID } from "@/lib/appwrite";
import { Media } from "@/types/media";

export function useMedia(roomId: string) {
    const dispatch = useAppDispatch();
    const { media, loading, error } = useAppSelector((state) => state.media);

    const refresh = useCallback(() => {
        if (roomId) dispatch(fetchMedia(roomId));
    }, [dispatch, roomId]);

    // Initial Fetch
    useEffect(() => {
        refresh();
    }, [refresh]);

    // Real-time Susbcription
    useEffect(() => {
        if (!roomId) return;

        const unsubscribe = client.subscribe(
            `databases.${DB_ID}.collections.${COLLECTIONS.MEDIA}.documents`,
            (response) => {
                const event = response.events[0];
                const payload = response.payload as Media;

                if (payload.room !== roomId) return;

                if (event.includes(".create")) {
                    dispatch(addMedia(payload));
                } else if (event.includes(".delete")) {
                    dispatch(removeMedia(payload.$id));
                }
            }
        );

        return () => {
            unsubscribe();
        };
    }, [roomId, dispatch]);

    const handleUpload = async (file: File, uploaderId: string) => {
        await dispatch(uploadMedia({ file, roomId, uploaderId })).unwrap();
    };

    return { media, loading, error, refresh, uploadMedia: handleUpload };
}
