'use client';

import { useState, useRef, useEffect } from "react";
import { Message, MessagePayload } from "@/types/message";
import React from "react";
import { Icons } from "@/components/icons";
import Link from "next/link";
// import { StorageService } from "@/services/storage.service";

interface ChatAreaProps {
    room: import("@/types/room").Room | null;
    messages: Message[];
    loading: boolean;
    currentUser: string | null;
    onSendMessage: (payload: MessagePayload) => Promise<void>;
    onToggleDetails?: () => void;
    detailsOpen?: boolean;
}

function ChatArea({ room, messages, loading, currentUser, onSendMessage, onToggleDetails, detailsOpen }: ChatAreaProps) {
    const [inputText, setInputText] = useState("");
    // const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [sending, setSending] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        console.log("handleSend: Initiated");
        if (!inputText.trim() || !room || !currentUser) {
            console.log("handleSend: Validation failed - missing content, room, or user");
            return;
        }

        setSending(true);
        try {
            const payload: MessagePayload = {
                room: room.$id,
                sender: currentUser,
                type: "TEXT",
                content: inputText,
            } as any; // Type assertion if strictly typed in interface but handled by backend

            await onSendMessage(payload);

            setInputText("");
            // setSelectedFile(null);
            if (fileInputRef.current) fileInputRef.current.value = "";
        } catch (error) {
            console.error("handleSend: Error occurred", error);
        } finally {
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
        return (
            <div className="flex-1 flex flex-col items-center justify-center bg-surface-subtle dark:bg-surface-darkBase text-text-muted dark:text-text-darkMuted gap-3">
                <Icons.Loader className="w-8 h-8 animate-spin text-brand-primary dark:text-brand-primaryDark" />
                <p className="text-sm font-medium">Loading chat...</p>
            </div>
        );
    }

    if (!room) {
        return <div className="flex-1 flex items-center justify-center bg-surface-subtle dark:bg-surface-darkBase text-text-muted dark:text-text-darkMuted">Select a room</div>;
    }

    return (
        <section className="flex-1 flex flex-col bg-surface-subtle dark:bg-surface-darkBase relative">
            {/* Header */}
            <div className="h-16 bg-surface-base dark:bg-surface-darkElevated border-b border-border-default dark:border-border-darkDefault px-4 sm:px-6 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                    <Link href="/rooms" className="md:hidden text-text-secondary dark:text-text-darkSecondary hover:text-text-primary dark:hover:text-text-darkPrimary transition">
                        <Icons.ChevronLeft className="w-6 h-6" />
                    </Link>
                    <div>
                        <h3 className="font-semibold text-text-primary dark:text-text-darkPrimary flex items-center gap-2">
                            <Icons.Hash className="w-4 h-4 text-brand-primary dark:text-brand-primaryDark" />
                            <span className="truncate max-w-[150px] sm:max-w-xs">{room.name}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${room.status === 'OPEN' ? 'bg-status-success/10 text-status-success dark:text-status-successDark' : 'bg-status-danger/10 text-status-danger dark:text-status-dangerDark'}`}>
                                {room.status}
                            </span>
                        </h3>
                        <p className="text-xs text-text-secondary dark:text-text-darkSecondary hidden sm:block">ID: {room.$id}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 text-text-secondary dark:text-text-darkSecondary">
                    <button className="hover:text-text-primary dark:hover:text-text-darkPrimary transition"><Icons.Copy className="w-5 h-5" /></button>
                    <button
                        onClick={onToggleDetails}
                        className={`transition ${detailsOpen ? 'text-brand-primary dark:text-brand-primaryDark' : 'hover:text-text-primary dark:hover:text-text-darkPrimary'}`}
                    >
                        <Icons.Info className="w-5 h-5" />
                    </button>
                    <button className="dark:hover:text-text-darkPrimary transition text-status-danger dark:text-status-dangerDark hover:text-red-600"><Icons.LogOut className="w-5 h-5" /></button>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 px-8 py-6 space-y-6 overflow-y-auto">
                {messages.length === 0 && (
                    <div className="text-center text-text-muted dark:text-text-darkMuted text-sm mt-10">No messages yet. Say hello!</div>
                )}

                {messages.map((msg) => (
                    <MessageItem
                        key={msg.$id}
                        isMe={currentUser === msg.sender.$id}
                        user={msg.sender.username || 'Unknown'}
                        time={new Date(msg.$createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        message={msg}
                    />
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-border-default dark:border-border-darkDefault p-4 bg-surface-base dark:bg-surface-darkElevated shrink-0">
                {/* {selectedFile && (
                    <div className="flex items-center gap-2 mb-2 px-4 py-2 bg-surface-subtle dark:bg-surface-darkSubtle rounded-lg max-w-fit">
                        <Icons.Paperclip className="w-4 h-4 text-brand-primary dark:text-brand-primaryDark" />
                        <span className="text-sm text-text-primary dark:text-text-darkPrimary truncate max-w-[200px]">{selectedFile.name}</span>
                        <button onClick={() => { setSelectedFile(null); if (fileInputRef.current) fileInputRef.current.value = ""; }} className="text-text-secondary dark:text-text-darkSecondary hover:text-status-danger">
                            <Icons.Close className="w-4 h-4" />
                        </button>
                    </div>
                )} */}
                <div className="flex items-center gap-3">
                    {/* <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleFileSelect}
                    />
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        disabled={room.status !== 'OPEN'}
                        className="p-3 rounded-xl bg-surface-subtle dark:bg-surface-darkSubtle text-text-secondary dark:text-text-darkSecondary hover:text-brand-primary dark:hover:text-brand-primaryDark transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Icons.Paperclip className="w-5 h-5" />
                    </button> */}
                    <input
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        disabled={room.status !== 'OPEN'}
                        placeholder={room.status === 'OPEN' ? "Type your message..." : "Room is closed"}
                        className="flex-1 border border-border-default dark:border-border-darkDefault rounded-xl px-4 py-3 text-sm bg-surface-subtle dark:bg-surface-darkSubtle text-text-primary dark:text-text-darkPrimary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-primaryDark transition placeholder-text-muted dark:placeholder-text-darkMuted"
                    />
                    <button
                        onClick={handleSend}
                        disabled={!inputText.trim() || sending || room.status !== 'OPEN'}
                        className={`w-12 h-12 rounded-xl flex items-center justify-center text-white transition ${(inputText.trim() && !sending) ? 'bg-brand-primary hover:bg-brand-secondary dark:bg-brand-primaryDark' : 'bg-border-default dark:bg-surface-darkSubtle cursor-not-allowed'}`}
                    >
                        {sending ? <Icons.Loader className="w-5 h-5 animate-spin" /> : <Icons.Send className="w-5 h-5" />}
                    </button>
                </div>
            </div>
        </section>
    );
}



// ... existing component ...

export default React.memo(ChatArea);

const MessageItem = React.memo(function MessageItem({
    user,
    time,
    message,
    isMe
}: {
    user: string;
    time: string;
    message: Message;
    isMe: boolean;
}) {
    return (
        <div className={`flex gap-4 ${isMe ? "flex-row-reverse" : ""}`}>
            <div className="w-10 h-10 rounded-full bg-brand-muted dark:bg-brand-mutedDark shrink-0 flex items-center justify-center text-brand-primary dark:text-brand-primaryDark text-xs font-bold">
                {user.substring(0, 2).toUpperCase()}
            </div>
            <div className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}>
                <p className="text-sm font-medium text-text-primary dark:text-text-darkPrimary">
                    {isMe ? "You" : user} <span className="text-xs text-text-muted dark:text-text-darkMuted ml-1">{time}</span>
                </p>
                <div className={`mt-1 rounded-xl max-w-md break-words overflow-hidden ${isMe ? "bg-brand-primary dark:bg-brand-primaryDark text-text-inverse" : "bg-surface-base dark:bg-surface-darkElevated border border-border-default dark:border-border-darkDefault text-text-primary dark:text-text-darkPrimary"}`}>

                    {message.content && (
                        <div className="px-4 py-3 text-sm">
                            {message.content}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
});
