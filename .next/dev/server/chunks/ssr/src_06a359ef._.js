module.exports = [
"[project]/src/components/room/ChatArea.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function ChatArea({ room, messages, currentUser, loading, onSendMessage }) {
    const [inputText, setInputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        scrollToBottom();
    }, [
        messages
    ]);
    const handleSend = async ()=>{
        if (!inputText.trim()) return;
        setSending(true);
        try {
            await onSendMessage(inputText, "TEXT");
            setInputText("");
        } catch (error) {
            console.error("Failed to send message", error);
        } finally{
            setSending(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex items-center justify-center bg-surface-subtle dark:bg-surface-darkBase text-text-muted dark:text-text-darkMuted",
            children: "Loading chat..."
        }, void 0, false, {
            fileName: "[project]/src/components/room/ChatArea.tsx",
            lineNumber: 43,
            columnNumber: 16
        }, this);
    }
    if (!room) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex items-center justify-center bg-surface-subtle dark:bg-surface-darkBase text-text-muted dark:text-text-darkMuted",
            children: "Select a room"
        }, void 0, false, {
            fileName: "[project]/src/components/room/ChatArea.tsx",
            lineNumber: 47,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex-1 flex flex-col bg-surface-subtle dark:bg-surface-darkBase relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-16 bg-surface-base dark:bg-surface-darkElevated border-b border-border-default dark:border-border-darkDefault px-6 flex items-center justify-between shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-text-primary dark:text-text-darkPrimary flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icons"].Hash, {
                                        className: "w-4 h-4 text-brand-primary dark:text-brand-primaryDark"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/room/ChatArea.tsx",
                                        lineNumber: 56,
                                        columnNumber: 25
                                    }, this),
                                    " ",
                                    room.name,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-xs px-2 py-0.5 rounded-full ${room.status === 'OPEN' ? 'bg-status-success/10 text-status-success dark:text-status-successDark' : 'bg-status-danger/10 text-status-danger dark:text-status-dangerDark'}`,
                                        children: room.status
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/room/ChatArea.tsx",
                                        lineNumber: 57,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-text-secondary dark:text-text-darkSecondary",
                                children: [
                                    "ID: ",
                                    room.$id
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/ChatArea.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 text-text-secondary dark:text-text-darkSecondary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "hover:text-text-primary dark:hover:text-text-darkPrimary transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icons"].Copy, {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/room/ChatArea.tsx",
                                    lineNumber: 65,
                                    columnNumber: 109
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "hover:text-text-primary dark:hover:text-text-darkPrimary transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icons"].Info, {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/room/ChatArea.tsx",
                                    lineNumber: 66,
                                    columnNumber: 109
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "hover:text-text-primary dark:hover:text-text-darkPrimary transition text-status-danger dark:text-status-dangerDark hover:text-red-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icons"].LogOut, {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/room/ChatArea.tsx",
                                    lineNumber: 67,
                                    columnNumber: 175
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/ChatArea.tsx",
                        lineNumber: 64,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/ChatArea.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 px-8 py-6 space-y-6 overflow-y-auto",
                children: [
                    messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-text-muted dark:text-text-darkMuted text-sm mt-10",
                        children: "No messages yet. Say hello!"
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/ChatArea.tsx",
                        lineNumber: 74,
                        columnNumber: 21
                    }, this),
                    messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageItem, {
                            isMe: currentUser === msg.sender,
                            user: msg.sender,
                            time: new Date(msg.$createdAt).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit'
                            }),
                            text: msg.content || ""
                        }, msg.$id, false, {
                            fileName: "[project]/src/components/room/ChatArea.tsx",
                            lineNumber: 78,
                            columnNumber: 21
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesEndRef
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/ChatArea.tsx",
                        lineNumber: 86,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/ChatArea.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-border-default dark:border-border-darkDefault p-4 bg-surface-base dark:bg-surface-darkElevated shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: inputText,
                            onChange: (e)=>setInputText(e.target.value),
                            onKeyDown: (e)=>e.key === 'Enter' && handleSend(),
                            disabled: room.status !== 'OPEN',
                            placeholder: room.status === 'OPEN' ? "Type your message..." : "Room is closed",
                            className: "flex-1 border border-border-default dark:border-border-darkDefault rounded-xl px-4 py-3 text-sm bg-surface-subtle dark:bg-surface-darkSubtle text-text-primary dark:text-text-darkPrimary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-primaryDark transition placeholder-text-muted dark:placeholder-text-darkMuted"
                        }, void 0, false, {
                            fileName: "[project]/src/components/room/ChatArea.tsx",
                            lineNumber: 92,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSend,
                            disabled: !inputText.trim() || sending || room.status !== 'OPEN',
                            className: `w-12 h-12 rounded-xl flex items-center justify-center text-white transition ${inputText.trim() && !sending ? 'bg-brand-primary hover:bg-brand-secondary dark:bg-brand-primaryDark' : 'bg-border-default dark:bg-surface-darkSubtle cursor-not-allowed'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icons"].Send, {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 105,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/room/ChatArea.tsx",
                            lineNumber: 100,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/room/ChatArea.tsx",
                    lineNumber: 91,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/room/ChatArea.tsx",
                lineNumber: 90,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/room/ChatArea.tsx",
        lineNumber: 51,
        columnNumber: 9
    }, this);
}
function MessageItem({ user, time, text, isMe }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex gap-4 ${isMe ? "flex-row-reverse" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-10 h-10 rounded-full bg-brand-muted dark:bg-brand-mutedDark shrink-0 flex items-center justify-center text-brand-primary dark:text-brand-primaryDark text-xs font-bold",
                children: user.substring(0, 2).toUpperCase()
            }, void 0, false, {
                fileName: "[project]/src/components/room/ChatArea.tsx",
                lineNumber: 126,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-col ${isMe ? "items-end" : "items-start"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-text-primary dark:text-text-darkPrimary",
                        children: [
                            isMe ? "You" : user,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-text-muted dark:text-text-darkMuted ml-1",
                                children: time
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 131,
                                columnNumber: 43
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/ChatArea.tsx",
                        lineNumber: 130,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mt-1 px-4 py-3 text-sm rounded-xl max-w-md break-words ${isMe ? "bg-brand-primary dark:bg-brand-primaryDark text-text-inverse" : "bg-surface-base dark:bg-surface-darkElevated border border-border-default dark:border-border-darkDefault text-text-primary dark:text-text-darkPrimary"}`,
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/ChatArea.tsx",
                        lineNumber: 133,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/ChatArea.tsx",
                lineNumber: 129,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/room/ChatArea.tsx",
        lineNumber: 125,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/room/RoomDetails.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoomDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function RoomDetails({ room, members, currentUserId, onCloseRoom }) {
    if (!room) return null;
    const isCreator = room.creatorId === currentUserId;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-80 bg-surface-base dark:bg-surface-darkElevated border-l border-border-default dark:border-border-darkDefault p-6 overflow-y-auto hidden md:block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-text-primary dark:text-text-darkPrimary",
                        children: "Room Details"
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-text-muted hover:text-text-primary dark:text-text-darkMuted dark:hover:text-text-darkPrimary transition",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icons"].Close, {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/room/RoomDetails.tsx",
                            lineNumber: 25,
                            columnNumber: 146
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/RoomDetails.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-text-secondary dark:text-text-darkSecondary mb-2 font-medium",
                        children: "ACTIONS"
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this),
                    isCreator ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCloseRoom,
                        disabled: room.status === 'CLOSED',
                        className: `w-full border py-3 rounded-xl transition flex items-center justify-center gap-2 ${room.status === 'CLOSED' ? 'border-border-default dark:border-border-darkDefault text-text-muted dark:text-text-darkMuted cursor-not-allowed' : 'border-status-danger/30 text-status-danger dark:text-status-dangerDark hover:bg-status-danger/10'}`,
                        children: room.status === 'CLOSED' ? 'Room Closed' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icons"].Lock, {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/room/RoomDetails.tsx",
                                    lineNumber: 37,
                                    columnNumber: 71
                                }, this),
                                " Close Room"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 32,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full border border-border-default dark:border-border-darkDefault text-text-secondary dark:text-text-darkSecondary py-3 rounded-xl hover:bg-surface-subtle dark:hover:bg-surface-darkSubtle transition",
                        children: "Exit Room"
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 40,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/RoomDetails.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-text-secondary dark:text-text-darkSecondary mb-4 font-medium",
                        children: [
                            "MEMBERS (",
                            members.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this),
                    members.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Member, {
                            name: member.user === currentUserId ? "You" : `User ${member.user.substring(0, 5)}`,
                            online: member.isActive
                        }, member.$id, false, {
                            fileName: "[project]/src/components/room/RoomDetails.tsx",
                            lineNumber: 50,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/RoomDetails.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-text-secondary dark:text-text-darkSecondary font-medium",
                                children: "SHARED MEDIA"
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/RoomDetails.tsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-brand-primary dark:text-brand-primaryDark cursor-pointer hover:underline",
                                children: "View All"
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/RoomDetails.tsx",
                                lineNumber: 62,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-28 rounded-xl bg-surface-subtle dark:bg-surface-darkSubtle flex items-center justify-center text-xs text-text-muted dark:text-text-darkMuted border border-border-default dark:border-border-darkDefault border-dashed",
                            children: "No Media"
                        }, void 0, false, {
                            fileName: "[project]/src/components/room/RoomDetails.tsx",
                            lineNumber: 67,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/RoomDetails.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/room/RoomDetails.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
function Member({ name, online }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 mb-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-9 h-9 rounded-full bg-brand-muted dark:bg-brand-mutedDark flex items-center justify-center text-xs text-brand-primary dark:text-brand-primaryDark font-bold",
                children: name.charAt(0)
            }, void 0, false, {
                fileName: "[project]/src/components/room/RoomDetails.tsx",
                lineNumber: 79,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-text-primary dark:text-text-darkPrimary",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 83,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-xs ${online ? "text-status-success dark:text-status-successDark" : "text-text-muted dark:text-text-darkMuted"}`,
                        children: online ? "active" : "inactive"
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/RoomDetails.tsx",
                lineNumber: 82,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/room/RoomDetails.tsx",
        lineNumber: 78,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/hooks/useRoom.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRoom",
    ()=>useRoom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$room$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/room.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/appwrite.ts [app-ssr] (ecmascript)");
;
;
;
function useRoom(roomId) {
    const [room, setRoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!roomId) return;
        setLoading(true);
        try {
            const doc = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$room$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoomService"].get(roomId);
            setRoom(doc);
        } catch (err) {
            console.error('Fetch room failed:', err);
            setError(err.message || 'Failed to fetch room');
            setRoom(null);
        } finally{
            setLoading(false);
        }
    }, [
        roomId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchRoom();
        const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["client"].subscribe(`databases.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DB_ID"]}.collections.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLLECTIONS"].ROOMS}.documents.${roomId}`, (response)=>{
            // Real-time updates for single room
            if (response.events.includes('databases.*.collections.*.documents.*.update')) {
                setRoom(response.payload);
            } else if (response.events.includes('databases.*.collections.*.documents.*.delete')) {
                setRoom(null); // Deleted
                setError("Room was deleted");
            }
        });
        return ()=>{
            unsubscribe();
        };
    }, [
        fetchRoom,
        roomId
    ]); // Ensure useEffect dependencies are stable
    return {
        room,
        loading,
        error,
        refresh: fetchRoom
    };
}
}),
"[project]/src/services/message.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageService",
    ()=>MessageService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/appwrite.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/appwrite/dist/esm/sdk.js [app-ssr] (ecmascript)");
