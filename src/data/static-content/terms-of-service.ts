import { Locale } from '@/i18n/config';

export type TermsOfServiceContent = {
    title: string;
    lastUpdated: string;
    sections: {
        title: string;
        content: string;
    }[];
};

const terms_en: TermsOfServiceContent = {
    title: 'Terms of Service',
    lastUpdated: 'Last updated: December 2025',
    sections: [
        {
            title: '1. Agreement to Terms',
            content: 'By accessing our website at Iframe Generator, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.'
        },
        {
            title: '2. Use License',
            content: 'Permission is granted to temporarily download one copy of the materials (information or software) on Iframe Generator\'s website for personal, non-commercial transitory viewing only.'
        },
        {
            title: '3. Disclaimer',
            content: 'The materials on Iframe Generator\'s website are provided on an "as is" basis. Iframe Generator makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
        },
        {
            title: '4. Limitations',
            content: 'In no event shall Iframe Generator or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Iframe Generator\'s website.'
        },
        {
            title: '5. Accuracy of Materials',
            content: 'The materials appearing on Iframe Generator\'s website could include technical, typographical, or photographic errors. Iframe Generator does not warrant that any of the materials on its website are accurate, complete or current.'
        },
        {
            title: '6. Modifications',
            content: 'Iframe Generator may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.'
        }
    ]
};

const terms_zh: TermsOfServiceContent = {
    title: '服务条款',
    lastUpdated: '最后更新：2025年12月',
    sections: [
        {
            title: '1. 同意条款',
            content: '通过访问我们的网站 Iframe Generator，您同意受这些服务条款、所有适用法律和法规的约束，并同意您有责任遵守任何适用的当地法律。如果您不同意这些条款中的任何一项，则禁止您使用或访问本网站。'
        },
        {
            title: '2. 使用许可',
            content: '允许暂时下载 Iframe Generator 网站上的材料（信息或软件）的一份副本，仅供个人、非商业性临时查看。'
        },
        {
            title: '3. 免责声明',
            content: 'Iframe Generator 网站上的材料按“原样”提供。Iframe Generator 不提供任何明示或暗示的保证，特此否认并否定所有其他保证，包括但不限于适销性、特定用途的适用性或不侵犯知识产权或其他侵犯权利的暗示保证或条件。'
        },
        {
            title: '4. 限制',
            content: '在任何情况下，Iframe Generator 或其供应商均不对因使用或无法使用 Iframe Generator 网站上的材料而造成的任何损害（包括但不限于数据丢失或利润损失，或由于业务中断造成的损害）负责。'
        },
        {
            title: '5. 材料准确性',
            content: 'Iframe Generator 网站上显示的材料可能包含技术、印刷或摄影错误。Iframe Generator 不保证其网站上的任何材料是准确、完整或最新的。'
        },
        {
            title: '6. 修改',
            content: 'Iframe Generator 可能随时修改其网站的这些服务条款，恕不另行通知。使用本网站即表示您同意受这些服务条款的当时最新版本的约束。'
        }
    ]
};

const terms_es: TermsOfServiceContent = {
    title: 'Términos de Servicio',
    lastUpdated: 'Última actualización: Diciembre de 2025',
    sections: [
        {
            title: '1. Acuerdo de Términos',
            content: 'Al acceder a nuestro sitio web en Iframe Generator, usted acepta estar sujeto a estos términos de servicio, todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de las leyes locales aplicables. Si no está de acuerdo con alguno de estos términos, tiene prohibido usar o acceder a este sitio.'
        },
        {
            title: '2. Licencia de Uso',
            content: 'Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web de Iframe Generator solo para visualización transitoria personal y no comercial.'
        },
        {
            title: '3. Descargo de responsabilidad',
            content: 'Los materiales en el sitio web de Iframe Generator se proporcionan "tal cual". Iframe Generator no ofrece garantías, expresas o implícitas, y por la presente renuncia y niega todas las demás garantías, incluidas, entre otras, las garantías implícitas o condiciones de comerciabilidad, idoneidad para un propósito particular o no infracción de propiedad intelectual u otra violación de derechos.'
        },
        {
            title: '4. Limitaciones',
            content: 'En ningún caso Iframe Generator o sus proveedores serán responsables de ningún daño (incluidos, entre otros, daños por pérdida de datos o ganancias, o debido a la interrupción del negocio) que surjan del uso o la imposibilidad de usar los materiales en el sitio web de Iframe Generator.'
        },
        {
            title: '5. Precisión de los materiales',
            content: 'Los materiales que aparecen en el sitio web de Iframe Generator podrían incluir errores técnicos, tipográficos o fotográficos. Iframe Generator no garantiza que ninguno de los materiales en su sitio web sea preciso, completo o actual.'
        },
        {
            title: '6. Modificaciones',
            content: 'Iframe Generator puede revisar estos términos de servicio para su sitio web en cualquier momento sin previo aviso. Al utilizar este sitio web, usted acepta estar sujeto a la versión actual de estos términos de servicio.'
        }
    ]
};

