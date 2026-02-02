import { Icons } from "@/components/icons";
import FadeIn from "@/components/animations/FadeIn";

export default function RiskSection() {
    return (
        <section id="features" className="bg-surface-subtle dark:bg-surface-darkSubtle py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* ================= Left Content ================= */}
                    {/* ================= Left Content ================= */}
                    <div className="space-y-4">
                        <FadeIn direction="right">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary dark:text-text-darkPrimary leading-tight">
                                Why traditional chat is a <br />
                                risk on shared devices.
                            </h2>

                            <p className="mt-4 text-text-secondary dark:text-text-darkMuted max-w-md">
                                Logging into personal accounts on public or shared computers
                                exposes you to more than just hackers.
                            </p>
                        </FadeIn>

                        {/* Risk List */}
                        <div className="mt-10 space-y-4">
                            {/* Item 1 */}
                            <FadeIn delay={0.2} direction="right">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-base dark:bg-surface-darkElevated border border-border-default dark:border-border-darkDefault shadow-sm">
                                    <div className="w-10 h-10 rounded-full bg-status-danger/10 flex items-center justify-center">
                                        <Icons.Shield className="w-5 h-5 text-status-danger" />
                                    </div>
                                    <p className="text-text-primary dark:text-text-darkPrimary font-medium">
                                        Public computers saving your passwords
                                    </p>
                                </div>
                            </FadeIn>

                            {/* Item 2 */}
                            <FadeIn delay={0.3} direction="right">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-base dark:bg-surface-darkElevated border border-border-default dark:border-border-darkDefault shadow-sm">
                                    <div className="w-10 h-10 rounded-full bg-status-danger/10 flex items-center justify-center">
                                        <Icons.Globe className="w-5 h-5 text-status-danger" />
                                    </div>
                                    <p className="text-text-primary dark:text-text-darkPrimary font-medium">
                                        Tracking cookies following you everywhere
                                    </p>
                                </div>
                            </FadeIn>

                            {/* Item 3 */}
                            <FadeIn delay={0.4} direction="right">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-base dark:bg-surface-darkElevated border border-border-default dark:border-border-darkDefault shadow-sm">
                                    <div className="w-10 h-10 rounded-full bg-status-danger/10 flex items-center justify-center">
                                        <Icons.User className="w-5 h-5 text-status-danger" />
                                    </div>
                                    <p className="text-text-primary dark:text-text-darkPrimary font-medium">
                                        Login risks on shared office devices
                                    </p>
                                </div>
                            </FadeIn>

                            {/* Item 4 */}
                            <FadeIn delay={0.5} direction="right">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-base dark:bg-surface-darkElevated border border-border-default dark:border-border-darkDefault shadow-sm">
                                    <div className="w-10 h-10 rounded-full bg-status-danger/10 flex items-center justify-center">
                                        <Icons.Close className="w-5 h-5 text-status-danger" />
                                    </div>
                                    <p className="text-text-primary dark:text-text-darkPrimary font-medium">
                                        Data leakage through persistent sessions
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>

                    {/* ================= Right Mock Card ================= */}
                    <FadeIn direction="left" delay={0.2} className="relative">
                        <div className="rounded-2xl bg-white border border-gray-200 shadow-lg p-6">
                            {/* Warning Banner */}
                            <div className="rounded-xl bg-red-50 border border-red-100 px-5 py-4 mb-6">
                                <p className="text-red-600 font-semibold italic">
                                    “Are you still logged in?”
                                </p>
                                <p className="text-red-500 text-sm mt-1">
                                    The question that haunts shared computer users.
                                </p>
                            </div>

                            {/* Chat Skeleton */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-200" />
                                    <div className="flex-1 space-y-2">
                                        <div className="h-3 w-40 rounded bg-gray-200" />
                                        <div className="h-3 w-64 rounded bg-gray-100" />
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-200" />
                                    <div className="flex-1 space-y-2">
                                        <div className="h-3 w-36 rounded bg-gray-200" />
                                        <div className="h-3 w-52 rounded bg-gray-100" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                    {/* ================= End Right ================= */}
                </div>
            </div>
        </section>
    );
}
