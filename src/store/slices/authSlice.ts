import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ID } from 'appwrite';
import { User, UserPayload } from '@/types/user';
import { Session } from '@/types/session';
import { SessionService } from '@/services/session.service';
import { UserService } from '@/services/user.service';
import { account } from '@/lib/appwrite';

interface AuthState {
    user: User | null;
    session: Session | null;
    userId: string | null;
    loading: boolean;
    error: string | null;
    initialized: boolean;
}

const initialState: AuthState = {
    user: null,
    session: null,
    userId: null,
    loading: false,
    error: null,
    initialized: false,
};

// Async Thunks

export const initializeApp = createAsyncThunk(
    'auth/initializeApp',
    async (_, { getState, rejectWithValue }) => {
        try {
            const state = (getState() as any).auth;

            // --- STEP 1: AUTH (GATEKEEPER) ---
            let currentUserId = state.userId;

            // If checking fails or invalid, we reset
            if (!currentUserId) {
                try {
                    const session = await account.getSession('current');
                    currentUserId = session.userId;
                } catch {
                    // No session, create anonymous
                    const session = await account.createAnonymousSession();
                    currentUserId = session.userId;
                }
            }

            // Sync userId to state immediately if changed (though dispatch inside thunk updates next render, local var is key)
            // Ideally we returned here if we were just doing auth, but we need to proceed.

            // --- STEP 2: USER (ONCE PER authUserId) ---
            let userDoc = state.user;
            if (currentUserId && !userDoc) {
                // 1. Check Appwrite safely
                const existingUser = await UserService.find(currentUserId);

                if (existingUser) {
                    userDoc = existingUser;
                } else {
                    // 2. Create Idempotently
                    const payload: UserPayload = {
                        userId: currentUserId,
                        username: `Guest-${currentUserId.substring(0, 5)}`,
                        isGuest: true,
                    };
                    // Final existence check in service (simulate or trust find) -> relying on find returning null
                    userDoc = await UserService.create(payload);
                }
            }

            // --- STEP 3: SESSION (ONCE PER USER) ---
            let customSession = state.session;
            if (userDoc && !customSession) {
                // 1. Check Appwrite safely
                const activeSession = await SessionService.getActive(userDoc.$id);

                if (activeSession) {
                    // Check local storage match if strict, or just adopt it
                    customSession = activeSession;
                    // Update local storage to match truth
                    localStorage.setItem('nexconnect_session_id', activeSession.$id);
                    localStorage.setItem('nexconnect_private_id', activeSession.privateId);
                } else {
                    // 2. Create Idempotently
                    const privateId = ID.unique();
                    const sessionPayload = {
                        userId: userDoc.$id,
                        privateId,
                        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
                    };
                    customSession = await SessionService.create(sessionPayload);

                    localStorage.setItem('nexconnect_session_id', customSession.$id);
                    localStorage.setItem('nexconnect_private_id', privateId);
                }
            }

            return { userId: currentUserId, user: userDoc, session: customSession };

        } catch (error: any) {
            return rejectWithValue(error.message || 'Initialization failed');
        }
    }
);

export const updateUsername = createAsyncThunk(
    'auth/updateUsername',
    async (username: string, { getState, rejectWithValue }) => {
        try {
            const state = (getState() as any).auth;
            const userId = state.userId;
            if (!userId) throw new Error("User not found");

            await UserService.update(userId, { username });
            return await UserService.get(userId);
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed to update username');
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { getState, rejectWithValue }) => {
        try {
            const state = (getState() as any).auth;
            if (state.session) {
                await SessionService.expire(state.session.$id);
            }
            // We do NOT delete the account, just the internal session
            localStorage.removeItem('nexconnect_session_id');
            localStorage.removeItem('nexconnect_private_id');
            // Force reload to reset application state
            window.location.reload();
            return null;
        } catch (error: any) {
            return rejectWithValue(error.message || 'Logout failed');
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        // initializeApp
        builder.addCase(initializeApp.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(initializeApp.fulfilled, (state, action) => {
            state.loading = false;
            state.userId = action.payload.userId;
            state.user = action.payload.user;
            state.session = action.payload.session;
            state.initialized = true;
        });
        builder.addCase(initializeApp.rejected, (state, action) => {
            state.loading = false;
            state.initialized = true;
            state.error = action.payload as string;
        });

        // updateUsername
        builder.addCase(updateUsername.fulfilled, (state, action) => {
            state.user = action.payload;
        });

        // Logout
        builder.addCase(logout.fulfilled, (state) => {
            state.session = null;
            // User and userId technically remain (Anonymous Appwrite session persists)
            // But from "App Session" pov, we are done.
        });
    },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
