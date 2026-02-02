import { Models } from "appwrite";
import { User } from "./user";

export type MessageType = "TEXT" | "IMAGE" | "FILE";

export interface Message extends Models.Document {
    $id: string;
    room: string;
    sender: User;
    type: MessageType;
    content?: string;
}

export interface MessagePayload {
    room: string;
    sender: string;
    type: MessageType;
    content?: string;
}
