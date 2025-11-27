'use client';

import React, { useState, useEffect } from 'react';
import styles from '../page.module.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Smartphone, Monitor, Layout, Code } from 'lucide-react';

export default function ResponsiveGenerator() {
    const [url, setUrl] = useState('');
    const [aspectRatio, setAspectRatio] = useState('16/9');
    const [method, setMethod] = useState('modern'); // modern (aspect-ratio), legacy (padding-bottom)
    const [maxWidth, setMaxWidth] = useState('100%');
    const [generatedCode, setGeneratedCode] = useState('');

    useEffect(() => {
        if (!url) {
            setGeneratedCode('');
            return;
        }

        let src = url;
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
                            />

                            <div>
                                <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Layout size={16} /> Aspect Ratio
                                </h4>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                                    {['16/9', '4/3', '1/1', '21/9'].map((ratio) => (
                                        <button
                                            key={ratio}
                                            onClick={() => setAspectRatio(ratio)}
                                            style={{
                                                padding: '0.5rem 1rem',
                                                borderRadius: '0.5rem',
                                                border: '1px solid hsl(var(--border))',
                                                background: aspectRatio === ratio ? 'hsl(var(--primary))' : 'transparent',
                                                color: aspectRatio === ratio ? 'white' : 'inherit',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {ratio.replace('/', ':')}
                                        </button>
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
                                {url ? (
                                    <div
                                        className={styles.iframeWrapper}
                                        style={{
                                            width: '100%',
                                            maxWidth: maxWidth,
                                            aspectRatio: aspectRatio.replace(':', '/'),
                                            margin: '0 auto'
                                        }}
                                    >
                                        <iframe
                                            src={url.startsWith('http') ? url : `https://${url}`}
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                        />
                                    </div>
                                ) : (
                                    <div className={styles.emptyState}>
                                        <Monitor size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                                        <p>Enter a URL to test responsiveness</p>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    {generatedCode && (
                        <Card className="glass-card">
                            <CardHeader>
                                <CardTitle>Generated Code</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CodeBlock code={generatedCode} language="html" />
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </main>
    );
}
