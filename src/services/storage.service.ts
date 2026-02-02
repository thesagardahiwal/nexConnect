import { storage, STORAGE_ID } from "@/lib/appwrite";
import { ID } from "appwrite";

const BUCKET_ID = STORAGE_ID;

export const StorageService = {
    async uploadFile(file: File) {
        try {
            return await storage.createFile(
                BUCKET_ID,
                ID.unique(),
                file
            );
        } catch (error) {
            console.error("StorageService.uploadFile error:", error);
            throw error;
        }
    },

    getFileView(fileId: string) {
        return storage.getFileView(BUCKET_ID, fileId);
    },

    getFileDownload(fileId: string) {
        return storage.getFileDownload(BUCKET_ID, fileId);
    },

    getFilePreview(fileId: string, width?: number, height?: number) {
        return storage.getFilePreview(BUCKET_ID, fileId, width, height);
    }
};
