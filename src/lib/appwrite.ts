import { Client, Databases, Storage, Account } from "appwrite";

export const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

export const databases = new Databases(client);
export const storage = new Storage(client);
export const account = new Account(client);

export const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '';
export const STORAGE_ID = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID || '';

export const COLLECTIONS = {
    USERS: "users",
    ROOMS: "rooms",
    ROOM_MEMBERS: "room_members",
    MESSAGES: "messages",
    MEDIA: "media",
    SESSIONS: "sessions",
};
