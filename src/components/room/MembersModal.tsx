import { RoomMember } from "@/types/room-member";
import { Icons } from "@/components/icons";
import { useState } from "react";

interface MembersModalProps {
    isOpen: boolean;
    onClose: () => void;
    members: RoomMember[];
    currentUserId: string | null;
}

export default function MembersModal({ isOpen, onClose, members, currentUserId }: MembersModalProps) {
    const [search, setSearch] = useState("");

    if (!isOpen) return null;

    const filteredMembers = members.filter(m =>
        m.user.username.toLowerCase().includes(search.toLowerCase()) ||
        (m.user.$id === currentUserId && "you".includes(search.toLowerCase()))
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-md bg-surface-base dark:bg-surface-darkElevated rounded-2xl shadow-xl flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="p-4 border-b border-border-default dark:border-border-darkDefault flex items-center justify-between">
                    <h3 className="font-semibold text-lg text-text-primary dark:text-text-darkPrimary">Members</h3>
                    <button onClick={onClose} className="text-text-muted hover:text-text-primary dark:text-text-darkMuted dark:hover:text-text-darkPrimary transition">
                        <Icons.Close className="w-5 h-5" />
                    </button>
                </div>

                {/* Search */}
                <div className="p-4 border-b border-border-default dark:border-border-darkDefault">
                    <div className="relative">
                        <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted dark:text-text-darkMuted" />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search members..."
                            className="w-full bg-surface-subtle dark:bg-surface-darkSubtle border border-border-default dark:border-border-darkDefault rounded-xl pl-9 pr-4 py-2 text-sm text-text-primary dark:text-text-darkPrimary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-primaryDark transition"
                        />
                    </div>
                </div>

                {/* List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {filteredMembers.length === 0 ? (
                        <div className="text-center text-text-muted dark:text-text-darkMuted py-4">No filteredMembers found</div>
                    ) : (
                        filteredMembers.map(member => (
                            <div key={member.$id} className="flex items-center justify-between group">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-brand-muted dark:bg-brand-mutedDark flex items-center justify-center text-sm font-bold text-brand-primary dark:text-brand-primaryDark">
                                        {member.user.username?.charAt(0).toUpperCase() || member.user.$id.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <p className="font-medium text-text-primary dark:text-text-darkPrimary flex items-center gap-2">
                                            {member.user.$id === currentUserId ? "You" : (member.user.username || "Unknown User")}
                                            {member.user.$id === currentUserId && <span className="text-[10px] bg-brand-primary/10 text-brand-primary dark:text-brand-primaryDark px-1.5 py-0.5 rounded">ME</span>}
                                        </p>
                                        <p className={`text-xs ${member.isActive ? "text-status-success dark:text-status-successDark" : "text-text-muted dark:text-text-darkMuted"}`}>
                                            {member.isActive ? "Online" : "Offline"}
                                        </p>
                                    </div>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition flex gap-2">
                                    {/* Action buttons could go here (e.g. kick, dm) */}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
