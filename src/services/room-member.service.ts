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

    async add(payload: RoomMemberPayload) {
        // Check if already a member
        const existing = await this.find(payload.room, payload.user);
        if (existing) {
            // Already a member, return existing
            // Optionally, if they were inactive, we could reactivate them here?
            // "isActive" in 'find' is checked as true.
            // If they are inactive, 'find' returns null (based on current impl of find checking isActive=true).
            // So if existing is found, they are already active.
            return existing;
        }

        // Check if they were previously a member but kicked/left (inactive)
        const inactiveSearch = await databases.listDocuments<RoomMember>(
            DB_ID,
            COLLECTIONS.ROOM_MEMBERS,
            [
                Query.equal("room", payload.room),
                Query.equal("user", payload.user),
                Query.equal("isActive", false),
                Query.limit(1)
            ]
        );

        if (inactiveSearch.documents.length > 0) {
            // Reactivate
            const doc = inactiveSearch.documents[0];
            return databases.updateDocument(
                DB_ID,
                COLLECTIONS.ROOM_MEMBERS,
                doc.$id,
                {
                    isActive: true,
                    joinedAt: new Date().toISOString(),
                    role: payload.role // Update role if changed
                }
            ) as unknown as Promise<RoomMember>;
        }

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
