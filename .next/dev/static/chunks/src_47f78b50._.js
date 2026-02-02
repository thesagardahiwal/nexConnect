(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useTheme = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
_s(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const ThemeProvider = ({ children })=>{
    _s1();
    // Initialize theme from localStorage or system preference
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ThemeProvider.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                if (localStorage.getItem('theme')) {
                    return localStorage.getItem('theme');
                }
                return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
            //TURBOPACK unreachable
            ;
        }
    }["ThemeProvider.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            const root = window.document.documentElement;
            if (theme === 'dark') {
                root.classList.add('dark');
                root.classList.remove('light');
            } else {
                root.classList.remove('dark');
                root.classList.add('light');
            }
            localStorage.setItem('theme', theme);
        }
    }["ThemeProvider.useEffect"], [
        theme
    ]);
    const toggleTheme = ()=>{
        setTheme((prevTheme)=>prevTheme === 'light' ? 'dark' : 'light');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/ThemeContext.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ThemeProvider, "ftAxb08/Yt4FxsGw8fvpw6oJxTI=");
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/appwrite.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COLLECTIONS",
    ()=>COLLECTIONS,
    "DB_ID",
    ()=>DB_ID,
    "STORAGE_ID",
    ()=>STORAGE_ID,
    "account",
    ()=>account,
    "client",
    ()=>client,
    "databases",
    ()=>databases,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/appwrite/dist/esm/sdk.js [app-client] (ecmascript)");
