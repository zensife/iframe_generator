'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Logo } from './Logo';
import styles from './Footer.module.css';

export const Footer = () => {
    const t = useTranslations('footer');
    const tNav = useTranslations('nav');
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
                                {tNav('home')}
                            </span>
                        </Link>
                        <p className={styles.brandDescription}>
                            {t('description')}
                        </p>
                    </div>

                    {/* Tools Column */}
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>{t('tools')}</h3>
                        <ul className={styles.linkList}>
                            <li className={styles.linkItem}>
                                <Link href="/" className={styles.link}>
                                    <span className={styles.bullet}></span>
                                    {tNav('home')}
                                </Link>
                            </li>
                            <li className={styles.linkItem}>
                                <Link href="/google-maps-iframe-generator" className={styles.link}>
                                    <span className={styles.bullet}></span>
                                    {tNav('googleMaps')}
                                </Link>
                            </li>
                            <li className={styles.linkItem}>
                                <Link href="/youtube-embed-code-generator" className={styles.link}>
                                    <span className={styles.bullet}></span>
                                    {tNav('youtube')}
                                </Link>
                            </li>
                            <li className={styles.linkItem}>
                                <Link href="/responsive-iframe-generator" className={styles.link}>
                                    <span className={styles.bullet}></span>
                                    {tNav('responsive')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>{t('resources')}</h3>
                        <ul className={styles.linkList}>
                            <li className={styles.linkItem}>
                                <Link href="/blog" className={styles.link}>
                                    <span className={styles.bullet}></span>
                                    {t('blog')}
                                </Link>
                            </li>
                            <li className={styles.linkItem}>
                                <Link href="/about" className={styles.link}>
                                    <span className={styles.bullet}></span>
                                    {t('about')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>{t('legal')}</h3>
                        <ul className={styles.linkList}>
                            <li className={styles.linkItem}>
                                <Link href="/privacy-policy" className={styles.link}>
                                    <span className={styles.bullet}></span>
                                    {t('privacyPolicy')}
                                </Link>
                            </li>
                            <li className={styles.linkItem}>
                                <Link href="/terms-of-service" className={styles.link}>
                                    <span className={styles.bullet}></span>
                                    {t('termsOfService')}
                                </Link>
                            </li>
                            <li className={styles.linkItem}>
                                <Link href="/contact" className={styles.link}>
                                    <span className={styles.bullet}></span>
                                    {t('contact')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        {t('copyright', { year: currentYear })}
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
