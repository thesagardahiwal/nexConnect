import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { updateUsername, updateProfile as updateProfileAction, logout as logoutAction } from '@/store/slices/authSlice';
import { useAuth } from './useAuth';

export function useSession() {
    // Ensure auth initialization logic runs
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { loading: authLoading, initialized } = useAuth();

    const dispatch = useAppDispatch();
    const { session, user, loading: sliceLoading, error } = useAppSelector((state) => state.auth);

    const createSession = async (username: string) => {
        await dispatch(updateUsername(username)).unwrap();
    };

    const updateProfile = async (payload: { username?: string; password?: string }) => {
        await dispatch(updateProfileAction(payload)).unwrap();
    };

    const logout = async () => {
        await dispatch(logoutAction()).unwrap();
    };

    // Combine loading states
    const loading = authLoading || sliceLoading || !initialized;

    // Derived authentication state
    // We trust Redux state, which is updated by checkSession/login/logout
    const isAuthenticated = !!session && session.isActive;

    return {
        session,
        user,
        loading,
        error,
        createSession,
        updateProfile,
        logout,
        isAuthenticated
    };
}
