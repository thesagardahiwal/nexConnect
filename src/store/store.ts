import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import roomReducer from './slices/roomSlice';
import messageReducer from './slices/messageSlice';

import mediaReducer from './slices/mediaSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        rooms: roomReducer,
        messages: messageReducer,
        media: mediaReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // No change needed for types if inferred from store
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
