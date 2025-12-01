import React, { useState, useEffect } from 'react';
import styles from './CodeBlock.module.css';
import { Check, Copy } from 'lucide-react';
import { Button } from './Button';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup'; // HTML
import 'prismjs/components/prism-css';    // CSS
import 'prismjs/components/prism-javascript'; // JS

interface CodeBlockProps {
    code: string;
    language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'html' }) => {
    const [copied, setCopied] = useState(false);
    const codeRef = React.useRef<HTMLElement>(null);

    useEffect(() => {
        if (codeRef.current) {
            Prism.highlightElement(codeRef.current);
        }
    }, [code, language]);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.language}>{language}</span>
                <Button variant="ghost" size="sm" onClick={handleCopy} className={styles.copyButton}>
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? 'Copied!' : 'Copy Code'}
                </Button>
            </div>
            <pre className={styles.pre} suppressHydrationWarning>
                <code
                    ref={codeRef}
                    className={`language-${language} ${styles.code}`}
                    suppressHydrationWarning
                >
                    {code}
                </code>
            </pre>
        </div>
    );
};