;
const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Client"]().setEndpoint(("TURBOPACK compile-time value", "https://fra.cloud.appwrite.io/v1")).setProject(("TURBOPACK compile-time value", "697a1fcd001c9f25f360"));
const databases = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Databases"](client);
const storage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Storage"](client);
const account = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Account"](client);
const DB_ID = ("TURBOPACK compile-time value", "697a56120007037ca856") || '';
const STORAGE_ID = ("TURBOPACK compile-time value", "697a5fc400196702eabd") || '';
const COLLECTIONS = {
    USERS: "users",
    ROOMS: "rooms",
    ROOM_MEMBERS: "room_members",
    MESSAGES: "messages",
    MEDIA: "media",
    SESSIONS: "sessions"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/session.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SessionService",
    ()=>SessionService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/appwrite.ts [app-client] (ecmascript)");
;
;
const SessionService = {
    create (payload) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["databases"].createDocument(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_ID"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].SESSIONS, "unique()", {
            ...payload,
            isActive: true
        });
    },
    expire (sessionId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["databases"].updateDocument(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_ID"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].SESSIONS, sessionId, {
            isActive: false
        });
    },
    get (sessionId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["databases"].getDocument(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_ID"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].SESSIONS, sessionId);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/user.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserService",
    ()=>UserService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/appwrite.ts [app-client] (ecmascript)");
;
;
const UserService = {
    create (payload) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["databases"].createDocument(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_ID"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].USERS, payload.userId, {
            ...payload
        });
    },
    get (userId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["databases"].getDocument(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_ID"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].USERS, userId);
    },
    update (userId, payload) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["databases"].updateDocument(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_ID"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].USERS, userId, payload);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/slices/authSlice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkSession",
    ()=>checkSession,
    "clearError",
    ()=>clearError,
    "default",
    ()=>__TURBOPACK__default__export__,
    "login",
    ()=>login,
    "logout",
    ()=>logout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/appwrite/dist/esm/sdk.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$session$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/session.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/user.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/appwrite.ts [app-client] (ecmascript)");
;
;
;
;
;
const initialState = {
    user: null,
    session: null,
    userId: null,
    loading: false,
    error: null,
    initialized: false
};
const checkSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('auth/checkSession', async (_, { rejectWithValue })=>{
    try {
        // 1. Appwrite Account (Anonymous or otherwise)
        let currentUserId;
        try {
            const session = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["account"].getSession('current');
            currentUserId = session.userId;
        } catch  {
            const session = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["account"].createAnonymousSession();
            currentUserId = session.userId;
        }
        // 2. User Document
        let userDoc;
        try {
            userDoc = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserService"].get(currentUserId);
        } catch  {
            const payload = {
                userId: currentUserId,
                username: `Guest-${currentUserId.substring(0, 5)}`,
                isGuest: true
            };
            userDoc = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserService"].create(payload);
        }
        // 3. Custom Session Check
        let customSession = null;
        const storedSessionId = localStorage.getItem('nexconnect_session_id');
        if (storedSessionId) {
            try {
                const restored = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$session$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionService"].get(storedSessionId);
                if (restored.isActive && new Date(restored.expiresAt) > new Date()) {
                    customSession = restored;
                } else {
                    localStorage.removeItem('nexconnect_session_id');
                    localStorage.removeItem('nexconnect_private_id');
                }
            } catch  {
                localStorage.removeItem('nexconnect_session_id');
                localStorage.removeItem('nexconnect_private_id');
            }
        }
        return {
            userId: currentUserId,
            user: userDoc,
            session: customSession
        };
    } catch (error) {
        return rejectWithValue(error.message || 'Auth initialization failed');
    }
});
const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('auth/login', async (username, { getState, rejectWithValue })=>{
    try {
        const state = getState().auth;
        const userId = state.userId;
        if (!userId) throw new Error("Authentication not ready");
        const privateId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ID"].unique();
        const sessionPayload = {
            userId,
            privateId,
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
        };
        const newSession = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$session$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionService"].create(sessionPayload);
        localStorage.setItem('nexconnect_session_id', newSession.$id);
        localStorage.setItem('nexconnect_private_id', privateId);
        // Update Username
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserService"].update(userId, {
            username
        });
        // Fetch updated user to be sure
        const updatedUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserService"].get(userId);
        return {
            session: newSession,
            user: updatedUser
        };
    } catch (error) {
        return rejectWithValue(error.message || 'Login failed');
    }
});
const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('auth/logout', async (_, { getState, rejectWithValue })=>{
    try {
        const state = getState().auth;
        if (state.session) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$session$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionService"].expire(state.session.$id);
        }
        localStorage.removeItem('nexconnect_session_id');
        localStorage.removeItem('nexconnect_private_id');
        return null;
    } catch (error) {
        return rejectWithValue(error.message || 'Logout failed');
    }
});
const authSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'auth',
    initialState,
    reducers: {
        clearError: (state)=>{
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        // initAuth / checkSession
        builder.addCase(checkSession.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(checkSession.fulfilled, (state, action)=>{
            state.loading = false;
            state.userId = action.payload.userId;
            state.user = action.payload.user;
            state.session = action.payload.session;
            state.initialized = true;
        });
        builder.addCase(checkSession.rejected, (state, action)=>{
            state.loading = false;
            state.initialized = true; // Still initialized, just failed to get session maybe
            // Keep user/userId null if catastrophic failure
            state.error = action.payload;
        });
        // Login
        builder.addCase(login.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(login.fulfilled, (state, action)=>{
            state.loading = false;
            state.session = action.payload.session;
            state.user = action.payload.user;
        });
        builder.addCase(login.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // Logout
        builder.addCase(logout.fulfilled, (state)=>{
            state.session = null;
        // User and userId technically remain (Anonymous Appwrite session persists)
        // But from "App Session" pov, we are done.
        });
    }
});
const { clearError } = authSlice.actions;
const __TURBOPACK__default__export__ = authSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/room.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoomService",
    ()=>RoomService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/appwrite.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/appwrite/dist/esm/sdk.js [app-client] (ecmascript)");
;
;
;
const select = [
    "*",
    "creator.*"
];
const RoomService = {
    list (search) {
        const queries = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Query"].equal("status", "OPEN"),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Query"].equal("isPublic", true),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Query"].orderDesc("$createdAt"),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Query"].select(select)
        ];
        if (search && search.trim()) {
            // requires full-text index on 'name' in Appwrite
            queries.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Query"].search("name", search));
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["databases"].listDocuments(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_ID"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].ROOMS, queries);
    },
    get (roomId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["databases"].getDocument(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_ID"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].ROOMS, roomId, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Query"].select(select)
        ]);
    },
    create (payload) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["databases"].createDocument(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_ID"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].ROOMS, "unique()", {
            ...payload,
            status: "OPEN"
        });
    },
    close (roomId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["databases"].updateDocument(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_ID"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].ROOMS, roomId, {
            status: "CLOSED"
        });
    },
    open (roomId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["databases"].updateDocument(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_ID"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].ROOMS, roomId, {
            status: "OPEN",
            closedAt: null
        });
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/room-member.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoomMemberService",
    ()=>RoomMemberService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/appwrite.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/appwrite/dist/esm/sdk.js [app-client] (ecmascript)");
