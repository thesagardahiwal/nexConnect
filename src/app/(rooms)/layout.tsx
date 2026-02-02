import RoomSidebar from "@/components/room/RoomSidebar";

export default function RoomsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden">
            <RoomSidebar />
            {children}
        </div>
    );
}
