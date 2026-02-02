(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
const RoomService = {
    list () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["databases"].listDocuments(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_ID"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].ROOMS, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Query"].equal("status", "OPEN"),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Query"].equal("isPublic", true),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Query"].orderDesc("$createdAt")
        ]);
    },
    get (roomId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["databases"].getDocument(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_ID"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].ROOMS, roomId);
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Query"].equal("roomId", roomId),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Query"].equal("isActive", true)
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
"[project]/src/hooks/useAuth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/appwrite.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/user.service.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useAuth() {
    _s();
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAuth.useEffect": ()=>{
            // Run once on mount
            const run = {
                "useAuth.useEffect.run": async ()=>{
                    setLoading(true);
                    try {
                        let currentUserId;
                        try {
                            const session = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["account"].getSession('current');
                            currentUserId = session.userId;
                        } catch  {
                            const session = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["account"].createAnonymousSession();
                            currentUserId = session.userId;
                        }
                        setUserId(currentUserId);
                        // Check/Create User Doc
                        try {
                            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserService"].get(currentUserId);
                        } catch  {
                            const payload = {
                                userId: currentUserId,
                                username: `Guest-${currentUserId.substring(0, 5)}`,
                                isGuest: true
                            };
                            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserService"].create(payload);
                        }
                    } catch (err) {
                        setError(err.message);
                    } finally{
                        setLoading(false);
                    }
                }
            }["useAuth.useEffect.run"];
            run();
        }
    }["useAuth.useEffect"], []);
    return {
        userId,
        loading,
        error
    };
}
_s(useAuth, "EI3L9DihiXF6/oYrs2oqsFDwmgg=");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$session$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/session.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/user.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/appwrite/dist/esm/sdk.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function useSession() {
    _s();
    const { userId, loading: authLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSession.useCallback[fetchUser]": async ()=>{
            if (!userId) return;
            try {
                const doc = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserService"].get(userId);
                setUser(doc);
            } catch (e) {
                console.error('Failed to fetch user details', e);
            }
        }
    }["useSession.useCallback[fetchUser]"], [
        userId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSession.useEffect": ()=>{
            fetchUser();
        }
    }["useSession.useEffect"], [
        fetchUser
    ]);
    const createSession = async (username)=>{
        if (!userId) {
            setError("Authentication not ready");
            return;
        }
        setLoading(true);
        setError(null);
        try {
            // Source of Truth Rule #2: Session Control Layer
            // 1. Create Session Document
            const privateId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ID"].unique();
            const sessionPayload = {
                userId,
                privateId,
                expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
            };
            const newSession = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$session$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionService"].create(sessionPayload);
            setSession(newSession);
            localStorage.setItem('nexconnect_session_id', newSession.$id);
            localStorage.setItem('nexconnect_private_id', privateId); // For validation logic later if needed
            // 2. Update Pseudonym (User Doc)
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserService"].update(userId, {
                    username
                });
                // Update local state immediately
                if (user) setUser({
                    ...user,
                    username
                });
                else fetchUser();
            } catch  {}
        } catch (err) {
            console.error('Create session failed:', err);
            setError(err.message || 'Failed to create session');
        } finally{
            setLoading(false);
        }
    };
    // Restore Session
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSession.useEffect": ()=>{
            const checkSession = {
                "useSession.useEffect.checkSession": async ()=>{
                    if (authLoading) return;
                    const storedSessionId = localStorage.getItem('nexconnect_session_id');
                    if (storedSessionId) {
                        try {
                            const restoredSession = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$session$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionService"].get(storedSessionId);
                            // Check if valid and active
                            if (restoredSession.isActive && new Date(restoredSession.expiresAt) > new Date()) {
                                setSession(restoredSession);
                            } else {
                                // Expired or inactive, clear it
                                localStorage.removeItem('nexconnect_session_id');
                                localStorage.removeItem('nexconnect_private_id');
                            }
                        } catch  {
                            // Not found or error
                            localStorage.removeItem('nexconnect_session_id');
                            localStorage.removeItem('nexconnect_private_id');
                        }
                    }
                    setLoading(false);
                }
            }["useSession.useEffect.checkSession"];
            checkSession();
        }
    }["useSession.useEffect"], [
        authLoading
    ]);
    const logout = async ()=>{
        setLoading(true);
        try {
            if (session) {
                // Rule #6: Wipe / Exit
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$session$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionService"].expire(session.$id);
            }
        } catch (e) {
            console.error(e);
        } finally{
            setSession(null);
            localStorage.removeItem('nexconnect_session_id');
            localStorage.removeItem('nexconnect_private_id');
            setLoading(false);
        }
    };
    return {
        session,
        user,
        loading: loading || authLoading,
        error,
        createSession,
        logout,
        isAuthenticated: !!session && session.isActive
    };
}
_s(useSession, "MxSS9qr8qCSbpZ8Lx8JO5Lu4La8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useRooms.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRooms",
    ()=>useRooms
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$room$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/room.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$room$2d$member$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/room-member.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/appwrite.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSession.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function useRooms() {
    _s();
    const { session, isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [rooms, setRooms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchRooms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRooms.useCallback[fetchRooms]": async ()=>{
            setLoading(true);
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$room$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomService"].list();
                setRooms(response.documents);
            } catch (err) {
                console.error('Fetch rooms failed:', err);
                setError(err.message || 'Failed to fetch rooms');
            } finally{
                setLoading(false);
            }
        }
    }["useRooms.useCallback[fetchRooms]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRooms.useEffect": ()=>{
            fetchRooms();
            const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].subscribe(`databases.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_ID"]}.collections.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].ROOMS}.documents`, {
                "useRooms.useEffect.unsubscribe": (response)=>{
                    if (response.events.includes('databases.*.collections.*.documents.*.create')) {
                        const newRoom = response.payload;
                        if (newRoom.status === 'OPEN' && newRoom.isPublic) {
                            setRooms({
                                "useRooms.useEffect.unsubscribe": (prev)=>[
                                        newRoom,
                                        ...prev
                                    ]
                            }["useRooms.useEffect.unsubscribe"]);
                        }
                    } else if (response.events.includes('databases.*.collections.*.documents.*.update')) {
                        const updatedRoom = response.payload;
                        setRooms({
                            "useRooms.useEffect.unsubscribe": (prev)=>prev.map({
                                    "useRooms.useEffect.unsubscribe": (r)=>r.$id === updatedRoom.$id ? updatedRoom : r
                                }["useRooms.useEffect.unsubscribe"])
                        }["useRooms.useEffect.unsubscribe"]);
                    } else if (response.events.includes('databases.*.collections.*.documents.*.delete')) {
                        const deletedRoom = response.payload;
                        setRooms({
                            "useRooms.useEffect.unsubscribe": (prev)=>prev.filter({
                                    "useRooms.useEffect.unsubscribe": (r)=>r.$id !== deletedRoom.$id
                                }["useRooms.useEffect.unsubscribe"])
                        }["useRooms.useEffect.unsubscribe"]);
                    }
                }
            }["useRooms.useEffect.unsubscribe"]);
            return ({
                "useRooms.useEffect": ()=>{
                    unsubscribe();
                }
            })["useRooms.useEffect"];
        }
    }["useRooms.useEffect"], [
        fetchRooms
    ]);
    const createRoom = async (payload)=>{
        // Rule #3: Create Room using active session
        if (!isAuthenticated || !session?.userId) {
            throw new Error("Active session required to create room");
        }
        try {
            // 1. Create Room
            const newRoom = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$room$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomService"].create(payload);
            // 2. Add Creator as Member (Rule #3)
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$room$2d$member$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomMemberService"].add({
                room: newRoom.$id,
                user: session.userId,
                role: 'CREATOR'
            });
            return newRoom;
        } catch (err) {
            console.error('Create room failed:', err);
            throw err;
        }
    };
    return {
        rooms,
        loading,
        error,
        createRoom,
        refresh: fetchRooms
    };
}
_s(useRooms, "S2jKTat9cxV1pDlI6gWxJyxWjIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/room/RoomSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoomSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRooms$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useRooms.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSession.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function RoomSidebar() {
    _s();
    const { rooms, loading: roomsLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRooms$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRooms"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const currentRoomId = params?.roomId;
    const handleCreateRoom = ()=>{
        router.push('/rooms'); // Navigate to index/create page
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-72 bg-white border-r border-gray-200 flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-4 flex items-center justify-between shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-semibold text-gray-800 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-600",
                                children: "#"
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/RoomSidebar.tsx",
                                lineNumber: 23,
                                columnNumber: 21
                            }, this),
                            " Rooms"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/RoomSidebar.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCreateRoom,
                        className: "w-8 h-8 rounded-full bg-gray-100 text-blue-600 hover:bg-blue-50 transition flex items-center justify-center",
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/RoomSidebar.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/RoomSidebar.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 px-3 space-y-2 overflow-y-auto",
                children: [
                    roomsLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-xs text-gray-400 mt-4",
                        children: "Loading rooms..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/RoomSidebar.tsx",
                        lineNumber: 35,
                        columnNumber: 34
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-xs text-red-400 mt-4",
                        children: "Error loading rooms"
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/RoomSidebar.tsx",
                        lineNumber: 36,
                        columnNumber: 27
                    }, this),
                    !roomsLoading && rooms.map((room)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoomItem, {
                            name: room.name,
                            status: room.status,
                            active: room.$id === currentRoomId,
                            onClick: ()=>router.push(`/room/${room.$id}`)
                        }, room.$id, false, {
                            fileName: "[project]/src/components/room/RoomSidebar.tsx",
                            lineNumber: 39,
                            columnNumber: 21
                        }, this)),
                    !roomsLoading && rooms.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500",
                            children: "No public rooms yet."
                        }, void 0, false, {
                            fileName: "[project]/src/components/room/RoomSidebar.tsx",
                            lineNumber: 50,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/RoomSidebar.tsx",
                        lineNumber: 49,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/RoomSidebar.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-gray-200 p-4 flex items-center gap-3 shrink-0 bg-gray-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold",
                        children: user?.username ? user.username.charAt(0).toUpperCase() : '?'
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/RoomSidebar.tsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium truncate",
                                children: user?.username || 'Guest'
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/RoomSidebar.tsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-green-500 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/room/RoomSidebar.tsx",
                                        lineNumber: 63,
                                        columnNumber: 25
                                    }, this),
                                    "Online"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/room/RoomSidebar.tsx",
                                lineNumber: 62,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/RoomSidebar.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/RoomSidebar.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/room/RoomSidebar.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
_s(RoomSidebar, "vW2Os7AHHgc0O1NWWoeM1ik/RVc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRooms$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRooms"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = RoomSidebar;
function RoomItem({ name, status, active, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: `px-4 py-3 rounded-xl cursor-pointer transition ${active ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-100 text-gray-700"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-medium truncate",
                children: [
                    "# ",
                    name
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/RoomSidebar.tsx",
                lineNumber: 91,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-xs ${active ? "opacity-90" : "opacity-60"}`,
                children: status
            }, void 0, false, {
                fileName: "[project]/src/components/room/RoomSidebar.tsx",
                lineNumber: 92,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/room/RoomSidebar.tsx",
        lineNumber: 84,
        columnNumber: 9
    }, this);
}
_c1 = RoomItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "RoomSidebar");
__turbopack_context__.k.register(_c1, "RoomItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_42199cf8._.js.map