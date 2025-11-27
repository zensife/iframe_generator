'use client';

import React, { useState, useEffect } from 'react';
import styles from '../page.module.css'; // Reuse main styles for consistency
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Button } from '@/components/ui/Button';
import { MapPin, ZoomIn, Layers, Globe } from 'lucide-react';

export default function GoogleMapsGenerator() {
    const [address, setAddress] = useState('Eiffel Tower, Paris');
    const [zoom, setZoom] = useState('14');
    const [mapType, setMapType] = useState('roadmap'); // roadmap, satellite, hybrid, terrain
    const [width, setWidth] = useState('600');
    const [widthUnit, setWidthUnit] = useState('px');
    const [height, setHeight] = useState('450');
    const [heightUnit, setHeightUnit] = useState('px');
    const [isResponsive, setIsResponsive] = useState(false);
    const [generatedCode, setGeneratedCode] = useState('');
    const [isLoadingLocation, setIsLoadingLocation] = useState(false);

    const setDeviceDimensions = (type: 'mobile' | 'tablet' | 'desktop') => {
        setWidthUnit('px');
        setHeightUnit('px');
        switch (type) {
            case 'mobile':
                setWidth('375');
                setHeight('667');
                break;
            case 'tablet':
                setWidth('768');
                setHeight('1024');
                break;
            case 'desktop':
                setWidth('1024');
                setHeight('768');
                break;
        }
    };

    const handleCurrentLocation = () => {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
            return;
        }

        setIsLoadingLocation(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setAddress(`${latitude}, ${longitude}`);
                setIsLoadingLocation(false);
            },
            (error) => {
                console.error('Error getting location:', error);
                alert('Unable to retrieve your location');
                setIsLoadingLocation(false);
            }
        );
    };

    useEffect(() => {
        if (!address) {
            setGeneratedCode('');
            return;
        }

        const encodedAddress = encodeURIComponent(address);
        let typeCode = '';
        switch (mapType) {
            case 'satellite': typeCode = 'k'; break;
            case 'hybrid': typeCode = 'h'; break;
            case 'terrain': typeCode = 'p'; break;
            default: typeCode = ''; // roadmap
        }

        const src = `https://maps.google.com/maps?q=${encodedAddress}&t=${typeCode}&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

        const widthAttr = widthUnit === 'px' ? width : `${width}%`;
        const heightAttr = heightUnit === 'px' ? height : `${height}%`;

        let iframeTag = `<iframe
  width="${isResponsive ? '100%' : widthAttr}"
  height="${isResponsive ? '100%' : heightAttr}"
  style="border:0"
  loading="lazy"
  allowFullScreen
  src="${src}">
</iframe>`;

        if (isResponsive) {
            const w = parseFloat(width);
            const h = parseFloat(height);
            const ratio = (w && h) ? `${w}/${h}` : '4/3';

            const wrapper = `<div style="position:relative;width:100%;aspect-ratio:${ratio};">
  ${iframeTag.replace(/\n/g, '\n  ')}
</div>`;
            setGeneratedCode(wrapper);
        } else {
            setGeneratedCode(iframeTag);
        }
    }, [address, zoom, mapType, width, widthUnit, height, heightUnit, isResponsive]);

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

                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                    <label className={styles.label} style={{ marginBottom: 0 }}>Location / Address</label>
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        onClick={handleCurrentLocation}
                                        disabled={isLoadingLocation}
                                        style={{ fontSize: '0.75rem', height: 'auto', padding: '0.25rem 0.5rem' }}
                                    >
                                        {isLoadingLocation ? 'Locating...' : '📍 Use Current Location'}
                                    </Button>
                                </div>
                                <Input
                                    placeholder="e.g. Times Square, New York"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>

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
                                    <option value="hybrid">Hybrid</option>
                                    <option value="terrain">Terrain</option>
                                </select>
                            </div>

                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                    <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 0 }}>
                                        <Globe size={16} /> Dimensions
                                    </h4>
                                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                                        <Button size="sm" variant="ghost" onClick={() => setDeviceDimensions('mobile')} title="Mobile">Mobile</Button>
                                        <Button size="sm" variant="ghost" onClick={() => setDeviceDimensions('tablet')} title="Tablet">Tablet</Button>
                                        <Button size="sm" variant="ghost" onClick={() => setDeviceDimensions('desktop')} title="Desktop">Desktop</Button>
                                    </div>
                                </div>

                                <div className={styles.row}>
                                    <Input
                                        label="Width"
                                        value={width}
                                        onChange={(e) => setWidth(e.target.value)}
                                        type="number"
                                    />
                                    <select
                                        className={styles.select}
                                        value={widthUnit}
                                        onChange={(e) => setWidthUnit(e.target.value)}
                                        style={{ marginTop: '1.5rem', height: '2.5rem', borderRadius: '0.5rem' }}
                                    >
                                        <option value="px">px</option>
                                        <option value="%">%</option>
                                    </select>
                                </div>
                                <div className={styles.row} style={{ marginTop: '1rem' }}>
                                    <Input
                                        label="Height"
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                        type="number"
                                    />
                                    <select
                                        className={styles.select}
                                        value={heightUnit}
                                        onChange={(e) => setHeightUnit(e.target.value)}
                                        style={{ marginTop: '1.5rem', height: '2.5rem', borderRadius: '0.5rem' }}
                                    >
                                        <option value="px">px</option>
                                        <option value="%">%</option>
                                    </select>
                                </div>

                                <div style={{ marginTop: '1rem' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', cursor: 'pointer' }}>
                                        <input
                                            type="checkbox"
                                            checked={isResponsive}
                                            onChange={(e) => setIsResponsive(e.target.checked)}
                                            style={{ width: '1rem', height: '1rem' }}
                                        />
                                        Make Responsive (Auto-resize)
                                    </label>
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
                                    <div
                                        className={styles.iframeWrapper}
                                        style={{
                                            width: widthUnit === 'px' ? `${width}px` : `${width}%`,
                                            height: heightUnit === 'px' ? `${height}px` : `${height}%`,
                                            backgroundColor: 'white',
                                        }}
                                    >
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0, display: 'block' }}
                                            loading="lazy"
                                            allowFullScreen
                                            src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=${mapType === 'satellite' ? 'k' :
                                                mapType === 'hybrid' ? 'h' :
                                                    mapType === 'terrain' ? 'p' : ''
                                                }&z=${zoom}&ie=UTF8&iwloc=&output=embed`}
                                        />
                                    </div>
                                ) : (
                                    <div className={styles.emptyState}>
                                        <MapPin size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                                        <p>Enter a location to see the map</p>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="glass-card">
                        <CardHeader>
                            <CardTitle>Generated Code</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {generatedCode ? (
                                <CodeBlock code={generatedCode} language="html" />
                            ) : (
                                <div style={{ padding: '1rem', textAlign: 'center', color: 'hsl(var(--muted-foreground))', border: '1px dashed hsl(var(--border))', borderRadius: 'var(--radius)' }}>
                                    Enter a location to generate code
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}
