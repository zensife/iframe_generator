'use client';

import React, { useState, useEffect } from 'react';
import styles from '../page.module.css'; // Reuse main styles for consistency
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { MapPin, ZoomIn, Layers, Globe } from 'lucide-react';

export default function GoogleMapsGenerator() {
    const [address, setAddress] = useState('Eiffel Tower, Paris');
    const [zoom, setZoom] = useState('14');
    const [mapType, setMapType] = useState('roadmap'); // roadmap, satellite
    const [width, setWidth] = useState('600');
    const [height, setHeight] = useState('450');
    const [generatedCode, setGeneratedCode] = useState('');

    useEffect(() => {
        if (!address) {
            setGeneratedCode('');
            return;
        }

        const encodedAddress = encodeURIComponent(address);
        const typeParam = mapType === 'satellite' ? '&t=k' : '';
        const src = `https://maps.google.com/maps?q=${encodedAddress}&t=${mapType === 'satellite' ? 'k' : ''}&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

        const code = `<iframe
  width="${width}"
  height="${height}"
  style="border:0"
  loading="lazy"
  allowFullScreen
  src="${src}">
</iframe>`;

        setGeneratedCode(code);
    }, [address, zoom, mapType, width, height]);

    return (
        <main className={styles.main}>
            <div className={styles.gradientBg} />

            <section className={styles.hero}>
                <h1 className={styles.title}>Google Maps Generator</h1>
                <p className={styles.subtitle}>
                    Create custom Google Maps embeds for your website with address search and styling options.
                </p>
            </section>

            <div className={styles.grid}>
                {/* Controls */}
                <div className={styles.controls}>
                    <Card className="glass-card">
                        <CardHeader>
                            <CardTitle>Map Settings</CardTitle>
                        </CardHeader>
                        <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                            <Input
                                label="Location / Address"
                                placeholder="e.g. Times Square, New York"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />

                            <div>
                                <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <ZoomIn size={16} /> Zoom Level
                                </h4>
                                <input
                                    type="range"
                                    min="1"
                                    max="20"
                                    value={zoom}
                                    onChange={(e) => setZoom(e.target.value)}
                                    style={{ width: '100%' }}
                                />
                                <div style={{ textAlign: 'right', fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>
                                    Level: {zoom}
                                </div>
                            </div>

                            <div>
                                <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Layers size={16} /> Map Type
                                </h4>
                                <select
                                    className={styles.select}
                                    value={mapType}
                                    onChange={(e) => setMapType(e.target.value)}
                                    style={{ width: '100%', height: '2.5rem', borderRadius: '0.5rem', padding: '0.5rem' }}
                                >
                                    <option value="roadmap">Roadmap (Standard)</option>
                                    <option value="satellite">Satellite</option>
                                </select>
                            </div>

                            <div>
                                <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Globe size={16} /> Dimensions
                                </h4>
                                <div className={styles.row}>
                                    <Input
                                        label="Width (px)"
                                        value={width}
                                        onChange={(e) => setWidth(e.target.value)}
                                        type="number"
                                    />
                                    <Input
                                        label="Height (px)"
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                        type="number"
                                    />
                                </div>
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
                                {address ? (
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        loading="lazy"
                                        allowFullScreen
                                        src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=${mapType === 'satellite' ? 'k' : ''}&z=${zoom}&ie=UTF8&iwloc=&output=embed`}
                                    />
                                ) : (
                                    <div className={styles.emptyState}>
                                        <MapPin size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                                        <p>Enter a location to see the map</p>
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
