'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import styles from '@/styles/page.module.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Smartphone, Monitor, Layout, Code, Tablet, Laptop, Maximize2, Minimize2 } from 'lucide-react';

export default function ResponsiveGenerator() {
    const t = useTranslations('responsive');
    const tHome = useTranslations('home');
    const [url, setUrl] = useState('');
    const [aspectRatio, setAspectRatio] = useState('16/9');
    const [method, setMethod] = useState('modern'); // modern (aspect-ratio), legacy (padding-bottom)
    const [maxWidth, setMaxWidth] = useState('100%');
    const [generatedCode, setGeneratedCode] = useState('');
    const [error, setError] = useState('');

    // Mobile preview scaling
    const [useScaledPreview, setUseScaledPreview] = useState(true);
    const previewContainerRef = useRef<HTMLDivElement>(null);
    const [scaleFactor, setScaleFactor] = useState(1);

    useEffect(() => {
        // Default to example.com if URL is empty
        const effectiveUrl = url.trim() || 'https://example.com';

        // Simple validation for the effective URL (skip if it's the default)
        if (url && url.includes(' ')) {
            setError('URL cannot contain spaces');
        } else {
            setError('');
        }

        let src = effectiveUrl;
        if (!src.startsWith('http')) src = 'https://' + src;

        let code = '';

        if (method === 'modern') {
            code = `<iframe
  src="${src}"
  style="width:100%;max-width:${maxWidth};aspect-ratio:${aspectRatio};border:0;"
  allowFullScreen
></iframe>`;
        } else {
            // Legacy padding-bottom hack
            const [w, h] = aspectRatio.split('/').map(Number);
            const padding = (h / w) * 100;

            code = `<div style="position:relative;width:100%;max-width:${maxWidth};padding-bottom:${padding}%;height:0;">
  <iframe
    src="${src}"
    style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
    allowFullScreen
  ></iframe>
</div>`;
        }

        setGeneratedCode(code);
    }, [url, aspectRatio, method, maxWidth]);

    // Calculate scale factor for mobile preview
    useEffect(() => {
        const calculateScale = () => {
            if (!previewContainerRef.current || typeof window === 'undefined') return;

            const containerWidth = previewContainerRef.current.offsetWidth;
            // For responsive iframe, the width is 100% of container, so we don't need scaling unless we want to simulate a wider screen?
            // Actually, for responsive iframes, they adapt to the container. 
            // But if the user wants to see how it looks on a "Desktop" size while on mobile, scaling might be useful?
            // However, the current logic for other tools was based on fixed pixel widths.
            // For responsive, let's just keep it simple: it fills the container.
            // But if maxWidth is set to something larger than container, we might want to scale?

            // Let's implement scaling if maxWidth is in pixels and larger than container
            if (maxWidth.endsWith('px')) {
                const targetWidth = parseFloat(maxWidth);
                const isMobile = window.innerWidth < 1024;
                if (isMobile && targetWidth > containerWidth - 100) {
                    const scale = Math.max(0.2, Math.min(1, (containerWidth - 100) / targetWidth));
                    setScaleFactor(scale);
                } else {
                    setScaleFactor(1);
                }
            } else {
                setScaleFactor(1);
            }
        };

        calculateScale();
        window.addEventListener('resize', calculateScale);
        return () => window.removeEventListener('resize', calculateScale);
    }, [maxWidth]);


    return (
        <main className={styles.main}>
            <div className="gradient-bg" />

            <section className={styles.hero}>
                <h1 className={styles.title}>{t('title')}</h1>
                <p className={styles.subtitle}>
                    {t('subtitle')}
                </p>
            </section>

            <div className={styles.grid}>
                {/* Controls */}
                <div className={styles.controls}>
                    <Card className="glass-card">
                        <CardHeader>
                            <CardTitle>{t('settings')}</CardTitle>
                        </CardHeader>
                        <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                            <Input
                                label={tHome('sourceUrl')}
                                placeholder="https://example.com"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                error={error}
                            />

                            <div>
                                <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Layout size={16} /> {t('aspectRatio')}
                                </h4>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                                    {['16/9', '4/3', '1/1', '21/9'].map((ratio) => (
                                        <Button
                                            key={ratio}
                                            variant={aspectRatio === ratio ? 'default' : 'outline'}
                                            size="sm"
                                            onClick={() => setAspectRatio(ratio)}
                                        >
                                            {ratio.replace('/', ':')}
                                        </Button>
                                    ))}
                                </div>
                                <Input
                                    value={aspectRatio}
                                    onChange={(e) => setAspectRatio(e.target.value)}
                                    placeholder="e.g. 16/9"
                                />
                            </div>

                            <div>
                                <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Code size={16} /> {t('method')}
                                </h4>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input
                                            type="radio"
                                            name="method"
                                            value="modern"
                                            checked={method === 'modern'}
                                            onChange={() => setMethod('modern')}
                                        />
                                        <div>
                                            <span style={{ display: 'block', fontWeight: 500 }}>{t('modernCSS')}</span>
                                            <span style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>{t('aspectRatioProperty')}</span>
                                        </div>
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input
                                            type="radio"
                                            name="method"
                                            value="legacy"
                                            checked={method === 'legacy'}
                                            onChange={() => setMethod('legacy')}
                                        />
                                        <div>
                                            <span style={{ display: 'block', fontWeight: 500 }}>{t('legacyHack')}</span>
                                            <span style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>{t('paddingWrapper')}</span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Smartphone size={16} /> {t('maxWidth')}
                                </h4>
                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setMaxWidth('100%')}
                                        title="Mobile (Full Width)"
                                    >
                                        <Smartphone size={14} style={{ marginRight: '4px' }} /> 100%
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setMaxWidth('800px')}
                                        title="Tablet"
                                    >
                                        <Tablet size={14} style={{ marginRight: '4px' }} /> 800px
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setMaxWidth('1200px')}
                                        title="Desktop"
                                    >
                                        <Laptop size={14} style={{ marginRight: '4px' }} /> 1200px
                                    </Button>
                                </div>
                                <Input
                                    value={maxWidth}
                                    onChange={(e) => setMaxWidth(e.target.value)}
                                    placeholder="e.g. 100% or 800px"
                                />
                            </div>

                        </CardContent>
                    </Card>
                </div>

                {/* Preview */}
                <div className={styles.previewContainer} ref={previewContainerRef}>
                    <Card className={`glass-card ${styles.previewCard}`}>
                        <CardHeader>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <CardTitle>{tHome('preview')}</CardTitle>
                                {scaleFactor < 1 && (
                                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                        <span style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>
                                            📱 {useScaledPreview ? `Scaled ${Math.round(scaleFactor * 100)}%` : 'Actual Size'}
                                        </span>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() => setUseScaledPreview(!useScaledPreview)}
                                            style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', height: 'auto' }}
                                        >
                                            {useScaledPreview ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
                                            {useScaledPreview ? ' Actual' : ' Scale'}
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div className={styles.previewFrame}>
                                <div
                                    key={aspectRatio} // Force re-render to ensure aspect-ratio change is applied reliably
                                    className={styles.iframeWrapper}
                                    style={{
                                        width: useScaledPreview && scaleFactor < 1 && maxWidth.endsWith('px')
                                            ? `${parseFloat(maxWidth) * scaleFactor}px`
                                            : '100%',
                                        maxWidth: useScaledPreview && scaleFactor < 1 && maxWidth.endsWith('px')
                                            ? `${parseFloat(maxWidth) * scaleFactor}px`
                                            : maxWidth,
                                        aspectRatio: aspectRatio.replace(':', '/'),
                                        margin: '0 auto',
                                        backgroundColor: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        overflow: 'hidden',
                                        transition: 'none',
                                        transform: useScaledPreview && scaleFactor < 1 ? `scale(${scaleFactor})` : 'none',
                                        transformOrigin: 'top left',
                                    }}
                                >
                                    {url && !error ? (
                                        <iframe
                                            src={url.startsWith('http') ? url : `https://${url}`}
                                            width="100%"
                                            height="100%"
                                            title="Responsive iframe preview"
                                            style={{ border: 0 }}
                                        />
                                    ) : (
                                        <div className={styles.emptyState} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                            <Monitor size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                                            <p>{t('emptyState')}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="glass-card">
                        <CardHeader>
                            <CardTitle>{tHome('generatedCode')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CodeBlock code={generatedCode} language="html" />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}
