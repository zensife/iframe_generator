'use client';

import React, { useState, useEffect } from 'react';
import styles from '../page.module.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Youtube, Play, Clock, ShieldCheck } from 'lucide-react';

export default function YoutubeGenerator() {
    const [url, setUrl] = useState('');
    const [videoId, setVideoId] = useState('');
    const [autoplay, setAutoplay] = useState(false);
    const [mute, setMute] = useState(false);
    const [loop, setLoop] = useState(false);
    const [controls, setControls] = useState(true);
    const [privacy, setPrivacy] = useState(true);
    const [startTime, setStartTime] = useState('');
    const [generatedCode, setGeneratedCode] = useState('');

    // Extract Video ID
    useEffect(() => {
        if (!url) {
            setVideoId('');
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
        setVideoId(id);
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

        src += params.join('&');

        const code = `<iframe
  width="560"
  height="315"
  src="${src}"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen>
</iframe>`;

        setGeneratedCode(code);
    }, [videoId, autoplay, mute, loop, controls, privacy, startTime]);

    return (
        <main className={styles.main}>
            <div className={styles.gradientBg} />

            <section className={styles.hero}>
                <h1 className={styles.title}>YouTube Iframe Generator</h1>
                <p className={styles.subtitle}>
                    Generate advanced YouTube embed codes with autoplay, loop, and privacy-enhanced mode.
                </p>
            </section>

            <div className={styles.grid}>
                {/* Controls */}
                <div className={styles.controls}>
                    <Card className="glass-card">
                        <CardHeader>
                            <CardTitle>Video Settings</CardTitle>
                        </CardHeader>
                        <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                            <Input
                                label="YouTube URL"
                                placeholder="https://www.youtube.com/watch?v=..."
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />

                            <div>
                                <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Play size={16} /> Player Options
                                </h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input type="checkbox" checked={autoplay} onChange={(e) => setAutoplay(e.target.checked)} />
                                        Autoplay
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input type="checkbox" checked={mute} onChange={(e) => setMute(e.target.checked)} />
                                        Mute (Required for Autoplay)
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input type="checkbox" checked={loop} onChange={(e) => setLoop(e.target.checked)} />
                                        Loop Video
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input type="checkbox" checked={controls} onChange={(e) => setControls(e.target.checked)} />
                                        Show Player Controls
                                    </label>
                                </div>
                            </div>

                            <div>
                                <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Clock size={16} /> Start Time
                                </h4>
                                <Input
                                    placeholder="e.g. 60 (seconds)"
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                    type="number"
                                />
                            </div>

                            <div>
                                <h4 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <ShieldCheck size={16} /> Privacy
                                </h4>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                    <input type="checkbox" checked={privacy} onChange={(e) => setPrivacy(e.target.checked)} />
                                    Enable Privacy-Enhanced Mode
                                </label>
                                <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', marginTop: '0.25rem' }}>
                                    Uses youtube-nocookie.com domain.
                                </p>
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
                                {videoId ? (
                                    <div
                                        className={styles.iframeWrapper}
                                        style={{ width: '100%', aspectRatio: '16/9' }}
                                        dangerouslySetInnerHTML={{ __html: generatedCode }}
                                    />
                                ) : (
                                    <div className={styles.emptyState}>
                                        <Youtube size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                                        <p>Paste a YouTube link to preview</p>
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
