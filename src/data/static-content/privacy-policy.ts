import { Locale } from '@/i18n/config';

export type PrivacyPolicyContent = {
    title: string;
    lastUpdated: string;
    sections: {
        title: string;
        content: string | string[];
        list?: string[];
    }[];
};

const privacy_en: PrivacyPolicyContent = {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: December 2025',
    sections: [
        {
            title: '1. Introduction',
            content: 'Welcome to Iframe Generator ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.'
        },
        {
            title: '2. Data We Collect',
            content: 'We currently do not require you to create an account to use our tools. We may collect:',
            list: [
                'Usage Data: Information about how you use our website, products, and services.',
                'Technical Data: Internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.'
            ]
        },
        {
            title: '3. How We Use Your Data',
            content: 'We will only use your personal data when the law allows us to. Most commonly, we use your personal data in the following circumstances:',
            list: [
                'To improve our website and services.',
                'To analyze how users use our website.'
            ]
        },
        {
            title: '4. Cookies',
            content: 'We use cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.'
        },
        {
            title: '5. Third-Party Links',
            content: 'This website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.'
        },
        {
            title: '6. Contact Us',
            content: 'If you have any questions about this privacy policy or our privacy practices, please contact us.'
        }
    ]
};

const privacy_zh: PrivacyPolicyContent = {
    title: '隐私政策',
    lastUpdated: '最后更新：2025年12月',
    sections: [
        {
            title: '1. 简介',
            content: '欢迎访问 Iframe 生成器（“我们”）。我们尊重您的隐私并致力于保护您的个人数据。本隐私政策将告知您在访问我们需要网站时我们如何处理您的个人数据，并告知您有关您的隐私权以及法律如何保护您。'
        },
        {
            title: '2. 我们收集的数据',
            content: '目前我们不要求您创建帐户来使用我们的工具。我们可能会收集：',
            list: [
                '使用数据：有关您如何使用我们的网站、产品和服务的信息。',
                '技术数据：互联网协议 (IP) 地址、浏览器类型和版本、时区设置和位置、浏览器插件类型和版本、操作系统和平台。'
            ]
        },
        {
            title: '3. 我们如何使用您的数据',
            content: '我们仅在法律允许的情况下使用您的个人数据。最常见的情况是，我们在以下情况下使用您的个人数据：',
            list: [
                '改善我们的网站和服务。',
                '分析用户如何使用我们的网站。'
            ]
        },
        {
            title: '4. Cookie',
            content: '我们使用 Cookie 将您与其我们网站的其他用户区分开来。这有助于我们在您浏览我们的网站时为您提供良好的体验，并允许我们改进我们的网站。'
        },
        {
            title: '5. 第三方链接',
            content: '本网站可能包含指向第三方网站、插件和应用程序的链接。点击这些链接或启用这些连接可能会允许第三方收集或共享有关您的数据。我们无法控制这些第三方网站，也不对其隐私声明负责。'
        },
        {
            title: '6. 联系我们',
            content: '如果您对本隐私政策或我们的隐私惯例有任何疑问，请联系我们。'
        }
    ]
};

