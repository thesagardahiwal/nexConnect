import { Models } from "appwrite";

export interface Session extends Models.Document {
    $id: string;
    userId?: string;
    privateId: string;
    expiresAt: string;
    isActive: boolean;
}

export interface SessionPayload {
    userId?: string;
    privateId: string;
    expiresAt: string;
}
