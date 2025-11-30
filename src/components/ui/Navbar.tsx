'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from './Button';
import styles from './Navbar.module.css';

export const Navbar = () => {
    const pathname = usePathname();
    const [isDark, setIsDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Check localStorage first, then system preference
        const storedTheme = localStorage.getItem('theme');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const shouldBeDark = storedTheme === 'dark' || (!storedTheme && systemDark);

        setIsDark(shouldBeDark);

        // Sync DOM immediately
        if (shouldBeDark) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);

        if (newTheme) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const navItems = [
        { name: 'General', path: '/' },
        { name: 'Google Maps', path: '/google-maps-iframe-generator' },
        { name: 'YouTube', path: '/youtube-iframe-generator' },
        { name: 'Responsive', path: '/responsive-iframe-generator' },
    ];

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <Logo size={24} />
                    </div>
                    <span>Iframe Generator</span>
                </Link>

                {/* Desktop Nav */}
                <div className={styles.desktopNav}>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`${styles.link} ${pathname === item.path ? styles.active : ''}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button variant="ghost" size="icon" onClick={toggleTheme}>
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className={styles.mobileMenuBtn}>
                    <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </Button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className={styles.mobileNav}>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`${styles.mobileLink} ${pathname === item.path ? styles.activeMobile : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div style={{ padding: '1rem' }}>
                        <Button variant="outline" onClick={toggleTheme} style={{ width: '100%', justifyContent: 'flex-start' }}>
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                            {isDark ? 'Light Mode' : 'Dark Mode'}
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};
