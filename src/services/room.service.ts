import { databases } from "@/lib/appwrite";
import { DB_ID, COLLECTIONS } from "@/lib/appwrite";
import { Room, RoomPayload } from "@/types/room";

import { Query } from "appwrite";

const select = [
    "*",
    "creator.*",
];

export const RoomService = {
    async list(search?: string, userId?: string) {
        // 1. Public Rooms Query
        const publicQueries = [
            Query.equal("status", "OPEN"),
            Query.equal("isPublic", true),
            Query.orderDesc("$createdAt"), // Default order
            Query.select(select),
        ];

        if (search && search.trim()) {
            publicQueries.push(Query.search("name", search));
        }

        const publicRoomsPromise = databases.listDocuments<Room>(
            DB_ID,
            COLLECTIONS.ROOMS,
            publicQueries
        );

        if (!userId) {
            return publicRoomsPromise;
        }

        // 2. Created Rooms (Private or Public, but for this user)
        // Actually, public query covers public ones. 
        // If we want "All private rooms where creator is user", we query:
        // status=OPEN, creator=userId
        // We can just query all created by user and dedup later.
        const createdQueries = [
            Query.equal("status", "OPEN"),
            Query.equal("creator", userId),
            Query.orderDesc("$createdAt"),
            Query.select(select),
        ];
        if (search && search.trim()) createdQueries.push(Query.search("name", search));

        const createdRoomsPromise = databases.listDocuments<Room>(
            DB_ID,
            COLLECTIONS.ROOMS,
            createdQueries
        );

        // 3. Joined Rooms
        // We query room_members for this user, then extract rooms.
        // We rely on 'room' expansion.
        const joinedQueries = [
            Query.equal("user", userId),
            Query.equal("isActive", true),
            Query.select(["room.*", "room.creator.*"]), // Expand room
            Query.orderDesc("$createdAt"), // joinedAt order matches roughly?
        ];
        // Can't search room name in room_members query easily without deeper support
        // We'll filter in memory if search is present for joined rooms

        const joinedMembersPromise = databases.listDocuments<any>( // Type as any for expansion
            DB_ID,
            COLLECTIONS.ROOM_MEMBERS,
            joinedQueries
        );

        const [publicRooms, createdRooms, joinedMembers] = await Promise.all([
            publicRoomsPromise,
            createdRoomsPromise,
            joinedMembersPromise
        ]);

        // Extract rooms from joined members
        const joinedRooms = joinedMembers.documents.map((d: any) => d.room as Room).filter((r: Room) => r.status === 'OPEN');

        // Filter joined rooms by search if needed (client-side for this subset)
        const finalJoinedRooms = (search && search.trim())
            ? joinedRooms.filter((r: Room) => r.name.toLowerCase().includes(search.toLowerCase()))
            : joinedRooms;

        // Merge and Dedup
        const allRooms = [
            ...publicRooms.documents,
            ...createdRooms.documents,
            ...finalJoinedRooms
        ];

        const uniqueRooms = Array.from(new Map(allRooms.map(item => [item.$id, item])).values());

        // We might want to re-sort combined list
        uniqueRooms.sort((a, b) => new Date(b.$createdAt).getTime() - new Date(a.$createdAt).getTime());

        return {
            total: uniqueRooms.length,
            documents: uniqueRooms
        };
    },

    get(roomId: string) {
        return databases.getDocument<Room>(
            DB_ID,
            COLLECTIONS.ROOMS,
            roomId,
            [
                Query.select(select),
            ]
        );
    },

    async create(payload: RoomPayload) {
        const room = await databases.createDocument(
            DB_ID,
            COLLECTIONS.ROOMS,
            "unique()",
            {
                ...payload,
                status: "OPEN",
            }
        ) as unknown as Room;

        // Add creator as member
        await databases.createDocument(
            DB_ID,
            COLLECTIONS.ROOM_MEMBERS,
            "unique()",
            {
                room: room.$id,
                user: payload.creator,
                role: "CREATOR",
                isActive: true,
                joinedAt: new Date().toISOString(),
            }
        );

        return room;
    },

    close(roomId: string) {
        return databases.updateDocument(
            DB_ID,
            COLLECTIONS.ROOMS,
            roomId,
            {
                status: "CLOSED",
            }
        );
    },

    open(roomId: string) {
        return databases.updateDocument(
            DB_ID,
            COLLECTIONS.ROOMS,
            roomId,
            {
                status: "OPEN",
                closedAt: null,
            }
        );
    },
};
