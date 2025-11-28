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
            <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>{label}</label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
                <div style={{ flex: 1 }}>
                    <Input
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        type={type}
                        style={{ margin: 0 }} // Override any default margin from Input if necessary
                    />
                </div>
                <select
                    value={unit}
                    onChange={(e) => onUnitChange(e.target.value)}
                    style={{
                        width: '80px',
                        padding: '0.5rem',
                        borderRadius: '0.5rem',
                        border: '1px solid hsl(var(--border))',
                        backgroundColor: 'hsl(var(--background))',
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
