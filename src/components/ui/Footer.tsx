import Link from 'next/link';
import { Logo } from './Logo';
import { Github, Twitter, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand Section */}
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logoLink}>
                            <div className={styles.logoWrapper}>
                                <Logo size={24} />
                            </div>
                            <span className={styles.brandName}>
                                Iframe Generator
                            </span>
                        </Link>
                        <p className={styles.brandDescription}>
                            The modern standard for generating responsive, SEO-friendly embed codes. Built for developers and creators.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialLink} aria-label="GitHub">
                                <Github size={20} />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="mailto:support@iframegenerator.org" className={styles.socialLink} aria-label="Email">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Tools Column */}
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Tools</h3>
                        <ul className={styles.linkList}>
                            <li className={styles.linkItem}>
                                <Link href="/" className={styles.link}>
                                    <span className={styles.bullet}></span>
                                    Iframe Generator
                                </Link>
                            </li>
                            <li className={styles.linkItem}>
                                <Link href="/google-maps-iframe-generator" className={styles.link}>
                                    <span className={styles.bullet}></span>
                                    Google Maps Iframe Generator
                                </Link>
                            </li>
                            <li className={styles.linkItem}>
                                <Link href="/youtube-iframe-generator" className={styles.link}>
                                    <span className={styles.bullet}></span>
                                    YouTube Iframe Generator
                                </Link>
                            </li>
                            <li className={styles.linkItem}>
                                <Link href="/responsive-iframe-generator" className={styles.link}>
                                    <span className={styles.bullet}></span>
                                    Responsive Iframe Generator
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Resources</h3>
                        <ul className={styles.linkList}>
                            {/* Blog links - commented out until content is ready */}
                            {/* <li className={styles.linkItem}>
                                <Link href="/blog" className={styles.link}>
                                    <span className={styles.bullet}></span>
                                    Blog & Guides
                                </Link>
                            </li>
                            <li className={styles.linkItem}>
                                <Link href="/blog/responsive-iframe-guide-2024" className={styles.link}>
                                    <span className={styles.bullet}></span>
                                    Responsive Guide
                                </Link>
                            </li>
                            <li className={styles.linkItem}>
                                <Link href="/blog/google-maps-embed-no-api-key" className={styles.link}>
                                    <span className={styles.bullet}></span>
                                    Maps No API Key
                                </Link>
                            </li> */}
                            <li className={styles.linkItem}>
                                <Link href="/about" className={styles.link}>
                                    <span className={styles.bullet}></span>
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Legal</h3>
                        <ul className={styles.linkList}>
                            <li className={styles.linkItem}>
                                <Link href="/privacy-policy" className={styles.link}>
                                    <span className={styles.bullet}></span>
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className={styles.linkItem}>
                                <Link href="/terms-of-service" className={styles.link}>
                                    <span className={styles.bullet}></span>
                                    Terms of Service
                                </Link>
                            </li>
                            <li className={styles.linkItem}>
                                <Link href="/contact" className={styles.link}>
                                    <span className={styles.bullet}></span>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        &copy; {currentYear} Iframe Generator. All rights reserved.
                    </p>
                    <div className={styles.status}>
                        <span className={styles.statusIndicator}>
                            <span className={styles.statusDot}></span>
                            Systems Operational
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
