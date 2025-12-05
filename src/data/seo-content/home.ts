import { Locale } from '@/i18n/config';

export type SEOSection = {
  title: string;
  content: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type SEOContent = {
  title: string;
  sections: SEOSection[];
  faq: FAQItem[];
};

// English content
export const homeContent_en: SEOContent = {
  title: "How to Use Iframe Generator",
  sections: [
    {
      title: "What is an Iframe?",
      content: `
        <p>An <strong>iframe</strong> (Inline Frame) is an HTML element that allows you to embed another document within the current HTML document. It's essentially a window into another website, enabling you to display external content like videos, maps, or even entire webpages without users leaving your site.</p>
        <p>Common use cases include:</p>
        <ul>
          <li>Embedding <strong>YouTube videos</strong> or other media players.</li>
          <li>Displaying <strong>Google Maps</strong> for business locations.</li>
          <li>Integrating third-party widgets like social media feeds or payment forms.</li>
          <li>Showing external documents or PDFs.</li>
        </ul>
      `
    },
    {
      title: "How to Generate Iframe Code",
      content: `
        <p>Using our free <strong>iframe generator</strong> is simple and requires no coding knowledge:</p>
        <ol>
          <li><strong>Enter the URL:</strong> Paste the web address (URL) of the content you want to embed in the "Source URL" field.</li>
          <li><strong>Adjust Settings:</strong> Customize the width, height, border, and scrolling options to fit your website's design.</li>
          <li><strong>Preview:</strong> Use the live preview to ensure everything looks perfect on desktop and mobile devices.</li>
          <li><strong>Copy Code:</strong> Click the "Copy" button to grab the generated HTML code and paste it into your website's source code.</li>
        </ol>
      `
    },
    {
      title: "Iframe Parameters Explained",
      content: `
        <p>Understanding the key parameters helps you optimize your embeds:</p>
        <ul>
          <li><strong>Width & Height:</strong> Define the dimensions of the iframe. Use pixels (px) for fixed sizes or percentages (%) for responsive layouts.</li>
          <li><strong>Sandbox:</strong> A security feature that restricts what the embedded content can do (e.g., preventing scripts or popups). Enable specific permissions only if necessary.</li>
          <li><strong>Loading:</strong> Set to "lazy" to defer loading the iframe until it's near the viewport, improving your page load speed and SEO.</li>
          <li><strong>Border & Scrolling:</strong> Control the visual appearance. Removing borders usually looks cleaner, while scrolling settings depend on the content length.</li>
        </ul>
      `
    },
    {
      title: "Making Iframes Responsive",
      content: `
        <p>In today's mobile-first world, a <strong>responsive iframe</strong> is crucial. Standard iframes have fixed dimensions, which can break layouts on smaller screens.</p>
        <p>Our tool offers a "Make Responsive" option that uses modern CSS <code>aspect-ratio</code> or the classic "padding-hack" to ensure your embedded content scales perfectly across all devices, from desktops to smartphones.</p>
      `
    },
    {
      title: "Common Iframe Issues",
      content: `
        <p>If your iframe isn't working, check these common problems:</p>
        <ul>
          <li><strong>X-Frame-Options:</strong> Some websites (like Google or Facebook) block embedding via headers. If you see a "refused to connect" error, the site likely disallows iframes.</li>
          <li><strong>Mixed Content:</strong> If your site is on HTTPS, ensure the embedded URL is also HTTPS. Browsers block insecure HTTP content on secure pages.</li>
          <li><strong>Mobile Usability:</strong> Ensure the embedded content itself is mobile-friendly, or it may look small or broken within the iframe.</li>
        </ul>
      `
    }
  ],
  faq: [
    {
      question: "Is this Iframe Generator free?",
      answer: "Yes, this tool is 100% free to use for generating HTML iframe codes for any website."
    },
    {
      question: "How do I make my iframe responsive?",
      answer: "Simply check the 'Make Responsive' box in the settings. This will generate a wrapper div with CSS that maintains the aspect ratio on any screen size."
    },
    {
      question: "Why is my iframe not loading?",
      answer: "The most common reason is that the source website has set an 'X-Frame-Options' header to 'SAMEORIGIN' or 'DENY', preventing it from being embedded on other sites."
    },
    {
      question: "Can I embed YouTube videos with this?",
      answer: "Yes, but for the best experience, we recommend using our dedicated <a href='/youtube-embed-code-generator'>YouTube Embed Code Generator</a> which offers specific options like autoplay and loop."
    },
    {
      question: "Is it SEO friendly?",
      answer: "Yes. We include options for 'loading=\"lazy\"' to improve performance and 'title' attributes for accessibility, both of which are important for SEO."
    }
  ]
};

// Chinese content
export const homeContent_zh: SEOContent = {
  title: "如何使用 Iframe 生成器",
  sections: [
    {
      title: "什么是 Iframe？",
      content: `
        <p><strong>iframe</strong>（内联框架）是一个 HTML 元素，允许您在当前 HTML 文档中嵌入另一个文档。它本质上是通往另一个网站的窗口，使您能够显示外部内容，如视频、地图，甚至整个网页，而无需用户离开您的网站。</p>
        <p>常见用例包括：</p>
        <ul>
          <li>嵌入 <strong>YouTube 视频</strong>或其他媒体播放器。</li>
          <li>显示 <strong>Google 地图</strong>用于企业位置。</li>
          <li>集成第三方小部件，如社交媒体信息流或支付表单。</li>
          <li>显示外部文档或 PDF。</li>
        </ul>
      `
    },
    {
      title: "如何生成 Iframe 代码",
      content: `
        <p>使用我们免费的 <strong>iframe 生成器</strong>非常简单，无需编程知识：</p>
        <ol>
          <li><strong>输入 URL：</strong>在"源 URL"字段中粘贴要嵌入内容的网址 (URL)。</li>
          <li><strong>调整设置：</strong>自定义宽度、高度、边框和滚动选项以适应您网站的设计。</li>
          <li><strong>预览：</strong>使用实时预览确保在桌面和移动设备上一切看起来完美。</li>
          <li><strong>复制代码：</strong>点击"复制"按钮获取生成的 HTML 代码，并将其粘贴到您网站的源代码中。</li>
        </ol>
      `
    },
    {
      title: "Iframe 参数详解",
      content: `
        <p>了解关键参数有助于优化您的嵌入内容：</p>
        <ul>
          <li><strong>宽度和高度：</strong>定义 iframe 的尺寸。使用像素 (px) 表示固定尺寸，或使用百分比 (%) 表示响应式布局。</li>
          <li><strong>沙盒：</strong>一种安全功能，限制嵌入内容可以执行的操作（例如，阻止脚本或弹窗）。仅在必要时启用特定权限。</li>
          <li><strong>加载：</strong>设置为"lazy"以推迟加载 iframe，直到它接近视口，从而提高页面加载速度和 SEO。</li>
          <li><strong>边框和滚动：</strong>控制视觉外观。删除边框通常看起来更简洁，而滚动设置取决于内容长度。</li>
        </ul>
      `
    },
    {
      title: "使 Iframe 响应式",
      content: `
        <p>在当今移动优先的世界中，<strong>响应式 iframe</strong> 至关重要。标准 iframe 具有固定尺寸，可能会在较小的屏幕上破坏布局。</p>
        <p>我们的工具提供"设为响应式"选项，使用现代 CSS <code>aspect-ratio</code> 或经典的"padding-hack"确保您的嵌入内容在从桌面到智能手机的所有设备上完美缩放。</p>
      `
    },
    {
      title: "常见 Iframe 问题",
      content: `
        <p>如果您的 iframe 无法正常工作，请检查这些常见问题：</p>
        <ul>
          <li><strong>X-Frame-Options：</strong>某些网站（如 Google 或 Facebook）通过头信息阻止嵌入。如果您看到"拒绝连接"错误，该网站可能不允许 iframe。</li>
          <li><strong>混合内容：</strong>如果您的网站使用 HTTPS，请确保嵌入的 URL 也是 HTTPS。浏览器会在安全页面上阻止不安全的 HTTP 内容。</li>
          <li><strong>移动可用性：</strong>确保嵌入内容本身是移动友好的，否则它可能在 iframe 中看起来很小或损坏。</li>
        </ul>
      `
    }
  ],
  faq: [
    {
      question: "这个 Iframe 生成器是免费的吗？",
      answer: "是的，此工具 100% 免费使用，可为任何网站生成 HTML iframe 代码。"
    },
    {
      question: "如何使我的 iframe 响应式？",
      answer: "只需在设置中勾选\\\"设为响应式\\\"框。这将生成一个带有 CSS 的包装 div，可在任何屏幕尺寸上保持宽高比。"
    },
    {
      question: "为什么我的 iframe 无法加载？",
      answer: "最常见的原因是源网站已将 'X-Frame-Options' 头设置为 'SAMEORIGIN' 或 'DENY'，阻止其嵌入到其他网站。"
    },
    {
      question: "我可以用这个嵌入 YouTube 视频吗？",
      answer: "可以，但为了获得最佳体验，我们建议使用我们专用的 <a href='/zh/youtube-embed-code-generator'>YouTube 嵌入代码生成器</a>，它提供自动播放和循环等特定选项。"
    },
    {
      question: "对 SEO 友好吗？",
      answer: "是的。我们包含 'loading=\"lazy\"' 选项以提高性能，以及 'title' 属性以提高可访问性，这两者对 SEO 都很重要。"
    }
  ]
};

// Spanish content
export const homeContent_es: SEOContent = {
  title: "Cómo usar el Generador de Iframe",
  sections: [
    {
      title: "¿Qué es un Iframe?",
      content: `
        <p>Un <strong>iframe</strong> (Marco en línea) es un elemento HTML que le permite incrustar otro documento dentro del documento HTML actual. Es esencialmente una ventana a otro sitio web, que le permite mostrar contenido externo como videos, mapas o incluso páginas web completas sin que los usuarios abandonen su sitio.</p>
        <p>Casos de uso comunes incluyen:</p>
        <ul>
          <li>Incrustar <strong>videos de YouTube</strong> u otros reproductores multimedia.</li>
          <li>Mostrar <strong>Google Maps</strong> para ubicaciones de negocios.</li>
          <li>Integrar widgets de terceros como feeds de redes sociales o formularios de pago.</li>
          <li>Mostrar documentos externos o PDFs.</li>
        </ul>
      `
    },
    {
      title: "Cómo generar código Iframe",
      content: `
        <p>Usar nuestro <strong>generador de iframe</strong> gratuito es simple y no requiere conocimientos de programación:</p>
        <ol>
          <li><strong>Ingrese la URL:</strong> Pegue la dirección web (URL) del contenido que desea incrustar en el campo "URL de origen".</li>
          <li><strong>Ajuste la configuración:</strong> Personalice el ancho, alto, borde y opciones de desplazamiento para que se ajusten al diseño de su sitio web.</li>
          <li><strong>Vista previa:</strong> Use la vista previa en vivo para asegurarse de que todo se vea perfecto en dispositivos de escritorio y móviles.</li>
          <li><strong>Copiar código:</strong> Haga clic en el botón "Copiar" para obtener el código HTML generado y péguelo en el código fuente de su sitio web.</li>
        </ol>
      `
    },
    {
      title: "Parámetros de Iframe explicados",
      content: `
        <p>Comprender los parámetros clave le ayuda a optimizar sus incrustaciones:</p>
        <ul>
          <li><strong>Ancho y Alto:</strong> Definen las dimensiones del iframe. Use píxeles (px) para tamaños fijos o porcentajes (%) para diseños responsivos.</li>
          <li><strong>Sandbox:</strong> Una función de seguridad que restringe lo que el contenido incrustado puede hacer (por ejemplo, prevenir scripts o ventanas emergentes). Habilite permisos específicos solo si es necesario.</li>
          <li><strong>Carga:</strong> Establezca en "lazy" para diferir la carga del iframe hasta que esté cerca del viewport, mejorando la velocidad de carga de su página y el SEO.</li>
          <li><strong>Borde y Desplazamiento:</strong> Controlan la apariencia visual. Eliminar bordes generalmente se ve más limpio, mientras que la configuración de desplazamiento depende de la longitud del contenido.</li>
        </ul>
      `
    },
    {
      title: "Hacer Iframes Responsivos",
      content: `
        <p>En el mundo actual centrado en dispositivos móviles, un <strong>iframe responsivo</strong> es crucial. Los iframes estándar tienen dimensiones fijas, que pueden romper diseños en pantallas más pequeñas.</p>
        <p>Nuestra herramienta ofrece una opción "Hacer Responsivo" que usa CSS moderno <code>aspect-ratio</code> o el clásico "padding-hack" para garantizar que su contenido incrustado se escale perfectamente en todos los dispositivos, desde computadoras de escritorio hasta teléfonos inteligentes.</p>
      `
    },
    {
      title: "Problemas comunes de Iframe",
      content: `
        <p>Si su iframe no funciona, verifique estos problemas comunes:</p>
        <ul>
          <li><strong>X-Frame-Options:</strong> Algunos sitios web (como Google o Facebook) bloquean la incrustación a través de encabezados. Si ve un error "refused to connect", es probable que el sitio no permita iframes.</li>
          <li><strong>Contenido Mixto:</strong> Si su sitio está en HTTPS, asegúrese de que la URL incrustada también sea HTTPS. Los navegadores bloquean contenido HTTP inseguro en páginas seguras.</li>
          <li><strong>Usabilidad Móvil:</strong> Asegúrese de que el contenido incrustado en sí sea compatible con dispositivos móviles, o puede verse pequeño o roto dentro del iframe.</li>
        </ul>
      `
    }
  ],
  faq: [
    {
      question: "¿Es gratuito este Generador de Iframe?",
      answer: "Sí, esta herramienta es 100% gratuita para generar códigos iframe HTML para cualquier sitio web."
    },
    {
      question: "¿Cómo hago que mi iframe sea responsivo?",
      answer: "Simplemente marque la casilla 'Hacer Responsivo' en la configuración. Esto generará un div contenedor con CSS que mantiene la relación de aspecto en cualquier tamaño de pantalla."
    },
    {
      question: "¿Por qué mi iframe no se carga?",
      answer: "La razón más común es que el sitio web de origen ha establecido un encabezado 'X-Frame-Options' en 'SAMEORIGIN' o 'DENY', evitando que se incruste en otros sitios."
    },
    {
      question: "¿Puedo incrustar videos de YouTube con esto?",
      answer: "Sí, pero para la mejor experiencia, recomendamos usar nuestro <a href='/es/youtube-embed-code-generator'>Generador de Código de Incrustación de YouTube</a> dedicado que ofrece opciones específicas como reproducción automática y bucle."
    },
    {
      question: "¿Es compatible con SEO?",
      answer: "Sí. Incluimos opciones para 'loading=\"lazy\"' para mejorar el rendimiento y atributos 'title' para accesibilidad, ambos importantes para SEO."
    }
  ]
};

// Japanese content
export const homeContent_ja: SEOContent = {
  title: "Iframe ジェネレーターの使い方",
  sections: [
    {
      title: "Iframe とは？",
      content: `
        <p><strong>iframe</strong>（インラインフレーム）は、現在の HTML ドキュメント内に別のドキュメントを埋め込むことができる HTML 要素です。本質的には別のウェブサイトへの窓であり、ユーザーがサイトを離れることなく、動画、地図、さらにはウェブページ全体などの外部コンテンツを表示できます。</p>
        <p>一般的な使用例：</p>
        <ul>
          <li><strong>YouTube 動画</strong>やその他のメディアプレーヤーの埋め込み。</li>
          <li>ビジネス所在地の <strong>Google マップ</strong>の表示。</li>
          <li>ソーシャルメディアフィードや決済フォームなどのサードパーティウィジェットの統合。</li>
          <li>外部ドキュメントや PDF の表示。</li>
        </ul>
      `
    },
    {
      title: "Iframe コードの生成方法",
      content: `
        <p>無料の <strong>iframe ジェネレーター</strong>を使用するのは簡単で、コーディングの知識は必要ありません：</p>
        <ol>
          <li><strong>URL を入力：</strong>「ソース URL」フィールドに、埋め込みたいコンテンツのウェブアドレス（URL）を貼り付けます。</li>
          <li><strong>設定を調整：</strong>ウェブサイトのデザインに合わせて、幅、高さ、ボーダー、スクロールオプションをカスタマイズします。</li>
          <li><strong>プレビュー：</strong>ライブプレビューを使用して、デスクトップとモバイルデバイスで完璧に表示されることを確認します。</li>
          <li><strong>コードをコピー：</strong>「コピー」ボタンをクリックして生成された HTML コードを取得し、ウェブサイトのソースコードに貼り付けます。</li>
        </ol>
      `
    },
    {
      title: "Iframe パラメータの説明",
      content: `
        <p>主要なパラメータを理解することで、埋め込みを最適化できます：</p>
        <ul>
          <li><strong>幅と高さ：</strong>iframe の寸法を定義します。固定サイズにはピクセル（px）を、レスポンシブレイアウトにはパーセンテージ（%）を使用します。</li>
          <li><strong>Sandbox：</strong>埋め込まれたコンテンツができることを制限するセキュリティ機能（例：スクリプトやポップアップの防止）。必要な場合のみ特定の権限を有効にします。</li>
          <li><strong>Loading：</strong>「lazy」に設定すると、ビューポートに近づくまで iframe の読み込みを延期し、ページの読み込み速度と SEO を改善します。</li>
          <li><strong>ボーダーとスクロール：</strong>視覚的な外観を制御します。ボーダーを削除すると通常はよりクリーンに見え、スクロール設定はコンテンツの長さに依存します。</li>
        </ul>
      `
    },
    {
      title: "Iframe をレスポンシブにする",
      content: `
        <p>今日のモバイルファーストの世界では、<strong>レスポンシブ iframe</strong> が重要です。標準的な iframe は固定寸法を持ち、小さな画面でレイアウトを壊す可能性があります。</p>
        <p>本ツールは「レスポンシブにする」オプションを提供し、モダンな CSS <code>aspect-ratio</code> または従来の「padding-hack」を使用して、埋め込まれたコンテンツがデスクトップからスマートフォンまでのすべてのデバイスで完璧にスケールすることを保証します。</p>
      `
    },
    {
      title: "一般的な Iframe の問題",
      content: `
        <p>iframe が機能しない場合は、これらの一般的な問題を確認してください：</p>
        <ul>
          <li><strong>X-Frame-Options：</strong>一部のウェブサイト（Google や Facebook など）は、ヘッダーを介して埋め込みをブロックします。「refused to connect」エラーが表示される場合、そのサイトは iframe を許可していない可能性があります。</li>
          <li><strong>混合コンテンツ：</strong>サイトが HTTPS の場合、埋め込まれた URL も HTTPS であることを確認してください。ブラウザは安全なページ上の安全でない HTTP コンテンツをブロックします。</li>
          <li><strong>モバイルユーザビリティ：</strong>埋め込まれたコンテンツ自体がモバイルフレンドリーであることを確認してください。そうでないと、iframe 内で小さく見えたり壊れたりする可能性があります。</li>
        </ul>
      `
    }
  ],
  faq: [
    {
      question: "この Iframe ジェネレーターは無料ですか？",
      answer: "はい、このツールは任意のウェブサイト用の HTML iframe コードを生成するために 100% 無料で使用できます。"
    },
    {
      question: "iframe をレスポンシブにするにはどうすればよいですか？",
      answer: "設定で「レスポンシブにする」ボックスにチェックを入れるだけです。これにより、任意の画面サイズでアスペクト比を維持する CSS を持つラッパー div が生成されます。"
    },
    {
      question: "iframe が読み込まれないのはなぜですか？",
      answer: "最も一般的な理由は、ソースウェブサイトが 'X-Frame-Options' ヘッダーを 'SAMEORIGIN' または 'DENY' に設定しており、他のサイトへの埋め込みを防いでいることです。"
    },
    {
      question: "これで YouTube 動画を埋め込むことはできますか？",
      answer: "はい、できますが、最高の体験のためには、自動再生やループなどの特定のオプションを提供する専用の <a href='/ja/youtube-embed-code-generator'>YouTube 埋め込みコードジェネレーター</a>の使用をお勧めします。"
    },
    {
      question: "SEO に優しいですか？",
      answer: "はい。パフォーマンスを向上させるための 'loading=\"lazy\"' オプションと、アクセシビリティのための 'title' 属性を含めており、どちらも SEO にとって重要です。"
    }
  ]
};

// German content
export const homeContent_de: SEOContent = {
  title: "So verwenden Sie den Iframe-Generator",
  sections: [
    {
      title: "Was ist ein Iframe?",
      content: `
        <p>Ein <strong>iframe</strong> (Inline-Frame) ist ein HTML-Element, mit dem Sie ein anderes Dokument in das aktuelle HTML-Dokument einbetten können. Es ist im Wesentlichen ein Fenster zu einer anderen Website, das es Ihnen ermöglicht, externe Inhalte wie Videos, Karten oder sogar ganze Webseiten anzuzeigen, ohne dass Benutzer Ihre Website verlassen müssen.</p>
        <p>Häufige Anwendungsfälle umfassen:</p>
        <ul>
          <li>Einbetten von <strong>YouTube-Videos</strong> oder anderen Medienplayern.</li>
          <li>Anzeigen von <strong>Google Maps</strong> für Geschäftsstandorte.</li>
          <li>Integration von Drittanbieter-Widgets wie Social-Media-Feeds oder Zahlungsformularen.</li>
          <li>Anzeigen externer Dokumente oder PDFs.</li>
        </ul>
      `
    },
    {
      title: "Iframe-Code generieren",
      content: `
        <p>Die Verwendung unseres kostenlosen <strong>Iframe-Generators</strong> ist einfach und erfordert keine Programmierkenntnisse:</p>
        <ol>
          <li><strong>URL eingeben:</strong> Fügen Sie die Webadresse (URL) des Inhalts, den Sie einbetten möchten, in das Feld „Quell-URL" ein.</li>
          <li><strong>Einstellungen anpassen:</strong> Passen Sie Breite, Höhe, Rahmen und Scroll-Optionen an das Design Ihrer Website an.</li>
          <li><strong>Vorschau:</strong> Verwenden Sie die Live-Vorschau, um sicherzustellen, dass alles auf Desktop- und Mobilgeräten perfekt aussieht.</li>
          <li><strong>Code kopieren:</strong> Klicken Sie auf die Schaltfläche „Kopieren", um den generierten HTML-Code zu erhalten und fügen Sie ihn in den Quellcode Ihrer Website ein.</li>
        </ol>
      `
    },
    {
      title: "Iframe-Parameter erklärt",
      content: `
        <p>Das Verständnis der wichtigsten Parameter hilft Ihnen, Ihre Einbettungen zu optimieren:</p>
        <ul>
          <li><strong>Breite & Höhe:</strong> Definieren Sie die Abmessungen des Iframes. Verwenden Sie Pixel (px) für feste Größen oder Prozentsätze (%) für responsive Layouts.</li>
          <li><strong>Sandbox:</strong> Eine Sicherheitsfunktion, die einschränkt, was der eingebettete Inhalt tun kann (z. B. Verhindern von Skripten oder Popups). Aktivieren Sie nur bei Bedarf spezifische Berechtigungen.</li>
          <li><strong>Loading:</strong> Auf „lazy" setzen, um das Laden des Iframes zu verzögern, bis es sich in der Nähe des Viewports befindet, wodurch die Ladegeschwindigkeit Ihrer Seite und SEO verbessert werden.</li>
          <li><strong>Rahmen & Scrolling:</strong> Steuern Sie das visuelle Erscheinungsbild. Das Entfernen von Rahmen sieht in der Regel sauberer aus, während die Scrolling-Einstellungen von der Inhaltslänge abhängen.</li>
        </ul>
      `
    },
    {
      title: "Iframes responsiv machen",
      content: `
        <p>In der heutigen Mobile-First-Welt ist ein <strong>responsiver Iframe</strong> entscheidend. Standard-Iframes haben feste Abmessungen, die auf kleineren Bildschirmen Layouts zerstören können.</p>
        <p>Unser Tool bietet eine Option „Responsiv machen", die modernes CSS <code>aspect-ratio</code> oder den klassischen „Padding-Hack" verwendet, um sicherzustellen, dass Ihr eingebetteter Inhalt auf allen Geräten, von Desktops bis zu Smartphones, perfekt skaliert.</p>
      `
    },
    {
      title: "Häufige Iframe-Probleme",
      content: `
        <p>Wenn Ihr Iframe nicht funktioniert, überprüfen Sie diese häufigen Probleme:</p>
        <ul>
          <li><strong>X-Frame-Options:</strong> Einige Websites (wie Google oder Facebook) blockieren die Einbettung über Header. Wenn Sie einen Fehler „refused to connect" sehen, lässt die Website wahrscheinlich keine Iframes zu.</li>
          <li><strong>Gemischte Inhalte:</strong> Wenn Ihre Website über HTTPS läuft, stellen Sie sicher, dass die eingebettete URL ebenfalls HTTPS ist. Browser blockieren unsichere HTTP-Inhalte auf sicheren Seiten.</li>
          <li><strong>Mobile Benutzerfreundlichkeit:</strong> Stellen Sie sicher, dass der eingebettete Inhalt selbst mobilfreundlich ist, sonst kann er im Iframe klein oder beschädigt aussehen.</li>
        </ul>
      `
    }
  ],
  faq: [
    {
      question: "Ist dieser Iframe-Generator kostenlos?",
      answer: "Ja, dieses Tool ist 100% kostenlos zur Generierung von HTML-Iframe-Codes für jede Website."
    },
    {
      question: "Wie mache ich meinen Iframe responsiv?",
      answer: "Aktivieren Sie einfach das Kontrollkästchen 'Responsiv machen' in den Einstellungen. Dies erzeugt ein Wrapper-Div mit CSS, das das Seitenverhältnis auf jeder Bildschirmgröße beibehält."
    },
    {
      question: "Warum wird mein Iframe nicht geladen?",
      answer: "Der häufigste Grund ist, dass die Quell-Website einen 'X-Frame-Options'-Header auf 'SAMEORIGIN' oder 'DENY' gesetzt hat, um die Einbettung auf anderen Websites zu verhindern."
    },
    {
      question: "Kann ich YouTube-Videos damit einbetten?",
      answer: "Ja, aber für die beste Erfahrung empfehlen wir die Verwendung unseres speziellen <a href='/de/youtube-embed-code-generator'>YouTube-Einbettungscode-Generators</a>, der spezifische Optionen wie Autoplay und Loop bietet."
    },
    {
      question: "Ist es SEO-freundlich?",
      answer: "Ja. Wir bieten Optionen für 'loading=\"lazy\"' zur Leistungsverbesserung und 'title'-Attribute für Barrierefreiheit, beides ist wichtig für SEO."
    }
  ]
};

// French content
export const homeContent_fr: SEOContent = {
  title: "Comment utiliser le Générateur d'Iframe",
  sections: [
    {
      title: "Qu'est-ce qu'un Iframe ?",
      content: `
        <p>Un <strong>iframe</strong> (cadre en ligne) est un élément HTML qui vous permet d'intégrer un autre document dans le document HTML actuel. C'est essentiellement une fenêtre vers un autre site Web, vous permettant d'afficher du contenu externe comme des vidéos, des cartes ou même des pages Web complètes sans que les utilisateurs ne quittent votre site.</p>
        <p>Les cas d'utilisation courants incluent :</p>
        <ul>
          <li>Intégrer des <strong>vidéos YouTube</strong> ou d'autres lecteurs multimédias.</li>
          <li>Afficher <strong>Google Maps</strong> pour les emplacements d'entreprise.</li>
          <li>Intégrer des widgets tiers comme des flux de médias sociaux ou des formulaires de paiement.</li>
          <li>Afficher des documents externes ou des PDF.</li>
        </ul>
      `
    },
    {
      title: "Comment générer du code Iframe",
      content: `
        <p>L'utilisation de notre <strong>générateur d'iframe</strong> gratuit est simple et ne nécessite aucune connaissance en programmation :</p>
        <ol>
          <li><strong>Entrez l'URL :</strong> Collez l'adresse Web (URL) du contenu que vous souhaitez intégrer dans le champ « URL source ».</li>
          <li><strong>Ajustez les paramètres :</strong> Personnalisez la largeur, la hauteur, la bordure et les options de défilement pour s'adapter au design de votre site Web.</li>
          <li><strong>Aperçu :</strong> Utilisez l'aperçu en direct pour vous assurer que tout semble parfait sur les ordinateurs de bureau et les appareils mobiles.</li>
          <li><strong>Copier le code :</strong> Cliquez sur le bouton « Copier » pour obtenir le code HTML généré et collez-le dans le code source de votre site Web.</li>
        </ol>
      `
    },
    {
      title: "Paramètres Iframe expliqués",
      content: `
        <p>Comprendre les paramètres clés vous aide à optimiser vos intégrations :</p>
        <ul>
          <li><strong>Largeur & Hauteur :</strong> Définissent les dimensions de l'iframe. Utilisez des pixels (px) pour des tailles fixes ou des pourcentages (%) pour des mises en page responsives.</li>
          <li><strong>Sandbox :</strong> Une fonction de sécurité qui restreint ce que le contenu intégré peut faire (par exemple, empêcher les scripts ou les popups). N'activez des autorisations spécifiques que si nécessaire.</li>
          <li><strong>Chargement :</strong> Définissez sur « lazy » pour différer le chargement de l'iframe jusqu'à ce qu'il soit près du viewport, améliorant la vitesse de chargement de votre page et le SEO.</li>
          <li><strong>Bordure & Défilement :</strong> Contrôlent l'apparence visuelle. Supprimer les bordures semble généralement plus propre, tandis que les paramètres de défilement dépendent de la longueur du contenu.</li>
        </ul>
      `
    },
    {
      title: "Rendre les Iframes Responsives",
      content: `
        <p>Dans le monde actuel axé sur le mobile, un <strong>iframe responsive</strong> est crucial. Les iframes standard ont des dimensions fixes, qui peuvent casser les mises en page sur les petits écrans.</p>
        <p>Notre outil offre une option « Rendre Responsive » qui utilise le CSS moderne <code>aspect-ratio</code> ou le classique « padding-hack » pour garantir que votre contenu intégré se dimensionne parfaitement sur tous les appareils, des ordinateurs de bureau aux smartphones.</p>
      `
    },
    {
      title: "Problèmes courants des Iframe",
      content: `
        <p>Si votre iframe ne fonctionne pas, vérifiez ces problèmes courants :</p>
        <ul>
          <li><strong>X-Frame-Options :</strong> Certains sites Web (comme Google ou Facebook) bloquent l'intégration via des en-têtes. Si vous voyez une erreur « refused to connect », le site n'autorise probablement pas les iframes.</li>
          <li><strong>Contenu Mixte :</strong> Si votre site est en HTTPS, assurez-vous que l'URL intégrée est également en HTTPS. Les navigateurs bloquent le contenu HTTP non sécurisé sur les pages sécurisées.</li>
          <li><strong>Utilisabilité Mobile :</strong> Assurez-vous que le contenu intégré lui-même est adapté aux mobiles, sinon il peut sembler petit ou cassé dans l'iframe.</li>
        </ul>
      `
    }
  ],
  faq: [
    {
      question: "Ce Générateur d'Iframe est-il gratuit ?",
      answer: "Oui, cet outil est 100% gratuit pour générer des codes iframe HTML pour n'importe quel site Web."
    },
    {
      question: "Comment rendre mon iframe responsive ?",
      answer: "Cochez simplement la case 'Rendre Responsive' dans les paramètres. Cela générera un div conteneur avec CSS qui maintient le ratio d'aspect sur n'importe quelle taille d'écran."
    },
    {
      question: "Pourquoi mon iframe ne se charge-t-il pas ?",
      answer: "La raison la plus courante est que le site Web source a défini un en-tête 'X-Frame-Options' sur 'SAMEORIGIN' ou 'DENY', empêchant son intégration sur d'autres sites."
    },
    {
      question: "Puis-je intégrer des vidéos YouTube avec ceci ?",
      answer: "Oui, mais pour la meilleure expérience, nous recommandons d'utiliser notre <a href='/fr/youtube-embed-code-generator'>Générateur de Code d'Intégration YouTube</a> dédié qui offre des options spécifiques comme la lecture automatique et la boucle."
    },
    {
      question: "Est-ce compatible avec le SEO ?",
      answer: "Oui. Nous incluons des options pour 'loading=\"lazy\"' afin d'améliorer les performances et des attributs 'title' pour l'accessibilité, tous deux importants pour le SEO."
    }
  ]
};

// Get content by locale
export function getHomeContent(locale: Locale): SEOContent {
  switch (locale) {
    case 'zh':
      return homeContent_zh;
    case 'es':
      return homeContent_es;
    case 'ja':
      return homeContent_ja;
    case 'de':
      return homeContent_de;
    case 'fr':
      return homeContent_fr;
    case 'en':
    default:
      return homeContent_en;
  }
}