const privacy_es: PrivacyPolicyContent = {
    title: 'Política de Privacidad',
    lastUpdated: 'Última actualización: Diciembre de 2025',
    sections: [
        {
            title: '1. Introducción',
            content: 'Bienvenido a Iframe Generator ("nosotros", "nuestro" o "nos"). Respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta política de privacidad le informará sobre cómo cuidamos sus datos personales cuando visita nuestro sitio web y le informará sobre sus derechos de privacidad y cómo la ley lo protege.'
        },
        {
            title: '2. Datos que recopilamos',
            content: 'Actualmente no requerimos que cree una cuenta para utilizar nuestras herramientas. Podemos recopilar:',
            list: [
                'Datos de uso: Información sobre cómo utiliza nuestro sitio web, productos y servicios.',
                'Datos técnicos: Dirección de protocolo de Internet (IP), tipo y versión del navegador, configuración y ubicación de la zona horaria, tipos y versiones de complementos del navegador, sistema operativo y plataforma.'
            ]
        },
        {
            title: '3. Cómo utilizamos sus datos',
            content: 'Solo utilizaremos sus datos personales cuando la ley nos lo permita. Por lo general, utilizamos sus datos personales en las siguientes circunstancias:',
            list: [
                'Para mejorar nuestro sitio web y servicios.',
                'Para analizar cómo los usuarios utilizan nuestro sitio web.'
            ]
        },
        {
            title: '4. Cookies',
            content: 'Utilizamos cookies para distinguirle de otros usuarios de nuestro sitio web. Esto nos ayuda a proporcionarle una buena experiencia cuando navega por nuestro sitio web y también nos permite mejorarlo.'
        },
        {
            title: '5. Enlaces de terceros',
            content: 'Este sitio web puede incluir enlaces a sitios web, complementos y aplicaciones de terceros. Hacer clic en esos enlaces o habilitar esas conexiones puede permitir que terceros recopilen o compartan datos sobre usted. No controlamos estos sitios web de terceros y no somos responsables de sus declaraciones de privacidad.'
        },
        {
            title: '6. Contáctenos',
            content: 'Si tiene alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad, contáctenos.'
        }
    ]
};

const privacy_jp: PrivacyPolicyContent = {
    title: 'プライバシーポリシー',
    lastUpdated: '最終更新日：2025年12月',
    sections: [
        {
            title: '1. はじめに',
            content: 'Iframe Generator（「当社」）へようこそ。当社はお客様のプライバシーを尊重し、個人データの保護に努めています。このプライバシーポリシーでは、お客様が当社のウェブサイトにアクセスした際の個人データの取り扱い方法、プライバシー権、および法律による保護について説明します。'
        },
        {
            title: '2. 収集するデータ',
            content: '現在、ツールを使用するためにアカウントを作成する必要はありません。以下を収集する場合があります：',
            list: [
                '使用状況データ：当社のウェブサイト、製品、サービスの使用方法に関する情報。',
                '技術データ：インターネットプロトコル（IP）アドレス、ブラウザの種類とバージョン、タイムゾーン設定と場所、ブラウザプラグインの種類とバージョン、オペレーティングシステムとプラットフォーム。'
            ]
        },
        {
            title: '3. データの使用方法',
            content: '当社は、法律で許可されている場合にのみ個人データを使用します。最も一般的には、以下の状況でお客様の個人データを使用します：',
            list: [
                '当社のウェブサイトとサービスを改善するため。',
                'ユーザーが当社のウェブサイトをどのように使用しているかを分析するため。'
            ]
        },
        {
            title: '4. クッキー（Cookie）',
            content: '当社はクッキーを使用して、お客様を当社のウェブサイトの他のユーザーと区別します。これにより、お客様が当社のウェブサイトを閲覧する際に優れた体験を提供し、サイトを改善することができます。'
        },
        {
            title: '5. サードパーティへのリンク',
            content: 'このウェブサイトには、サードパーティのウェブサイト、プラグイン、アプリケーションへのリンクが含まれている場合があります。これらのリンクをクリックしたり、接続を有効にしたりすると、サードパーティがお客様に関するデータを収集または共有する可能性があります。当社はこれらサードパーティのウェブサイトを管理しておらず、そのプライバシーに関する声明について責任を負いません。'
        },
        {
            title: '6. お問い合わせ',
            content: 'このプライバシーポリシーまたは当社のプライバシー慣行についてご質問がある場合は、お問い合わせください。'
        }
    ]
};

