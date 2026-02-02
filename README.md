# NexConnect

**NexConnect** is a modern, real-time collaboration platform designed to simplify communication. Built with performance and scalability in mind, it enables users to create rooms, chat in real-time, share rich media, and manage teams efficiently across any device.

![NexConnect Banner](/public/icon.png)

## 🚀 Key Features

*   **Real-Time Messaging**: Instant communication powered by Appwrite Realtime.
*   **Room Management**:
    *   Create **Public** or **Private** rooms.
    *   **Join** rooms via secure invite codes.
    *   **Kick** members (Admin only) and voluntary **Exit** options for private rooms.
*   **Media Sharing**: Seamlessly upload and share **Images, Videos, and PDFs**.
*   **Responsive Design**: precise layout adaptation for **Mobile, Tablet, and Desktop**.
    *   *Mobile*: Intuitive bottom-up sheets and slide-over navigation.
    *   *Desktop*: Productivity-focused 3-column layout.
*   **Session Management**: Resume sessions across devices or browse as a temporary guest.
*   **Performance First**: Heavily optimized rendering (React.memo, stabilized hooks) to ensure 60fps interaction.
*   **Dark Mode**: Built-in, system-aware theme toggle.

## 🛠 Tech Stack

*   **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Lucide React / MUI Icons
*   **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
*   **Backend Services**: [Appwrite](https://appwrite.io/)
    *   Database & Storage
    *   Authentication (Anonymous & Account-based)
    *   Realtime Subscriptions

## ⚡️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

*   Node.js 18.17 or later
*   npm or yarn
*   An [Appwrite](https://appwrite.io/) instance (Cloud or Self-Hosted)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/thesagardahiwal/nexConnect.git
    cd nexConnect
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env` or `.env.local` file in the root directory and add your Appwrite credentials:

    ```env
    NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
    NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
    NEXT_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
    NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS=rooms_collection_id
    NEXT_PUBLIC_APPWRITE_COLLECTION_MESSAGES=messages_collection_id
    NEXT_PUBLIC_APPWRITE_COLLECTION_MEMBERS=members_collection_id
    NEXT_PUBLIC_APPWRITE_COLLECTION_MEDIA=media_collection_id
    NEXT_PUBLIC_APPWRITE_BUCKET_ID=your_storage_bucket_id
    ```

4.  **Run Development Server**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📂 Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── (rooms)/      # Room-related routes (Sidebar layout)
│   ├── (auth)/       # Authentication routes
│   └── page.tsx      # Landing page
├── components/       # Reusable UI components
│   ├── room/         # Room specific components (ChatArea, RoomDetails)
│   ├── ui/           # Generic UI elements (Buttons, Inputs)
│   └── icons.tsx     # Icon system
├── hooks/            # Custom React Hooks (useRooms, useMessages)
├── services/         # Appwrite API integration layers
├── store/            # Redux store slices (roomSlice, mediaSlice)
├── types/            # TypeScript interfaces
└── lib/              # Utilities (Appwrite config, helpers)
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
*Built with ❤️ by Sagar Dahiwal*
