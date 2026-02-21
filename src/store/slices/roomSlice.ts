import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Room, RoomPayload } from '@/types/room';
import { RoomMember, RoomMemberPayload } from '@/types/room-member';
import { RoomService } from '@/services/room.service';
import { RoomMemberService } from '@/services/room-member.service';


interface RoomState {
    rooms: Room[];
    currentRoom: Room | null;
    members: RoomMember[];
    loading: boolean;
    error: string | null;
}

const initialState: RoomState = {
    rooms: [],
    currentRoom: null,
    members: [],
    loading: false,
    error: null,
};

// Async Thunks
export const fetchRooms = createAsyncThunk(
    'rooms/fetchRooms',
    async ({ search, userId }: { search?: string, userId?: string } = {}, { rejectWithValue }) => {
        try {
            const response = await RoomService.list(search, userId);
            return response.documents;
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed to fetch rooms');
        }
    }
);

export const createRoom = createAsyncThunk(
    'rooms/createRoom',
    async (payload: RoomPayload, { rejectWithValue }) => {
        try {
            const room = await RoomService.create(payload);
            return room;
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed to create room');
        }
    }
);

export const enterRoom = createAsyncThunk(
    'rooms/enterRoom',
    async (roomId: string, { rejectWithValue }) => {
        try {
            const room = await RoomService.get(roomId);
            const membersResponse = await RoomMemberService.list(roomId);
            return { room, members: membersResponse.documents };
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed to enter room');
        }
    }
);

export const joinRoom = createAsyncThunk(
    'rooms/joinRoom',
    async (payload: RoomMemberPayload, { rejectWithValue }) => {
        try {
            // 1. Safe Existence Check (Appwrite)
            const existingMember = await RoomMemberService.find(payload.room, payload.user);

            if (existingMember) {
                // Return existing member to satisfy fulfilled state without creating duplicate
                return existingMember;
            }

            // 2. Create Idempotently
            const member = await RoomMemberService.add(payload);
            return member;
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed to join room');
        }
    }
);

export const leaveRoom = createAsyncThunk(
    'rooms/leaveRoom',
    async (memberId: string, { rejectWithValue }) => {
        try {
            await RoomMemberService.kick(memberId);
            return memberId;
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed to leave room');
        }
    }
);

const roomSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        clearRoomError: (state) => {
            state.error = null;
        },
        exitRoom: (state) => {
            state.currentRoom = null;
            state.members = [];
        },
        addRoom: (state, action) => {
            if (!state.rooms.some(r => r.$id === action.payload.$id)) {
                state.rooms.unshift(action.payload);
            }
        },
        updateRoom: (state, action) => {
            const index = state.rooms.findIndex(r => r.$id === action.payload.$id);
            if (index !== -1) {
                state.rooms[index] = action.payload;
            }
            if (state.currentRoom && state.currentRoom.$id === action.payload.$id) {
                state.currentRoom = action.payload;
            }
        },
        deleteRoom: (state, action) => {
            state.rooms = state.rooms.filter(r => r.$id !== action.payload.$id);
            if (state.currentRoom && state.currentRoom.$id === action.payload.$id) {
                state.currentRoom = null;
                state.members = [];
            }
        },
        addMember: (state, action) => {
            // Check if already exists to be safe
            // Payload might be expanded or not. We rely on $id.
            if (!state.members.find(m => m.$id === action.payload.$id)) {
                state.members.push(action.payload);
            }
        },
        updateMember: (state, action) => {
            const index = state.members.findIndex(m => m.$id === action.payload.$id);
            if (index !== -1) {
                // Merge to preserve user details if payload has unexpanded user
                state.members[index] = { ...state.members[index], ...action.payload };
            }
        },
        removeMember: (state, action) => {
            state.members = state.members.filter(m => m.$id !== action.payload.$id);
        }
    },
    extraReducers: (builder) => {
        // Fetch Rooms
        builder.addCase(fetchRooms.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchRooms.fulfilled, (state, action) => {
            state.loading = false;
            state.rooms = action.payload;
        });
        builder.addCase(fetchRooms.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });

        // Create Room
        builder.addCase(createRoom.fulfilled, (state, action) => {
            if (!state.rooms.some(r => r.$id === action.payload.$id)) {
                state.rooms.unshift(action.payload);
            }
        });

        // Enter Room
        builder.addCase(enterRoom.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.currentRoom = null;
            state.members = [];
        });
        builder.addCase(enterRoom.fulfilled, (state, action) => {
            state.loading = false;
            state.currentRoom = action.payload.room;
            state.members = action.payload.members;
        });
        builder.addCase(enterRoom.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });

        // Join Room
        builder.addCase(joinRoom.fulfilled, (state, action) => {
            if (action.payload) {
                const exists = state.members.find(m => m.$id === action.payload?.$id);
                if (!exists) {
                    state.members.push(action.payload);
                }
            }
        });

        // Leave Room
        builder.addCase(leaveRoom.fulfilled, (state, action) => {
            state.members = state.members.filter(m => m.$id !== action.payload);
        });
    },
});

export const { clearRoomError, exitRoom, addRoom, updateRoom, deleteRoom, addMember, updateMember, removeMember } = roomSlice.actions;
export default roomSlice.reducer;
