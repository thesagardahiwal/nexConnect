import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Media, MediaPayload } from '@/types/media';
import { MediaService } from '@/services/media.service';
import { StorageService } from '@/services/storage.service';

interface MediaState {
    media: Media[];
    loading: boolean;
    error: string | null;
}

const initialState: MediaState = {
    media: [],
    loading: false,
    error: null,
};

export const fetchMedia = createAsyncThunk(
    'media/fetchMedia',
    async (roomId: string, { rejectWithValue }) => {
        try {
            const response = await MediaService.list(roomId);
            return response.documents;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const uploadMedia = createAsyncThunk(
    'media/uploadMedia',
    async ({ file, roomId, uploaderId }: { file: File; roomId: string; uploaderId: string }, { rejectWithValue }) => {
        try {
            // 1. Upload file to Storage
            const uploadedFile = await StorageService.uploadFile(file);
            // 2. Create Media document
            const payload: MediaPayload = {
                room: roomId,
                uploader: uploaderId,
                fileId: uploadedFile.$id,
                fileName: uploadedFile.name,
                fileType: file.type.startsWith('image/') ? 'IMAGE' : file.type === 'application/pdf' ? 'PDF' : 'VIDEO', // simplistic type check
                fileSize: uploadedFile.sizeOriginal,
            };

            const mediaDoc = await MediaService.add(payload);
            return mediaDoc;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const mediaSlice = createSlice({
    name: 'media',
    initialState,
    reducers: {
        addMedia: (state, action: PayloadAction<Media>) => {
            // Prevent duplicates
            if (!state.media.find(m => m.$id === action.payload.$id)) {
                state.media.unshift(action.payload);
            }
        },
        removeMedia: (state, action: PayloadAction<string>) => {
            state.media = state.media.filter(m => m.$id !== action.payload);
        },
        clearMedia: (state) => {
            state.media = [];
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Fetch Media
            .addCase(fetchMedia.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMedia.fulfilled, (state, action) => {
                state.loading = false;
                state.media = action.payload;
            })
            .addCase(fetchMedia.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            // Upload Media
            .addCase(uploadMedia.pending, (state) => {
                state.loading = true; // Use separate loading if needed for UI feedback
                state.error = null;
            })
            .addCase(uploadMedia.fulfilled, (state, action) => {
                state.loading = false;
                // Add is handled by realtime or optimized updates. 
                // For now, let's push it optionally or rely on realtime.
                // Optimistic update:
                if (!state.media.find(m => m.$id === action.payload.$id)) {
                    state.media.unshift(action.payload);
                }
            })
            .addCase(uploadMedia.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { addMedia, removeMedia, clearMedia } = mediaSlice.actions;
export default mediaSlice.reducer;
