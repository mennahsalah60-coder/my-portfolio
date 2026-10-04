'use client';

import { useEffect, useRef, type ReactNode } from 'react';

interface ScrollAnimationProps {
    children: ReactNode;
    className?: string;
}

export default function ScrollAnimation({
    children,
    className = '',
}: ScrollAnimationProps) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.15,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`scrollAnimation ${className}`}>
            {children}
        </div>
    );
}