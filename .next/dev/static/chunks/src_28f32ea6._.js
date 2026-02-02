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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/storage.service.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ChatArea({ room, messages, loading, currentUser, onSendMessage }) {
    _s();
    const [inputText, setInputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
        if (!inputText.trim() && !selectedFile || !room || !currentUser) {
            console.log("handleSend: Validation failed - missing content, room, or user");
            return;
        }
        setSending(true);
        console.log("handleSend: Set sending state to true");
        try {
            let type = "TEXT";
            let fileId;
            let fileName;
            let fileSize;
            if (selectedFile) {
                console.log("handleSend: Processing file upload", selectedFile.name);
                type = selectedFile.type.startsWith("image/") ? "IMAGE" : "FILE";
                try {
                    const uploaded = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageService"].uploadFile(selectedFile);
                    fileId = uploaded.$id;
                    fileName = uploaded.name;
                    fileSize = uploaded.sizeOriginal;
                    console.log("handleSend: File upload complete", {
                        fileId,
                        fileName
                    });
                } catch (e) {
                    console.error("handleSend: File upload failed", e);
                    alert("Failed to upload file");
                    setSending(false);
                    return;
                }
            }
            const payload = {
                room: room.$id,
                sender: currentUser,
                type,
                content: inputText,
                file_id: fileId,
                file_name: fileName,
                file_size: fileSize
            };
            console.log("handleSend: Sending payload to onSendMessage", payload);
            await onSendMessage(payload);
            console.log("handleSend: Message sent successfully");
            setInputText("");
            setSelectedFile(null);
            if (fileInputRef.current) fileInputRef.current.value = "";
            console.log("handleSend: Reset input fields");
        } catch (error) {
            console.error("handleSend: Error occurred", error);
        } finally{
            setSending(false);
            console.log("handleSend: Set sending state to false");
        }
    };
    const handleFileSelect = (e)=>{
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };
    if (loading && messages.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex items-center justify-center bg-surface-subtle dark:bg-surface-darkBase text-text-muted dark:text-text-darkMuted",
            children: "Loading chat..."
        }, void 0, false, {
            fileName: "[project]/src/components/room/ChatArea.tsx",
            lineNumber: 96,
            columnNumber: 16
        }, this);
    }
    if (!room) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex items-center justify-center bg-surface-subtle dark:bg-surface-darkBase text-text-muted dark:text-text-darkMuted",
            children: "Select a room"
        }, void 0, false, {
            fileName: "[project]/src/components/room/ChatArea.tsx",
            lineNumber: 100,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex-1 flex flex-col bg-surface-subtle dark:bg-surface-darkBase relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-16 bg-surface-base dark:bg-surface-darkElevated border-b border-border-default dark:border-border-darkDefault px-6 flex items-center justify-between shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-text-primary dark:text-text-darkPrimary flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Hash, {
                                        className: "w-4 h-4 text-brand-primary dark:text-brand-primaryDark"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/room/ChatArea.tsx",
                                        lineNumber: 109,
                                        columnNumber: 25
                                    }, this),
                                    " ",
                                    room.name,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-xs px-2 py-0.5 rounded-full ${room.status === 'OPEN' ? 'bg-status-success/10 text-status-success dark:text-status-successDark' : 'bg-status-danger/10 text-status-danger dark:text-status-dangerDark'}`,
                                        children: room.status
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/room/ChatArea.tsx",
                                        lineNumber: 110,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 108,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-text-secondary dark:text-text-darkSecondary",
                                children: [
                                    "ID: ",
                                    room.$id
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 114,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/ChatArea.tsx",
                        lineNumber: 107,
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
                                    lineNumber: 118,
                                    columnNumber: 109
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 118,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "hover:text-text-primary dark:hover:text-text-darkPrimary transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Info, {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/room/ChatArea.tsx",
                                    lineNumber: 119,
                                    columnNumber: 109
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 119,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "hover:text-text-primary dark:hover:text-text-darkPrimary transition text-status-danger dark:text-status-dangerDark hover:text-red-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].LogOut, {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/room/ChatArea.tsx",
                                    lineNumber: 120,
                                    columnNumber: 175
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 120,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/ChatArea.tsx",
                        lineNumber: 117,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/ChatArea.tsx",
                lineNumber: 106,
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
                        lineNumber: 127,
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
                            lineNumber: 131,
                            columnNumber: 21
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesEndRef
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/ChatArea.tsx",
                        lineNumber: 139,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/ChatArea.tsx",
                lineNumber: 125,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-border-default dark:border-border-darkDefault p-4 bg-surface-base dark:bg-surface-darkElevated shrink-0",
                children: [
                    selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-2 px-4 py-2 bg-surface-subtle dark:bg-surface-darkSubtle rounded-lg max-w-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Paperclip, {
                                className: "w-4 h-4 text-brand-primary dark:text-brand-primaryDark"
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 146,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-text-primary dark:text-text-darkPrimary truncate max-w-[200px]",
                                children: selectedFile.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 147,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setSelectedFile(null);
                                    if (fileInputRef.current) fileInputRef.current.value = "";
                                },
                                className: "text-text-secondary dark:text-text-darkSecondary hover:text-status-danger",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Close, {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/room/ChatArea.tsx",
                                    lineNumber: 149,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 148,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/ChatArea.tsx",
                        lineNumber: 145,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                ref: fileInputRef,
                                className: "hidden",
                                onChange: handleFileSelect
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 154,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>fileInputRef.current?.click(),
                                disabled: room.status !== 'OPEN',
                                className: "p-3 rounded-xl bg-surface-subtle dark:bg-surface-darkSubtle text-text-secondary dark:text-text-darkSecondary hover:text-brand-primary dark:hover:text-brand-primaryDark transition disabled:opacity-50 disabled:cursor-not-allowed",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Paperclip, {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/room/ChatArea.tsx",
                                    lineNumber: 165,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 160,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: inputText,
                                onChange: (e)=>setInputText(e.target.value),
                                onKeyDown: (e)=>e.key === 'Enter' && handleSend(),
                                disabled: room.status !== 'OPEN',
                                placeholder: room.status === 'OPEN' ? "Type your message..." : "Room is closed",
                                className: "flex-1 border border-border-default dark:border-border-darkDefault rounded-xl px-4 py-3 text-sm bg-surface-subtle dark:bg-surface-darkSubtle text-text-primary dark:text-text-darkPrimary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-primaryDark transition placeholder-text-muted dark:placeholder-text-darkMuted"
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 167,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSend,
                                disabled: !inputText.trim() && !selectedFile || sending || room.status !== 'OPEN',
                                className: `w-12 h-12 rounded-xl flex items-center justify-center text-white transition ${(inputText.trim() || selectedFile) && !sending ? 'bg-brand-primary hover:bg-brand-secondary dark:bg-brand-primaryDark' : 'bg-border-default dark:bg-surface-darkSubtle cursor-not-allowed'}`,
                                children: sending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Loader, {
                                    className: "w-5 h-5 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/room/ChatArea.tsx",
                                    lineNumber: 180,
                                    columnNumber: 36
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Send, {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/room/ChatArea.tsx",
                                    lineNumber: 180,
                                    columnNumber: 88
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 175,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/ChatArea.tsx",
                        lineNumber: 153,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/ChatArea.tsx",
                lineNumber: 143,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/room/ChatArea.tsx",
        lineNumber: 104,
        columnNumber: 9
    }, this);
}
_s(ChatArea, "x94Ye0K+maoYZYfYoKfuAorySSY=");
_c = ChatArea;
function MessageItem({ user, time, message, isMe }) {
    const isImage = message.type === "IMAGE";
    const isFile = message.type === "FILE";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex gap-4 ${isMe ? "flex-row-reverse" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-10 h-10 rounded-full bg-brand-muted dark:bg-brand-mutedDark shrink-0 flex items-center justify-center text-brand-primary dark:text-brand-primaryDark text-xs font-bold",
                children: user.substring(0, 2).toUpperCase()
            }, void 0, false, {
                fileName: "[project]/src/components/room/ChatArea.tsx",
                lineNumber: 204,
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
                                lineNumber: 209,
                                columnNumber: 43
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/ChatArea.tsx",
                        lineNumber: 208,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mt-1 rounded-xl max-w-md break-words overflow-hidden ${isMe ? "bg-brand-primary dark:bg-brand-primaryDark text-text-inverse" : "bg-surface-base dark:bg-surface-darkElevated border border-border-default dark:border-border-darkDefault text-text-primary dark:text-text-darkPrimary"}`,
                        children: [
                            isImage && message.file_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageService"].getFileView(message.file_id).toString(),
                                    alt: "Shared image",
                                    className: "rounded-lg max-h-60 object-cover",
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/room/ChatArea.tsx",
                                    lineNumber: 215,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 213,
                                columnNumber: 25
                            }, this),
                            isFile && message.file_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 bg-white/20 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Paperclip, {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/room/ChatArea.tsx",
                                            lineNumber: 226,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/room/ChatArea.tsx",
                                        lineNumber: 225,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium truncate max-w-[150px]",
                                                children: message.file_name || "Attachment"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                                lineNumber: 229,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageService"].getFileDownload(message.file_id).toString(),
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-xs underline opacity-80 hover:opacity-100",
                                                children: "Download"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                                lineNumber: 230,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/room/ChatArea.tsx",
                                        lineNumber: 228,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 224,
                                columnNumber: 25
                            }, this),
                            message.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-3 text-sm",
                                children: message.content
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatArea.tsx",
                                lineNumber: 242,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/ChatArea.tsx",
                        lineNumber: 211,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/ChatArea.tsx",
                lineNumber: 207,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/room/ChatArea.tsx",
        lineNumber: 203,
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
"[project]/src/components/room/RoomDetails.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoomDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/storage.service.ts [app-client] (ecmascript)");
'use client';
;
;
;
function RoomDetails({ room, members, messages = [], currentUserId, onCloseRoom }) {
    if (!room) return null;
    const isCreator = room.creator.$id === currentUserId;
    const mediaMessages = messages.filter((m)=>(m.type === 'IMAGE' || m.type === 'FILE') && m.file_id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-80 bg-surface-base dark:bg-surface-darkElevated border-l border-border-default dark:border-border-darkDefault p-6 overflow-y-auto hidden md:block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-text-primary dark:text-text-darkPrimary",
                        children: "Room Details"
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-text-muted hover:text-text-primary dark:text-text-darkMuted dark:hover:text-text-darkPrimary transition",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Close, {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/room/RoomDetails.tsx",
                            lineNumber: 29,
                            columnNumber: 146
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/RoomDetails.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-text-secondary dark:text-text-darkSecondary mb-2 font-medium",
                        children: "ACTIONS"
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this),
                    isCreator ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCloseRoom,
                        disabled: room.status === 'CLOSED',
                        className: `w-full border py-3 rounded-xl transition flex items-center justify-center gap-2 ${room.status === 'CLOSED' ? 'border-border-default dark:border-border-darkDefault text-text-muted dark:text-text-darkMuted cursor-not-allowed' : 'border-status-danger/30 text-status-danger dark:text-status-dangerDark hover:bg-status-danger/10'}`,
                        children: room.status === 'CLOSED' ? 'Room Closed' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Lock, {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/room/RoomDetails.tsx",
                                    lineNumber: 41,
                                    columnNumber: 71
                                }, this),
                                " Close Room"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 36,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full border border-border-default dark:border-border-darkDefault text-text-secondary dark:text-text-darkSecondary py-3 rounded-xl hover:bg-surface-subtle dark:hover:bg-surface-darkSubtle transition",
                        children: "Exit Room"
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 44,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/RoomDetails.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-text-secondary dark:text-text-darkSecondary mb-4 font-medium",
                        children: [
                            "MEMBERS (",
                            members.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 52,
                        columnNumber: 17
                    }, this),
                    members.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Member, {
                            name: member.user.$id === currentUserId ? "You" : `User ${member.user.username.substring(0, 5)}`,
                            online: member.isActive
                        }, member.$id, false, {
                            fileName: "[project]/src/components/room/RoomDetails.tsx",
                            lineNumber: 54,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/RoomDetails.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-text-secondary dark:text-text-darkSecondary font-medium",
                                children: "SHARED MEDIA"
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/RoomDetails.tsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-brand-primary dark:text-brand-primaryDark cursor-pointer hover:underline",
                                children: "View All"
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/RoomDetails.tsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 64,
                        columnNumber: 17
                    }, this),
                    mediaMessages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-28 rounded-xl bg-surface-subtle dark:bg-surface-darkSubtle flex items-center justify-center text-xs text-text-muted dark:text-text-darkMuted border border-border-default dark:border-border-darkDefault border-dashed",
                        children: "No Media"
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 70,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: mediaMessages.slice(0, 6).map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: msg.file_id ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageService"].getFileView(msg.file_id).toString() : '#',
                                target: "_blank",
                                rel: "noreferrer",
                                className: "block aspect-square rounded-xl overflow-hidden bg-surface-subtle dark:bg-surface-darkSubtle border border-border-default dark:border-border-darkDefault hover:opacity-90 transition relative group",
                                children: msg.type === 'IMAGE' && msg.file_id ? // eslint-disable-next-line @next/next/no-img-element
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageService"].getFilePreview(msg.file_id, 150, 150).toString(),
                                    alt: msg.file_name,
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/room/RoomDetails.tsx",
                                    lineNumber: 85,
                                    columnNumber: 37
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full flex flex-col items-center justify-center p-2 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Paperclip, {
                                            className: "w-6 h-6 text-brand-primary dark:text-brand-primaryDark mb-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/room/RoomDetails.tsx",
                                            lineNumber: 92,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-text-secondary dark:text-text-darkSecondary truncate w-full",
                                            children: msg.file_name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/room/RoomDetails.tsx",
                                            lineNumber: 93,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/room/RoomDetails.tsx",
                                    lineNumber: 91,
                                    columnNumber: 37
                                }, this)
                            }, msg.$id, false, {
                                fileName: "[project]/src/components/room/RoomDetails.tsx",
                                lineNumber: 76,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 74,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/RoomDetails.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/room/RoomDetails.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
_c = RoomDetails;
function Member({ name, online }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 mb-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-9 h-9 rounded-full bg-brand-muted dark:bg-brand-mutedDark flex items-center justify-center text-xs text-brand-primary dark:text-brand-primaryDark font-bold",
                children: name.charAt(0)
            }, void 0, false, {
                fileName: "[project]/src/components/room/RoomDetails.tsx",
                lineNumber: 108,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-text-primary dark:text-text-darkPrimary",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 112,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-xs ${online ? "text-status-success dark:text-status-successDark" : "text-text-muted dark:text-text-darkMuted"}`,
                        children: online ? "active" : "inactive"
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/RoomDetails.tsx",
                        lineNumber: 113,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/RoomDetails.tsx",
                lineNumber: 111,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/room/RoomDetails.tsx",
        lineNumber: 107,
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
                "useRoomMembers.useEffect.unsubscribe": (response)=>{
                    const payload = response.payload;
                    if (payload.room !== roomId) return;
                    if (response.events.includes('databases.*.collections.*.documents.*.create')) {
                        if (payload.isActive) dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$roomSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMember"])(payload));
                    } else if (response.events.includes('databases.*.collections.*.documents.*.update')) {
                        if (payload.isActive) {
                            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$roomSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMember"])(payload));
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$messageSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/messageSlice.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
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
            refresh();
            const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].subscribe(`databases.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_ID"]}.collections.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].MESSAGES}.documents`, {
                "useMessages.useEffect.unsubscribe": (response)=>{
                    const payload = response.payload;
                    if (payload.room !== roomId) return;
                    if (response.events.includes('databases.*.collections.*.documents.*.create')) {
                        // Check if message already exists (optimistic update or duplicates)
                        // The reducer logic: receivedMessage just pushes.
                        // Ideally we should check if ID exists in selector, but for now we just dispatch.
                        // The slice should arguably handle deduplication, but let's assume valid stream.
                        // To be safe, we can check here? accessing state outside component is hard.
                        // Let's just dispatch.
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$messageSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["receivedMessage"])(payload));
                    }
                }
            }["useMessages.useEffect.unsubscribe"]);
            return ({
                "useMessages.useEffect": ()=>{
                    unsubscribe();
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$roomSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/roomSlice.ts [app-client] (ecmascript)");
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
;
function RoomPage({ params }) {
    _s();
    const { roomId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    // Hooks
    const { session, user, loading: authLoading, isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const { room, loading: roomLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRoom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoom"])(roomId);
    const { members } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRoomMembers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoomMembers"])(roomId);
    const { messages, loading: messagesLoading, sendMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"])(roomId);
    // Auth Protection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoomPage.useEffect": ()=>{
            if (!authLoading && !isAuthenticated) {
                router.push('/session');
            }
        }
    }["RoomPage.useEffect"], [
        isAuthenticated,
        authLoading,
        router
    ]);
    // Cleanup on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoomPage.useEffect": ()=>{
            return ({
                "RoomPage.useEffect": ()=>{
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$roomSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exitRoom"])());
                }
            })["RoomPage.useEffect"];
        }
    }["RoomPage.useEffect"], [
        dispatch
    ]);
    // Join Room Logic (Auto-join if visiting)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoomPage.useEffect": ()=>{
            // Only if fully loaded and authenticated
            if (isAuthenticated && user && room && room.$id === roomId) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$roomSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinRoom"])({
                    room: room.$id,
                    user: user.userId,
                    role: room.creator.$id === user.userId ? 'CREATOR' : 'MEMBER'
                }));
            }
        }
    }["RoomPage.useEffect"], [
        dispatch,
        isAuthenticated,
        user,
        room,
        roomId
    ]);
    const handleCloseRoom = async ()=>{
        if (!room) return;
        if (confirm("Are you sure you want to close this room? It will be read-only.")) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$room$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomService"].close(room.$id);
            } catch (e) {
                console.error(e);
                alert("Failed to close room");
            }
        }
    };
    if (authLoading || !room && roomLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen w-full flex items-center justify-center bg-surface-base dark:bg-surface-darkBase text-text-muted dark:text-text-darkMuted",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/(rooms)/room/[roomId]/page.tsx",
            lineNumber: 67,
            columnNumber: 16
        }, this);
    }
    if (!session) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$room$2f$ChatArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                room: room,
                messages: messages,
                loading: messagesLoading,
                currentUser: user?.userId || null,
                onSendMessage: sendMessage
            }, void 0, false, {
                fileName: "[project]/src/app/(rooms)/room/[roomId]/page.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$room$2f$RoomDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                room: room,
                members: members,
                messages: messages,
                currentUserId: user?.userId || null,
                onCloseRoom: handleCloseRoom
            }, void 0, false, {
                fileName: "[project]/src/app/(rooms)/room/[roomId]/page.tsx",
                lineNumber: 83,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(RoomPage, "49rnt/j/g5snQX3Sh1CU7t4BtuA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
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

//# sourceMappingURL=src_28f32ea6._.js.map