const terms_jp: TermsOfServiceContent = {
    title: '利用規約',
    lastUpdated: '最終更新日：2025年12月',
    sections: [
        {
            title: '1. 規約への同意',
            content: 'Iframe Generatorのウェブサイトにアクセスすることにより、お客様はこれらの利用規約、すべての適用法および規制に拘束されることに同意し、適用される地域の法律を遵守する責任があることに同意するものとします。これらの条件のいずれかに同意しない場合、このサイトの使用またはアクセスは禁止されています。'
        },
        {
            title: '2. 使用許諾',
            content: '個人的、非営利的な一時的な閲覧のためにのみ、Iframe Generatorのウェブサイト上の資料（情報またはソフトウェア）のコピーを1部一時的にダウンロードする許可が与えられます。'
        },
        {
            title: '3. 免責事項',
            content: 'Iframe Generatorのウェブサイト上の資料は「現状のまま」提供されます。Iframe Generatorは、明示または黙示を問わず、いかなる保証も行わず、商品性、特定の目的への適合性、または知的財産権の非侵害、その他の権利侵害の黙示の保証または条件を含むがこれらに限定されない、他のすべての保証を否認します。'
        },
        {
            title: '4. 制限',
            content: 'Iframe Generatorまたはそのサプライヤーは、Iframe Generatorのウェブサイト上の資料の使用または使用不能から生じるいかなる損害（データの損失または利益の損失、または業務の中断による損害を含むがこれらに限定されない）についても、一切責任を負いません。'
        },
        {
            title: '5. 資料の正確性',
            content: 'Iframe Generatorのウェブサイトに表示される資料には、技術的、誤植、または写真上の誤りが含まれる場合があります。Iframe Generatorは、そのウェブサイト上の資料がいずれも正確、完全、または最新であることを保証しません。'
        },
        {
            title: '6. 変更',
            content: 'Iframe Generatorは、予告なしにいつでもそのウェブサイトのこれらの利用規約を改訂することができます。このウェブサイトを使用することにより、お客様はこれらの利用規約のその時点での最新バージョンに拘束されることに同意するものとします。'
        }
    ]
};

