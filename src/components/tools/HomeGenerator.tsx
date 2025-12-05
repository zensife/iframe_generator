'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import styles from '@/styles/page.module.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Settings, Smartphone, Monitor, Maximize2, Minimize2 } from 'lucide-react';
import { DimensionsInput } from '@/components/ui/DimensionsInput';
import { DeviceSelector } from '@/components/ui/DeviceSelector';

export default function HomeGenerator() {
    const t = useTranslations('home');
    const [url, setUrl] = useState('');
    const [width, setWidth] = useState('600');
    const [widthUnit, setWidthUnit] = useState('px');
    const [height, setHeight] = useState('400');
    const [heightUnit, setHeightUnit] = useState('px');
    const [border, setBorder] = useState('0');
    const [scrolling, setScrolling] = useState('no');
    const [isResponsive, setIsResponsive] = useState(false);

    // Advanced Settings State
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState('eager');
    const [referrerPolicy, setReferrerPolicy] = useState('no-referrer-when-downgrade');
    const [sandbox, setSandbox] = useState<string[]>([]);
    const [allow, setAllow] = useState<string[]>([]);

    const [generatedCode, setGeneratedCode] = useState('');

    // Mobile preview scaling
    const [useScaledPreview, setUseScaledPreview] = useState(true);
    const previewContainerRef = useRef<HTMLDivElement>(null);
    const [scaleFactor, setScaleFactor] = useState(1);

    const sandboxOptions = [
        { value: 'allow-scripts', label: t('allowScripts') },
        { value: 'allow-forms', label: t('allowForms') },
        { value: 'allow-popups', label: t('allowPopups') },
        { value: 'allow-same-origin', label: t('allowSameOrigin') },
        { value: 'allow-top-navigation', label: t('allowTopNavigation') },
    ];

    const allowOptions = [
        { value: 'autoplay', label: t('autoplay') },
        { value: 'fullscreen', label: t('fullscreen') },
        { value: 'picture-in-picture', label: t('pictureInPicture') },
        { value: 'camera', label: t('camera') },
        { value: 'microphone', label: t('microphone') },
    ];

    const toggleOption = (value: string, current: string[], setter: (val: string[]) => void) => {
        if (current.includes(value)) {
            setter(current.filter(item => item !== value));
        } else {
            setter([...current, value]);
        }
    };

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

    // Effect to generate code whenever parameters change
    useEffect(() => {
        // Use example.com if URL is empty for code generation purposes
        let src = url || 'https://example.com';
        if (!src.startsWith('http://') && !src.startsWith('https://')) {
            src = 'https://' + src;
        }

        const widthAttr = widthUnit === 'px' ? width : `${width}%`;
        const heightAttr = heightUnit === 'px' ? height : `${height}%`;

        let iframeTag = `<iframe
  src="${src}"
  width="${isResponsive ? '100%' : widthAttr}"
  height="${isResponsive ? '100%' : heightAttr}"
  style="border:${border};overflow:hidden;"
  scrolling="${scrolling}"
  frameborder="0"`;

        if (name) iframeTag += `\n  name="${name}"`;
        if (title) iframeTag += `\n  title="${title}"`;
        if (loading !== 'eager') iframeTag += `\n  loading="${loading}"`;
        if (referrerPolicy !== 'no-referrer-when-downgrade') iframeTag += `\n  referrerpolicy="${referrerPolicy}"`;

        if (sandbox.length > 0) {
            iframeTag += `\n  sandbox="${sandbox.join(' ')}"`;
        }

        if (allow.length > 0 || sandbox.length > 0) {
            const allowParts = [...allow];
            if (allowParts.includes('fullscreen')) {
                iframeTag += `\n  allowfullscreen`;
            }

            const allowString = allowParts.filter(p => p !== 'fullscreen').join('; ');
            if (allowString) {
                iframeTag += `\n  allow="${allowString}"`;
            }
        } else {
            iframeTag += `\n  allowFullScreen`;
        }

        iframeTag += `\n></iframe>`;

        if (isResponsive) {
            // Calculate aspect ratio
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

    }, [url, width, widthUnit, height, heightUnit, border, scrolling, name, title, loading, referrerPolicy, sandbox, allow, isResponsive]);

    const [urlError, setUrlError] = useState('');

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setUrl(val);

        if (val && !val.match(/^(http|https):\/\/[^ "]+$/)) {
            // Allow partial input but warn if it doesn't look like a URL yet?
            // Or just warn if it doesn't start with http/https
            if (!val.startsWith('http://') && !val.startsWith('https://')) {
                // We auto-prepend https:// in the effect, so maybe just check for invalid chars?
                // Let's stick to the PRD requirement: "Must start with http:// or https://"
                // But since we auto-fix it in the preview, maybe we only error if it's really malformed?
                // Actually, the PRD says: "Show error if not valid URL".
                // Let's keep it simple: if it has spaces or is clearly not a URL.
                // But wait, the previous logic auto-prepended https://.
                // Let's validate strictly only if the user claims it's done.
                // Real-time validation:
                // If it doesn't have a dot, it's probably not a domain.
                if (!val.includes('.')) {
                    // Don't show error immediately while typing?
                    // Let's show error if it contains spaces.
                }
            }
        }

        // Simple validation: Check for spaces
        if (val.includes(' ')) {
            setUrlError('URL should not contain spaces.');
        } else {
            setUrlError('');
        }
    };

    // Calculate scale factor for mobile preview
    useEffect(() => {
        const calculateScale = () => {
            if (!previewContainerRef.current || typeof window === 'undefined') return;

            const containerWidth = previewContainerRef.current.offsetWidth;
            const iframeWidth = widthUnit === 'px' ? parseFloat(width) : (containerWidth * parseFloat(width) / 100);

            // Only scale on mobile and when iframe is wider than container
            const isMobile = window.innerWidth < 1024;
            if (isMobile && iframeWidth > containerWidth - 100) { // -100 for padding
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
            <div className="gradient-bg" />

            <section className={styles.hero}>
                <h1 className={styles.title}>{t('title')}</h1>
                <p className={styles.subtitle}>
                    {t('subtitle')}
                </p>
            </section>

            <div className={styles.grid}>
                {/* Controls Section */}
                <div className={styles.controls}>
                    <Card className="glass-card">
                        <CardHeader>
                            <CardTitle>{t('settings')}</CardTitle>
                        </CardHeader>
                        <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                            {/* URL Input */}
                            <Input
                                label={t('sourceUrl')}
                                placeholder="https://example.com"
                                value={url}
                                onChange={handleUrlChange}
                                error={urlError}
                            />

                            {/* Dimensions */}
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 0 }}>
                                        <Smartphone size={16} /> {t('dimensions')}
                                    </h4>
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <DeviceSelector onSelect={setDeviceDimensions} currentWidth={width} currentHeight={height} />
                                </div>

                                <div className={styles.row} style={{ gap: '1rem' }}>
                                    <DimensionsInput
                                        label={t('width')}
                                        value={width}
                                        onChange={setWidth}
                                        unit={widthUnit}
                                        onUnitChange={setWidthUnit}
                                    />
                                    <DimensionsInput
                                        label={t('height')}
                                        value={height}
                                        onChange={setHeight}
                                        unit={heightUnit}
                                        onUnitChange={setHeightUnit}
                                    />
                                </div>
                            </div>

                            {/* Basic Options */}
                            <div>
                                <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Settings size={16} /> {t('basicOptions')}
                                </h4>

                                <div style={{ marginBottom: '1rem' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', cursor: 'pointer' }}>
                                        <input
                                            type="checkbox"
                                            checked={isResponsive}
                                            onChange={(e) => setIsResponsive(e.target.checked)}
                                            style={{ width: '1rem', height: '1rem' }}
                                        />
                                        {t('makeResponsive')}
                                    </label>
                                    {isResponsive && (
                                        <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', marginLeft: '1.5rem', marginTop: '0.25rem' }}>
                                            {t('responsiveHint')}
                                        </p>
                                    )}
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <label style={{ fontSize: '0.875rem' }}>{t('scrolling')}:</label>
                                    <select
                                        value={scrolling}
                                        onChange={(e) => setScrolling(e.target.value)}
                                        aria-label="Scrolling behavior"
                                        style={{ padding: '0.25rem', borderRadius: '0.25rem' }}
                                    >
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="auto">Auto</option>
                                    </select>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem' }}>
                                    <label style={{ fontSize: '0.875rem' }}>{t('border')}:</label>
                                    <select
                                        value={border}
                                        onChange={(e) => setBorder(e.target.value)}
                                        aria-label="Border style"
                                        style={{ padding: '0.25rem', borderRadius: '0.25rem' }}
                                    >
                                        <option value="0">{t('borderNone')}</option>
                                        <option value="1px solid #ccc">{t('borderThin')}</option>
                                        <option value="2px solid #000">{t('borderThick')}</option>
                                    </select>
                                </div>
                            </div>

                            {/* Advanced Options */}
                            <div>
                                <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Settings size={16} /> {t('advancedOptions')}
                                </h4>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <Input
                                        label={t('name')}
                                        placeholder="iframe name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <Input
                                        label={t('titleAttr')}
                                        placeholder={t('titlePlaceholder')}
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />

                                    <div>
                                        <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', display: 'block' }}>{t('loadingStrategy')}</label>
                                        <div style={{ display: 'flex', gap: '1rem' }}>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <input type="radio" checked={loading === 'eager'} onChange={() => setLoading('eager')} /> {t('eager')}
                                            </label>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <input type="radio" checked={loading === 'lazy'} onChange={() => setLoading('lazy')} /> {t('lazy')}
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', display: 'block' }}>{t('sandbox')}</label>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                                            {sandboxOptions.map(opt => (
                                                <label key={opt.value} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem' }}>
                                                    <input
                                                        type="checkbox"
                                                        checked={sandbox.includes(opt.value)}
                                                        onChange={() => toggleOption(opt.value, sandbox, setSandbox)}
                                                    />
                                                    {opt.label}
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', display: 'block' }}>{t('allowFeatures')}</label>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                                            {allowOptions.map(opt => (
                                                <label key={opt.value} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem' }}>
                                                    <input
                                                        type="checkbox"
                                                        checked={allow.includes(opt.value)}
                                                        onChange={() => toggleOption(opt.value, allow, setAllow)}
                                                    />
                                                    {opt.label}
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', display: 'block' }}>{t('referrerPolicy')}</label>
                                        <select
                                            value={referrerPolicy}
                                            onChange={(e) => setReferrerPolicy(e.target.value)}
                                            aria-label="Referrer policy"
                                            style={{ width: '100%', padding: '0.5rem', borderRadius: '0.5rem' }}
                                        >
                                            <option value="no-referrer">no-referrer</option>
                                            <option value="no-referrer-when-downgrade">no-referrer-when-downgrade</option>
                                            <option value="origin">origin</option>
                                            <option value="strict-origin-when-cross-origin">strict-origin-when-cross-origin</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </CardContent>
                    </Card>
                </div>

                {/* Preview & Code Section */}
                <div className={styles.previewContainer} ref={previewContainerRef}>
                    <Card className={`glass-card ${styles.previewCard}`}>
                        <CardHeader>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <CardTitle>{t('preview')}</CardTitle>
                                {scaleFactor < 1 && (
                                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                        <span style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>
                                            📱 {useScaledPreview ? `${t('scaled')} ${Math.round(scaleFactor * 100)}%` : t('actualSize')}
                                        </span>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() => setUseScaledPreview(!useScaledPreview)}
                                            style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', height: 'auto' }}
                                        >
                                            {useScaledPreview ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
                                            {useScaledPreview ? ` ${t('actual')}` : ` ${t('scale')}`}
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div className={styles.previewFrame}>
                                {url ? (
                                    <div
                                        style={{
                                            width: useScaledPreview && scaleFactor < 1
                                                ? `${(widthUnit === 'px' ? parseFloat(width) : 600) * scaleFactor}px`
                                                : (widthUnit === 'px' ? `${width}px` : `${width}%`),
                                            height: useScaledPreview && scaleFactor < 1
                                                ? `${(heightUnit === 'px' ? parseFloat(height) : 400) * scaleFactor}px`
                                                : (heightUnit === 'px' ? `${height}px` : `${height}%`),
                                            margin: '0 auto', // Center the preview
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
                                                src={url.startsWith('http') ? url : `https://${url}`}
                                                width="100%"
                                                height="100%"
                                                title="Iframe preview"
                                                style={{ border: border === '0' ? 'none' : border, overflow: 'hidden', display: 'block' }}
                                                scrolling={scrolling}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className={styles.emptyState}>
                                        <Monitor size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                                        <p>{t('emptyState')}</p>
                                    </div>
                                )}
                            </div>
                            <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', marginTop: '0.5rem', textAlign: 'center' }}>
                                {t('previewNote')}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="glass-card">
                        <CardHeader>
                            <CardTitle>{t('generatedCode')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CodeBlock code={generatedCode} language="html" />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main >
    );
}
