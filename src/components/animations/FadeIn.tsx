'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    delay?: number;
    duration?: number;
    className?: string;
    fullWidth?: boolean;
}

export default function FadeIn({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.5,
    className = '',
    fullWidth = false,
}: FadeInProps) {
    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration,
                delay,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className={`${className} ${fullWidth ? 'w-full' : ''}`}
        >
            {children}
        </motion.div>
    );
}
