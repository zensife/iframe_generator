import { Locale } from '@/i18n/config';

export type AboutContent = {
    title: string;
    description: string;
    sections: {
        intro: string;
        mission: {
            title: string;
            content: string;
        };
        whyBuilt: {
            title: string;
            content: string;
        };
        offer: {
            title: string;
            items: string[];
        };
        conclusion: string;
    };
};

const about_en: AboutContent = {
    title: 'About Us',
    description: 'Learn more about Iframe Generator, our mission, and why we created the best free online iframe tools.',
    sections: {
        intro: 'Welcome to <strong>Iframe Generator</strong>, the most comprehensive and user-friendly tool for creating responsive iframe embed codes.',
        mission: {
            title: 'Our Mission',
            content: 'We believe that embedding content on the web should be simple, accessible, and responsive by default. Whether you\'re a developer, a content creator, or a business owner, you shouldn\'t have to wrestle with complex HTML or CSS just to share a map or a video. Our mission is to provide free, high-quality tools that solve these common web development challenges.'
        },
        whyBuilt: {
            title: 'Why We Built This',
            content: 'The web is evolving, and mobile traffic now accounts for over half of all internet usage. Traditional iframes are often static and break on smaller screens. We saw a need for a tool that prioritizes <strong>responsiveness</strong> and <strong>SEO best practices</strong> out of the box.'
        },
        offer: {
            title: 'What We Offer',
            items: [
                '<strong>Iframe Generator:</strong> Create custom iframes for any URL.',
                '<strong>Google Maps Embed:</strong> Generate map embeds without an API key.',
                '<strong>YouTube Embed:</strong> Customize YouTube players with advanced options.',
                '<strong>Responsive Checker:</strong> Verify your embeds look great on all devices.'
            ]
        },
        conclusion: 'Thank you for using our tools. We are constantly improving and adding new features based on your feedback.'
    }
};

const about_zh: AboutContent = {
    title: '关于我们',
    description: '了解更多关于 Iframe 生成器的信息，我们的使命以及我们为何创建最好的免费在线 iframe 工具。',
    sections: {
        intro: '欢迎使用 <strong>Iframe 生成器</strong>，这是用于创建响应式 iframe 嵌入代码的最全面、最用户友好的工具。',
        mission: {
            title: '我们的使命',
            content: '我们相信网络上的内容嵌入默认应该是简单、可访问且响应式的。无论您是开发人员、内容创作者还是企业主，您都不应该为了分享地图或视频而不得不与复杂的 HTML 或 CSS 搏斗。我们的使命是提供免费、高质量的工具来解决这些常见的 Web 开发挑战。'
        },
        whyBuilt: {
            title: '为什么你要使用它',
            content: '网络正在发展，移动流量现在占所有互联网使用量的一半以上。传统的 iframe 通常是静态的，在较小的屏幕上会破坏布局。我们看到需要一种工具，开箱即用地优先考虑<strong>响应性</strong>和<strong>SEO 最佳实践</strong>。'
        },
        offer: {
            title: '我们提供什么',
            items: [
                '<strong>Iframe 生成器：</strong> 为任何 URL 创建自定义 iframe。',
                '<strong>Google 地图嵌入：</strong> 无需 API 密钥即可生成地图嵌入。',
                '<strong>YouTube 嵌入：</strong> 使用高级选项自定义 YouTube 播放器。',
                '<strong>响应式检查器：</strong> 验证您的嵌入内容在所有设备上看起来都很棒。'
            ]
        },
        conclusion: '感谢您使用我们的工具。我们根据您的反馈不断改进并添加新功能。'
    }
};

