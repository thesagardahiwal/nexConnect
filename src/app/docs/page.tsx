'use client';

import React from 'react';
import Link from 'next/link';
import { Icons } from '@/components/icons';

export default function DocumentationPage() {
    return (
        <main className="min-h-screen bg-surface-base dark:bg-surface-darkBase text-text-primary dark:text-text-darkPrimary">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-surface-base/80 dark:bg-surface-darkBase/80 backdrop-blur border-b border-border-default dark:border-border-darkDefault">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-brand-primary dark:bg-brand-primaryDark flex items-center justify-center">
                            <Icons.Lock className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-semibold text-lg">NexConnect Docs</span>
                    </Link>
                    <Link href="/" className="text-sm font-medium hover:text-brand-primary dark:hover:text-brand-primaryDark transition">
                        Back to App
                    </Link>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">User Guide</h1>
                <p className="text-xl text-text-secondary dark:text-text-darkSecondary mb-12 leading-relaxed">
                    Everything you need to know about using NexConnect securely and efficiently.
                </p>

                <div className="space-y-16">

                    {/* 1. Quick Start */}
                    <section id="basics" className="prose dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary dark:text-brand-primaryDark">1</div>
                            Getting Started
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                            <div className="p-6 rounded-2xl bg-surface-subtle dark:bg-surface-darkSubtle border border-border-default dark:border-border-darkDefault">
                                <h3 className="text-lg font-semibold mb-3">Starting a Session</h3>
                                <p className="text-sm text-text-secondary dark:text-text-darkSecondary mb-4">
                                    Click <strong>"Start Secure Session"</strong> on the homepage. You will be assigned a temporary anonymous identity. No email or password required.
                                </p>
                                <div className="text-xs px-3 py-2 rounded bg-brand-muted dark:bg-brand-mutedDark text-brand-primary dark:text-brand-primaryDark inline-block font-medium">
                                    Tip: Save your Session Key to resume later!
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-surface-subtle dark:bg-surface-darkSubtle border border-border-default dark:border-border-darkDefault">
                                <h3 className="text-lg font-semibold mb-3">The Dashboard</h3>
                                <p className="text-sm text-text-secondary dark:text-text-darkSecondary">
                                    <strong>Sidebar (Left):</strong> Your list of joined rooms and profile.<br />
                                    <strong>Chat Area (Center):</strong> The active conversation.<br />
                                    <strong>Details (Right):</strong> Room members and shared media.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 2. Managing Rooms */}
                    <section id="rooms" className="prose dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary dark:text-brand-primaryDark">2</div>
                            How to Use Rooms
                        </h2>

                        <div className="space-y-6">
                            <div className="pl-6 border-l-2 border-brand-primary dark:border-brand-primaryDark">
                                <h3 className="text-xl font-semibold mb-2">Creating a Room</h3>
                                <ol className="list-decimal pl-5 space-y-2 text-text-secondary dark:text-text-darkSecondary">
                                    <li>Click the <strong>Plus (+)</strong> icon in the sidebar header.</li>
                                    <li>Enter a <strong>Room Name</strong> (e.g., "Project Alpha").</li>
                                    <li>Select <strong>Privacy</strong>:
                                        <ul className="list-disc pl-5 mt-1 text-sm">
                                            <li><strong>Public:</strong> Anyone can see and join.</li>
                                            <li><strong>Private:</strong> Hidden. Requires Room ID to join.</li>
                                        </ul>
                                    </li>
                                    <li>Click <strong>Create</strong>. You are now the Admin.</li>
                                </ol>
                            </div>

                            <div className="pl-6 border-l-2 border-gray-200 dark:border-gray-800">
                                <h3 className="text-xl font-semibold mb-2">Joining a Private Room</h3>
                                <ol className="list-decimal pl-5 space-y-2 text-text-secondary dark:text-text-darkSecondary">
                                    <li>Ask the room admin for the <strong>Room ID</strong>.</li>
                                    <li>Click the <strong>Plug/Join</strong> icon in the sidebar.</li>
                                    <li>Paste the ID and click <strong>Join Room</strong>.</li>
                                </ol>
                            </div>
                        </div>
                    </section>

                    {/* 3. Features */}
                    <section id="features" className="prose dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary dark:text-brand-primaryDark">3</div>
                            Chat & Media
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose">
                            <div className="p-4 rounded-xl bg-surface-subtle dark:bg-surface-darkElevated">
                                <Icons.Send className="w-6 h-6 text-brand-primary mb-3" />
                                <h4 className="font-semibold">Text Chat</h4>
                                <p className="text-sm text-text-secondary dark:text-text-darkSecondary mt-1">Real-time messaging with Markdown support.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-surface-subtle dark:bg-surface-darkElevated">
                                <Icons.Paperclip className="w-6 h-6 text-brand-primary mb-3" />
                                <h4 className="font-semibold">Share Files</h4>
                                <p className="text-sm text-text-secondary dark:text-text-darkSecondary mt-1">Upload Images, Videos, and PDFs securely.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-surface-subtle dark:bg-surface-darkElevated">
                                <Icons.Info className="w-6 h-6 text-brand-primary mb-3" />
                                <h4 className="font-semibold">Media Gallery</h4>
                                <p className="text-sm text-text-secondary dark:text-text-darkSecondary mt-1">View all shared room files in the Details panel.</p>
                            </div>
                        </div>
                    </section>

                    {/* 4. Privacy */}
                    <section id="privacy" className="prose dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary dark:text-brand-primaryDark">4</div>
                            Security & Permissions
                        </h2>

                        <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-red-800 dark:text-red-400 mb-4 flex items-center gap-2">
                                <Icons.Shield className="w-5 h-5" />
                                Admin Powers
                            </h3>
                            <ul className="space-y-3 text-red-900/80 dark:text-red-300/80 text-sm">
                                <li><strong>Kick Member:</strong> Admins can remove disruptive users. Kicked users are immediately disconnected and redirected to the home screen.</li>
                                <li><strong>Close Room:</strong> Admins can close rooms, making them read-only for everyone.</li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* Footer / CTA */}
                <div className="mt-20 p-8 rounded-3xl bg-brand-primary dark:bg-surface-darkElevated text-white text-center">
                    <h2 className="text-2xl font-bold mb-4">Ready to collaborate?</h2>
                    <p className="mb-6 opacity-90">Start your secure session now and experience the difference.</p>
                    <Link href="/session" className="inline-flex px-6 py-3 rounded-xl bg-white text-brand-primary font-bold hover:bg-gray-100 transition">
                        Launch App
                    </Link>
                </div>

                <div className="mt-16 pt-8 border-t border-border-default dark:border-border-darkDefault text-center text-sm text-text-muted dark:text-text-darkMuted">
                    <p>Built with ❤️ by Sagar Dahiwal</p>
                </div>
            </div>
        </main>
    );
}