;
;
;
const MessageService = {
    list (roomId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["databases"].listDocuments(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DB_ID"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLLECTIONS"].MESSAGES, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Query"].equal("room", roomId),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Query"].orderAsc("$createdAt")
        ]);
    },
    send (payload) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["databases"].createDocument(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DB_ID"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLLECTIONS"].MESSAGES, "unique()", {
            ...payload
        });
    }
};
}),
"[project]/src/hooks/useMessages.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMessages",
    ()=>useMessages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$message$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/message.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/appwrite.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSession.ts [app-ssr] (ecmascript)");
;
;
;
;
function useMessages(roomId) {
    const { session, isAuthenticated, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    // ideally we check useRoomMembers to ensure they are active too, but checking session existence is step 1.
    // The UI handles the "isMember" logic before calling sendMessage ideally,
    // or we check it here. Let's trust session + UI for now for speed, but verify via service.
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!roomId) return;
        setLoading(true);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$message$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageService"].list(roomId);
            setMessages(response.documents);
        } catch (err) {
            console.error('Fetch messages failed:', err);
            setError(err.message || 'Failed to fetch messages');
        } finally{
            setLoading(false);
        }
    }, [
        roomId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchMessages();
        const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["client"].subscribe(`databases.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DB_ID"]}.collections.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLLECTIONS"].MESSAGES}.documents`, (response)=>{
            const payload = response.payload;
            if (payload.room !== roomId) return;
            if (response.events.includes('databases.*.collections.*.documents.*.create')) {
                setMessages((prev)=>[
                        ...prev,
                        payload
                    ]);
            }
        // Usually don't update/delete messages in this MVP, but can add later
        });
        return ()=>{
            unsubscribe();
        };
    }, [
        fetchMessages,
        roomId
    ]);
    const sendMessage = async (payload)=>{
        // Rule #4: Active Session required
        if (!isAuthenticated || !session || !user) {
            throw new Error("Active session required to send message");
        }
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$message$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageService"].send(payload);
        } catch (err) {
            console.error('Send message failed:', err);
            throw err;
        }
    };
    return {
        messages,
        loading,
        error,
        sendMessage
    };
}
}),
"[project]/src/hooks/useRoomMembers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRoomMembers",
    ()=>useRoomMembers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$room$2d$member$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/room-member.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/appwrite.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSession.ts [app-ssr] (ecmascript)");
