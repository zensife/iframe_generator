import React from 'react';
import styles from './Checkbox.module.css';
import { Check } from 'lucide-react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className = '', label, ...props }, ref) => {
        return (
            <label className={`${styles.container} ${className}`}>
                <div className={styles.checkboxWrapper}>
                    <input
                        type="checkbox"
                        ref={ref}
                        className={styles.input}
                        {...props}
                    />
                    <div className={styles.checkbox}>
                        <Check size={12} className={styles.icon} />
                    </div>
                </div>
                {label && <span className={styles.label}>{label}</span>}
            </label>
        );
    }
);

Checkbox.displayName = 'Checkbox';