const privacy_de: PrivacyPolicyContent = {
    title: 'Datenschutzerklärung',
    lastUpdated: 'Zuletzt aktualisiert: Dezember 2025',
    sections: [
        {
            title: '1. Einleitung',
            content: 'Willkommen bei Iframe Generator ("wir", "unser" oder "uns"). Wir respektieren Ihre Privatsphäre und verpflichten uns, Ihre personenbezogenen Daten zu schützen. Diese Datenschutzerklärung informiert Sie darüber, wie wir Ihre personenbezogenen Daten behandeln, wenn Sie unsere Website besuchen, und klärt Sie über Ihre Datenschutzrechte und den gesetzlichen Schutz auf.'
        },
        {
            title: '2. Daten, die wir sammeln',
            content: 'Derzeit müssen Sie kein Konto erstellen, um unsere Tools zu nutzen. Wir können sammeln:',
            list: [
                'Nutzungsdaten: Informationen darüber, wie Sie unsere Website, Produkte und Dienstleistungen nutzen.',
                'Technische Daten: Internetprotokoll-Adresse (IP), Browsertyp und -version, Zeitzoneneinstellung und Standort, Browser-Plug-in-Typen und -Versionen, Betriebssystem und Plattform.'
            ]
        },
        {
            title: '3. Wie wir Ihre Daten verwenden',
            content: 'Wir verwenden Ihre personenbezogenen Daten nur, wenn das Gesetz es uns erlaubt. Am häufigsten verwenden wir Ihre personenbezogenen Daten unter folgenden Umständen:',
            list: [
                'Um unsere Website und Dienste zu verbessern.',
                'Um zu analysieren, wie Benutzer unsere Website nutzen.'
            ]
        },
        {
            title: '4. Cookies',
            content: 'Wir verwenden Cookies, um Sie von anderen Benutzern unserer Website zu unterscheiden. Dies hilft uns, Ihnen beim Surfen auf unserer Website eine gute Erfahrung zu bieten und ermöglicht es uns auch, unsere Website zu verbessern.'
        },
        {
            title: '5. Links von Dritten',
            content: 'Diese Website kann Links zu Websites, Plug-ins und Anwendungen Dritter enthalten. Wenn Sie auf diese Links klicken oder diese Verbindungen aktivieren, können Dritte möglicherweise Daten über Sie sammeln oder weitergeben. Wir kontrollieren diese Websites Dritter nicht und sind nicht für deren Datenschutzerklärungen verantwortlich.'
        },
        {
            title: '6. Kontaktieren Sie uns',
            content: 'Wenn Sie Fragen zu dieser Datenschutzerklärung oder unseren Datenschutzpraktiken haben, kontaktieren Sie uns bitte.'
        }
    ]
};

const privacy_fr: PrivacyPolicyContent = {
    title: 'Politique de Confidentialité',
    lastUpdated: 'Dernière mise à jour : Décembre 2025',
    sections: [
        {
            title: '1. Introduction',
            content: 'Bienvenue sur Iframe Generator (« nous », « notre » ou « nos »). Nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. Cette politique de confidentialité vous informera sur la manière dont nous traitons vos données personnelles lorsque vous visitez notre site web et vous informera de vos droits en matière de confidentialité et de la manière dont la loi vous protège.'
        },
        {
            title: '2. Données que nous collectons',
            content: 'Nous ne vous demandons actuellement pas de créer un compte pour utiliser nos outils. Nous pouvons collecter :',
            list: [
                'Données d\'utilisation : Informations sur la manière dont vous utilisez notre site web, nos produits et nos services.',
                'Données techniques : Adresse de protocole Internet (IP), type et version du navigateur, paramètre et emplacement du fuseau horaire, types et versions de plug-ins de navigateur, système d\'exploitation et plateforme.'
            ]
        },
        {
            title: '3. Comment nous utilisons vos données',
            content: 'Nous n\'utiliserons vos données personnelles que lorsque la loi nous le permet. Le plus souvent, nous utilisons vos données personnelles dans les circonstances suivantes :',
            list: [
                'Pour améliorer notre site web et nos services.',
                'Pour analyser comment les utilisateurs utilisent notre site web.'
            ]
        },
        {
            title: '4. Cookies',
            content: 'Nous utilisons des cookies pour vous distinguer des autres utilisateurs de notre site web. Cela nous aide à vous offrir une bonne expérience lorsque vous naviguez sur notre site web et nous permet également d\'améliorer notre site.'
        },
        {
            title: '5. Liens tiers',
            content: 'Ce site web peut inclure des liens vers des sites web, des plug-ins et des applications tiers. Cliquer sur ces liens ou activer ces connexions peut permettre à des tiers de collecter ou de partager des données vous concernant. Nous ne contrôlons pas ces sites web tiers et ne sommes pas responsables de leurs déclarations de confidentialité.'
        },
        {
            title: '6. Contactez-nous',
            content: 'Si vous avez des questions concernant cette politique de confidentialité ou nos pratiques en matière de confidentialité, veuillez nous contacter.'
        }
    ]
};

