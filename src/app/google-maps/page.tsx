'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from '../page.module.css'; // Reuse main styles for consistency
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Button } from '@/components/ui/Button';
import { MapPin, ZoomIn, Layers, Globe, Maximize2, Minimize2 } from 'lucide-react';
import { DimensionsInput } from '@/components/ui/DimensionsInput';
import { DeviceSelector } from '@/components/ui/DeviceSelector';

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
    const [addressError, setAddressError] = useState('');

    // Mobile preview scaling
    const [useScaledPreview, setUseScaledPreview] = useState(true);
    const previewContainerRef = useRef<HTMLDivElement>(null);
    const [scaleFactor, setScaleFactor] = useState(1);

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
            setAddressError('Geolocation is not supported by your browser');
            return;
        }

        setIsLoadingLocation(true);
        setAddressError('');
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setAddress(`${latitude}, ${longitude}`);
                setIsLoadingLocation(false);
            },
            (error) => {
                console.warn('Geolocation error:', error.message);
                let msg = 'Unable to retrieve your location';
                switch (error.code) {
                    case 1: msg = 'Location permission denied'; break;
                    case 2: msg = 'Location unavailable'; break;
                    case 3: msg = 'Location request timed out'; break;
                }
                setAddressError(msg);
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

    // Calculate scale factor for mobile preview
    useEffect(() => {
        const calculateScale = () => {
            if (!previewContainerRef.current || typeof window === 'undefined') return;

            const containerWidth = previewContainerRef.current.offsetWidth;
            const iframeWidth = widthUnit === 'px' ? parseFloat(width) : (containerWidth * parseFloat(width) / 100);

            // Only scale on mobile and when iframe is wider than container
            const isMobile = window.innerWidth < 1024;
            if (isMobile && iframeWidth > containerWidth - 100) {
                const scale = Math.max(0.2, Math.min(1, (containerWidth - 100) / iframeWidth));
                setScaleFactor(scale);
            } else {
                setScaleFactor(1);
            }
        };

        calculateScale();
        window.addEventListener('resize', calculateScale);
        return () => window.removeEventListener('resize', calculateScale);
    }, [width, widthUnit, height, heightUnit]);

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
                                    onChange={(e) => {
                                        setAddress(e.target.value);
                                        if (addressError) setAddressError('');
                                    }}
                                    error={addressError}
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
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 0 }}>
                                        <Globe size={16} /> Dimensions
                                    </h4>
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <DeviceSelector onSelect={setDeviceDimensions} />
                                </div>

                                <div className={styles.row} style={{ gap: '1rem' }}>
                                    <DimensionsInput
                                        label="Width"
                                        value={width}
                                        onChange={setWidth}
                                        unit={widthUnit}
                                        onUnitChange={setWidthUnit}
                                    />
                                    <DimensionsInput
                                        label="Height"
                                        value={height}
                                        onChange={setHeight}
                                        unit={heightUnit}
                                        onUnitChange={setHeightUnit}
                                    />
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
                <div className={styles.previewContainer} ref={previewContainerRef}>
                    <Card className={`glass-card ${styles.previewCard}`}>
                        <CardHeader>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <CardTitle>Preview</CardTitle>
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
                                {address ? (
                                    <div
                                        style={{
                                            width: useScaledPreview && scaleFactor < 1
                                                ? `${(widthUnit === 'px' ? parseFloat(width) : 600) * scaleFactor}px`
                                                : (widthUnit === 'px' ? `${width}px` : `${width}%`),
                                            height: useScaledPreview && scaleFactor < 1
                                                ? `${(heightUnit === 'px' ? parseFloat(height) : 450) * scaleFactor}px`
                                                : (heightUnit === 'px' ? `${height}px` : `${height}%`),
                                            margin: '0 auto',
                                            position: 'relative',
                                        }}
                                    >
                                        <div
                                            className={styles.iframeWrapper}
                                            style={{
                                                width: widthUnit === 'px' ? `${width}px` : `${width}%`,
                                                height: heightUnit === 'px' ? `${height}px` : `${height}%`,
                                                backgroundColor: 'white',
                                                transform: useScaledPreview && scaleFactor < 1 ? `scale(${scaleFactor})` : 'none',
                                                transformOrigin: 'top left',
                                                transition: 'transform 0.3s ease',
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
