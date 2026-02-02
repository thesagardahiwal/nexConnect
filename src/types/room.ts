import { Models } from "appwrite";
import { User } from "./user";

export type RoomStatus = "OPEN" | "CLOSED";

export interface Room extends Models.Document {
    $id: string;
    name: string;
    creator: User;
    status: RoomStatus;
    isPublic: boolean;
    roomCode?: string;
    closedAt?: string;
}

export interface RoomPayload {
    name: string;
    creator: string;
    isPublic: boolean;
    roomCode?: string;
}
