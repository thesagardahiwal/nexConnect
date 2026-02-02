import { Models } from "appwrite";
import { User } from "./user";

export type RoomRole = "CREATOR" | "MEMBER";

export interface RoomMember extends Models.Document {
    $id: string;
    room: string;
    user: User;
    role: RoomRole;
    isActive: boolean;
    joinedAt: string;
}

export interface RoomMemberPayload {
    room: string;
    user: string;
    role: RoomRole;
}
