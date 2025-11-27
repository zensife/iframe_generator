import React, { useState } from 'react';
import styles from './CodeBlock.module.css';
import { Check, Copy } from 'lucide-react';
import { Button } from './Button';

interface CodeBlockProps {
    code: string;
    language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'html' }) => {
    const [copied, setCopied] = useState(false);

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
            <pre className={styles.pre}>
                <code className={styles.code}>{code}</code>
            </pre>
        </div>
    );
};
