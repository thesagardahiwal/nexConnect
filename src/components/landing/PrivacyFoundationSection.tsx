import { Icons } from "@/components/icons";
import FadeIn from "@/components/animations/FadeIn";

export default function PrivacyFoundationSection() {
    return (
        <section id="privacy" className="relative overflow-hidden bg-brand-primary dark:bg-surface-darkBase">
            {/* Subtle dotted background */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_0.5px,transparent_0.5px)] [background-size:24px_24px]" />

            <div className="relative max-w-5xl mx-auto px-6 py-28 text-center text-text-inverse">
                {/* Shield Icon */}
                <FadeIn>
                    <div className="flex justify-center mb-6">
                        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
                            <Icons.Shield className="w-6 h-6 text-white" />
                        </div>
                    </div>
                </FadeIn>

                {/* Heading */}
                <FadeIn delay={0.1}>
                    <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                        Privacy isn&apos;t a feature, it&apos;s our
                        <br />
                        foundation.
                    </h2>
                </FadeIn>

                {/* Description */}
                <FadeIn delay={0.2}>
                    <p className="mt-8 max-w-3xl mx-auto text-brand-muted text-base sm:text-lg leading-relaxed">
                        NexConnect never asks for your personal information. No email, no
                        phone, no social accounts. We use session-based encryption that lives
                        and dies with your window. Built specifically for untrusted devices
                        and high-security needs.
                    </p>
                </FadeIn>

                {/* Trust Points */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm sm:text-base">
                    <FadeIn delay={0.3} direction="up">
                        <TrustItem text="No Credentials Exposed" />
                    </FadeIn>
                    <FadeIn delay={0.4} direction="up">
                        <TrustItem text="Zero Tracker Policy" />
                    </FadeIn>
                    <FadeIn delay={0.5} direction="up">
                        <TrustItem text="User-Controlled Visibility" />
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

/* ================= Trust Item ================= */
function TrustItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center text-sm">
                <Icons.Check className="w-3.5 h-3.5 text-white" />
            </span>
            <span className="font-medium">{text}</span>
        </div>
    );
}
