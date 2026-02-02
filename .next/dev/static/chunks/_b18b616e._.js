(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/assets/icons/loader.svg.mjs { IMAGE => \"[project]/src/assets/icons/loader.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript) <export default as loader>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$loader$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$icons$2f$loader$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$loader$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$icons$2f$loader$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/icons/loader.svg.mjs { IMAGE => "[project]/src/assets/icons/loader.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
}),
"[project]/src/hooks/DisplayMsg.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const DisplayMsg = ({ message, setMessage })=>{
    if (setMessage) {
        setTimeout(()=>setMessage(''), 3000);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-red-400 bg-slate-100 w-full h-fit rounded-md flex px-2 p-1 justify-center items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: message
        }, void 0, false, {
            fileName: "[project]/src/hooks/DisplayMsg.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/hooks/DisplayMsg.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = DisplayMsg;
const __TURBOPACK__default__export__ = DisplayMsg;
var _c;
__turbopack_context__.k.register(_c, "DisplayMsg");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/lobby/JoinRoomForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$FirebaseContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/FirebaseContext.tsx [app-client] (ecmascript)");
// import { useSocket } from '@/context/SocketContext.jsx';
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/assets/icons/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$loader$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$icons$2f$loader$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__loader$3e$__ = __turbopack_context__.i('[project]/src/assets/icons/loader.svg.mjs { IMAGE => "[project]/src/assets/icons/loader.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript) <export default as loader>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$DisplayMsg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/DisplayMsg.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$JoinFull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/JoinFull.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function JoinGroup() {
    _s();
    // const socket = useSocket();
    const firebase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$FirebaseContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFirebase"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [roomID, setRoomID] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const showMessage = (msg)=>{
        setMessage(msg);
        setLoading(false);
    };
    const loginMember = async ()=>{
        try {
            const roomExists = await firebase.validateRoomId(roomID);
            if (!roomExists) return showMessage("Room does not exist!");
            const nameAvailable = await firebase.checkUsernameAvailability(roomID, username);
            if (!nameAvailable) return showMessage("This username is already taken. Try another one.");
            const response = await firebase.login({
                room_id: roomID,
                username,
                isOwner: false
            });
            if (!response) return showMessage("Room is not open or expired!");
            // Navigate to chat
            router.push(`/chat/${roomID}`);
        } catch (error) {
            showMessage("Something went wrong. Please try again.");
        }
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (loading) return showMessage("Please wait...");
        // Remove fixed 6-char length check to allow dynamic IDs
        if (roomID.trim().length < 3) return showMessage("Invalid Room ID.");
        if (username.trim().length < 3) return showMessage("Name must be at least 3 characters.");
        setLoading(true);
        loginMember();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JoinGroup.useEffect": ()=>{
            if (message.length > 0) {
                const timeout = setTimeout({
                    "JoinGroup.useEffect.timeout": ()=>setMessage('')
                }["JoinGroup.useEffect.timeout"], 4000);
                return ({
                    "JoinGroup.useEffect": ()=>clearTimeout(timeout)
                })["JoinGroup.useEffect"];
            }
        }
    }["JoinGroup.useEffect"], [
        message
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "flex flex-col gap-4 items-center w-full justify-center mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "username",
                                className: "sr-only",
                                children: "Username"
                            }, void 0, false, {
                                fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "username",
                                type: "text",
                                className: "rounded-md border bg-transparent text-slate-100 w-full p-3",
                                value: username,
                                onChange: (e)=>setUsername(e.target.value),
                                placeholder: "Enter your name",
                                autoComplete: "off",
                                disabled: loading,
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "roomID",
                                className: "sr-only",
                                children: "Room ID"
                            }, void 0, false, {
                                fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "roomID",
                                type: "text",
                                className: "rounded-md border mt-2 bg-transparent text-slate-100 w-full p-3",
                                value: roomID,
                                onChange: (e)=>setRoomID(e.target.value),
                                placeholder: "Enter Room ID",
                                autoComplete: "off",
                                // maxLength={6}
                                disabled: loading,
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "rounded-md w-full border h-[50px] text-white flex justify-center items-center backdrop-blur-sm hover:bg-white/20 transition-all p-3",
                        disabled: loading,
                        "aria-busy": loading,
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Joining..."
                                }, void 0, false, {
                                    fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$loader$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$icons$2f$loader$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__loader$3e$__["loader"],
                                    width: 20,
                                    height: 20,
                                    alt: "loading spinner"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$JoinFull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute w-[90vw] top-10 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$DisplayMsg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    message: message,
                    setMessage: setMessage
                }, void 0, false, {
                    fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                    lineNumber: 121,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(JoinGroup, "AOgDbAQ/j2QGRu3QwSpA7YjK+YU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$FirebaseContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFirebase"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = JoinGroup;
const __TURBOPACK__default__export__ = JoinGroup;
var _c;
__turbopack_context__.k.register(_c, "JoinGroup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/@mui/icons-material/JoinFull.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _interopRequireDefault = __turbopack_context__.r("[project]/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _createSvgIcon = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/@mui/icons-material/utils/createSvgIcon.js [app-client] (ecmascript)"));
var _jsxRuntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var _default = exports.default = (0, _createSvgIcon.default)([
    /*#__PURE__*/ (0, _jsxRuntime.jsx)("ellipse", {
        cx: "12",
        cy: "12",
        rx: "3",
        ry: "5.74"
    }, "0"),
    /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
        d: "M7.5 12c0-.97.23-4.16 3.03-6.5C9.75 5.19 8.9 5 8 5c-3.86 0-7 3.14-7 7s3.14 7 7 7c.9 0 1.75-.19 2.53-.5-2.8-2.34-3.03-5.53-3.03-6.5M16 5c-.9 0-1.75.19-2.53.5 2.8 2.34 3.03 5.53 3.03 6.5 0 .97-.23 4.16-3.03 6.5.78.31 1.63.5 2.53.5 3.86 0 7-3.14 7-7s-3.14-7-7-7"
    }, "1")
], 'JoinFull');
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_b18b616e._.js.map