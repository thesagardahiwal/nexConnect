(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
    }
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
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useSession.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSession",
    ()=>useSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/user.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$session$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/session.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/appwrite/dist/esm/sdk.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const STORAGE_KEY_USER = 'nexconnect_user_id';
const STORAGE_KEY_SESSION = 'nexconnect_session_private_id';
function useSession() {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const initSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSession.useCallback[initSession]": async ()=>{
            setLoading(true);
            try {
                const userId = localStorage.getItem(STORAGE_KEY_USER);
                // const privateId = localStorage.getItem(STORAGE_KEY_SESSION);
                if (userId) {
                    const userDoc = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserService"].get(userId);
                    setUser(userDoc);
                }
            // Note: Since SessionService.get isn't defined in the provided snippets, 
            // we assume for now we primarily track the User. 
            // If Session validation is needed, we would add it here.
            } catch (err) {
                console.error('Session initialization failed:', err);
                // If user not found, clear storage
                localStorage.removeItem(STORAGE_KEY_USER);
                localStorage.removeItem(STORAGE_KEY_SESSION);
                setUser(null);
            } finally{
                setLoading(false);
            }
        }
    }["useSession.useCallback[initSession]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSession.useEffect": ()=>{
            initSession();
        }
    }["useSession.useEffect"], [
        initSession
    ]);
    const createSession = async (username)=>{
        setLoading(true);
        setError(null);
        try {
            const userId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ID"].unique();
            const userPayload = {
                userId,
                username,
                isGuest: true
            };
            const newUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserService"].create(userPayload);
            setUser(newUser);
            localStorage.setItem(STORAGE_KEY_USER, userId);
            // Create a session document (optional, based on your architecture)
            const privateId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ID"].unique();
            const sessionPayload = {
                userId,
                privateId,
                expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
            };
            const newSession = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$session$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionService"].create(sessionPayload);
            setSession(newSession);
            localStorage.setItem(STORAGE_KEY_SESSION, privateId);
        } catch (err) {
            console.error('Create session failed:', err);
            setError(err.message || 'Failed to create session');
        } finally{
            setLoading(false);
        }
    };
    const logout = async ()=>{
        setLoading(true);
        try {
            if (session) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$session$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionService"].expire(session.$id);
            }
            setUser(null);
            setSession(null);
            localStorage.removeItem(STORAGE_KEY_USER);
            localStorage.removeItem(STORAGE_KEY_SESSION);
        } catch (err) {
            console.error('Logout failed:', err);
        } finally{
            setLoading(false);
        }
    };
    return {
        user,
        session,
        loading,
        error,
        createSession,
        logout,
        isAuthenticated: !!user
    };
}
_s(useSession, "0d+2ZG2vKdKowBUo4eU5ua3n9PY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(rooms)/rooms/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoomsIndexPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRooms$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useRooms.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSession.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function RoomsIndexPage() {
    _s();
    const [roomName, setRoomName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isPublic, setIsPublic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { createRoom } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRooms$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRooms"])();
    const { user, session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [creating, setCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCreate = async (e)=>{
        e.preventDefault();
        if (!roomName.trim() || !user) return;
        setCreating(true);
        try {
            const newRoom = await createRoom({
                name: roomName,
                creatorId: user.userId,
                isPublic,
                roomCode: !isPublic ? Math.random().toString(36).substring(7) : undefined // Simple random code
            });
            router.push(`/room/${newRoom.$id}`);
        } catch (error) {
            console.error(error);
            alert("Failed to create room");
        } finally{
            setCreating(false);
        }
    };
    if (!session) {
        // useSession hook in layout or page should handle redirect ideally, 
        // but adding here for safety
        if ("TURBOPACK compile-time truthy", 1) router.push('/session');
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex items-center justify-center bg-gray-50 p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-md w-full bg-white p-8 rounded-3xl border border-gray-100 shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-gray-900",
                            children: "Create a Room"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(rooms)/rooms/page.tsx",
                            lineNumber: 48,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 mt-2",
                            children: "Start a new secure channel for your team"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(rooms)/rooms/page.tsx",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(rooms)/rooms/page.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleCreate,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Room Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(rooms)/rooms/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: roomName,
                                    onChange: (e)=>setRoomName(e.target.value),
                                    placeholder: "e.g. Project Alpha",
                                    className: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(rooms)/rooms/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(rooms)/rooms/page.tsx",
                            lineNumber: 53,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 p-3 bg-gray-50 rounded-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: isPublic,
                                    onChange: (e)=>setIsPublic(e.target.checked),
                                    className: "w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(rooms)/rooms/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-gray-900",
                                            children: "Public Room"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(rooms)/rooms/page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500",
                                            children: "Visible to everyone in the lobby"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(rooms)/rooms/page.tsx",
                                            lineNumber: 73,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(rooms)/rooms/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(rooms)/rooms/page.tsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: creating || !roomName.trim(),
                            className: "w-full bg-blue-600 text-white font-medium py-3 rounded-xl hover:bg-blue-700 transition disabled:opacity-50",
                            children: creating ? 'Creating...' : 'Create Room +'
                        }, void 0, false, {
                            fileName: "[project]/src/app/(rooms)/rooms/page.tsx",
                            lineNumber: 77,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(rooms)/rooms/page.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(rooms)/rooms/page.tsx",
            lineNumber: 46,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(rooms)/rooms/page.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, this);
}
_s(RoomsIndexPage, "VtPqMmsZGipoAeL4Rfe2BBfBx5s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRooms$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRooms"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RoomsIndexPage;
var _c;
__turbopack_context__.k.register(_c, "RoomsIndexPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_7fef9cbd._.js.map