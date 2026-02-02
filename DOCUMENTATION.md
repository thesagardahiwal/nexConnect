# NexConnect - Product & Technical Documentation

This document provides a complete guide to **NexConnect**, covering its functionality for end-users and its architecture for developers.

---

# 📘 PART 1 — Product Documentation

**Audience:** Non-technical users, Product Managers.

## 1️⃣ What is This Application?

**NexConnect** is a secure, real-time collaboration platform. It is designed for individuals and teams who need to create temporary or permanent spaces ("Rooms") to chat and share files instantly.

**Core Problems Solved:**
*   **Privacy First:** No complex sign-ups. Sessions can be anonymous or temporary.
*   **Instant Collaboration:** Create a room in seconds and invite others via a simple Code.
*   **Clean Exit:** Users can leave rooms, or be removed by creators, ensuring they no longer have access to the conversation.

## 2️⃣ Key Concepts

*   **Rooms**: The spaces where chats happen.
    *   **Public Rooms**: Visible to everyone in the "Browse" list. Anyone can join.
    *   **Private Rooms**: Hidden from the list. Users need the **Room ID** to join.
*   **Members**: Users who have joined a room. You must be a member to send messages.
*   **Commander (Creator)**: The user who created the room. They have special permissions, like the ability to remove (kick) other members.
*   **Session**: Your "identity" for the current browser visit. You can have multiple active sessions across devices.
*   **Kicked Status**: If a creator removes you, you are instantly redirected out of the room and cannot rejoin unless re-added (or if the room policy changes).

## 3️⃣ How to Use the App

### A. Starting Out
1.  **Open the App**: You will see the Landing Page.
2.  **Start Session**: Click **"Start Secure Session"**.
3.  **Identity**: You will be assigned a temporary identity (or logged in if you have an account).

### B. Creating a Room
1.  In the Sidebar, click the **"+" (Plus)** icon next to "Rooms".
2.  Enter a **Room Name**.
3.  **Privacy**: Toggle "Private" if you want it hidden from the public list.
4.  Click **Create**. You are now the "Creator" of this room.

### C. Joining a Room
*   **Public Room**: Browsing the list on the sidebar? Just click any room to enter.
*   **Private Room**:
    1.  Ask the room creator for the **Room ID**.
    2.  Click the **"Join"** icon (Plug/House icon) in the sidebar.
    3.  Enter the **Room ID**.
    4.  Click **Join**.

### D. Chatting & Media
*   **Send Message**: Type in the box at the bottom and press Enter.
*   **Share Media**: Click the **Paperclip** icon. Select an Image, Video, or PDF. It will upload and appear in the chat.
*   **View Media**: Click the **"Info"** (top right) button to open the **Room Details** panel. All shared files appear in the "Shared Media" gallery.

### E. Leaving a Room
*   Open the **Room Details** panel ("Info" icon).
*   Click **"Exit Room"** (Red button).
*   You will be removed from the member list and returned to the home screen.

## 4️⃣ Permissions & Privacy

*   **Public Access**: Public rooms are open to anyone with the link or who browses the app.
*   **Private Access**: **Room IDs act as keys**. Do not share the ID with untrusted people.
*   **Kicking Members**: Only the Room Creator can kick members.
    *   *Action*: Click "Info" -> Find Member -> Click "Remove".
    *   *Result*: The user is immediately disconnected and redirected to the lobby.
*   **Room Closure**: If the Creator **Closes** the room, it becomes "Archived". No new messages can be sent.

## 5️⃣ Common Questions

*   **"Why can't I see the chat?"**
    *   You might have been removed from the room, or the room was closed by the creator.
*   **"Why was I redirected to the home page?"**
    *   If you try to access a private room you haven't joined, or if you were kicked, the security system automatically redirects you for safety.
*   **"How do I save my session?"**
    *   Go to `/session` to see your "Session Key". You can use this to Resume your identity on another device.

---

# 📗 PART 2 — Technical Documentation

**Audience:** Developers, Integrators.

## 6️⃣ Tech Stack Overview

*   **Frontend**: Next.js 14+ (App Router), React 18
*   **Language**: TypeScript (Strict mode)
*   **State Management**: Redux Toolkit (RDK) + React Hooks
*   **Styling**: Tailwind CSS + Lucide React Icons
*   **Backend**: Appwrite (BaaS)
    *   **Database**: Stores Rooms, Messages, Members, Sessions.
    *   **Storage**: Buckets for media files (Images, PDFs).
    *   **Realtime**: WebSocket subscriptions for live updates.

## 7️⃣ High-Level Architecture

The flow of data follows a strict hierarchy:

1.  **Auth (Session)**: App loads -> `useSession` initializes specific `databases.createDocument` for a Session.
2.  **Room Fetch**: `useRooms` fetches the list based on visibility (Public) or Membership (Private).
3.  **Access Control**: User attempts to enter `/room/[id]`.
    *   *Guard*: `RoomPage` checks `members` list. If user is not present (and room is private), Redirects.
