import React from 'react';
import styles from './Card.module.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className = '', children, ...props }, ref) => {
        return (
            <div ref={ref} className={`${styles.card} ${className}`} {...props}>
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';

export const CardHeader = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className = '', children, ...props }, ref) => {
        return (
            <div ref={ref} className={`${styles.header} ${className}`} {...props}>
                {children}
            </div>
        );
    }
);
CardHeader.displayName = 'CardHeader';

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
    ({ className = '', children, as: Tag = 'h3', ...props }, ref) => {
        return (
            <Tag ref={ref} className={`${styles.title} ${className}`} {...props}>
                {children}
            </Tag>
        );
    }
);
CardTitle.displayName = 'CardTitle';

export const CardContent = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className = '', children, ...props }, ref) => {
        return (
            <div ref={ref} className={`${styles.content} ${className}`} {...props}>
                {children}
            </div>
        );
    }
);
CardContent.displayName = 'CardContent';
