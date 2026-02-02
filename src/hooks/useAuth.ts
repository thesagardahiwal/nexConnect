import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { initializeApp } from '@/store/slices/authSlice';

export function useAuth() {
    const dispatch = useAppDispatch();
    const { userId, loading, error, initialized } = useAppSelector((state) => state.auth);

    useEffect(() => {
        if (!initialized) {
            dispatch(initializeApp());
        }
    }, [initialized, dispatch]);

    return {
        userId,
        loading,
        error,
        initialized
    };
}
