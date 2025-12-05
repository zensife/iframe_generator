'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import styles from '@/styles/page.module.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Button } from '@/components/ui/Button';
import { Youtube, Settings, Smartphone, Maximize2, Minimize2, Play, Clock, ShieldCheck } from 'lucide-react';
import { DimensionsInput } from '@/components/ui/DimensionsInput';
import { DeviceSelector } from '@/components/ui/DeviceSelector';

export default function YoutubeGenerator() {
    const t = useTranslations('youtube');
    const tHome = useTranslations('home');
    const [url, setUrl] = useState('');
    const [videoId, setVideoId] = useState('');
    const [autoplay, setAutoplay] = useState(false);
    const [mute, setMute] = useState(false);
    const [loop, setLoop] = useState(false);
    const [controls, setControls] = useState(true);
    const [privacy, setPrivacy] = useState(true);
    const [startTime, setStartTime] = useState('');

    // New Params
    const [modestBranding, setModestBranding] = useState(false);
    const [rel, setRel] = useState(true); // Default true (show related)
    const [ccLoadPolicy, setCcLoadPolicy] = useState(false);

    // Dimensions
    const [width, setWidth] = useState('560');
    const [widthUnit, setWidthUnit] = useState('px');
    const [height, setHeight] = useState('315');
    const [heightUnit, setHeightUnit] = useState('px');
    const [isResponsive, setIsResponsive] = useState(false);
    const [generatedCode, setGeneratedCode] = useState('');
    const [error, setError] = useState('');

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

    // Extract Video ID
    useEffect(() => {
        if (!url) {
            setVideoId('');
            setError('');
            return;
        }

        let id = '';
        // Handle youtube.com/watch?v=ID
        const matchV = url.match(/[?&]v=([^&]+)/);
        if (matchV) {
            id = matchV[1];
        } else {
            // Handle youtu.be/ID
            const matchShort = url.match(/youtu\.be\/([^?]+)/);
            if (matchShort) {
                id = matchShort[1];
            } else {
                // Handle embed/ID
                const matchEmbed = url.match(/embed\/([^?]+)/);
                if (matchEmbed) {
                    id = matchEmbed[1];
                }
            }
        }

        if (id) {
            setVideoId(id);
            setError('');
        } else {
            setVideoId('');
            // Only show error if URL looks complete but invalid
            if (url.length > 10) {
                setError('Invalid YouTube URL format');
            }
        }
    }, [url]);

    // Generate Code
    useEffect(() => {
        if (!videoId) {
            setGeneratedCode('');
            return;
        }

        const domain = privacy ? 'www.youtube-nocookie.com' : 'www.youtube.com';
        let src = `https://${domain}/embed/${videoId}?`;

        const params = [];
        if (autoplay) params.push('autoplay=1');
        if (mute) params.push('mute=1');
        if (loop) {
            params.push('loop=1');
            params.push(`playlist=${videoId}`); // Loop requires playlist param with video ID
        }
        if (!controls) params.push('controls=0');
        if (startTime) params.push(`start=${startTime}`);

        if (modestBranding) params.push('modestbranding=1');
        if (!rel) params.push('rel=0');
        if (ccLoadPolicy) params.push('cc_load_policy=1');

        src += params.join('&');

        const widthAttr = widthUnit === 'px' ? width : `${width}%`;
        const heightAttr = heightUnit === 'px' ? height : `${height}%`;

        let iframeTag = `<iframe
  width="${isResponsive ? '100%' : widthAttr}"
  height="${isResponsive ? '100%' : heightAttr}"
  src="${src}"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen>
</iframe>`;

        if (isResponsive) {
            const w = parseFloat(width);
            const h = parseFloat(height);
            const ratio = (w && h) ? `${w}/${h}` : '16/9';

            const wrapper = `<div style="position:relative;width:100%;aspect-ratio:${ratio};">
  ${iframeTag.replace(/\n/g, '\n  ')}
</div>`;
            setGeneratedCode(wrapper);
        } else {
            setGeneratedCode(iframeTag);
        }
    }, [videoId, autoplay, mute, loop, controls, privacy, startTime, modestBranding, rel, ccLoadPolicy, width, widthUnit, height, heightUnit, isResponsive]);

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
    }, [width, widthUnit, height, heightUnit, isResponsive]);

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
                            <CardTitle>{t('videoSettings')}</CardTitle>
                        </CardHeader>
                        <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                            <Input
                                label={t('videoUrl')}
                                placeholder={t('videoUrlPlaceholder')}
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                error={error}
                            />

                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 0 }}>
                                        <Youtube size={16} /> {tHome('dimensions')}
                                    </h4>
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <DeviceSelector onSelect={setDeviceDimensions} currentWidth={width} currentHeight={height} />
                                </div>

                                <div className={styles.row} style={{ gap: '1rem' }}>
                                    <DimensionsInput
                                        label={tHome('width')}
                                        value={width}
                                        onChange={setWidth}
                                        unit={widthUnit}
                                        onUnitChange={setWidthUnit}
                                    />
                                    <DimensionsInput
                                        label={tHome('height')}
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
                                        {tHome('makeResponsive')}
                                    </label>
                                </div>
                            </div>

                            <div>
                                <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Play size={16} /> {t('playerOptions')}
                                </h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input type="checkbox" checked={autoplay} onChange={(e) => setAutoplay(e.target.checked)} />
                                        {t('autoplay')}
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input type="checkbox" checked={mute} onChange={(e) => setMute(e.target.checked)} />
                                        {t('mute')}
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input type="checkbox" checked={loop} onChange={(e) => setLoop(e.target.checked)} />
                                        {t('loop')}
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input type="checkbox" checked={controls} onChange={(e) => setControls(e.target.checked)} />
                                        {t('controls')}
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input type="checkbox" checked={modestBranding} onChange={(e) => setModestBranding(e.target.checked)} />
                                        {t('modestBranding')}
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input type="checkbox" checked={!rel} onChange={(e) => setRel(!e.target.checked)} />
                                        {t('hideRelatedVideos')}
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input type="checkbox" checked={ccLoadPolicy} onChange={(e) => setCcLoadPolicy(e.target.checked)} />
                                        {t('forceCaptions')}
                                    </label>
                                </div>
                            </div>

                            <div>
                                <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Clock size={16} /> {t('startTime')}
                                </h4>
                                <Input
                                    placeholder={t('startTimePlaceholder')}
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                    type="number"
                                />
                            </div>

                            <div>
                                <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <ShieldCheck size={16} /> {t('privacy')}
                                </h4>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                    <input type="checkbox" checked={privacy} onChange={(e) => setPrivacy(e.target.checked)} />
                                    {t('privacyMode')}
                                </label>
                                <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', marginTop: '0.25rem' }}>
                                    {t('privacyModeHint')}
                                </p>
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
                                            📱 {useScaledPreview ? `${tHome('scaled')} ${Math.round(scaleFactor * 100)}%` : tHome('actualSize')}
                                        </span>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() => setUseScaledPreview(!useScaledPreview)}
                                            style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', height: 'auto' }}
                                        >
                                            {useScaledPreview ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
                                            {useScaledPreview ? ` ${tHome('actual')}` : ` ${tHome('scale')}`}
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div className={styles.previewFrame}>
                                {videoId ? (
                                    <div
                                        style={{
                                            width: useScaledPreview && scaleFactor < 1
                                                ? `${(widthUnit === 'px' ? parseFloat(width) : 560) * scaleFactor}px`
                                                : (widthUnit === 'px' ? `${width}px` : `${width}%`),
                                            height: useScaledPreview && scaleFactor < 1
                                                ? `${(heightUnit === 'px' ? parseFloat(height) : 315) * scaleFactor}px`
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
                                                src={(() => {
                                                    const domain = privacy ? 'www.youtube-nocookie.com' : 'www.youtube.com';
                                                    let s = `https://${domain}/embed/${videoId}?`;
                                                    const p = [];
                                                    if (autoplay) p.push('autoplay=1');
                                                    if (mute) p.push('mute=1');
                                                    if (loop) {
                                                        p.push('loop=1');
                                                        p.push(`playlist=${videoId}`);
                                                    }
                                                    if (!controls) p.push('controls=0');
                                                    if (startTime) p.push(`start=${startTime}`);
                                                    if (modestBranding) p.push('modestbranding=1');
                                                    if (!rel) p.push('rel=0');
                                                    if (ccLoadPolicy) p.push('cc_load_policy=1');
                                                    return s + p.join('&');
                                                })()}
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen
                                                style={{ display: 'block' }}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className={styles.emptyState}>
                                        <Youtube size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                                        <p>{t('emptyState')}</p>
                                    </div>
                                )}
                            </div>
                            <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', marginTop: '0.5rem', textAlign: 'center' }}>
                                {t('embedDisabledNote')}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="glass-card">
                        <CardHeader>
                            <CardTitle>{tHome('generatedCode')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {generatedCode ? (
                                <CodeBlock code={generatedCode} language="html" />
                            ) : (
                                <div style={{ padding: '1rem', textAlign: 'center', color: 'hsl(var(--muted-foreground))', border: '1px dashed hsl(var(--border))', borderRadius: 'var(--radius)' }}>
                                    {t('pasteYoutubeHint')}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}
