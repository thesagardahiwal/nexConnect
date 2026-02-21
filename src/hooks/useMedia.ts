import { useEffect, useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchMedia, addMedia, uploadMedia, removeMedia, clearMedia } from "@/store/slices/mediaSlice";
import { client, COLLECTIONS, DB_ID } from "@/lib/appwrite";
import { Media } from "@/types/media";
// import { StorageService } from "@/services/storage.service";

export function useMedia(roomId: string, options?: { enabled?: boolean }) {
    const dispatch = useAppDispatch();
    const { media: globalMedia, loading, error, uploadProgress } = useAppSelector((state) => state.media);
    const enabled = options?.enabled ?? true;

    const media = useMemo(() => {
        if (!enabled) return [];
        return globalMedia.filter(m => m.room === roomId);
    }, [globalMedia, roomId, enabled]);

    const refresh = useCallback((options?: { clear?: boolean }) => {
        if (roomId && enabled) {
            if (options?.clear) {
                dispatch(clearMedia()); // Clear previous room's media
            }
            return dispatch(fetchMedia(roomId));
        }
        return undefined;
    }, [dispatch, roomId, enabled]);

    // Initial Fetch
    useEffect(() => {
        if (enabled) {
            refresh({ clear: true });
        }
    }, [refresh]);

    // Real-time Susbcription
    useEffect(() => {
        if (!roomId || !enabled) return;

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
            if (!enabled) {
                throw new Error("Media access not enabled for this room");
            }
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
    }, [dispatch, roomId, enabled]);

    return { media, loading, error, uploadProgress, refresh, uploadMedia: handleUpload };
}