const privacy_pt: PrivacyPolicyContent = {
    title: 'Política de Privacidade',
    lastUpdated: 'Última atualização: Dezembro de 2025',
    sections: [
        {
            title: '1. Introdução',
            content: 'Bem-vindo ao Gerador de Iframe ("nós", "nosso" ou "nos"). Respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais. Esta política de privacidade irá informá-lo sobre como cuidamos de seus dados pessoais quando você visita nosso site e lhe informará sobre seus direitos de privacidade e como a lei o protege.'
        },
        {
            title: '2. Dados que Coletamos',
            content: 'Atualmente não exigimos que você crie uma conta para usar nossas ferramentas. Podemos coletar:',
            list: [
                'Dados de Uso: Informações sobre como você usa nosso site, produtos e serviços.',
                'Dados Técnicos: Endereço de protocolo de internet (IP), tipo e versão do navegador, configuração de fuso horário e localização, tipos e versões de plug-ins do navegador, sistema operacional e plataforma.'
            ]
        },
        {
            title: '3. Como Usamos Seus Dados',
            content: 'Só usaremos seus dados pessoais quando a lei nos permitir. Mais comumente, usamos seus dados pessoais nas seguintes circunstâncias:',
            list: [
                'Para melhorar nosso site e serviços.',
                'Para analisar como os usuários usam nosso site.'
            ]
        },
        {
            title: '4. Cookies',
            content: 'Usamos cookies para distingui-lo de outros usuários do nosso site. Isso nos ajuda a fornecer a você uma boa experiência ao navegar em nosso site e também nos permite melhorar nosso site.'
        },
        {
            title: '5. Links de Terceiros',
            content: 'Este site pode incluir links para sites, plug-ins e aplicativos de terceiros. Clicar nesses links ou habilitar essas conexões pode permitir que terceiros coletem ou compartilhem dados sobre você. Não controlamos esses sites de terceiros e não somos responsáveis por suas declarações de privacidade.'
        },
        {
            title: '6. Fale Conosco',
            content: 'Se você tiver alguma dúvida sobre esta política de privacidade ou sobre nossas práticas de privacidade, entre em contato conosco.'
        }
    ]
};

const privacy_it: PrivacyPolicyContent = {
    title: 'Informativa sulla Privacy',
    lastUpdated: 'Ultimo aggiornamento: Dicembre 2025',
    sections: [
        {
            title: '1. Introduzione',
            content: 'Benvenuto su Iframe Generator ("noi", "nostro" o "ci"). Rispettiamo la tua privacy e ci impegniamo a proteggere i tuoi dati personali. Questa informativa sulla privacy ti informerà su come gestiamo i tuoi dati personali quando visiti il nostro sito web e ti informerà sui tuoi diritti alla privacy e su come la legge ti protegge.'
        },
        {
            title: '2. Dati che Raccogliamo',
            content: 'Attualmente non richiediamo la creazione di un account per utilizzare i nostri strumenti. Potremmo raccogliere:',
            list: [
                'Dati di Utilizzo: Informazioni su come utilizzi il nostro sito web, prodotti e servizi.',
                'Dati Tecnici: Indirizzo IP (Internet Protocol), tipo e versione del browser, impostazione del fuso orario e posizione, tipi e versioni dei plug-in del browser, sistema operativo e piattaforma.'
            ]
        },
        {
            title: '3. Come Utilizziamo i Tuoi Dati',
            content: 'Utilizzeremo i tuoi dati personali solo quando la legge ce lo consente. Più comunemente, utilizziamo i tuoi dati personali nelle seguenti circostanze:',
            list: [
                'Per migliorare il nostro sito web e i nostri servizi.',
                'Per analizzare come gli utenti utilizzano il nostro sito web.'
            ]
        },
        {
            title: '4. Cookie',
            content: 'Utilizziamo i cookie per distinguerti dagli altri utenti del nostro sito web. Questo ci aiuta a fornirti una buona esperienza quando navighi sul nostro sito web e ci consente anche di migliorare il nostro sito.'
        },
        {
            title: '5. Link di Terze Parti',
            content: 'Questo sito web può includere link a siti web, plug-in e applicazioni di terze parti. Cliccare su quei link o abilitare quelle connessioni può consentire a terze parti di raccogliere o condividere dati su di te. Non controlliamo questi siti web di terze parti e non siamo responsabili delle loro informative sulla privacy.'
        },
        {
            title: '6. Contattaci',
            content: 'Se hai domande su questa politica sulla privacy o sulle nostre pratiche sulla privacy, ti preghiamo di contattarci.'
        }
    ]
};

