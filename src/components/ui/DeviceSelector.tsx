import React from 'react';
import { Smartphone, Tablet, Monitor } from 'lucide-react';
import { Button } from './Button';

interface DeviceSelectorProps {
    onSelect: (type: 'mobile' | 'tablet' | 'desktop') => void;
}

export function DeviceSelector({ onSelect }: DeviceSelectorProps) {
    return (
        <div style={{ display: 'flex', gap: '0.5rem', backgroundColor: 'hsl(var(--muted))', padding: '0.25rem', borderRadius: '0.5rem' }}>
            <Button
                size="sm"
                variant="ghost"
                onClick={() => onSelect('mobile')}
                title="Mobile (375x667)"
                style={{ flex: 1, display: 'flex', gap: '0.5rem', justifyContent: 'center' }}
            >
                <Smartphone size={16} />
                <span className="sr-only sm:not-sr-only">Mobile</span>
            </Button>
            <Button
                size="sm"
                variant="ghost"
                onClick={() => onSelect('tablet')}
                title="Tablet (768x1024)"
                style={{ flex: 1, display: 'flex', gap: '0.5rem', justifyContent: 'center' }}
            >
                <Tablet size={16} />
                <span className="sr-only sm:not-sr-only">Tablet</span>
            </Button>
            <Button
                size="sm"
                variant="ghost"
                onClick={() => onSelect('desktop')}
                title="Desktop (1024x768)"
                style={{ flex: 1, display: 'flex', gap: '0.5rem', justifyContent: 'center' }}
            >
                <Monitor size={16} />
                <span className="sr-only sm:not-sr-only">Desktop</span>
            </Button>
        </div>
    );
}
