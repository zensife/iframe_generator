import React from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className = '', label, error, id, ...props }, ref) => {
        // Generate a unique ID if not provided
        const inputId = id || React.useId();

        return (
            <div className={styles.container}>
                {label && <label htmlFor={inputId} className={styles.label}>{label}</label>}
                <input
                    ref={ref}
                    id={inputId}
                    className={`${styles.input} ${error ? styles.errorInput : ''} ${className}`}
                    {...props}
                />
                {error && <span className={styles.errorMessage}>{error}</span>}
            </div>
        );
    }
);

Input.displayName = 'Input';