;
;
;
;
function useRoomMembers(roomId) {
    const { session, isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])(); // Source of Truth Rule #3 for Joining
    const [members, setMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchMembers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!roomId) return;
        setLoading(true);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$room$2d$member$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoomMemberService"].list(roomId);
            setMembers(response.documents);
        } catch (err) {
            console.error('Fetch members failed:', err);
            setError(err.message || 'Failed to list members');
        } finally{
            setLoading(false);
        }
    }, [
        roomId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchMembers();
        const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["client"].subscribe(`databases.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DB_ID"]}.collections.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLLECTIONS"].ROOM_MEMBERS}.documents`, (response)=>{
            // Filter for this room
            const payload = response.payload;
            if (payload.room !== roomId) return;
            if (response.events.includes('databases.*.collections.*.documents.*.create')) {
                // Check if active
                if (payload.isActive) setMembers((prev)=>[
                        ...prev,
                        payload
                    ]);
            } else if (response.events.includes('databases.*.collections.*.documents.*.update')) {
                if (payload.isActive) {
                    setMembers((prev)=>{
                        const exists = prev.find((m)=>m.$id === payload.$id);
                        return exists ? prev.map((m)=>m.$id === payload.$id ? payload : m) : [
                            ...prev,
                            payload
                        ];
                    });
                } else {
                    // Removed/Kicked
                    setMembers((prev)=>prev.filter((m)=>m.$id !== payload.$id));
                }
            } else if (response.events.includes('databases.*.collections.*.documents.*.delete')) {
                setMembers((prev)=>prev.filter((m)=>m.$id !== payload.$id));
            }
        });
        return ()=>{
            unsubscribe();
        };
    }, [
        fetchMembers,
        roomId
    ]);
    const addMember = async (payload)=>{
        // Enforce active session for joining
        if (!isAuthenticated || !session) {
            throw new Error("Active session required to join room");
        }
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$room$2d$member$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoomMemberService"].add(payload);
        } catch (err) {
            console.error('Add member failed:', err);
            throw err;
        }
    };
    // Additional Logic: Creator Actions
    // Kick Member
    const kickMember = async (memberId)=>{
        // Should verify isCreator here or in UI? 
        // Service handles DB call, but we can check local permission first for Fail Fast.
        // For now, let service/Appwrite security rules handle deep permission, but we assume UI hides button.
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$room$2d$member$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoomMemberService"].kick(memberId);
        } catch (err) {
            throw err;
        }
    };
    return {
        members,
        loading,
        error,
        addMember,
        kickMember
    };
}
}),
"[project]/src/app/(rooms)/room/[roomId]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoomPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$room$2f$ChatArea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/room/ChatArea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$room$2f$RoomDetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/room/RoomDetails.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRoom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useRoom.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMessages.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRoomMembers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useRoomMembers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSession.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$room$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/room.service.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
function RoomPage({ params }) {
    const { roomId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(params);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Hooks
    const { session, user, loading: sessionLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const { room, loading: roomLoading, refresh: refreshRoom } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRoom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRoom"])(roomId);
    const { messages, loading: messagesLoading, sendMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMessages"])(roomId);
    const { members, loading: membersLoading, addMember } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRoomMembers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRoomMembers"])(roomId);
    // Auth Protection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!sessionLoading && !session) {
            router.push('/session');
        }
    }, [
        session,
        sessionLoading,
        router
    ]);
    // Join Room logic (simplified)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (session && user && room && !membersLoading) {
            const isMember = members.some((m)=>m.user === user.userId && m.isActive);
            if (!isMember) {
                // Initial Join Logic
                addMember({
                    room: room.$id,
                    user: user.userId,
                    role: room.creatorId === user.userId ? 'CREATOR' : 'MEMBER'
                }).catch(console.error);
            }
        }
    }, [
        session,
        user,
        room,
        members,
        membersLoading,
        addMember
    ]);
    const handleSendMessage = async (content, type)=>{
        if (!user || !room) return;
        const payload = {
            room: room.$id,
            sender: user.userId,
            type,
            content
        };
        await sendMessage(payload);
    };
    const handleCloseRoom = async ()=>{
        if (!room) return;
        if (confirm("Are you sure you want to close this room? It will be read-only.")) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$room$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoomService"].close(room.$id);
                refreshRoom();
            } catch (e) {
                console.error(e);
                alert("Failed to close room");
            }
        }
    };
    if (sessionLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen w-full flex items-center justify-center bg-surface-base dark:bg-surface-darkBase text-text-muted dark:text-text-darkMuted",
            children: "Loading session..."
        }, void 0, false, {
            fileName: "[project]/src/app/(rooms)/room/[roomId]/page.tsx",
            lineNumber: 72,
            columnNumber: 16
        }, this);
    }
    if (!session) {
        return null; // Will redirect
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$room$2f$ChatArea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                room: room,
                messages: messages,
                currentUser: user?.userId || null,
                loading: roomLoading || messagesLoading || sessionLoading,
                onSendMessage: handleSendMessage
            }, void 0, false, {
                fileName: "[project]/src/app/(rooms)/room/[roomId]/page.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$room$2f$RoomDetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                room: room,
                members: members,
                currentUserId: user?.userId || null,
                onCloseRoom: handleCloseRoom
            }, void 0, false, {
                fileName: "[project]/src/app/(rooms)/room/[roomId]/page.tsx",
                lineNumber: 88,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=src_06a359ef._.js.map