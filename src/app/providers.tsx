'use client';


import { ThemeProvider } from '@/context/ThemeContext';
import { ReduxProvider } from '@/components/ReduxProvider';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ReduxProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </ReduxProvider>
    );
}