;
;
;
const RoomMemberService = {
    list (roomId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["databases"].listDocuments(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_ID"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].ROOM_MEMBERS, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Query"].equal("room", roomId),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Query"].equal("isActive", true),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Query"].select([
                "*",
                "user.*"
            ])
        ]);
    },
    add (payload) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["databases"].createDocument(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_ID"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].ROOM_MEMBERS, "unique()", {
            ...payload,
            isActive: true,
            joinedAt: new Date().toISOString()
        });
    },
    kick (memberId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["databases"].updateDocument(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_ID"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].ROOM_MEMBERS, memberId, {
            isActive: false
        });
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/slices/roomSlice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addMember",
    ()=>addMember,
    "addRoom",
    ()=>addRoom,
    "clearRoomError",
    ()=>clearRoomError,
    "createRoom",
    ()=>createRoom,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteRoom",
    ()=>deleteRoom,
    "enterRoom",
    ()=>enterRoom,
    "exitRoom",
    ()=>exitRoom,
    "fetchRooms",
    ()=>fetchRooms,
    "joinRoom",
    ()=>joinRoom,
    "leaveRoom",
    ()=>leaveRoom,
    "removeMember",
    ()=>removeMember,
    "updateMember",
    ()=>updateMember,
    "updateRoom",
    ()=>updateRoom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$room$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/room.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$room$2d$member$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/room-member.service.ts [app-client] (ecmascript)");
;
;
;
const initialState = {
    rooms: [],
    currentRoom: null,
    members: [],
    loading: false,
    error: null
};
const fetchRooms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('rooms/fetchRooms', async (search, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$room$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomService"].list(search);
        return response.documents;
    } catch (error) {
        return rejectWithValue(error.message || 'Failed to fetch rooms');
    }
});
const createRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('rooms/createRoom', async (payload, { rejectWithValue })=>{
    try {
        const room = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$room$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomService"].create(payload);
        return room;
    } catch (error) {
        return rejectWithValue(error.message || 'Failed to create room');
    }
});
const enterRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('rooms/enterRoom', async (roomId, { rejectWithValue })=>{
    try {
        const room = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$room$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomService"].get(roomId);
        const membersResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$room$2d$member$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomMemberService"].list(roomId);
        return {
            room,
            members: membersResponse.documents
        };
    } catch (error) {
        return rejectWithValue(error.message || 'Failed to enter room');
    }
});
const joinRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('rooms/joinRoom', async (payload, { getState, rejectWithValue })=>{
    try {
        const state = getState();
        const { members, currentRoom } = state.rooms;
        // Duplicate Prevention Guard
        // Only effective if we are strictly joining the CURRENT room we are looking at.
        // If joining a room from the list without entering, we might not have members loaded.
        // However, the prompt implies "enter -> join" flow or ensuring we don't double join.
        // If currentRoom matches, we check.
        if (currentRoom && currentRoom.$id === payload.room) {
            const isAlreadyMember = members.some((m)=>m.user.$id === payload.user && m.isActive);
            if (isAlreadyMember) {
                // Already a member, no op, or return existing (optional)
                // We can return null or reject to indicate "already joined" but success
                // Let's just return undefined to skip adding
                return null;
            }
        }
        // If not loaded or not found, proceed to add
        // Note: Parallel requests could still race here, but this catches UI double-clicks.
        const member = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$room$2d$member$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomMemberService"].add(payload);
        return member;
    } catch (error) {
        return rejectWithValue(error.message || 'Failed to join room');
    }
});
const leaveRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('rooms/leaveRoom', async (memberId, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$room$2d$member$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomMemberService"].kick(memberId);
        return memberId;
    } catch (error) {
        return rejectWithValue(error.message || 'Failed to leave room');
    }
});
const roomSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'rooms',
    initialState,
    reducers: {
        clearRoomError: (state)=>{
            state.error = null;
        },
        exitRoom: (state)=>{
            state.currentRoom = null;
            state.members = [];
        },
        addRoom: (state, action)=>{
            state.rooms.unshift(action.payload);
        },
        updateRoom: (state, action)=>{
            const index = state.rooms.findIndex((r)=>r.$id === action.payload.$id);
            if (index !== -1) {
                state.rooms[index] = action.payload;
            }
            if (state.currentRoom && state.currentRoom.$id === action.payload.$id) {
                state.currentRoom = action.payload;
            }
        },
        deleteRoom: (state, action)=>{
            state.rooms = state.rooms.filter((r)=>r.$id !== action.payload.$id);
            if (state.currentRoom && state.currentRoom.$id === action.payload.$id) {
                state.currentRoom = null;
                state.members = [];
            }
        },
        addMember: (state, action)=>{
            // Check if already exists to be safe
            if (!state.members.find((m)=>m.$id === action.payload.$id)) {
                state.members.push(action.payload);
            }
        },
        updateMember: (state, action)=>{
            const index = state.members.findIndex((m)=>m.$id === action.payload.$id);
            if (index !== -1) {
                state.members[index] = action.payload;
            }
        },
        removeMember: (state, action)=>{
            state.members = state.members.filter((m)=>m.$id !== action.payload.$id);
        }
    },
    extraReducers: (builder)=>{
        // Fetch Rooms
        builder.addCase(fetchRooms.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchRooms.fulfilled, (state, action)=>{
            state.loading = false;
            state.rooms = action.payload;
        });
        builder.addCase(fetchRooms.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // Create Room
        builder.addCase(createRoom.fulfilled, (state, action)=>{
            state.rooms.unshift(action.payload);
        });
        // Enter Room
        builder.addCase(enterRoom.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(enterRoom.fulfilled, (state, action)=>{
            state.loading = false;
            state.currentRoom = action.payload.room;
            state.members = action.payload.members;
        });
        builder.addCase(enterRoom.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // Join Room
        builder.addCase(joinRoom.fulfilled, (state, action)=>{
            if (action.payload) {
                state.members.push(action.payload);
            }
        });
        // Leave Room
        builder.addCase(leaveRoom.fulfilled, (state, action)=>{
            state.members = state.members.filter((m)=>m.$id !== action.payload);
        });
    }
});
const { clearRoomError, exitRoom, addRoom, updateRoom, deleteRoom, addMember, updateMember, removeMember } = roomSlice.actions;
const __TURBOPACK__default__export__ = roomSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/message.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageService",
    ()=>MessageService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/appwrite.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/appwrite/dist/esm/sdk.js [app-client] (ecmascript)");
;
;
;
const MessageService = {
    list (roomId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["databases"].listDocuments(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_ID"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].MESSAGES, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Query"].equal("room", roomId),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Query"].orderAsc("$createdAt")
        ]);
    },
    send (payload) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["databases"].createDocument(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_ID"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].MESSAGES, "unique()", {
            ...payload
        });
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/slices/messageSlice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addMessage",
    ()=>addMessage,
    "clearMessages",
    ()=>clearMessages,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fetchMessages",
    ()=>fetchMessages,
    "receivedMessage",
    ()=>receivedMessage,
    "sendMessage",
    ()=>sendMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$message$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/message.service.ts [app-client] (ecmascript)");
