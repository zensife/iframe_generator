'use client';

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Settings, Smartphone, Monitor } from 'lucide-react';

export default function Home() {
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

  const sandboxOptions = [
    { value: 'allow-scripts', label: 'Allow Scripts' },
    { value: 'allow-forms', label: 'Allow Forms' },
    { value: 'allow-popups', label: 'Allow Popups' },
    { value: 'allow-same-origin', label: 'Allow Same Origin' },
    { value: 'allow-top-navigation', label: 'Allow Top Navigation' },
  ];

  const allowOptions = [
    { value: 'autoplay', label: 'Autoplay' },
    { value: 'fullscreen', label: 'Fullscreen' },
    { value: 'picture-in-picture', label: 'Picture in Picture' },
    { value: 'camera', label: 'Camera' },
    { value: 'microphone', label: 'Microphone' },
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

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <main className={styles.main}>
      <div className={styles.gradientBg} />

      <section className={styles.hero}>
        <h1 className={styles.title}>Iframe Generator</h1>
        <p className={styles.subtitle}>
          The easiest way to generate responsive, SEO-friendly iframe embed codes for your website.
        </p>
      </section>

      <div className={styles.grid}>
        {/* Controls Section */}
        <div className={styles.controls}>
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              {/* URL Input */}
              <Input
                label="Source URL"
                placeholder="https://example.com"
                value={url}
                onChange={handleUrlChange}
              />

              {/* Dimensions */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 0 }}>
                    <Smartphone size={16} /> Dimensions
                  </h4>
                  <div style={{ display: 'flex', gap: '0.25rem' }}>
                    <Button size="sm" variant="ghost" onClick={() => setDeviceDimensions('mobile')} title="Mobile (375x667)">Mobile</Button>
                    <Button size="sm" variant="ghost" onClick={() => setDeviceDimensions('tablet')} title="Tablet (768x1024)">Tablet</Button>
                    <Button size="sm" variant="ghost" onClick={() => setDeviceDimensions('desktop')} title="Desktop (1024x768)">Desktop</Button>
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
              </div>

              {/* Basic Options */}
              <div>
                <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Settings size={16} /> Basic Options
                </h4>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={isResponsive}
                      onChange={(e) => setIsResponsive(e.target.checked)}
                      style={{ width: '1rem', height: '1rem' }}
                    />
                    Make Responsive (Auto-resize)
                  </label>
                  {isResponsive && (
                    <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', marginLeft: '1.5rem', marginTop: '0.25rem' }}>
                      Generates a container with <code>aspect-ratio</code> based on current dimensions.
                    </p>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <label style={{ fontSize: '0.875rem' }}>Scrolling:</label>
                  <select
                    value={scrolling}
                    onChange={(e) => setScrolling(e.target.value)}
                    style={{ padding: '0.25rem', borderRadius: '0.25rem' }}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="auto">Auto</option>
                  </select>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem' }}>Border:</label>
                  <select
                    value={border}
                    onChange={(e) => setBorder(e.target.value)}
                    style={{ padding: '0.25rem', borderRadius: '0.25rem' }}
                  >
                    <option value="0">None</option>
                    <option value="1px solid #ccc">Thin</option>
                    <option value="2px solid #000">Thick</option>
                  </select>
                </div>
              </div>

              {/* Advanced Options */}
              <div>
                <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Settings size={16} /> Advanced Options
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <Input
                    label="Name"
                    placeholder="iframe name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    label="Title"
                    placeholder="Description for accessibility"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <div>
                    <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', display: 'block' }}>Loading Strategy</label>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <input type="radio" checked={loading === 'eager'} onChange={() => setLoading('eager')} /> Eager
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <input type="radio" checked={loading === 'lazy'} onChange={() => setLoading('lazy')} /> Lazy
                      </label>
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', display: 'block' }}>Sandbox</label>
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
                    <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', display: 'block' }}>Allow Features</label>
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
                    <label style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', display: 'block' }}>Referrer Policy</label>
                    <select
                      value={referrerPolicy}
                      onChange={(e) => setReferrerPolicy(e.target.value)}
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
                      width: widthUnit === 'px' ? `${width}px` : `${width}%`,
                      height: heightUnit === 'px' ? `${height}px` : `${height}%`,
                      maxWidth: '100%',
                      maxHeight: '100%',
                      overflow: 'auto'
                    }}
                  >
                    <iframe
                      src={url.startsWith('http') ? url : `https://${url}`}
                      width="100%"
                      height="100%"
                      style={{ border: border === '0' ? 'none' : border, overflow: 'hidden' }}
                      scrolling={scrolling}
                    // Note: Sandbox might break preview for some sites, but we apply it to show effect if possible.
                    // However, for a generator preview, it's often safer NOT to sandbox the preview itself to avoid breaking the tool UI,
                    // or apply a minimal set. Let's apply it but be aware.
                    // Actually, applying sandbox to the preview might block the content if 'allow-scripts' etc are missing.
                    // For now, we will NOT apply sandbox to the preview iframe to ensure the user can see the content,
                    // but the generated code WILL have it.
                    />
                  </div>
                ) : (
                  <div className={styles.emptyState}>
                    <Monitor size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                    <p>Enter a URL to see the preview</p>
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
              <CodeBlock code={generatedCode} language="html" />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