const about_es: AboutContent = {
    title: 'Sobre Nosotros',
    description: 'Conozca más sobre Iframe Generator, nuestra misión y por qué creamos las mejores herramientas gratuitas de iframe en línea.',
    sections: {
        intro: 'Bienvenido a <strong>Iframe Generator</strong>, la herramienta más completa y fácil de usar para crear códigos de inserción de iframe responsivos.',
        mission: {
            title: 'Nuestra Misión',
            content: 'Creemos que incrustar contenido en la web debe ser simple, accesible y responsivo por defecto. Ya sea desarrollador, creador de contenido o dueño de un negocio, no debería tener que luchar con HTML o CSS complejos solo para compartir un mapa o un video. Nuestra misión es proporcionar herramientas gratuitas y de alta calidad que resuelvan estos desafíos comunes de desarrollo web.'
        },
        whyBuilt: {
            title: 'Por qué construimos esto',
            content: 'La web está evolucionando y el tráfico móvil ahora representa más de la mitad de todo el uso de Internet. Los iframes tradicionales a menudo son estáticos y se rompen en pantallas más pequeñas. Vimos la necesidad de una herramienta que priorice la <strong>capacidad de respuesta</strong> y las <strong>mejores prácticas de SEO</strong> desde el primer momento.'
        },
        offer: {
            title: 'Lo que ofrecemos',
            items: [
                '<strong>Generador de Iframe:</strong> Cree iframes personalizados para cualquier URL.',
                '<strong>Incrustar Google Maps:</strong> Genere incrustaciones de mapas sin una clave API.',
                '<strong>Incrustar YouTube:</strong> Personalice los reproductores de YouTube con opciones avanzadas.',
                '<strong>Comprobador Responsivo:</strong> Verifique que sus incrustaciones se vean geniales en todos los dispositivos.'
            ]
        },
        conclusion: 'Gracias por usar nuestras herramientas. Estamos mejorando constantemente y agregando nuevas funciones basadas en sus comentarios.'
    }
};

const about_jp: AboutContent = {
    title: '私たちについて',
    description: 'Iframe Generatorの詳細、私たちの使命、そしてなぜ私たちが最高の無料オンラインiframeツールを作成したかについて学びましょう。',
    sections: {
        intro: '<strong>Iframe Generator</strong>へようこそ。これは、レスポンシブなiframe埋め込みコードを作成するための最も包括的で使いやすいツールです。',
        mission: {
            title: '私たちの使命',
            content: 'ウェブ上のコンテンツの埋め込みは、デフォルトでシンプル、アクセシブル、かつレスポンシブであるべきだと信じています。開発者であれ、コンテンツクリエイターであれ、ビジネスオーナーであれ、地図やビデオを共有するためだけに複雑なHTMLやCSSと格闘する必要はありません。私たちの使命は、これらの一般的なウェブ開発の課題を解決する無料の高品質なツールを提供することです。'
        },
        whyBuilt: {
            title: 'これを作った理由',
            content: 'ウェブは進化しており、モバイルトラフィックは現在、全インターネット使用量の半分以上を占めています。従来のiframeは多くの場合静的であり、小さな画面ではレイアウトが崩れます。私たちは、<strong>レスポンシブ性</strong>と<strong>SEOのベストプラクティス</strong>を最初から優先するツールの必要性を感じました。'
        },
        offer: {
            title: '提供するもの',
            items: [
                '<strong>Iframeジェネレーター：</strong> 任意のURLに対してカスタムiframeを作成します。',
                '<strong>Googleマップ埋め込み：</strong> APIキーなしでマップ埋め込みを生成します。',
                '<strong>YouTube埋め込み：</strong> 高度なオプションでYouTubeプレーヤーをカスタマイズします。',
                '<strong>レスポンシブチェッカー：</strong> 埋め込みがすべてのデバイスで素晴らしく見えることを確認します。'
            ]
        },
        conclusion: '私たちのツールをご利用いただきありがとうございます。私たちは、皆様のフィードバックに基づいて、常に改善し、新しい機能を追加しています。'
    }
};

