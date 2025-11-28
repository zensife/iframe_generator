import React from 'react';
import { Smartphone, Tablet, Monitor } from 'lucide-react';
import { Button } from './Button';

interface DeviceSelectorProps {
    onSelect: (type: 'mobile' | 'tablet' | 'desktop') => void;
    currentWidth?: string;
    currentHeight?: string;
}

export function DeviceSelector({ onSelect, currentWidth, currentHeight }: DeviceSelectorProps) {
    const isActive = (w: string, h: string) => currentWidth === w && currentHeight === h;

    return (
        <div style={{
            display: 'flex',
            gap: '0.25rem',
            backgroundColor: 'hsl(var(--muted))',
            padding: '0.25rem',
            borderRadius: '0.75rem',
            border: '1px solid hsl(var(--border))'
        }}>
            <Button
                size="sm"
                variant="ghost"
                onClick={() => onSelect('mobile')}
                title="Mobile (375x667)"
                style={{
                    flex: 1,
                    display: 'flex',
                    gap: '0.5rem',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    backgroundColor: isActive('375', '667') ? 'hsl(var(--background))' : 'transparent',
                    color: isActive('375', '667') ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
                    boxShadow: isActive('375', '667') ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                    borderRadius: '0.5rem',
                    fontWeight: isActive('375', '667') ? 600 : 400
                }}
            >
                <Smartphone size={16} />
                <span className="sr-only sm:not-sr-only">Mobile</span>
            </Button>
            <Button
                size="sm"
                variant="ghost"
                onClick={() => onSelect('tablet')}
                title="Tablet (768x1024)"
                style={{
                    flex: 1,
                    display: 'flex',
                    gap: '0.5rem',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    backgroundColor: isActive('768', '1024') ? 'hsl(var(--background))' : 'transparent',
                    color: isActive('768', '1024') ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
                    boxShadow: isActive('768', '1024') ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                    borderRadius: '0.5rem',
                    fontWeight: isActive('768', '1024') ? 600 : 400
                }}
            >
                <Tablet size={16} />
                <span className="sr-only sm:not-sr-only">Tablet</span>
            </Button>
            <Button
                size="sm"
                variant="ghost"
                onClick={() => onSelect('desktop')}
                title="Desktop (1024x768)"
                style={{
                    flex: 1,
                    display: 'flex',
                    gap: '0.5rem',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    backgroundColor: isActive('1024', '768') ? 'hsl(var(--background))' : 'transparent',
                    color: isActive('1024', '768') ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
                    boxShadow: isActive('1024', '768') ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                    borderRadius: '0.5rem',
                    fontWeight: isActive('1024', '768') ? 600 : 400
                }}
            >
                <Monitor size={16} />
                <span className="sr-only sm:not-sr-only">Desktop</span>
            </Button>
        </div>
    );
}
