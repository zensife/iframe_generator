import React from 'react';
import { Input } from './Input';

interface DimensionsInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    unit: string;
    onUnitChange: (unit: string) => void;
    type?: string;
}

export function DimensionsInput({
    label,
    value,
    onChange,
    unit,
    onUnitChange,
    type = 'number'
}: DimensionsInputProps) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
                <div style={{ flex: 1 }}>
                    <Input
                        label={label}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        type={type}
                        style={{ margin: 0 }}
                    />
                </div>
                <select
                    value={unit}
                    onChange={(e) => onUnitChange(e.target.value)}
                    aria-label={`${label} unit`}
                    style={{
                        width: '80px',
                        padding: '0.5rem',
                        borderRadius: '0.5rem',
                        border: '1px solid hsl(var(--border))',
                        backgroundColor: 'transparent',
                        color: 'hsl(var(--foreground))',
                        fontSize: '0.875rem',
                        cursor: 'pointer'
                    }}
                >
                    <option value="px">px</option>
                    <option value="%">%</option>
                </select>
            </div>
        </div>
    );
}
