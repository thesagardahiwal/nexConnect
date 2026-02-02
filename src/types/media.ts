import { Models } from "appwrite";

export type MediaType = "IMAGE" | "PDF" | "VIDEO";

export interface Media extends Models.Document {
    $id: string;
    room: string;
    uploader: string;
    fileId: string;
    fileName: string;
    fileType: MediaType;
    fileSize: number;
}

export interface MediaPayload {
    room: string;
    uploader: string;
    fileId: string;
    fileName: string;
    fileType: MediaType;
    fileSize: number;
}
