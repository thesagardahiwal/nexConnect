import type { Models } from "appwrite";

export interface User extends Models.Document {
    userId: string;
    username: string;
    avatarUrl?: string;
    isGuest: boolean;
    passwordHash?: string;
}

export interface UserPayload {
    userId: string;
    username: string;
    avatarUrl?: string;
    isGuest: boolean;
    passwordHash?: string;
}
