import Link from "next/link";
import { Icons } from "@/components/icons";

export default function FinalCTASection() {
    return (
        <section className="bg-surface-base dark:bg-surface-darkBase py-28">
            <div className="max-w-7xl mx-auto px-6">
                {/* ================= CTA Card ================= */}
                <div className="relative overflow-hidden rounded-[48px] bg-brand-primary dark:bg-surface-darkElevated shadow-2xl">
                    {/* 
                        Note: This card was a dark gradient "from-[#050b1d]...".
                        Let's standardize to Brand Primary or Surface Elevated (Dark).
                        If we use `bg-brand-primary` it will be blue.
                        If we use `dark:bg-surface-elevated` it will be dark gray/black.
                        The text inside should be `text-inverse` (white).
                     */}
                    <div className="px-10 py-20 text-center text-text-inverse">
                        <h2 className="text-3xl sm:text-4xl font-extrabold">
                            Ready for a safer chat?
                        </h2>

                        <p className="mt-4 max-w-xl mx-auto text-brand-muted">
                            Join thousands of privacy-conscious users who trust NexConnect
                            for their daily secure communications.
                        </p>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                href="/session"
                                className="px-8 py-4 rounded-xl bg-white text-brand-primary font-semibold hover:bg-gray-100 transition shadow-lg"
                            >
                                Create Private Room
                            </Link>

                            <Link
                                href="/docs"
                                className="px-8 py-4 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition"
                            >
                                Documentation
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ================= Footer ================= */}
                <footer className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-text-secondary dark:text-text-darkMuted">
                    {/* Left */}
                    <div className="flex items-center gap-2 font-medium text-text-primary dark:text-text-darkPrimary">
                        <Icons.Shield className="w-5 h-5 text-brand-primary dark:text-brand-primaryDark" />
                        NexConnect
                    </div>

                    {/* Center */}
                    <div className="text-center">
                        © 2024 NexConnect. All rights reserved. Built for the privacy-first
                        web.
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-6">
                        <Link target="_blank" href="https://x.com/SagarDahiwal07" className="hover:text-text-primary dark:hover:text-text-darkPrimary">
                            Twitter
                        </Link>
                        <Link target="_blank" href="https://github.com/thesagardahiwal" className="hover:text-text-primary dark:hover:text-text-darkPrimary">
                            GitHub
                        </Link>
                        <Link href="#" className="hover:text-text-primary dark:hover:text-text-darkPrimary">
                            Privacy Policy
                        </Link>
                    </div>
                </footer>
            </div>
        </section>
    );
}
