import { databases } from "@/lib/appwrite";
import { DB_ID, COLLECTIONS } from "@/lib/appwrite";
import { Message, MessagePayload } from "@/types/message";

import { Query } from "appwrite";

export const MessageService = {
    list(roomId: string) {
        return databases.listDocuments<Message>(
            DB_ID,
            COLLECTIONS.MESSAGES,
            [
                Query.equal("room", roomId),
                Query.orderAsc("$createdAt"), // Oldest first for chat? Or Desc and reverse? Usually Asc for chat history.
                Query.select([
                    "*",
                    "sender.*"
                ])
            ]
        );
    },

    async get(messageId: string) {
        const response = await databases.listDocuments<Message>(
            DB_ID,
            COLLECTIONS.MESSAGES,
            [
                Query.equal("$id", messageId),
                Query.select([
                    "*",
                    "sender.*"
                ])
            ]
        );
        return response.documents[0];
    },

    send(payload: MessagePayload) {
        return databases.createDocument(
            DB_ID,
            COLLECTIONS.MESSAGES,
            "unique()",
            {
                ...payload,
            }
        ) as unknown as Promise<Message>;
    },
};
