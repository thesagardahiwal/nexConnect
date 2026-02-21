import { useEffect, useCallback } from 'react';
import { Message, MessagePayload } from '@/types/message';
import { client, DB_ID, COLLECTIONS } from '@/lib/appwrite';
import { useSession } from './useSession';
import { MessageService } from '@/services/message.service';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import {
    fetchMessages,
    sendMessage as sendMessageAction,
    receivedMessage,
    clearMessages
} from '@/store/slices/messageSlice';

export function useMessages(roomId: string) {
    const { isAuthenticated, session, user } = useSession();

    const dispatch = useAppDispatch();
    const { messages, loading, error } = useAppSelector((state) => state.messages);

    const refresh = useCallback(() => {
        if (roomId) {
            dispatch(clearMessages());
            dispatch(fetchMessages(roomId));
        } else {
            dispatch(clearMessages());
        }
    }, [dispatch, roomId]);

    useEffect(() => {
        // Initial fetch
        refresh();

        let mounted = true;
        let unsubscribe: (() => void) | undefined;
        let timeoutId: NodeJS.Timeout;

        const subscribe = async () => {
            if (!roomId) return;

            try {
                unsubscribe = client.subscribe(
                    `databases.${DB_ID}.collections.${COLLECTIONS.MESSAGES}.documents`,
                    async (response) => {
                        if (!mounted) return;
                        const payload = response.payload as Message;
                        // Safe check for room ID (string or object)
                        const payloadRoomId = typeof payload.room === 'object' ? (payload.room as any).$id : payload.room;
                        if (payloadRoomId !== roomId) return;

                        if (response.events.includes('databases.*.collections.*.documents.*.create')) {
                            try {
                                // Fetch full message with expanded sender details
                                const fullMessage = await MessageService.get(payload.$id);
                                if (fullMessage && mounted) {
                                    dispatch(receivedMessage(fullMessage));
                                }
                            } catch (e) {
                                console.error("Failed to fetch real-time message details", e);
                            }
                        }
                    }
                );
            } catch (err) {
                console.error("Failed to subscribe:", err);
            }
        };

        // Debounce subscription to avoid strict mode double-mount issues
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
    }, [dispatch, refresh, roomId]);

    const sendMessage = useCallback(async (payload: MessagePayload) => {
        if (!isAuthenticated || !session || !user) {
            throw new Error("Active session required to send message");
        }
        await dispatch(sendMessageAction(payload)).unwrap();
    }, [dispatch, isAuthenticated, session, user]);

    return {
        messages,
        loading,
        error,
        sendMessage,
        refresh
    };
}
