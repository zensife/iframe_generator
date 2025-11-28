import React from 'react';

interface LogoProps {
    className?: string;
    size?: number;
}

export function Logo({ className = '', size = 32 }: LogoProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Main Window Frame */}
            <rect
                x="2"
                y="4"
                width="28"
                height="24"
                rx="6"
                stroke="currentColor"
                strokeWidth="2.5"
                className="text-primary"
            />

            {/* Header Bar Line */}
            <path
                d="M2 12H30"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeOpacity="0.5"
            />

            {/* Code Brackets / Content Hint */}
            <path
                d="M11 19L9 21L11 23"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M21 19L23 21L21 23"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Slash */}
            <path
                d="M17 18L15 24"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
            />
        </svg>
    );
}
