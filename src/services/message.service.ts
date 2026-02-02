import { databases } from "@/lib/appwrite";
import { DB_ID, COLLECTIONS } from "@/lib/appwrite";
import { Message, MessagePayload } from "@/types/message";
import { encryptMessage, decryptMessage } from "@/utils/encryption";

import { Query } from "appwrite";

export const MessageService = {
    async list(roomId: string) {
        const response = await databases.listDocuments<Message>(
            DB_ID,
            COLLECTIONS.MESSAGES,
            [
                Query.equal("room", roomId),
                Query.orderAsc("$createdAt"),
                Query.select([
                    "*",
                    "sender.*"
                ])
            ]
        );

        // Decrypt messages
        const decryptedDocuments = response.documents.map(doc => ({
            ...doc,
            content: doc.type === 'TEXT' && doc.content ? decryptMessage(doc.content) : doc.content
        }));

        return {
            ...response,
            documents: decryptedDocuments
        };
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
        const doc = response.documents[0];
        if (doc && doc.type === 'TEXT' && doc.content) {
            doc.content = decryptMessage(doc.content);
        }
        return doc;
    },

    async send(payload: MessagePayload) {
        const contentToStore = payload.type === 'TEXT' && payload.content
            ? encryptMessage(payload.content)
            : payload.content;

        const response = await databases.createDocument(
            DB_ID,
            COLLECTIONS.MESSAGES,
            "unique()",
            {
                ...payload,
                content: contentToStore
            }
        ) as unknown as Message;

        return {
            ...response,
            content: payload.content // Return original content to UI to avoid immediate decryption need
        };
    },
};
