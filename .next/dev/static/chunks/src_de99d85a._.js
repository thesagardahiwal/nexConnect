(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/room/ChatArea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ChatArea({ room, messages, loading, currentUser, onSendMessage, onToggleDetails, detailsOpen }) {
    _s();
    const [inputText, setInputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatArea.useEffect": ()=>{
            scrollToBottom();
        }
    }["ChatArea.useEffect"], [
        messages
    ]);
    const handleSend = async ()=>{
        console.log("handleSend: Initiated");
        if (!inputText.trim() || !room || !currentUser) {
            console.log("handleSend: Validation failed - missing content, room, or user");
            return;
        }
        setSending(true);
        try {
            const payload = {
                room: room.$id,
                sender: currentUser,
                type: "TEXT",
                content: inputText
            }; // Type assertion if strictly typed in interface but handled by backend
            await onSendMessage(payload);
            setInputText("");
            // setSelectedFile(null);
            if (fileInputRef.current) fileInputRef.current.value = "";
        } catch (error) {
            console.error("handleSend: Error occurred", error);
        } finally{
            setSending(false);
            console.log("handleSend: Set sending state to false");
        }
    };
    // const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files && e.target.files[0]) {
    //         setSelectedFile(e.target.files[0]);
    //     }
    // };
    if (loading && messages.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center justify-center bg-surface-subtle dark:bg-surface-darkBase text-text-muted dark:text-text-darkMuted gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Loader, {
                    className: "w-8 h-8 animate-spin text-brand-primary dark:text-brand-primaryDark"
                }, void 0, false, {
                    fileName: "[project]/src/components/room/ChatArea.tsx",
                    lineNumber: 72,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-medium",
                    children: "Loading chat..."
                }, void 0, false, {
                    fileName: "[project]/src/components/room/ChatArea.tsx",
                    lineNumber: 73,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/room/ChatArea.tsx",
            lineNumber: 71,
            columnNumber: 13
        }, this);
    }
    if (!room) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex items-center justify-center bg-surface-subtle dark:bg-surface-darkBase text-text-muted dark:text-text-darkMuted",
            children: "Select a room"
        }, void 0, false, {
            fileName: "[project]/src/components/room/ChatArea.tsx",
            lineNumber: 79,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex-1 flex flex-col bg-surface-subtle dark:bg-surface-darkBase relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-16 bg-surface-base dark:bg-surface-darkElevated border-b border-border-default dark:border-border-darkDefault px-4 sm:px-6 flex items-center justify-between shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/rooms",
                                className: "md:hidden text-text-secondary dark:text-text-darkSecondary hover:text-text-primary dark:hover:text-text-darkPrimary transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].ChevronLeft, {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/room/ChatArea.tsx",
                                    lineNumber: 88,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 87,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-text-primary dark:text-text-darkPrimary flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Hash, {
                                                className: "w-4 h-4 text-brand-primary dark:text-brand-primaryDark"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                                lineNumber: 92,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate max-w-[150px] sm:max-w-xs",
                                                children: room.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                                lineNumber: 93,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${room.status === 'OPEN' ? 'bg-status-success/10 text-status-success dark:text-status-successDark' : 'bg-status-danger/10 text-status-danger dark:text-status-dangerDark'}`,
                                                children: room.status
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                                lineNumber: 94,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/room/ChatArea.tsx",
                                        lineNumber: 91,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-text-secondary dark:text-text-darkSecondary hidden sm:block",
                                        children: [
                                            "ID: ",
                                            room.$id
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/room/ChatArea.tsx",
                                        lineNumber: 98,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 90,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/ChatArea.tsx",
                        lineNumber: 86,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 text-text-secondary dark:text-text-darkSecondary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "hover:text-text-primary dark:hover:text-text-darkPrimary transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Copy, {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/room/ChatArea.tsx",
                                    lineNumber: 103,
                                    columnNumber: 109
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 103,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onToggleDetails,
                                className: `transition ${detailsOpen ? 'text-brand-primary dark:text-brand-primaryDark' : 'hover:text-text-primary dark:hover:text-text-darkPrimary'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Info, {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/room/ChatArea.tsx",
                                    lineNumber: 108,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 104,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "dark:hover:text-text-darkPrimary transition text-status-danger dark:text-status-dangerDark hover:text-red-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].LogOut, {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/room/ChatArea.tsx",
                                    lineNumber: 110,
                                    columnNumber: 151
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 110,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/ChatArea.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/ChatArea.tsx",
                lineNumber: 85,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 px-8 py-6 space-y-6 overflow-y-auto",
                children: [
                    messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-text-muted dark:text-text-darkMuted text-sm mt-10",
                        children: "No messages yet. Say hello!"
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/ChatArea.tsx",
                        lineNumber: 117,
                        columnNumber: 21
                    }, this),
                    messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageItem, {
                            isMe: currentUser === msg.sender.$id,
                            user: msg.sender.username || 'Unknown',
                            time: new Date(msg.$createdAt).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit'
                            }),
                            message: msg
                        }, msg.$id, false, {
                            fileName: "[project]/src/components/room/ChatArea.tsx",
                            lineNumber: 121,
                            columnNumber: 21
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesEndRef
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/ChatArea.tsx",
                        lineNumber: 129,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/ChatArea.tsx",
                lineNumber: 115,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-border-default dark:border-border-darkDefault p-4 bg-surface-base dark:bg-surface-darkElevated shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: inputText,
                            onChange: (e)=>setInputText(e.target.value),
                            onKeyDown: (e)=>e.key === 'Enter' && handleSend(),
                            disabled: room.status !== 'OPEN',
                            placeholder: room.status === 'OPEN' ? "Type your message..." : "Room is closed",
                            className: "flex-1 border border-border-default dark:border-border-darkDefault rounded-xl px-4 py-3 text-sm bg-surface-subtle dark:bg-surface-darkSubtle text-text-primary dark:text-text-darkPrimary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-primaryDark transition placeholder-text-muted dark:placeholder-text-darkMuted"
                        }, void 0, false, {
                            fileName: "[project]/src/components/room/ChatArea.tsx",
                            lineNumber: 157,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSend,
                            disabled: !inputText.trim() || sending || room.status !== 'OPEN',
                            className: `w-12 h-12 rounded-xl flex items-center justify-center text-white transition ${inputText.trim() && !sending ? 'bg-brand-primary hover:bg-brand-secondary dark:bg-brand-primaryDark' : 'bg-border-default dark:bg-surface-darkSubtle cursor-not-allowed'}`,
                            children: sending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Loader, {
                                className: "w-5 h-5 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 170,
                                columnNumber: 36
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Send, {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 170,
                                columnNumber: 88
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/room/ChatArea.tsx",
                            lineNumber: 165,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/room/ChatArea.tsx",
                    lineNumber: 143,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/room/ChatArea.tsx",
                lineNumber: 133,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/room/ChatArea.tsx",
        lineNumber: 83,
        columnNumber: 9
    }, this);
}
_s(ChatArea, "Yt1obMEIqMYRTzdae9P5PL+etxU=");
_c = ChatArea;
function MessageItem({ user, time, message, isMe }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex gap-4 ${isMe ? "flex-row-reverse" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-10 h-10 rounded-full bg-brand-muted dark:bg-brand-mutedDark shrink-0 flex items-center justify-center text-brand-primary dark:text-brand-primaryDark text-xs font-bold",
                children: user.substring(0, 2).toUpperCase()
            }, void 0, false, {
                fileName: "[project]/src/components/room/ChatArea.tsx",
                lineNumber: 191,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-col ${isMe ? "items-end" : "items-start"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-text-primary dark:text-text-darkPrimary",
                        children: [
                            isMe ? "You" : user,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-text-muted dark:text-text-darkMuted ml-1",
                                children: time
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 196,
                                columnNumber: 43
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/ChatArea.tsx",
                        lineNumber: 195,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mt-1 rounded-xl max-w-md break-words overflow-hidden ${isMe ? "bg-brand-primary dark:bg-brand-primaryDark text-text-inverse" : "bg-surface-base dark:bg-surface-darkElevated border border-border-default dark:border-border-darkDefault text-text-primary dark:text-text-darkPrimary"}`,
                        children: message.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-3 text-sm",
                            children: message.content
                        }, void 0, false, {
                            fileName: "[project]/src/components/room/ChatArea.tsx",
                            lineNumber: 201,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/ChatArea.tsx",
                        lineNumber: 198,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/ChatArea.tsx",
                lineNumber: 194,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/room/ChatArea.tsx",
        lineNumber: 190,
        columnNumber: 9
    }, this);
}
_c1 = MessageItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChatArea");
__turbopack_context__.k.register(_c1, "MessageItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/room/MembersModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MembersModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function MembersModal({ isOpen, onClose, members, currentUserId }) {
    _s();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    if (!isOpen) return null;
    const filteredMembers = members.filter((m)=>m.user.username.toLowerCase().includes(search.toLowerCase()) || m.user.$id === currentUserId && "you".includes(search.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md bg-surface-base dark:bg-surface-darkElevated rounded-2xl shadow-xl flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-b border-border-default dark:border-border-darkDefault flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-lg text-text-primary dark:text-text-darkPrimary",
                            children: "Members"
                        }, void 0, false, {
                            fileName: "[project]/src/components/room/MembersModal.tsx",
                            lineNumber: 27,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-text-muted hover:text-text-primary dark:text-text-darkMuted dark:hover:text-text-darkPrimary transition",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Close, {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/MembersModal.tsx",
                                lineNumber: 29,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/room/MembersModal.tsx",
                            lineNumber: 28,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/room/MembersModal.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-b border-border-default dark:border-border-darkDefault",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Search, {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted dark:text-text-darkMuted"
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/MembersModal.tsx",
                                lineNumber: 36,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: search,
                                onChange: (e)=>setSearch(e.target.value),
                                placeholder: "Search members...",
                                className: "w-full bg-surface-subtle dark:bg-surface-darkSubtle border border-border-default dark:border-border-darkDefault rounded-xl pl-9 pr-4 py-2 text-sm text-text-primary dark:text-text-darkPrimary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-primaryDark transition"
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/MembersModal.tsx",
                                lineNumber: 37,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/MembersModal.tsx",
                        lineNumber: 35,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/room/MembersModal.tsx",
                    lineNumber: 34,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-4 space-y-4",
                    children: filteredMembers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-text-muted dark:text-text-darkMuted py-4",
                        children: "No filteredMembers found"
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/MembersModal.tsx",
                        lineNumber: 49,
                        columnNumber: 25
                    }, this) : filteredMembers.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-full bg-brand-muted dark:bg-brand-mutedDark flex items-center justify-center text-sm font-bold text-brand-primary dark:text-brand-primaryDark",
                                            children: member.user.username?.charAt(0).toUpperCase() || member.user.$id.charAt(0).toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/room/MembersModal.tsx",
                                            lineNumber: 54,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-text-primary dark:text-text-darkPrimary flex items-center gap-2",
                                                    children: [
                                                        member.user.$id === currentUserId ? "You" : member.user.username || "Unknown User",
                                                        member.user.$id === currentUserId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] bg-brand-primary/10 text-brand-primary dark:text-brand-primaryDark px-1.5 py-0.5 rounded",
                                                            children: "ME"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/room/MembersModal.tsx",
                                                            lineNumber: 60,
                                                            columnNumber: 83
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/room/MembersModal.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-xs ${member.isActive ? "text-status-success dark:text-status-successDark" : "text-text-muted dark:text-text-darkMuted"}`,
                                                    children: member.isActive ? "Online" : "Offline"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/room/MembersModal.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/room/MembersModal.tsx",
                                            lineNumber: 57,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/room/MembersModal.tsx",
                                    lineNumber: 53,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "opacity-0 group-hover:opacity-100 transition flex gap-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/room/MembersModal.tsx",
                                    lineNumber: 67,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, member.$id, true, {
                            fileName: "[project]/src/components/room/MembersModal.tsx",
                            lineNumber: 52,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/room/MembersModal.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/room/MembersModal.tsx",
            lineNumber: 24,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/room/MembersModal.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
_s(MembersModal, "42GASUL8pX2/N6Oh5HTh0GvQEF0=");
_c = MembersModal;
var _c;
__turbopack_context__.k.register(_c, "MembersModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/room/MediaModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MediaModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/storage.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
;
function MediaModal({ isOpen, onClose, mediaMessages }) {
    if (!isOpen) return null;
    const renderMediaPreview = (m)=>{
        console.log('Media', m);
        if (m.fileType === 'IMAGE') {
            console.log('Image', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageService"].getFileView(m.fileId));
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageService"].getFileView(m.fileId),
                alt: m.fileName || 'Media',
                height: 300,
                width: 300,
                className: "w-full h-full object-cover transition group-hover:scale-105"
            }, void 0, false, {
                fileName: "[project]/src/components/room/MediaModal.tsx",
                lineNumber: 20,
                columnNumber: 17
            }, this);
        }
        let Icon = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Paperclip;
        if (m.fileType === 'VIDEO') Icon = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Video;
        if (m.fileType === 'PDF') Icon = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].File;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full flex flex-col items-center justify-center p-4 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "w-8 h-8 text-brand-primary dark:text-brand-primaryDark mb-2"
                }, void 0, false, {
                    fileName: "[project]/src/components/room/MediaModal.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-text-secondary dark:text-text-darkSecondary truncate w-full",
                    children: m.fileName
                }, void 0, false, {
                    fileName: "[project]/src/components/room/MediaModal.tsx",
                    lineNumber: 37,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/room/MediaModal.tsx",
            lineNumber: 35,
            columnNumber: 13
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-2xl bg-surface-base dark:bg-surface-darkElevated rounded-2xl shadow-xl flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-b border-border-default dark:border-border-darkDefault flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-lg text-text-primary dark:text-text-darkPrimary",
                            children: "Shared Media"
                        }, void 0, false, {
                            fileName: "[project]/src/components/room/MediaModal.tsx",
                            lineNumber: 47,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-text-muted hover:text-text-primary dark:text-text-darkMuted dark:hover:text-text-darkPrimary transition",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Close, {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/MediaModal.tsx",
                                lineNumber: 49,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/room/MediaModal.tsx",
                            lineNumber: 48,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/room/MediaModal.tsx",
                    lineNumber: 46,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-4",
                    children: mediaMessages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full flex flex-col items-center justify-center text-text-muted dark:text-text-darkMuted",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Paperclip, {
                                className: "w-12 h-12 mb-2 opacity-50"
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/MediaModal.tsx",
                                lineNumber: 57,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "No media shared yet"
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/MediaModal.tsx",
                                lineNumber: 58,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/MediaModal.tsx",
                        lineNumber: 56,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4",
                        children: mediaMessages.map((m)=>{
                            if (!m.fileId) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageService"].getFileView(m.fileId).toString(),
                                target: "_blank",
                                rel: "noreferrer",
                                className: "group relative aspect-square bg-surface-subtle dark:bg-surface-darkSubtle rounded-xl overflow-hidden border border-border-default dark:border-border-darkDefault hover:ring-2 hover:ring-brand-primary dark:hover:ring-brand-primaryDark transition",
                                children: [
                                    renderMediaPreview(m),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].ChevronRight, {
                                            className: "w-6 h-6 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/room/MediaModal.tsx",
                                            lineNumber: 75,
                                            columnNumber: 45
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/room/MediaModal.tsx",
                                        lineNumber: 74,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, m.$id, true, {
                                fileName: "[project]/src/components/room/MediaModal.tsx",
                                lineNumber: 66,
                                columnNumber: 37
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/MediaModal.tsx",
                        lineNumber: 61,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/room/MediaModal.tsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/room/MediaModal.tsx",
            lineNumber: 44,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/room/MediaModal.tsx",
        lineNumber: 43,
        columnNumber: 9
    }, this);
}
_c = MediaModal;
var _c;
__turbopack_context__.k.register(_c, "MediaModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useMedia.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMedia",
    ()=>useMedia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$mediaSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/mediaSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/appwrite.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useMedia(roomId) {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { media, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "useMedia.useAppSelector": (state)=>state.media
    }["useMedia.useAppSelector"]);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMedia.useCallback[refresh]": ()=>{
            if (roomId) dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$mediaSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMedia"])(roomId));
        }
    }["useMedia.useCallback[refresh]"], [
        dispatch,
        roomId
    ]);
    // Initial Fetch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMedia.useEffect": ()=>{
            refresh();
        }
    }["useMedia.useEffect"], [
        refresh
    ]);
    // Real-time Susbcription
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMedia.useEffect": ()=>{
            if (!roomId) return;
            const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].subscribe(`databases.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_ID"]}.collections.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].MEDIA}.documents`, {
                "useMedia.useEffect.unsubscribe": (response)=>{
                    const event = response.events[0];
                    const payload = response.payload;
                    if (payload.room !== roomId) return;
                    if (event.includes(".create")) {
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$mediaSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMedia"])(payload));
                    } else if (event.includes(".delete")) {
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$mediaSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeMedia"])(payload.$id));
                    }
                }
            }["useMedia.useEffect.unsubscribe"]);
            return ({
                "useMedia.useEffect": ()=>{
                    unsubscribe();
                }
            })["useMedia.useEffect"];
        }
    }["useMedia.useEffect"], [
        roomId,
        dispatch
    ]);
    const handleUpload = async (file, uploaderId)=>{
        await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$mediaSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadMedia"])({
            file,
            roomId,
            uploaderId
        })).unwrap();
    };
    return {
        media,
        loading,
        error,
        refresh,
        uploadMedia: handleUpload
    };
}
_s(useMedia, "V7mrkh1acXxv4fdsVZR8Pi42CJs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/room/RoomDetails.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoomDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/storage.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$room$2f$MembersModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/room/MembersModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$room$2f$MediaModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/room/MediaModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMedia.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function RoomDetails({ room, members, currentUserId, onCloseRoomAction, onToggleUI, onSendMessage, onKickMember, onExitRoomAction }) {
    _s();
    const [activeModal, setActiveModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { media, loading, uploadMedia, error, refresh } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMedia"])(room?.$id || '');
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (!room) return null;
    const isCreator = room.creator.$id === currentUserId;
    console.log("isCreator", isCreator);
    // Filter media items
    const mediaItems = media.filter((m)=>[
            'IMAGE',
            'PDF',
            'VIDEO'
        ].includes(m.fileType));
    const handleFileUpload = async (e)=>{
        const file = e.target.files?.[0];
        if (!file || !onSendMessage || !room || !currentUserId) return;
        setIsUploading(true);
        try {
            console.log("Uploading file:", file);
            await uploadMedia(file, currentUserId);
        } catch (error) {
            console.error("Failed to upload file:", error);
            alert("Failed to upload file");
        } finally{
            setIsUploading(false);
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    };
    const renderMediaPreview = (m)=>{
        if (m.fileType === 'IMAGE') {
            return(// eslint-disable-next-line @next/next/no-img-element
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageService"].getFileView(m.fileId).toString(),
                alt: m.fileName || 'Image',
                height: 150,
                width: 150,
                className: "w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/src/components/room/RoomDetails.tsx",
                lineNumber: 56,
                columnNumber: 17
            }, this));
        }
        let Icon = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Paperclip;
        if (m.fileType === 'VIDEO') Icon = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Video;
        if (m.fileType === 'PDF') Icon = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].File;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full flex flex-col items-center justify-center p-2 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "w-6 h-6 text-brand-primary dark:text-brand-primaryDark mb-1"
                }, void 0, false, {
                    fileName: "[project]/src/components/room/RoomDetails.tsx",
                    lineNumber: 72,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] text-text-secondary dark:text-text-darkSecondary truncate w-full",
                    children: m.fileName
                }, void 0, false, {
                    fileName: "[project]/src/components/room/RoomDetails.tsx",
                    lineNumber: 73,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/room/RoomDetails.tsx",
            lineNumber: 71,
            columnNumber: 13
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 z-40 md:hidden",
                onClick: onToggleUI
            }, void 0, false, {
                fileName: "[project]/src/components/room/RoomDetails.tsx",
                lineNumber: 82,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "fixed inset-y-0 right-0 z-50 w-full sm:w-80 bg-surface-base dark:bg-surface-darkElevated border-l border-border-default dark:border-border-darkDefault p-6 overflow-y-auto md:static md:block h-full animate-in slide-in-from-right-10 md:animate-none shadow-2xl md:shadow-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-text-primary dark:text-text-darkPrimary",
                                children: "Room Details"
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/RoomDetails.tsx",
                                lineNumber: 87,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onToggleUI,
                                className: "text-text-muted hover:text-text-primary dark:text-text-darkMuted dark:hover:text-text-darkPrimary transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Close, {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/room/RoomDetails.tsx",
                                    lineNumber: 88,
                                    columnNumber: 171
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/RoomDetails.tsx",
                                lineNumber: 88,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 86,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-text-secondary dark:text-text-darkSecondary mb-2 font-medium",
                                children: "ACTIONS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/RoomDetails.tsx",
                                lineNumber: 93,
                                columnNumber: 21
                            }, this),
                            isCreator ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onCloseRoomAction,
                                disabled: room.status === 'CLOSED',
                                className: `w-full border py-3 rounded-xl transition flex items-center justify-center gap-2 ${room.status === 'CLOSED' ? 'border-border-default dark:border-border-darkDefault text-text-muted dark:text-text-darkMuted cursor-not-allowed' : 'border-status-danger/30 text-status-danger dark:text-status-dangerDark hover:bg-status-danger/10'}`,
                                children: room.status === 'CLOSED' ? 'Room Closed' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Lock, {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/room/RoomDetails.tsx",
                                            lineNumber: 100,
                                            columnNumber: 75
                                        }, this),
                                        " Close Room"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/RoomDetails.tsx",
                                lineNumber: 95,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onExitRoomAction,
                                className: "w-full border border-border-default dark:border-border-darkDefault text-text-secondary dark:text-text-darkSecondary py-3 rounded-xl hover:bg-surface-subtle dark:hover:bg-surface-darkSubtle transition flex items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].LogOut, {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                                        lineNumber: 104,
                                        columnNumber: 29
                                    }, this),
                                    " Exit Room"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/room/RoomDetails.tsx",
                                lineNumber: 103,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 92,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-text-secondary dark:text-text-darkSecondary font-medium",
                                        children: [
                                            "MEMBERS (",
                                            members.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                                        lineNumber: 112,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveModal('members'),
                                        className: "text-xs text-brand-primary dark:text-brand-primaryDark cursor-pointer hover:underline",
                                        children: "View All"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                                        lineNumber: 113,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/room/RoomDetails.tsx",
                                lineNumber: 111,
                                columnNumber: 21
                            }, this),
                            members.slice(0, 5).map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Member, {
                                    name: member.user.$id === currentUserId ? "You" : member.user.username || `User ${member.user.$id.substring(0, 4)}`,
                                    online: member.isActive,
                                    canKick: isCreator && !room.isPublic && member.user.$id !== currentUserId,
                                    onKick: ()=>onKickMember?.(member.$id)
                                }, member.$id, false, {
                                    fileName: "[project]/src/components/room/RoomDetails.tsx",
                                    lineNumber: 116,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 110,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between mb-3 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-text-secondary dark:text-text-darkSecondary font-medium",
                                        children: "SHARED MEDIA"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                                        lineNumber: 129,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            onSendMessage && room.status === 'OPEN' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        ref: fileInputRef,
                                                        className: "hidden",
                                                        onChange: handleFileUpload,
                                                        disabled: isUploading
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>fileInputRef.current?.click(),
                                                        disabled: isUploading,
                                                        className: "text-xs flex items-center gap-1 text-brand-primary dark:text-brand-primaryDark hover:underline disabled:opacity-50",
                                                        children: [
                                                            isUploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Loader, {
                                                                className: "w-3 h-3 animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/room/RoomDetails.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 56
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Plus, {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/room/RoomDetails.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 108
                                                            }, this),
                                                            "Upload"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveModal('media'),
                                                className: "text-xs text-brand-primary dark:text-brand-primaryDark cursor-pointer hover:underline",
                                                children: "View All"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/room/RoomDetails.tsx",
                                                lineNumber: 150,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                                        lineNumber: 130,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/room/RoomDetails.tsx",
                                lineNumber: 128,
                                columnNumber: 21
                            }, this),
                            loading && mediaItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-28 rounded-xl bg-surface-subtle dark:bg-surface-darkSubtle flex items-center justify-center border border-border-default dark:border-border-darkDefault border-dashed",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Loader, {
                                    className: "w-5 h-5 text-brand-primary dark:text-brand-primaryDark animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/room/RoomDetails.tsx",
                                    lineNumber: 156,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/RoomDetails.tsx",
                                lineNumber: 155,
                                columnNumber: 25
                            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-28 rounded-xl bg-surface-subtle dark:bg-surface-darkSubtle flex flex-col items-center justify-center text-xs text-status-danger dark:text-status-dangerDark border border-border-default dark:border-border-darkDefault border-dashed p-4 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2",
                                        children: "Failed to load media"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                                        lineNumber: 160,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: refresh,
                                        className: "text-brand-primary dark:text-brand-primaryDark hover:underline font-medium",
                                        children: "Retry"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                                        lineNumber: 161,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/room/RoomDetails.tsx",
                                lineNumber: 159,
                                columnNumber: 25
                            }, this) : mediaItems.length === 0 && !isUploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-28 rounded-xl bg-surface-subtle dark:bg-surface-darkSubtle flex items-center justify-center text-xs text-text-muted dark:text-text-darkMuted border border-border-default dark:border-border-darkDefault border-dashed",
                                children: "No Media"
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/RoomDetails.tsx",
                                lineNumber: 169,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                    isUploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-square rounded-xl bg-surface-subtle dark:bg-surface-darkSubtle border border-border-default dark:border-border-darkDefault flex flex-col items-center justify-center gap-2 animate-pulse",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Loader, {
                                                className: "w-5 h-5 text-brand-primary dark:text-brand-primaryDark animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/room/RoomDetails.tsx",
                                                lineNumber: 176,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-text-secondary dark:text-text-darkSecondary font-medium",
                                                children: "Uploading..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/room/RoomDetails.tsx",
                                                lineNumber: 177,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                                        lineNumber: 175,
                                        columnNumber: 33
                                    }, this),
                                    mediaItems.slice(0, 6).map((m)=>{
                                        if (!m.fileId) return null;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageService"].getFileView(m.fileId).toString(),
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "block aspect-square rounded-xl overflow-hidden bg-surface-subtle dark:bg-surface-darkSubtle border border-border-default dark:border-border-darkDefault hover:opacity-90 transition relative group",
                                            children: renderMediaPreview(m)
                                        }, m.$id, false, {
                                            fileName: "[project]/src/components/room/RoomDetails.tsx",
                                            lineNumber: 184,
                                            columnNumber: 37
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/room/RoomDetails.tsx",
                                lineNumber: 173,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 127,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/RoomDetails.tsx",
                lineNumber: 84,
                columnNumber: 13
            }, this),
            activeModal === 'members' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$room$2f$MembersModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: true,
                onClose: ()=>setActiveModal(null),
                members: members,
                currentUserId: currentUserId
            }, void 0, false, {
                fileName: "[project]/src/components/room/RoomDetails.tsx",
                lineNumber: 202,
                columnNumber: 17
            }, this),
            activeModal === 'media' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$room$2f$MediaModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: true,
                onClose: ()=>setActiveModal(null),
                mediaMessages: mediaItems
            }, void 0, false, {
                fileName: "[project]/src/components/room/RoomDetails.tsx",
                lineNumber: 210,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true);
}
_s(RoomDetails, "6bnlArjtG6adVNMkOfmqsTLWzVU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMedia$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMedia"]
    ];
});
_c = RoomDetails;
function Member({ name, online, canKick, onKick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 mb-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-9 h-9 rounded-full bg-brand-muted dark:bg-brand-mutedDark flex items-center justify-center text-xs text-brand-primary dark:text-brand-primaryDark font-bold",
                children: name.charAt(0)
            }, void 0, false, {
                fileName: "[project]/src/components/room/RoomDetails.tsx",
                lineNumber: 223,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-text-primary dark:text-text-darkPrimary",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 227,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-xs ${online ? "text-status-success dark:text-status-successDark" : "text-text-muted dark:text-text-darkMuted"}`,
                        children: online ? "active" : "inactive"
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 228,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/RoomDetails.tsx",
                lineNumber: 226,
                columnNumber: 13
            }, this),
            canKick && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onKick,
                className: "ml-auto text-xs text-status-danger dark:text-status-dangerDark hover:underline",
                title: "Remove from room",
                children: "Kick"
            }, void 0, false, {
                fileName: "[project]/src/components/room/RoomDetails.tsx",
                lineNumber: 233,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/room/RoomDetails.tsx",
        lineNumber: 222,
        columnNumber: 9
    }, this);
}
_c1 = Member;
var _c, _c1;
__turbopack_context__.k.register(_c, "RoomDetails");
__turbopack_context__.k.register(_c1, "Member");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useRoom.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRoom",
    ()=>useRoom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/appwrite.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$roomSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/roomSlice.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useRoom(roomId) {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { currentRoom: room, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "useRoom.useAppSelector": (state)=>state.rooms
    }["useRoom.useAppSelector"]);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRoom.useCallback[refresh]": ()=>{
            if (roomId) dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$roomSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enterRoom"])(roomId));
        }
    }["useRoom.useCallback[refresh]"], [
        dispatch,
        roomId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRoom.useEffect": ()=>{
            // Only fetch if we don't have it or have the wrong one
            if (!room || room.$id !== roomId) {
                refresh();
            }
            const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].subscribe(`databases.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_ID"]}.collections.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].ROOMS}.documents.${roomId}`, {
                "useRoom.useEffect.unsubscribe": (response)=>{
                    if (response.events.includes('databases.*.collections.*.documents.*.update')) {
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$roomSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateRoom"])(response.payload));
                    } else if (response.events.includes('databases.*.collections.*.documents.*.delete')) {
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$roomSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteRoom"])(response.payload));
                    }
                }
            }["useRoom.useEffect.unsubscribe"]);
            return ({
                "useRoom.useEffect": ()=>{
                    unsubscribe();
                }
            })["useRoom.useEffect"];
        }
    }["useRoom.useEffect"], [
        dispatch,
        refresh,
        roomId,
        room
    ]);
    return {
        room,
        loading,
        error,
        refresh
    };
}
_s(useRoom, "Z8ZjbsoNXYgQhpn/sZLwY91bteY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useRoomMembers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRoomMembers",
    ()=>useRoomMembers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/appwrite.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSession.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$roomSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/roomSlice.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function useRoomMembers(roomId) {
    _s();
    const { isAuthenticated, session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { members, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "useRoomMembers.useAppSelector": (state)=>state.rooms
    }["useRoomMembers.useAppSelector"]);
    const fetchMembers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRoomMembers.useCallback[fetchMembers]": ()=>{
            if (roomId) dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$roomSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enterRoom"])(roomId));
        }
    }["useRoomMembers.useCallback[fetchMembers]"], [
        dispatch,
        roomId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRoomMembers.useEffect": ()=>{
            // Fetch if needed or just rely on parent. 
            // We'll call it to ensure data consistency if this hook is mounted.
            fetchMembers();
            const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].subscribe(`databases.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_ID"]}.collections.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].ROOM_MEMBERS}.documents`, {
                "useRoomMembers.useEffect.unsubscribe": async (response)=>{
                    const payload = response.payload;
                    // Check if this event belongs to current room
                    // payload.room might be object or string depending on expansion
                    const payloadRoomId = typeof payload.room === 'object' ? payload.room.$id : payload.room;
                    if (payloadRoomId !== roomId) return;
                    if (response.events.includes('databases.*.collections.*.documents.*.create')) {
                        // Fetch full member details to get expanded user
                        try {
                            const fullMember = await RoomMemberService.get(payload.$id); // Assuming get method exists or use list with ID
                            if (fullMember && fullMember.isActive) dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$roomSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMember"])(fullMember));
                        } catch (e) {
                            console.error("Failed to fetch new member details", e);
                        }
                    } else if (response.events.includes('databases.*.collections.*.documents.*.update')) {
                        if (payload.isActive) {
                            try {
                                // Fetch full member to ensure we have user details if they were missing or updated
                                const fullMember = await RoomMemberService.get(payload.$id);
                                if (fullMember) dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$roomSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMember"])(fullMember));
                            } catch (e) {
                                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$roomSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMember"])(payload)); // Fallback
                            }
                        } else {
                            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$roomSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeMember"])(payload));
                        }
                    } else if (response.events.includes('databases.*.collections.*.documents.*.delete')) {
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$roomSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeMember"])(payload));
                    }
                }
            }["useRoomMembers.useEffect.unsubscribe"]);
            return ({
                "useRoomMembers.useEffect": ()=>{
                    unsubscribe();
                }
            })["useRoomMembers.useEffect"];
        }
    }["useRoomMembers.useEffect"], [
        dispatch,
        fetchMembers,
        roomId
    ]);
    const addMember = async (payload)=>{
        if (!isAuthenticated || !session) throw new Error("Active session required");
        await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$roomSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinRoom"])(payload)).unwrap();
    };
    const kickMember = async (memberId)=>{
        await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$roomSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leaveRoom"])(memberId)).unwrap();
    };
    return {
        members,
        loading,
        error,
        addMember,
        kickMember
    };
}
_s(useRoomMembers, "ljFJj2f76E/UrGYqSMdZZQCeepM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useMessages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMessages",
    ()=>useMessages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/appwrite.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSession.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$message$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/message.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$messageSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/messageSlice.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function useMessages(roomId) {
    _s();
    const { isAuthenticated, session, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { messages, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "useMessages.useAppSelector": (state)=>state.messages
    }["useMessages.useAppSelector"]);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMessages.useCallback[refresh]": ()=>{
            if (roomId) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$messageSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMessages"])(roomId));
            } else {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$messageSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearMessages"])());
            }
        }
    }["useMessages.useCallback[refresh]"], [
        dispatch,
        roomId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMessages.useEffect": ()=>{
            // Initial fetch
            refresh();
            let mounted = true;
            let unsubscribe;
            const subscribe = {
                "useMessages.useEffect.subscribe": async ()=>{
                    if (!roomId) return;
                    try {
                        unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].subscribe(`databases.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_ID"]}.collections.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].MESSAGES}.documents`, {
                            "useMessages.useEffect.subscribe": async (response)=>{
                                if (!mounted) return;
                                const payload = response.payload;
                                // Safe check for room ID (string or object)
                                const payloadRoomId = typeof payload.room === 'object' ? payload.room.$id : payload.room;
                                if (payloadRoomId !== roomId) return;
                                if (response.events.includes('databases.*.collections.*.documents.*.create')) {
                                    try {
                                        // Fetch full message with expanded sender details
                                        const fullMessage = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$message$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageService"].get(payload.$id);
                                        if (fullMessage && mounted) {
                                            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$messageSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["receivedMessage"])(fullMessage));
                                        }
                                    } catch (e) {
                                        console.error("Failed to fetch real-time message details", e);
                                    }
                                }
                            }
                        }["useMessages.useEffect.subscribe"]);
                    } catch (err) {
                        console.error("Failed to subscribe:", err);
                    }
                }
            }["useMessages.useEffect.subscribe"];
            subscribe();
            return ({
                "useMessages.useEffect": ()=>{
                    mounted = false;
                    if (unsubscribe) {
                        unsubscribe();
                    }
                }
            })["useMessages.useEffect"];
        }
    }["useMessages.useEffect"], [
        dispatch,
        refresh,
        roomId
    ]);
    const sendMessage = async (payload)=>{
        if (!isAuthenticated || !session || !user) {
            throw new Error("Active session required to send message");
        }
        await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$messageSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendMessage"])(payload)).unwrap();
    };
    return {
        messages,
        loading,
        error,
        sendMessage,
        refresh
    };
}
_s(useMessages, "1DZD9iyywSIXXJnV5robF+NQdx8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(rooms)/room/[roomId]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoomPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$room$2f$ChatArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/room/ChatArea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$room$2f$RoomDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/room/RoomDetails.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$room$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/room.service.ts [app-client] (ecmascript)");
// Hooks
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRoom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useRoom.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRoomMembers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useRoomMembers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMessages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSession.ts [app-client] (ecmascript)");
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
;
;
;
function RoomPage({ params }) {
    _s();
    const { roomId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // UI State
    const [showDetails, setShowDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Hooks
    const { session, user, loading: authLoading, isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const { room, loading: roomLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRoom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoom"])(roomId);
    const { members, kickMember } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRoomMembers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoomMembers"])(roomId);
    const { messages, loading: messagesLoading, sendMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"])(roomId);
    // useMedia is no longer needed for RoomDetails media source, but maybe for upload? 
    // ChatArea handles upload via StorageService directly now.
    // We can keep it or remove it if unused. Keeping for safety if used elsewhere.
    // ... Auth Protection & Cleanup ...
    // ... Join Room Logic ...
    const handleCloseRoom = async ()=>{
        if (!room) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$room$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomService"].close(room.$id);
        } catch (error) {
            console.error("Failed to close room:", error);
        }
    };
    // ... Loading & Session checks ...
    const handleExitRoom = async ()=>{
        if (!user || !room) return;
        const member = members.find((m)=>m.user.$id === user.$id);
        if (member) {
            try {
                // Leaving is essentially kicking oneself
                await kickMember(member.$id);
                router.push('/rooms');
            } catch (error) {
                console.error("Failed to exit room:", error);
            }
        }
    };
    // Check for kicked status
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoomPage.useEffect": ()=>{
            if (!roomLoading && !authLoading && roomId && user) {
                // Find current user in members list
                // Use $id for comparison as both are Documents
                const membership = members.find({
                    "RoomPage.useEffect.membership": (m)=>m.user.$id === user.$id
                }["RoomPage.useEffect.membership"]);
                // STRICT ACCESS CONTROL
                // 1. If we have a membership record but it's inactive (kicked/left) -> Redirect
                if (membership && !membership.isActive) {
                    router.push('/rooms');
                    return;
                }
                // 2. If room is PRIVATE (not public) and we have NO membership record (kicked and removed from list) -> Redirect
                // We wait for members to be loaded (length > 0) to avoid premature redirect on initial fetch
                // Exception: The creator might not be in the list initially if something is weird, but they should be.
                if (room && !room.isPublic && members.length > 0 && !membership) {
                    router.push('/rooms');
                }
            }
        }
    }["RoomPage.useEffect"], [
        members,
        roomLoading,
        authLoading,
        roomId,
        user,
        router,
        room
    ]);
    if (!session) {
        return null; // Should redirect
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$room$2f$ChatArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                room: room,
                messages: messages,
                loading: messagesLoading,
                currentUser: user?.userId || null,
                onSendMessage: sendMessage,
                onToggleDetails: ()=>setShowDetails(!showDetails),
                detailsOpen: showDetails
            }, void 0, false, {
                fileName: "[project]/src/app/(rooms)/room/[roomId]/page.tsx",
                lineNumber: 93,
                columnNumber: 13
            }, this),
            showDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$room$2f$RoomDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                room: room,
                members: members,
                currentUserId: user?.userId || null,
                onCloseRoomAction: handleCloseRoom,
                onToggleUI: ()=>setShowDetails(false),
                onExitRoomAction: handleExitRoom,
                onSendMessage: sendMessage,
                onKickMember: async (memberId)=>{
                    await kickMember(memberId);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/(rooms)/room/[roomId]/page.tsx",
                lineNumber: 103,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true);
}
_s(RoomPage, "3KCdSgdNuRG22ugCAAf7/GrQTw0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRoom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoom"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRoomMembers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoomMembers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"]
    ];
});
_c = RoomPage;
var _c;
__turbopack_context__.k.register(_c, "RoomPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_de99d85a._.js.map