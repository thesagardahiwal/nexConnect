import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Message, MessagePayload } from '@/types/message';
import { MessageService } from '@/services/message.service';

interface MessageState {
    messages: Message[];
    loading: boolean;
    error: string | null;
}

const initialState: MessageState = {
    messages: [],
    loading: false,
    error: null,
};

export const fetchMessages = createAsyncThunk(
    'messages/fetchMessages',
    async (roomId: string, { rejectWithValue }) => {
        try {
            const response = await MessageService.list(roomId);
            return response.documents;
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed to fetch messages');
        }
    }
);

export const sendMessage = createAsyncThunk(
    'messages/sendMessage',
    async (payload: MessagePayload, { rejectWithValue }) => {
        try {
            // Service returns Promise<Message> now (as per our fix)
            const message = await MessageService.send(payload);
            return message;
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed to send message');
        }
    }
);

export const addMessage = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        receivedMessage: (state, action) => {
            const exists = state.messages.find(m => m.$id === action.payload.$id);
            if (!exists) {
                state.messages.push(action.payload);
            }
        },
        clearMessages: (state) => {
            state.messages = [];
        }
    },
    extraReducers: (builder) => {
        // Fetch
        builder.addCase(fetchMessages.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.messages = [];
        });
        builder.addCase(fetchMessages.fulfilled, (state, action) => {
            state.loading = false;
            state.messages = action.payload;
        });
        builder.addCase(fetchMessages.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });

        // Send
        builder.addCase(sendMessage.fulfilled, (state, action) => {
            const exists = state.messages.find(m => m.$id === action.payload.$id);
            if (!exists) {
                state.messages.push(action.payload);
            }
        });
    },
});

export const { receivedMessage, clearMessages } = addMessage.actions;
export default addMessage.reducer;
