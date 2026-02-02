import { databases } from "@/lib/appwrite";
import { DB_ID, COLLECTIONS } from "@/lib/appwrite";
import { User, UserPayload } from "@/types/user";
import { Query } from "appwrite";

export const UserService = {
    create(payload: UserPayload) {
        return databases.createDocument<User>(
            DB_ID,
            COLLECTIONS.USERS,
            payload.userId,
            {
                ...payload,
            }
        );
    },

    get(userId: string) {
        return databases.getDocument<User>(
            DB_ID,
            COLLECTIONS.USERS,
            userId
        );
    },

    async find(userId: string) {
        const response = await databases.listDocuments<User>(
            DB_ID,
            COLLECTIONS.USERS,
            [
                Query.equal("userId", userId),
            ]
        );
        return response.documents[0] || null;
    },

    update(userId: string, payload: Partial<UserPayload>) {
        return databases.updateDocument<User>(
            DB_ID,
            COLLECTIONS.USERS,
            userId,
            payload
        );
    },
};
