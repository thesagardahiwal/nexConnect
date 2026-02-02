import { databases } from "@/lib/appwrite";
import { DB_ID, COLLECTIONS } from "@/lib/appwrite";
import { Session, SessionPayload } from "@/types/session";
import { Query } from "appwrite";

export const SessionService = {
    create(payload: SessionPayload) {
        return databases.createDocument<Session>(
            DB_ID,
            COLLECTIONS.SESSIONS,
            "unique()",
            {

                ...payload,
                isActive: true,
            }
        );
    },

    expire(sessionId: string) {
        return databases.updateDocument(
            DB_ID,
            COLLECTIONS.SESSIONS,
            sessionId,
            { isActive: false }
        );
    },

    async getActive(userId: string) {
        const response = await databases.listDocuments<Session>(
            DB_ID,
            COLLECTIONS.SESSIONS,
            [
                Query.equal("userId", userId),
                Query.equal("isActive", true),
                Query.orderDesc("$createdAt"), // Get the most recent one just in case
            ]
        );
        return response.documents[0] || null;
    },

    async listActive(userId: string) {
        const response = await databases.listDocuments<Session>(
            DB_ID,
            COLLECTIONS.SESSIONS,
            [
                Query.equal("userId", userId),
                Query.equal("isActive", true),
                Query.orderDesc("$createdAt"), // Most recent first
            ]
        );
        return response.documents;
    },

    get(sessionId: string) {
        return databases.getDocument<Session>(
            DB_ID,
            COLLECTIONS.SESSIONS,
            sessionId
        );
    },
};
