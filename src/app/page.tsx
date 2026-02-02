'use client';
import { useState } from 'react';
import FinalCTASection from "@/components/landing/FinalCTASection";
import PrivacyFoundationSection from "@/components/landing/PrivacyFoundationSection";
import RiskSection from "@/components/landing/RiskSection";
import StepsSection from "@/components/landing/StepsSection";
import Link from "next/link";
import { Icons } from "@/components/icons";

export default function HomePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <main className="min-h-screen bg-surface-base dark:bg-surface-darkBase">
            {/* ================= Navbar ================= */}
            <header className="sticky top-0 z-50 bg-surface-base/80 dark:bg-surface-darkBase/80 backdrop-blur border-b border-border-default dark:border-border-darkDefault">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-xl bg-brand-primary dark:bg-brand-primaryDark flex items-center justify-center">
                            <Icons.Lock className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-semibold text-lg text-text-primary dark:text-text-darkPrimary">
                            NexConnect
                        </span>
                    </div>

                    {/* Desktop Nav Links */}
                    <nav className="hidden md:flex items-center gap-8 text-sm text-text-secondary dark:text-text-darkSecondary">
                        <Link href="#how" className="hover:text-text-primary dark:hover:text-text-darkPrimary transition">
                            How it Works
                        </Link>
                        <Link href="#features" className="hover:text-text-primary dark:hover:text-text-darkPrimary transition">
                            Features
                        </Link>
                        <Link href="#privacy" className="hover:text-text-primary dark:hover:text-text-darkPrimary transition">
                            Privacy
                        </Link>
                        {/* CTA */}
                        <Link
                            href="/session"
                            className="bg-text-primary dark:bg-text-inverse text-text-inverse dark:text-text-primary px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition"
                        >
                            Start Secure Session
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-text-primary dark:text-text-darkPrimary"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <Icons.Close className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-surface-base dark:bg-surface-darkBase border-b border-border-default dark:border-border-darkDefault p-6 shadow-xl flex flex-col gap-4 animate-in slide-in-from-top-2">
                        <Link
                            href="#how"
                            className="text-lg font-medium text-text-primary dark:text-text-darkPrimary py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            How it Works
                        </Link>
                        <Link
                            href="#features"
                            className="text-lg font-medium text-text-primary dark:text-text-darkPrimary py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            href="#privacy"
                            className="text-lg font-medium text-text-primary dark:text-text-darkPrimary py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/session"
                            className="bg-brand-primary dark:bg-brand-primaryDark text-text-inverse text-center py-3 rounded-xl font-medium mt-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Start Secure Session
                        </Link>
                    </div>
                )}
            </header>

            {/* ================= Hero Section ================= */}
            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 pt-12 pb-12 sm:pt-24 sm:pb-16 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-muted dark:bg-brand-mutedDark text-brand-primary dark:text-brand-primaryDark text-xs font-semibold tracking-wide">
                        PRIVACY-FIRST COMMUNICATION
                    </div>

                    {/* Heading */}
                    <h1 className="mt-8 text-3xl sm:text-5xl md:text-6xl font-extrabold text-text-primary dark:text-text-darkPrimary leading-tight">
                        Chat securely on{" "}
                        <span className="text-brand-primary dark:text-brand-primaryDark">any device.</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-6 max-w-2xl mx-auto text-text-secondary dark:text-text-darkMuted text-base sm:text-lg leading-relaxed">
                        NexConnect allows you to create temporary private rooms instantly.
                        No logins, no tracking, and no digital footprints left behind.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/session"
                            className="inline-flex items-center gap-2 bg-text-primary dark:bg-text-inverse text-text-inverse dark:text-text-primary px-8 py-4 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition"
                        >
                            Start Secure Session
                            <Icons.ChevronRight className="w-5 h-5" />
                        </Link>

                        <Link
                            href="#how"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-border-default dark:border-border-darkDefault text-text-primary dark:text-text-darkPrimary font-medium hover:bg-surface-subtle dark:hover:bg-surface-darkSubtle transition"
                        >
                            How it Works
                        </Link>
                    </div>
                </div>

                {/* ================= Mock UI Card ================= */}
                <div className="max-w-6xl mx-auto px-6 pb-24">
                    <div className="relative rounded-3xl bg-surface-subtle dark:bg-surface-darkSubtle border border-border-default dark:border-border-darkDefault shadow-xl overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-10">
                            {/* Left Chat Skeleton */}
                            <div className="md:col-span-2 space-y-4">
                                <div className="h-10 w-40 rounded-lg bg-border-default dark:bg-surface-darkElevated" />
                                <div className="h-28 rounded-xl bg-surface-base dark:bg-surface-darkElevated border border-border-default dark:border-border-darkDefault" />
                                <div className="h-24 rounded-xl bg-surface-base dark:bg-surface-darkElevated border border-border-default dark:border-border-darkDefault" />
                            </div>

                            {/* Right Secure Panel */}
                            <div className="rounded-2xl bg-brand-muted dark:bg-brand-mutedDark border border-brand-muted dark:border-brand-mutedDark flex flex-col items-center justify-center p-6">
                                <div className="w-14 h-14 rounded-full bg-brand-primary/20 flex items-center justify-center mb-4">
                                    <Icons.Lock className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark" />
                                </div>
                                <div className="h-2 w-32 bg-brand-primary/20 rounded mb-2" />
                                <div className="h-2 w-24 bg-brand-primary/20 rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <RiskSection />
            <StepsSection />
            <PrivacyFoundationSection />
            <FinalCTASection />
        </main>
    );
}
