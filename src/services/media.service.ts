import { databases } from "@/lib/appwrite";
import { DB_ID, COLLECTIONS } from "@/lib/appwrite";
import { Media, MediaPayload } from "@/types/media";

import { Query } from "appwrite";

export const MediaService = {
    list(roomId: string) {
        return databases.listDocuments<Media>(
            DB_ID,
            COLLECTIONS.MEDIA,
            [
                Query.equal("room", roomId),
                Query.orderDesc("$createdAt"),
            ]
        );
    },

    add(payload: MediaPayload) {
        return databases.createDocument(
            DB_ID,
            COLLECTIONS.MEDIA,
            "unique()",
            {
                ...payload,
            }
        ) as unknown as Promise<Media>;
    },
};
