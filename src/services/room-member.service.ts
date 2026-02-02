import { databases } from "@/lib/appwrite";
import { DB_ID, COLLECTIONS } from "@/lib/appwrite";
import { RoomMember, RoomMemberPayload } from "@/types/room-member";

import { Query } from "appwrite";

export const RoomMemberService = {
    list(roomId: string) {
        return databases.listDocuments<RoomMember>(
            DB_ID,
            COLLECTIONS.ROOM_MEMBERS,
            [
                Query.equal("room", roomId),
                Query.equal("isActive", true),
                Query.select([
                    "*",
                    "user.*",
                ])
            ]
        );
    },

    async find(roomId: string, userId: string) {
        const response = await databases.listDocuments<RoomMember>(
            DB_ID,
            COLLECTIONS.ROOM_MEMBERS,
            [
                Query.equal("room", roomId),
                Query.equal("user", userId), // user is a relationship/id
                Query.equal("isActive", true),
                Query.limit(1),
                Query.select([
                    "*",
                    "user.*",
                ])
            ]
        );
        return response.documents[0] || null;
    },

    add(payload: RoomMemberPayload) {
        return databases.createDocument(
            DB_ID,
            COLLECTIONS.ROOM_MEMBERS,
            "unique()",
            {
                ...payload,
                isActive: true,
                joinedAt: new Date().toISOString(),
            }
        ) as unknown as Promise<RoomMember>;
    },

    kick(memberId: string) {
        return databases.updateDocument(
            DB_ID,
            COLLECTIONS.ROOM_MEMBERS,
            memberId,
            { isActive: false }
        );
    },
    async get(memberId: string) {
        return databases.getDocument<RoomMember>(
            DB_ID,
            COLLECTIONS.ROOM_MEMBERS,
            memberId
        );
    },
};
