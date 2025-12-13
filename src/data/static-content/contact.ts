import { Locale } from '@/i18n/config';

export type ContactContent = {
    title: string;
    description: string;
    intro: string;
    email: {
        title: string;
        description: string;
    };
};

const contact_en: ContactContent = {
    title: 'Contact Us',
    description: 'Get in touch with the Iframe Generator team for support, feedback, or inquiries.',
    intro: 'Have a question, suggestion, or found a bug? We\'d love to hear from you! While we are a small team, we try our best to respond to all inquiries within 24-48 hours.',
    email: {
        title: 'Email Us',
        description: 'For support, feedback, feature requests, and general inquiries.'
    }
};

const contact_zh: ContactContent = {
    title: '联系我们',
    description: '联系 Iframe 生成器团队以获取支持、反馈或咨询。',
    intro: '有问题、建议或发现错误？我们很高兴收到您的来信！虽然我们是一个小团队，但我们会尽最大努力在 24-48 小时内回复所有询问。',
    email: {
        title: '给我们发邮件',
        description: '用于支持、反馈、功能请求和一般咨询。'
    }
};

const contact_es: ContactContent = {
    title: 'Contáctenos',
    description: 'Póngase en contacto con el equipo de Iframe Generator para soporte, comentarios o consultas.',
    intro: '¿Tiene alguna pregunta, sugerencia o encontró un error? ¡Nos encantaría saber de usted! Aunque somos un equipo pequeño, hacemos todo lo posible para responder a todas las consultas dentro de las 24-48 horas.',
    email: {
        title: 'envíenos un correo electrónico',
        description: 'Para soporte, comentarios, solicitudes de funciones y consultas generales.'
    }
};

const contact_jp: ContactContent = {
    title: 'お問い合わせ',
    description: 'サポート、フィードバック、またはお問い合わせについては、Iframe Generatorチームにご連絡ください。',
    intro: 'ご質問、ご提案、またはバグを見つけましたか？お待ちしております！少人数のチームですが、すべてのお問い合わせに24〜48時間以内に返信するよう最善を尽くしています。',
    email: {
        title: 'メールでお問い合わせ',
        description: 'サポート、フィードバック、機能のリクエスト、および一般的なお問い合わせについて。'
    }
};

const contact_de: ContactContent = {
    title: 'Kontaktieren Sie uns',
    description: 'Kontaktieren Sie das Iframe Generator-Team für Support, Feedback oder Anfragen.',
    intro: 'Haben Sie eine Frage, einen Vorschlag oder einen Fehler gefunden? Wir würden uns freuen, von Ihnen zu hören! Obwohl wir ein kleines Team sind, versuchen wir unser Bestes, um alle Anfragen innerhalb von 24-48 Stunden zu beantworten.',
    email: {
        title: 'Senden Sie uns eine E-Mail',
        description: 'Für Support, Feedback, Funktionsanfragen und allgemeine Anfragen.'
    }
};

const contact_fr: ContactContent = {
    title: 'Contactez-nous',
    description: 'Contactez l\'équipe Iframe Generator pour obtenir de l\'aide, des commentaires ou des demandes de renseignements.',
    intro: 'Vous avez une question, une suggestion ou vous avez trouvé un bug ? Nous serions ravis de vous entendre ! Bien que nous soyons une petite équipe, nous faisons de notre mieux pour répondre à toutes les demandes dans les 24 à 48 heures.',
    email: {
        title: 'Envoyez-nous un email',
        description: 'Pour le support, les commentaires, les demandes de fonctionnalités et les demandes générales.'
    }
};

const contact_pt: ContactContent = {
    title: 'Fale Conosco',
    description: 'Entre em contato com a equipe do Gerador de Iframe para suporte, feedback ou dúvidas.',
    intro: 'Tem alguma dúvida, sugestão ou encontrou um bug? Gostaríamos muito de ouvir você! Embora sejamos uma equipe pequena, fazemos o possível para responder a todas as perguntas dentro de 24 a 48 horas.',
    email: {
        title: 'Envie-nos um e-mail',
        description: 'Para suporte, feedback, solicitações de recursos e dúvidas gerais.'
    }
};

const contact_it: ContactContent = {
    title: 'Contattaci',
    description: 'Mettiti in contatto con il team di Iframe Generator per supporto, feedback o richieste.',
    intro: 'Hai una domanda, un suggerimento o hai trovato un bug? Ci piacerebbe sentirti! Anche se siamo un piccolo team, facciamo del nostro meglio per rispondere a tutte le richieste entro 24-48 ore.',
    email: {
        title: 'Inviaci un\'e-mail',
        description: 'Per supporto, feedback, richieste di funzionalità e domande generali.'
    }
};

const contact_ru: ContactContent = {
    title: 'Свяжитесь с нами',
    description: 'Свяжитесь с командой Генератора Iframe для поддержки, отзывов или запросов.',
    intro: 'У вас есть вопрос, предложение или вы нашли ошибку? Мы будем рады услышать от вас! Несмотря на то, что мы небольшая команда, мы стараемся отвечать на все запросы в течение 24-48 часов.',
    email: {
        title: 'Напишите нам',
        description: 'Для поддержки, отзывов, запросов функций и общих вопросов.'
    }
};

export function getContactContent(locale: Locale): ContactContent {
    switch (locale) {
        case 'zh': return contact_zh;
        case 'es': return contact_es;
        case 'ja': return contact_jp;
        case 'de': return contact_de;
        case 'fr': return contact_fr;
        case 'pt': return contact_pt;
        case 'it': return contact_it;
        case 'ru': return contact_ru;
        case 'en':
        default: return contact_en;
    }
}