const terms_de: TermsOfServiceContent = {
    title: 'Nutzungsbedingungen',
    lastUpdated: 'Zuletzt aktualisiert: Dezember 2025',
    sections: [
        {
            title: '1. Zustimmung zu den Bedingungen',
            content: 'Durch den Zugriff auf unsere Website bei Iframe Generator erklären Sie sich mit diesen Nutzungsbedingungen, allen geltenden Gesetzen und Vorschriften einverstanden und stimmen zu, dass Sie für die Einhaltung aller geltenden lokalen Gesetze verantwortlich sind. Wenn Sie mit einer dieser Bedingungen nicht einverstanden sind, ist Ihnen die Nutzung oder der Zugriff auf diese Website untersagt.'
        },
        {
            title: '2. Nutzungslizenz',
            content: 'Es wird die Erlaubnis erteilt, eine Kopie der Materialien (Informationen oder Software) auf der Website von Iframe Generator nur für den persönlichen, nicht kommerziellen vorübergehenden Gebrauch herunterzuladen.'
        },
        {
            title: '3. Haftungsausschluss',
            content: 'Die Materialien auf der Website von Iframe Generator werden "wie besehen" bereitgestellt. Iframe Generator gibt keine Garantien, weder ausdrücklich noch stillschweigend, und lehnt hiermit alle anderen Garantien ab und negiert sie, einschließlich, ohne Einschränkung, stillschweigender Garantien oder Bedingungen der Marktgängigkeit, Eignung für einen bestimmten Zweck oder Nichtverletzung von geistigem Eigentum oder anderer Rechtsverletzungen.'
        },
        {
            title: '4. Beschränkungen',
            content: 'In keinem Fall haften Iframe Generator oder seine Lieferanten für Schäden (einschließlich, ohne Einschränkung, Schäden durch Daten- oder Gewinnverlust oder aufgrund von Betriebsunterbrechungen), die sich aus der Nutzung oder Unfähigkeit zur Nutzung der Materialien auf der Website von Iframe Generator ergeben.'
        },
        {
            title: '5. Genauigkeit der Materialien',
            content: 'Die auf der Website von Iframe Generator erscheinenden Materialien können technische, typografische oder fotografische Fehler enthalten. Iframe Generator garantiert nicht, dass eines der Materialien auf seiner Website genau, vollständig oder aktuell ist.'
        },
        {
            title: '6. Änderungen',
            content: 'Iframe Generator kann diese Nutzungsbedingungen für seine Website jederzeit ohne Vorankündigung ändern. Durch die Nutzung dieser Website erklären Sie sich damit einverstanden, an die jeweils aktuelle Version dieser Nutzungsbedingungen gebunden zu sein.'
        }
    ]
};

const terms_fr: TermsOfServiceContent = {
    title: 'Conditions d\'Utilisation',
    lastUpdated: 'Dernière mise à jour : Décembre 2025',
    sections: [
        {
            title: '1. Acceptation des conditions',
            content: 'En accédant à notre site web Iframe Generator, vous acceptez d\'être lié par ces conditions d\'utilisation, toutes les lois et réglementations applicables, et acceptez que vous soyez responsable du respect de toutes les lois locales applicables. Si vous n\'êtes pas d\'accord avec l\'une de ces conditions, il vous est interdit d\'utiliser ou d\'accéder à ce site.'
        },
        {
            title: '2. Licence d\'utilisation',
            content: 'La permission est accordée de télécharger temporairement une copie du matériel (information ou logiciel) sur le site web d\'Iframe Generator pour une visualisation transitoire personnelle et non commerciale uniquement.'
        },
        {
            title: '3. Clause de non-responsabilité',
            content: 'Le matériel sur le site web d\'Iframe Generator est fourni "tel quel". Iframe Generator ne donne aucune garantie, expresse ou implicite, et décline et nie par la présente toutes les autres garanties, y compris, sans limitation, les garanties implicites ou conditions de qualité marchande, d\'adéquation à un usage particulier, ou de non-violation de la propriété intellectuelle ou autre violation des droits.'
        },
        {
            title: '4. Limitations',
            content: 'En aucun cas Iframe Generator ou ses fournisseurs ne pourront être tenus responsables de tout dommage (y compris, sans limitation, les dommages pour perte de données ou de profit, ou en raison d\'une interruption d\'activité) découlant de l\'utilisation ou de l\'incapacité d\'utiliser le matériel sur le site web d\'Iframe Generator.'
        },
        {
            title: '5. Exactitude du matériel',
            content: 'Le matériel apparaissant sur le site web d\'Iframe Generator pourrait inclure des erreurs techniques, typographiques ou photographiques. Iframe Generator ne garantit pas que l\'un des matériaux sur son site web est exact, complet ou à jour.'
        },
        {
            title: '6. Modifications',
            content: 'Iframe Generator peut réviser ces conditions d\'utilisation pour son site web à tout moment sans préavis. En utilisant ce site web, vous acceptez d\'être lié par la version alors en vigueur de ces conditions d\'utilisation.'
        }
    ]
};

export function getTermsOfServiceContent(locale: Locale): TermsOfServiceContent {
    switch (locale) {
        case 'zh': return terms_zh;
        case 'es': return terms_es;
        case 'ja': return terms_jp;
        case 'de': return terms_de;
        case 'fr': return terms_fr;
        case 'en':
        default: return terms_en;
    }
}
