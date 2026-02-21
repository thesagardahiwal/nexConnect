import { useEffect, useState } from 'react';
import { Icons } from '@/components/icons';
import { useSession } from '@/hooks/useSession';

interface ProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
    const { user, updateProfile, logout } = useSession();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!isOpen) return;
        setName(user?.username || '');
        setPassword('');
        setConfirm('');
        setError('');
    }, [isOpen, user?.username]);

    if (!isOpen) return null;

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!name.trim()) {
            setError('Name is required.');
            return;
        }
        if (password && password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }
        if (password !== confirm) {
            setError('Passwords do not match.');
            return;
        }

        setSaving(true);
        try {
            await updateProfile({ username: name.trim(), password: password || undefined });
            onClose();
        } catch (err: any) {
            setError(err?.message || 'Failed to update profile.');
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm join-backdrop">
            <div className="bg-surface-base dark:bg-surface-darkElevated w-full max-w-md rounded-2xl p-6 shadow-2xl border border-border-default dark:border-border-darkDefault join-modal-pop">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-text-primary dark:text-text-darkPrimary">
                        {user?.isGuest ? 'Upgrade Account' : 'Edit Profile'}
                    </h3>
                    <button onClick={onClose} className="text-text-secondary dark:text-text-darkSecondary hover:text-text-primary dark:hover:text-text-darkPrimary">
                        <Icons.Close className="w-6 h-6" />
                    </button>
                </div>
                <p className="text-sm text-text-secondary dark:text-text-darkSecondary mb-6">
                    {user?.isGuest ? 'Set a name and password to make this account personal.' : 'Update your display name or password.'}
                </p>

                <form onSubmit={handleSave} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-text-secondary dark:text-text-darkSecondary mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-xl bg-surface-subtle dark:bg-surface-darkSubtle border-none text-text-primary dark:text-text-darkPrimary placeholder-text-muted dark:placeholder-text-darkMuted focus:ring-2 focus:ring-brand-primary outline-none transition"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-secondary dark:text-text-darkSecondary mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Create a password"
                            className="w-full px-4 py-3 rounded-xl bg-surface-subtle dark:bg-surface-darkSubtle border-none text-text-primary dark:text-text-darkPrimary placeholder-text-muted dark:placeholder-text-darkMuted focus:ring-2 focus:ring-brand-primary outline-none transition"
                        />
                        <p className="mt-1 text-[10px] text-text-secondary dark:text-text-darkSecondary">
                            Stored on this device if your backend doesn’t support password fields yet.
                        </p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-secondary dark:text-text-darkSecondary mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            value={confirm}
                            onChange={e => setConfirm(e.target.value)}
                            placeholder="Repeat password"
                            className="w-full px-4 py-3 rounded-xl bg-surface-subtle dark:bg-surface-darkSubtle border-none text-text-primary dark:text-text-darkPrimary placeholder-text-muted dark:placeholder-text-darkMuted focus:ring-2 focus:ring-brand-primary outline-none transition"
                        />
                    </div>

                    {error && <p className="text-sm text-status-danger dark:text-status-dangerDark">{error}</p>}

                    <div className="flex gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-3 rounded-xl bg-surface-subtle dark:bg-surface-darkSubtle text-text-primary dark:text-text-darkPrimary font-semibold hover:bg-border-default dark:hover:bg-border-darkDefault transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={logout}
                            className="px-4 py-3 rounded-xl bg-surface-subtle dark:bg-surface-darkSubtle text-text-secondary dark:text-text-darkSecondary font-semibold hover:text-status-danger dark:hover:text-status-dangerDark transition"
                        >
                            Logout
                        </button>
                        <button
                            type="submit"
                            disabled={saving || !name.trim()}
                            className="flex-1 py-3 rounded-xl bg-brand-primary dark:bg-brand-primaryDark text-white font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {saving ? <Icons.Loader className="w-5 h-5 animate-spin" /> : 'Save'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