;
;
const initialState = {
    messages: [],
    loading: false,
    error: null
};
const fetchMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('messages/fetchMessages', async (roomId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$message$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageService"].list(roomId);
        return response.documents;
    } catch (error) {
        return rejectWithValue(error.message || 'Failed to fetch messages');
    }
});
const sendMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('messages/sendMessage', async (payload, { rejectWithValue })=>{
    try {
        // Service returns Promise<Message> now (as per our fix)
        const message = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$message$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageService"].send(payload);
        return message;
    } catch (error) {
        return rejectWithValue(error.message || 'Failed to send message');
    }
});
const addMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'messages',
    initialState,
    reducers: {
        receivedMessage: (state, action)=>{
            // For real-time updates logic if we have it, or manual optimistic updates
            state.messages.push(action.payload);
        },
        clearMessages: (state)=>{
            state.messages = [];
        }
    },
    extraReducers: (builder)=>{
        // Fetch
        builder.addCase(fetchMessages.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchMessages.fulfilled, (state, action)=>{
            state.loading = false;
            state.messages = action.payload;
        });
        builder.addCase(fetchMessages.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // Send
        builder.addCase(sendMessage.fulfilled, (state, action)=>{
            state.messages.push(action.payload);
        });
    }
});
const { receivedMessage, clearMessages } = addMessage.actions;
const __TURBOPACK__default__export__ = addMessage.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$authSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/authSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$roomSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/roomSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$messageSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/messageSlice.ts [app-client] (ecmascript)");
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        auth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$authSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        rooms: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$roomSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        messages: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$messageSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false
        })
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ReduxProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReduxProvider",
    ()=>ReduxProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/store.ts [app-client] (ecmascript)");
'use client';
;
;
;
function ReduxProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ReduxProvider.tsx",
        lineNumber: 7,
        columnNumber: 12
    }, this);
}
_c = ReduxProvider;
var _c;
__turbopack_context__.k.register(_c, "ReduxProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReduxProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReduxProvider.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReduxProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReduxProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/providers.tsx",
            lineNumber: 10,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/providers.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_47f78b50._.js.map