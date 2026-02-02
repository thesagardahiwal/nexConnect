import { Icons } from "@/components/icons";
import { StorageService } from "@/services/storage.service";
import { Media } from "@/types/media";
import Image from "next/image";

interface MediaModalProps {
    isOpen: boolean;
    onClose: () => void;
    mediaMessages: Media[];
}

export default function MediaModal({ isOpen, onClose, mediaMessages }: MediaModalProps) {
    if (!isOpen) return null;

    const renderMediaPreview = (m: Media) => {
        console.log('Media', m);
        if (m.fileType === 'IMAGE') {
            console.log('Image', StorageService.getFileView(m.fileId));
            return (
                <Image
                    src={StorageService.getFileView(m.fileId)}
                    alt={m.fileName || 'Media'}
                    height={300}
                    width={300}
                    className="w-full h-full object-cover transition group-hover:scale-105"
                />
            );
        }

        let Icon = Icons.Paperclip;
        if (m.fileType === 'VIDEO') Icon = Icons.Video;
        if (m.fileType === 'PDF') Icon = Icons.File;

        return (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                <Icon className="w-8 h-8 text-brand-primary dark:text-brand-primaryDark mb-2" />
                <span className="text-xs text-text-secondary dark:text-text-darkSecondary truncate w-full">{m.fileName}</span>
            </div>
        );
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-2xl bg-surface-base dark:bg-surface-darkElevated rounded-2xl shadow-xl flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="p-4 border-b border-border-default dark:border-border-darkDefault flex items-center justify-between">
                    <h3 className="font-semibold text-lg text-text-primary dark:text-text-darkPrimary">Shared Media</h3>
                    <button onClick={onClose} className="text-text-muted hover:text-text-primary dark:text-text-darkMuted dark:hover:text-text-darkPrimary transition">
                        <Icons.Close className="w-5 h-5" />
                    </button>
                </div>

                {/* Grid */}
                <div className="flex-1 overflow-y-auto p-4">
                    {mediaMessages.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-text-muted dark:text-text-darkMuted">
                            <Icons.Paperclip className="w-12 h-12 mb-2 opacity-50" />
                            <p>No media shared yet</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {mediaMessages.map(m => {
                                if (!m.fileId) return null;

                                return (
                                    <a
                                        key={m.$id}
                                        href={StorageService.getFileView(m.fileId).toString()}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group relative aspect-square bg-surface-subtle dark:bg-surface-darkSubtle rounded-xl overflow-hidden border border-border-default dark:border-border-darkDefault hover:ring-2 hover:ring-brand-primary dark:hover:ring-brand-primaryDark transition"
                                    >
                                        {renderMediaPreview(m)}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                                            <Icons.ChevronRight className="w-6 h-6 text-white" />
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
