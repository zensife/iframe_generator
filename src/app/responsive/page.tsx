'use client';

import React, { useState, useEffect } from 'react';
import styles from '../page.module.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Smartphone, Monitor, Layout, Code, Tablet, Laptop } from 'lucide-react';

export default function ResponsiveGenerator() {
    const [url, setUrl] = useState('');
    const [aspectRatio, setAspectRatio] = useState('16/9');
    const [method, setMethod] = useState('modern'); // modern (aspect-ratio), legacy (padding-bottom)
    const [maxWidth, setMaxWidth] = useState('100%');
    const [generatedCode, setGeneratedCode] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        // Default to example.com if URL is empty
        const effectiveUrl = url.trim() || 'https://example.com';

        // Simple validation for the effective URL (skip if it's the default)
        if (url && url.includes(' ')) {
            setError('URL cannot contain spaces');
            // We still generate code for the invalid URL to show feedback, or we could stop. 
            // But usually we might want to show what it looks like. 
            // However, let's stick to the previous logic: if error, maybe show default or nothing?
            // Let's show the code for the *input* URL but keep error state.
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

    return (
        <main className={styles.main}>
            <div className={styles.gradientBg} />

            <section className={styles.hero}>
                <h1 className={styles.title}>Responsive Iframe Generator</h1>
                <p className={styles.subtitle}>
                    Make any iframe responsive. Choose between modern CSS aspect-ratio or the classic padding-bottom hack.
                </p>
            </section>

            <div className={styles.grid}>
                {/* Controls */}
                <div className={styles.controls}>
                    <Card className="glass-card">
                        <CardHeader>
                            <CardTitle>Responsive Settings</CardTitle>
                        </CardHeader>
                        <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                            <Input
                                label="Source URL"
                                placeholder="https://example.com"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                error={error}
                            />

                            <div>
                                <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Layout size={16} /> Aspect Ratio
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
                                    <Code size={16} /> Implementation Method
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
                                            <span style={{ display: 'block', fontWeight: 500 }}>Modern CSS</span>
                                            <span style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>aspect-ratio property</span>
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
                                            <span style={{ display: 'block', fontWeight: 500 }}>Legacy Hack</span>
                                            <span style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>padding-bottom wrapper</span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Smartphone size={16} /> Max Width
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
                <div className={styles.previewContainer}>
                    <Card className={`glass-card ${styles.previewCard}`}>
                        <CardHeader>
                            <CardTitle>Preview</CardTitle>
                        </CardHeader>
                        <CardContent style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div className={styles.previewFrame}>
                                <div
                                    key={aspectRatio} // Force re-render to ensure aspect-ratio change is applied reliably
                                    className={styles.iframeWrapper}
                                    style={{
                                        width: '100%',
                                        maxWidth: maxWidth,
                                        aspectRatio: aspectRatio.replace(':', '/'),
                                        margin: '0 auto',
                                        backgroundColor: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        overflow: 'hidden',
                                        transition: 'none' // Disable transition to prevent layout glitches during resize
                                    }}
                                >
                                    {url && !error ? (
                                        <iframe
                                            src={url.startsWith('http') ? url : `https://${url}`}
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                        />
                                    ) : (
                                        <div className={styles.emptyState} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                            <Monitor size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                                            <p>Enter a URL to test responsiveness</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="glass-card">
                        <CardHeader>
                            <CardTitle>Generated Code</CardTitle>
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
