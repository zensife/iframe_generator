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
  const [generatedCode, setGeneratedCode] = useState('');

  // Effect to generate code whenever parameters change
  useEffect(() => {
    if (!url) {
      setGeneratedCode('');
      return;
    }

    let src = url;
    if (!src.startsWith('http://') && !src.startsWith('https://')) {
      src = 'https://' + src;
    }

    const widthAttr = widthUnit === 'px' ? width : `${width}%`;
    const heightAttr = heightUnit === 'px' ? height : `${height}%`;

    const code = `<iframe
  src="${src}"
  width="${widthAttr}"
  height="${heightAttr}"
  style="border:${border};overflow:hidden;"
  scrolling="${scrolling}"
  allowFullScreen
></iframe>`;

    setGeneratedCode(code);
  }, [url, width, widthUnit, height, heightUnit, border, scrolling]);

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
                <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Smartphone size={16} /> Dimensions
                </h4>
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

              {/* Advanced Options */}
              <div>
                <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Settings size={16} /> Options
                </h4>
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