const about_de: AboutContent = {
    title: 'Über Uns',
    description: 'Erfahren Sie mehr über Iframe Generator, unsere Mission und warum wir die besten kostenlosen Online-Iframe-Tools erstellt haben.',
    sections: {
        intro: 'Willkommen bei <strong>Iframe Generator</strong>, dem umfassendsten und benutzerfreundlichsten Tool zum Erstellen von responsiven Iframe-Einbettungscodes.',
        mission: {
            title: 'Unsere Mission',
            content: 'Wir glauben, dass das Einbetten von Inhalten im Web standardmäßig einfach, zugänglich und responsiv sein sollte. Egal, ob Sie Entwickler, Content Creator oder Geschäftsinhaber sind, Sie sollten sich nicht mit komplexem HTML oder CSS herumschlagen müssen, nur um eine Karte oder ein Video zu teilen. Unsere Mission ist es, kostenlose, qualitativ hochwertige Tools bereitzustellen, die diese allgemeinen Herausforderungen der Webentwicklung lösen.'
        },
        whyBuilt: {
            title: 'Warum wir das gebaut haben',
            content: 'Das Web entwickelt sich weiter, und der mobile Datenverkehr macht mittlerweile mehr als die Hälfte der gesamten Internetnutzung aus. Herkömmliche Iframes sind oft statisch und brechen auf kleineren Bildschirmen. Wir sahen die Notwendigkeit für ein Tool, das <strong>Reaktionsfähigkeit</strong> und <strong>SEO-Best Practices</strong> von Anfang an priorisiert.'
        },
        offer: {
            title: 'Was wir anbieten',
            items: [
                '<strong>Iframe Generator:</strong> Erstellen Sie benutzerdefinierte Iframes für jede URL.',
                '<strong>Google Maps Embed:</strong> Generieren Sie Karteneinbettungen ohne API-Schlüssel.',
                '<strong>YouTube Embed:</strong> Passen Sie YouTube-Player mit erweiterten Optionen an.',
                '<strong>Responsiver Checker:</strong> Überprüfen Sie, ob Ihre Einbettungen auf allen Geräten gut aussehen.'
            ]
        },
        conclusion: 'Vielen Dank, dass Sie unsere Tools nutzen. Wir verbessern uns ständig und fügen basierend auf Ihrem Feedback neue Funktionen hinzu.'
    }
};

const about_fr: AboutContent = {
    title: 'À Propos de Nous',
    description: 'En savoir plus sur Iframe Generator, notre mission et pourquoi nous avons créé les meilleurs outils iframe en ligne gratuits.',
    sections: {
        intro: 'Bienvenue sur <strong>Iframe Generator</strong>, l\'outil le plus complet et le plus convivial pour créer des codes d\'intégration iframe réactifs.',
        mission: {
            title: 'Notre Mission',
            content: 'Nous pensons que l\'intégration de contenu sur le web doit être simple, accessible et réactive par défaut. Que vous soyez développeur, créateur de contenu ou propriétaire d\'entreprise, vous ne devriez pas avoir à vous battre avec du HTML ou du CSS complexe juste pour partager une carte ou une vidéo. Notre mission est de fournir des outils gratuits et de haute qualité qui résolvent ces défis courants du développement web.'
        },
        whyBuilt: {
            title: 'Pourquoi nous avons construit ceci',
            content: 'Le web évolue et le trafic mobile représente désormais plus de la moitié de toute l\'utilisation d\'Internet. Les iframes traditionnelles sont souvent statiques et se brisent sur les petits écrans. Nous avons vu le besoin d\'un outil qui priorise la <strong>réactivité</strong> et les <strong>meilleures pratiques SEO</strong> dès le départ.'
        },
        offer: {
            title: 'Ce que nous offrons',
            items: [
                '<strong>Générateur Iframe :</strong> Créez des iframes personnalisés pour n\'importe quelle URL.',
                '<strong>Intégration Google Maps :</strong> Générez des intégrations de cartes sans clé API.',
                '<strong>Intégration YouTube :</strong> Personnalisez les lecteurs YouTube avec des options avancées.',
                '<strong>Vérificateur Réactif :</strong> Vérifiez que vos intégrations sont superbes sur tous les appareils.'
            ]
        },
        conclusion: 'Merci d\'utiliser nos outils. Nous améliorons constamment et ajoutons de nouvelles fonctionnalités en fonction de vos commentaires.'
    }
};

export function getAboutContent(locale: Locale): AboutContent {
    switch (locale) {
        case 'zh': return about_zh;
        case 'es': return about_es;
        case 'ja': return about_jp;
        case 'de': return about_de;
        case 'fr': return about_fr;
        case 'en':
        default: return about_en;
    }
}
