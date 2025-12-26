'use client';

import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism-tomorrow.css';

export function SyntaxHighlighter() {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return null;
}