4.  **Realtime Sync**:
    *   Redux Thunks (`fetchMessages`, `fetchMedia`) load initial state.
    *   `client.subscribe` (in hooks) listens for `documents.create/update/delete`.
    *   Redux Store updates UI.

**Why this order?**
To ensure no "ghost" users exist. A valid Session ID is required for *all* database operations.

## 8️⃣ Data Model Overview

### Collections

1.  **Users** (Appwrite Auth): Built-in.
2.  **Sessions** (`sessions`):
    *   `userId`: Link to Appwrite User.
    *   `isActive`: Boolean. Used for soft-logout.
3.  **Rooms** (`rooms`):
    *   `isPublic`: Boolean. Determines visibility in `list()`.
    *   `status`: "OPEN" or "CLOSED".
    *   `creator`: User ID of owner.
4.  **Room Members** (`room_members`):
    *   `room`: ID link.
    *   `user`: User ID.
    *   `role`: "CREATOR" or "MEMBER".
    *   `isActive`: Boolean. Set to `false` when kicked.
5.  **Messages** (`messages`):
    *   `body`: Text content.
    *   `room`: Link to Room.
    *   `sender`: Link to User.
6.  **Media** (`media`):
    *   `fileId`: Appwrite Storage File ID.
    *   `room`: Link to Room.

## 9️⃣ State Management strategy

**Redux Toolkit** is used to manage **Global Server State**.
*   **`roomSlice`**: Stores the list of available rooms.
*   **`mediaSlice`**: Stores media for the *current* room.
*   **`authSlice`** (if applicable) or `SessionContext`: Manages current identity.

**Why Redux?**
To prevent prop-drilling across the 3-column layout (`Sidebar` -> `Page` -> `Details`). The `Sidebar` needs to know about "Active Room" state updates that might happen in the `ChatArea`.

## 10️⃣ Authorization Rules (Critical)

Security is enforcing at two levels:

1.  **Database Rules (Appwrite)** (Server-side):
    *   `read`: Any authenticated user (for Public).
    *   `write`: Members only.
2.  **Client-Side Guards** (`RoomPage.tsx`):
    *   **Kick Protection**: `useEffect` monitors `useRoomMembers`.
    *   **Rule**: `if (membership && !membership.isActive) -> router.push('/rooms')`.
    *   **Private Entry**: `if (!isPublic && !membership) -> router.push('/rooms')`.

**Note**: Merely having the URL is not enough to view a private room. You must explicitly "Join" via the API/Modal first to create a `room_member` record.

## 11️⃣ Rendering & Performance

We treat performance as a feature.

*   **Hook Stabilization**: All custom hooks (`useRooms`, `useMedia`) wrap their exported functions in `useCallback`.
*   **`useMemo` filters**: Filtering rooms (Search) and Media (by Room ID) is memoized to prevent expensive array iterations on every render.
*   **`React.memo`**: Key components (`RoomSidebar`, `ChatArea`, `RoomDetails`) are memoized.
    *   *Why?* Real-time events fire frequently. We only want to re-render the specific message bubble or list item that changed, not the whole page.

## 12️⃣ Folder Structure Guide

*   `src/app/`: Rows logic (Page Router).
    *   `(rooms)/`: Layouts for the main chat interface.
*   `src/components/`:
    *   `room/`: Complex, business-logic-heavy components (Chat, Details).
    *   `ui/`: Dumb, presentation-only components (Buttons, Inputs).
*   `src/hooks/`: **The Brains.** Contains the Subscription logic and Data Fetching (e.g., `useMessages`).
*   `src/services/`: **The API Layer.** Direct Appwrite SDK calls. No UI state here.
*   `src/store/`: Redux setup.

## 13️⃣ How to Run the Project Locally

### Prerequisites
*   Node.js 18+
*   Appwrite Cloud or Local Instance.

### Setup Steps
1.  **Clone & Install**:
    ```bash
    git clone ...
    npm install
    ```
2.  **Environment Variables**:
    Create `.env.local` based on the keys in `src/lib/appwrite.ts`.
    ```env
    NEXT_PUBLIC_APPWRITE_ENDPOINT=...
    NEXT_PUBLIC_APPWRITE_PROJECT_ID=...
    # ... collection IDs
    ```
3.  **Run**:
    ```bash
    npm run dev
    ```

## 14️⃣ Common Developer Pitfalls

*   ❌ **Direct State Mutation**: Never modify arrays in `useSelector`. Always use `[...array]` or let Redux Toolkit Draft handle it.
*   ❌ **Bypassing Services**: Do not call `databases.createDocument` inside a Component. Use `Service` -> `Hook` -> `Component`.
*   ❌ **Ignoring Stale Closures**: When using `useEffect` for Realtime, ensure you aren't capturing old state values. Use Function Updates (`setState(prev => ...)`) or Redux.
*   ❌ **Duplicate Members**: The `JoinRoomModal` checks if open, but ensure backend rules also enforce `unique()` indexes on `(room, user)` pairs to prevent double-joins.

---
*Documentation Generated for NexConnect v1.0*
