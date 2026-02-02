import { useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchMedia, addMedia, uploadMedia, removeMedia } from "@/store/slices/mediaSlice";
import { client, COLLECTIONS, DB_ID } from "@/lib/appwrite";
import { Media } from "@/types/media";
// import { StorageService } from "@/services/storage.service";

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

    const handleUpload = useCallback(async (file: File, userId: string) => {
        try {
            // 1. Upload happens in action dispatched below
            // const fileId = await StorageService.uploadFile(file);

            // 2. Create media document
            // dispatch(uploadMedia) expects { file, roomId, uploaderId } based on slice definition, 
            // OR if it expects the payload object directly, we need to check the slice.
            // Based on previous error: "Argument of type 'MediaPayload' is not assignable... missing ... file, roomId, uploaderId"
            // This means the action `uploadMedia` in `mediaSlice` likely expects the raw file + IDs to do the upload ITSELF.
            // BUT here we are doing `StorageService.uploadFile(file)` manually first.
            // If the slice handles the upload, we should just pass the file.
            // Let's check `mediaSlice` content if we could, but assuming the error is correct,
            // the `uploadMedia` action is likely an async thunk that does the upload.

            // Reverting to what `handleUpload` was doing before my changes: 
            // await dispatch(uploadMedia({ file, roomId, uploaderId: userId })).unwrap();

            // So we don't need to manually upload here if the thunk does it.
            // Let's trust the Redux action signature.
            const response = await dispatch(uploadMedia({ file, roomId, uploaderId: userId })).unwrap();
            return response;
        } catch (error) {
            console.error("Failed to upload media:", error);
            throw error;
        }
    }, [dispatch, roomId]);

    return { media, loading, error, refresh, uploadMedia: handleUpload };
}
