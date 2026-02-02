import { Icons } from "@/components/icons";

export default function StepsSection() {
    return (
        <section id="how" className="relative bg-surface-subtle dark:bg-surface-darkSubtle text-text-primary dark:text-text-darkPrimary">
            <div className="max-w-7xl mx-auto px-6 py-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* ================= Left Content ================= */}
                    <div>
                        <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-text-primary dark:text-text-darkPrimary">
                            Four simple steps to total
                            <br />
                            privacy.
                        </h2>

                        <div className="mt-14 space-y-10">
                            {/* Step 01 */}
                            <div className="flex gap-6">
                                <span className="text-brand-primary dark:text-brand-primaryDark font-bold text-xl">01</span>
                                <div>
                                    <h4 className="font-semibold text-lg text-text-primary dark:text-text-darkPrimary">
                                        Create Private ID
                                    </h4>
                                    <p className="mt-1 text-text-secondary dark:text-text-darkMuted max-w-sm">
                                        Generate a unique, temporary identifier in one click.
                                    </p>
                                </div>
                            </div>

                            {/* Step 02 */}
                            <div className="flex gap-6">
                                <span className="text-brand-primary dark:text-brand-primaryDark font-bold text-xl">02</span>
                                <div>
                                    <h4 className="font-semibold text-lg text-text-primary dark:text-text-darkPrimary">
                                        Connect Devices
                                    </h4>
                                    <p className="mt-1 text-text-secondary dark:text-text-darkMuted max-w-sm">
                                        Scan a QR or use your ID on any untrusted hardware.
                                    </p>
                                </div>
                            </div>

                            {/* Step 03 */}
                            <div className="flex gap-6">
                                <span className="text-brand-primary dark:text-brand-primaryDark font-bold text-xl">03</span>
                                <div>
                                    <h4 className="font-semibold text-lg text-text-primary dark:text-text-darkPrimary">
                                        Chat &amp; Share
                                    </h4>
                                    <p className="mt-1 text-text-secondary dark:text-text-darkMuted max-w-sm">
                                        Collaborate securely in high-speed, encrypted rooms.
                                    </p>
                                </div>
                            </div>

                            {/* Step 04 */}
                            <div className="flex gap-6">
                                <span className="text-brand-primary dark:text-brand-primaryDark font-bold text-xl">04</span>
                                <div>
                                    <h4 className="font-semibold text-lg text-text-primary dark:text-text-darkPrimary">
                                        Wipe &amp; Exit
                                    </h4>
                                    <p className="mt-1 text-text-secondary dark:text-text-darkMuted max-w-sm">
                                        Instant cleanup leaving zero digital footprints behind.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ================= Right Chat Mock ================= */}
                    <div className="relative">
                        <div className="rounded-3xl bg-surface-base dark:bg-surface-darkElevated border border-border-default dark:border-border-darkDefault shadow-2xl p-8">
                            {/* Window Header */}
                            <div className="flex items-center gap-2 mb-6">
                                <span className="w-3 h-3 rounded-full bg-status-danger" />
                                <span className="w-3 h-3 rounded-full bg-status-warning" />
                                <span className="w-3 h-3 rounded-full bg-status-success" />
                                <span className="ml-auto text-xs px-3 py-1 rounded-full bg-surface-subtle dark:bg-surface-darkSubtle text-text-secondary dark:text-text-darkSecondary tracking-wider">
                                    ENCRYPTED SESSION
                                </span>
                            </div>

                            {/* Chat Messages */}
                            <div className="space-y-6">
                                <div className="ml-auto max-w-xs rounded-2xl bg-brand-primary dark:bg-brand-primaryDark text-text-inverse px-5 py-3 text-sm">
                                    Is this session safe to close?
                                </div>

                                <div className="max-w-sm rounded-2xl bg-surface-subtle dark:bg-surface-darkSubtle px-5 py-3 text-sm text-text-primary dark:text-text-darkPrimary">
                                    Absolutely. Hit &apos;Wipe&apos; and everything is purged
                                    from this device instantly.
                                </div>
                            </div>

                            <div className="border-t border-border-default dark:border-border-darkDefault my-8" />

                            {/* Wipe Button */}
                            <button className="flex items-center justify-center gap-2 w-full max-w-xs mx-auto py-3 rounded-xl bg-status-danger/10 text-status-danger border border-status-danger/30 hover:bg-status-danger/20 transition">
                                <Icons.LogOut className="w-5 h-5" />
                                Wipe Session Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= Feature Strip ================= */}
            <div className="bg-surface-base dark:bg-surface-darkBase text-text-primary dark:text-text-darkPrimary border-t border-border-default dark:border-border-darkDefault">
                <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    <Feature
                        title="Guest Mode"
                        desc="Pure ephemeral experience for one-time use."
                        icon={<Icons.Shield className="w-6 h-6" />}
                    />
                    <Feature
                        title="Real-time Messaging"
                        desc="Instant sync across all connected sessions."
                        icon={<Icons.Zap className="w-6 h-6" />}
                    />
                    <Feature
                        title="Secure Cleanup"
                        desc="Military-grade data purging on session exit."
                        icon={<Icons.Lock className="w-6 h-6" />}
                    />
                    <Feature
                        title="Device Handoff"
                        desc="Move your session from desktop to mobile seamlessly."
                        icon={<Icons.ExternalLink className="w-6 h-6" />}
                    />
                </div>
            </div>
        </section>
    );
}

/* ================= Feature Item ================= */
function Feature({
    title,
    desc,
    icon,
}: {
    title: string;
    desc: string;
    icon: React.ReactNode;
}) {
    return (
        <div>
            <div className="w-12 h-12 rounded-xl bg-brand-muted dark:bg-brand-mutedDark flex items-center justify-center text-brand-primary dark:text-brand-primaryDark mb-4">
                {icon}
            </div>
            <h4 className="font-semibold text-text-primary dark:text-text-darkPrimary">{title}</h4>
            <p className="mt-2 text-sm text-text-secondary dark:text-text-darkMuted">{desc}</p>
        </div>
    );
}