const privacy_ru: PrivacyPolicyContent = {
    title: 'Политика конфиденциальности',
    lastUpdated: 'Последнее обновление: Декабрь 2025',
    sections: [
        {
            title: '1. Введение',
            content: 'Добро пожаловать в Генератор Iframe («мы», «наш» или «нас»). Мы уважаем вашу конфиденциальность и обязуемся защищать ваши персональные данные. Эта политика конфиденциальности проинформирует вас о том, как мы заботимся о ваших персональных данных, когда вы посещаете наш веб-сайт, и расскажет вам о ваших правах на конфиденциальность и о том, как закон защищает вас.'
        },
        {
            title: '2. Данные, которые мы собираем',
            content: 'В настоящее время мы не требуем создания учетной записи для использования наших инструментов. Мы можем собирать:',
            list: [
                'Данные об использовании: Информация о том, как вы используете наш веб-сайт, продукты и услуги.',
                'Технические данные: IP-адрес, тип и версия браузера, настройки часового пояса и местоположение, типы и версии плагинов браузера, операционная система и платформа.'
            ]
        },
        {
            title: '3. Как мы используем ваши данные',
            content: 'Мы будем использовать ваши персональные данные только в тех случаях, когда это разрешено законом. Чаще всего мы используем ваши персональные данные в следующих обстоятельствах:',
            list: [
                'Для улучшения нашего веб-сайта и услуг.',
                'Для анализа того, как пользователи используют наш веб-сайт.'
            ]
        },
        {
            title: '4. Файлы cookie',
            content: 'Мы используем файлы cookie, чтобы отличать вас от других пользователей нашего веб-сайта. Это помогает нам обеспечивать вам удобство при просмотре нашего веб-сайта, а также позволяет нам улучшать наш сайт.'
        },
        {
            title: '5. Сторонние ссылки',
            content: 'Этот веб-сайт может содержать ссылки на сторонние веб-сайты, плагины и приложения. Нажатие на эти ссылки или включение этих соединений может позволить третьим лицам собирать или передавать данные о вас. Мы не контролируем эти сторонние веб-сайты и не несем ответственности за их заявления о конфиденциальности.'
        },
        {
            title: '6. Свяжитесь с нами',
            content: 'Если у вас есть какие-либо вопросы об этой политике конфиденциальности или нашей практике конфиденциальности, пожалуйста, свяжитесь с нами.'
        }
    ]
};

export function getPrivacyPolicyContent(locale: Locale): PrivacyPolicyContent {
    switch (locale) {
        case 'zh': return privacy_zh;
        case 'es': return privacy_es;
        case 'ja': return privacy_jp;
        case 'de': return privacy_de;
        case 'fr': return privacy_fr;
        case 'pt': return privacy_pt;
        case 'it': return privacy_it;
        case 'ru': return privacy_ru;
        case 'en':
        default: return privacy_en;
    }
}
