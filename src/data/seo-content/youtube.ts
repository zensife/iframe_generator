import { Locale } from '@/i18n/config';
import { SEOContent } from './home';

// English content
export const youtubeContent_en: SEOContent = {
  title: "YouTube Embed Code Generator Guide",
  sections: [
    {
      title: "How to Get YouTube Embed Code",
      content: `
        <p>Getting the right <strong>YouTube embed code</strong> is easy with our YouTube embed code generator. Paste your video URL, customize player options, and instantly get a clean, responsive iframe you can drop into any site.</p>
      `
    },
    {
      title: "Quick Steps to Embed YouTube Videos",
      content: `
        <ol>
          <li><strong>Paste URL:</strong> Copy your YouTube video link into the generator.</li>
          <li><strong>Customize:</strong> Set dimensions, autoplay, loop, mute, privacy mode, and start time.</li>
          <li><strong>Generate:</strong> Click to get your optimized <strong>YouTube embed code</strong> instantly.</li>
          <li><strong>Copy & Paste:</strong> Add the iframe code to your website HTML wherever you want the video to appear.</li>
        </ol>
      `
    },
    {
      title: "YouTube Embed Code Features",
      content: `
        <h3>Responsive iframe Design</h3>
        <p>Every embed is responsive by default so your YouTube video fits desktop, tablet, and mobile screens. No extra CSS needed.</p>
        <h3>Advanced Player Parameters</h3>
        <ul>
          <li><strong>Autoplay & Mute:</strong> Autoplay pairs with mute for better browser support.</li>
          <li><strong>Loop Video:</strong> Automatically replay when the video ends.</li>
          <li><strong>Custom Start Time:</strong> Skip intros by starting at the exact second you want.</li>
          <li><strong>Modest Branding:</strong> Reduce YouTube UI for a cleaner embed.</li>
          <li><strong>Privacy-Enhanced Mode:</strong> Use youtube-nocookie.com to improve GDPR compliance.</li>
        </ul>
      `
    },
    {
      title: "Why Use a YouTube Embed Code Generator?",
      content: `
        <p>While YouTube provides a basic iframe, the <strong>youtube embed code generator</strong> here combines multiple parameters automatically:</p>
        <ul>
          <li>One-click privacy-enhanced mode.</li>
          <li>Responsive sizing without manual CSS.</li>
          <li>Autoplay, loop, mute, and branding options in one place.</li>
          <li>Clean iframe code ready to paste.</li>
        </ul>
      `
    },
    {
      title: "Privacy & GDPR Compliance",
      content: `
        <p>Enable privacy-enhanced mode to switch the domain to <code>youtube-nocookie.com</code>. This keeps tracking off until a visitor plays the video, helping your site stay compliant while still delivering the embed.</p>
      `
    },
    {
      title: "Common YouTube Embed Code Issues",
      content: `
        <h3>Video Says "Watch on YouTube"</h3>
        <p>The video owner disabled embedding. You cannot override this restriction.</p>
        <h3>Autoplay Not Working</h3>
        <p>Modern browsers block unmuted autoplay. Use autoplay + mute together in the generator.</p>
        <h3>Video Not Responsive</h3>
        <p>Select the responsive option to output an iframe that scales on every device.</p>
      `
    }
  ],
  faq: [
    {
      question: "How do I get a YouTube embed code?",
      answer: "Use the YouTube embed code generator: paste your video URL, pick options like autoplay, loop, and privacy-enhanced mode, then copy the generated iframe code."
    },
    {
      question: "What is the difference between YouTube embed code and iframe?",
      answer: "They are the same thing. A YouTube embed code is an iframe snippet that loads your video inside a web page."
    },
    {
      question: "Can I customize YouTube embed code parameters?",
      answer: "Yes. Customize autoplay, mute, loop, start time, modest branding, related videos, and privacy mode directly in the generator before copying the code."
    },
    {
      question: "Is the YouTube embed code generator free?",
      answer: "Yes. The generator is completely free with unlimited use for creating responsive YouTube embed codes."
    }
  ]
};

// Chinese content
export const youtubeContent_zh: SEOContent = {
  title: "YouTube 嵌入代码生成器指南",
  sections: [
    {
      title: "如何获取 YouTube 嵌入代码",
      content: `
        <p>使用我们的 YouTube 嵌入代码生成器，获取正确的 <strong>YouTube 嵌入代码</strong>非常简单。粘贴您的视频 URL，自定义播放器选项，即可立即获得干净、响应式的 iframe，可放入任何网站。</p>
      `
    },
    {
      title: "嵌入 YouTube 视频的快速步骤",
      content: `
        <ol>
          <li><strong>粘贴 URL：</strong>将您的 YouTube 视频链接复制到生成器中。</li>
          <li><strong>自定义：</strong>设置尺寸、自动播放、循环、静音、隐私模式和开始时间。</li>
          <li><strong>生成：</strong>点击即可立即获得优化的 <strong>YouTube 嵌入代码</strong>。</li>
          <li><strong>复制并粘贴：</strong>将 iframe 代码添加到您网站 HTML 中您希望视频出现的位置。</li>
        </ol>
      `
    },
    {
      title: "YouTube 嵌入代码功能",
      content: `
        <h3>响应式 iframe 设计</h3>
        <p>每个嵌入默认都是响应式的，因此您的 YouTube 视频适合桌面、平板和移动屏幕。无需额外 CSS。</p>
        <h3>高级播放器参数</h3>
        <ul>
          <li><strong>自动播放和静音：</strong>自动播放与静音配对以获得更好的浏览器支持。</li>
          <li><strong>循环视频：</strong>视频结束时自动重播。</li>
          <li><strong>自定义开始时间：</strong>从您想要的精确秒数开始跳过片头。</li>
          <li><strong>低调品牌：</strong>减少 YouTube UI 以获得更干净的嵌入。</li>
          <li><strong>增强隐私模式：</strong>使用 youtube-nocookie.com 以改善 GDPR 合规性。</li>
        </ul>
      `
    },
    {
      title: "为什么使用 YouTube 嵌入代码生成器？",
      content: `
        <p>虽然 YouTube 提供了基本的 iframe，但这里的 <strong>YouTube 嵌入代码生成器</strong>自动组合多个参数：</p>
        <ul>
          <li>一键增强隐私模式。</li>
          <li>无需手动 CSS 的响应式尺寸。</li>
          <li>自动播放、循环、静音和品牌选项集于一处。</li>
          <li>干净的 iframe 代码，可直接粘贴使用。</li>
        </ul>
      `
    },
    {
      title: "隐私和 GDPR 合规",
      content: `
        <p>启用增强隐私模式可将域名切换为 <code>youtube-nocookie.com</code>。这可以在访客播放视频之前关闭跟踪，帮助您的网站在仍提供嵌入的同时保持合规。</p>
      `
    },
    {
      title: "常见 YouTube 嵌入代码问题",
      content: `
        <h3>视频显示"在 YouTube 上观看"</h3>
        <p>视频所有者禁用了嵌入。您无法覆盖此限制。</p>
        <h3>自动播放不工作</h3>
        <p>现代浏览器阻止未静音的自动播放。在生成器中同时使用自动播放和静音。</p>
        <h3>视频不是响应式的</h3>
        <p>选择响应式选项以输出在每个设备上缩放的 iframe。</p>
      `
    }
  ],
  faq: [
    {
      question: "如何获取 YouTube 嵌入代码？",
      answer: "使用 YouTube 嵌入代码生成器：粘贴您的视频 URL，选择自动播放、循环和增强隐私模式等选项，然后复制生成的 iframe 代码。"
    },
    {
      question: "YouTube 嵌入代码和 iframe 有什么区别？",
      answer: "它们是同一回事。YouTube 嵌入代码是一个 iframe 片段，用于在网页中加载您的视频。"
    },
    {
      question: "我可以自定义 YouTube 嵌入代码参数吗？",
      answer: "可以。在复制代码之前，直接在生成器中自定义自动播放、静音、循环、开始时间、低调品牌、相关视频和隐私模式。"
    },
    {
      question: "YouTube 嵌入代码生成器是免费的吗？",
      answer: "是的。生成器完全免费，可无限使用创建响应式 YouTube 嵌入代码。"
    }
  ]
};

// Spanish content
export const youtubeContent_es: SEOContent = {
  title: "Guía del Generador de Código de Inserción de YouTube",
  sections: [
    {
      title: "Cómo obtener el código de inserción de YouTube",
      content: `
        <p>Obtener el <strong>código de inserción de YouTube</strong> correcto es fácil con nuestro generador de código de inserción de YouTube. Pegue la URL de su video, personalice las opciones del reproductor y obtenga al instante un iframe limpio y responsivo que puede colocar en cualquier sitio.</p>
      `
    },
    {
      title: "Pasos rápidos para insertar videos de YouTube",
      content: `
        <ol>
          <li><strong>Pegar URL:</strong> Copie el enlace de su video de YouTube en el generador.</li>
          <li><strong>Personalizar:</strong> Establezca dimensiones, reproducción automática, bucle, silencio, modo de privacidad y hora de inicio.</li>
          <li><strong>Generar:</strong> Haga clic para obtener su <strong>código de inserción de YouTube</strong> optimizado al instante.</li>
          <li><strong>Copiar y Pegar:</strong> Agregue el código iframe al HTML de su sitio web donde desee que aparezca el video.</li>
        </ol>
      `
    },
    {
      title: "Características del código de inserción de YouTube",
      content: `
        <h3>Diseño iframe responsivo</h3>
        <p>Cada inserción es responsiva por defecto para que su video de YouTube se ajuste a pantallas de escritorio, tableta y móvil. No se necesita CSS adicional.</p>
        <h3>Parámetros avanzados del reproductor</h3>
        <ul>
          <li><strong>Reproducción automática y Silencio:</strong> La reproducción automática se combina con el silencio para una mejor compatibilidad con el navegador.</li>
          <li><strong>Video en bucle:</strong> Reproducir automáticamente cuando termina el video.</li>
          <li><strong>Hora de inicio personalizada:</strong> Omita las introducciones comenzando en el segundo exacto que desee.</li>
          <li><strong>Marca modesta:</strong> Reduzca la interfaz de usuario de YouTube para una inserción más limpia.</li>
          <li><strong>Modo de privacidad mejorada:</strong> Use youtube-nocookie.com para mejorar el cumplimiento del RGPD.</li>
        </ul>
      `
    },
    {
      title: "¿Por qué usar un generador de código de inserción de YouTube?",
      content: `
        <p>Mientras que YouTube proporciona un iframe básico, el <strong>generador de código de inserción de youtube</strong> aquí combina múltiples parámetros automáticamente:</p>
        <ul>
          <li>Modo de privacidad mejorada con un clic.</li>
          <li>Tamaño responsivo sin CSS manual.</li>
          <li>Opciones de reproducción automática, bucle, silencio y marca en un solo lugar.</li>
          <li>Código iframe limpio listo para pegar.</li>
        </ul>
      `
    },
    {
      title: "Privacidad y Cumplimiento RGPD",
      content: `
        <p>Habilite el modo de privacidad mejorada para cambiar el dominio a <code>youtube-nocookie.com</code>. Esto mantiene el seguimiento desactivado hasta que un visitante reproduce el video, ayudando a que su sitio cumpla con las normas mientras entrega la inserción.</p>
      `
    },
    {
      title: "Problemas comunes del código de inserción de YouTube",
      content: `
        <h3>El video dice "Ver en YouTube"</h3>
        <p>El propietario del video desactivó la inserción. No puede anular esta restricción.</p>
        <h3>La reproducción automática no funciona</h3>
        <p>Los navegadores modernos bloquean la reproducción automática no silenciada. Use reproducción automática + silencio juntos en el generador.</p>
        <h3>El video no es responsivo</h3>
        <p>Seleccione la opción responsiva para generar un iframe que se escala en cada dispositivo.</p>
      `
    }
  ],
  faq: [
    {
      question: "¿Cómo obtengo un código de inserción de YouTube?",
      answer: "Use el generador de código de inserción de YouTube: pegue la URL de su video, elija opciones como reproducción automática, bucle y modo de privacidad mejorada, luego copie el código iframe generado."
    },
    {
      question: "¿Cuál es la diferencia entre el código de inserción de YouTube y el iframe?",
      answer: "Son la misma cosa. Un código de inserción de YouTube es un fragmento de iframe que carga su video dentro de una página web."
    },
    {
      question: "¿Puedo personalizar los parámetros del código de inserción de YouTube?",
      answer: "Sí. Personalice la reproducción automática, silencio, bucle, hora de inicio, marca modesta, videos relacionados y modo de privacidad directamente en el generador antes de copiar el código."
    },
    {
      question: "¿Es gratuito el generador de código de inserción de YouTube?",
      answer: "Sí. El generador es completamente gratuito con uso ilimitado para crear códigos de inserción de YouTube responsivos."
    }
  ]
};

// Japanese content
export const youtubeContent_ja: SEOContent = {
  title: "YouTube 埋め込みコードジェネレーターガイド",
  sections: [
    {
      title: "YouTube 埋め込みコードの取得方法",
      content: `
        <p>当社の YouTube 埋め込みコードジェネレーターを使用すれば、適切な <strong>YouTube 埋め込みコード</strong>を簡単に入手できます。動画の URL を貼り付け、プレーヤーのオプションをカスタマイズするだけで、どのサイトにも配置できるクリーンでレスポンシブな iframe を即座に取得できます。</p>
      `
    },
    {
      title: "YouTube 動画を埋め込むためのクイックステップ",
      content: `
        <ol>
          <li><strong>URL を貼り付け：</strong>YouTube 動画のリンクをジェネレーターにコピーします。</li>
          <li><strong>カスタマイズ：</strong>寸法、自動再生、ループ、ミュート、プライバシーモード、開始時間を設定します。</li>
          <li><strong>生成：</strong>クリックして、最適化された <strong>YouTube 埋め込みコード</strong>を即座に取得します。</li>
          <li><strong>コピー＆ペースト：</strong>動画を表示したいウェブサイトの HTML に iframe コードを追加します。</li>
        </ol>
      `
    },
    {
      title: "YouTube 埋め込みコードの機能",
      content: `
        <h3>レスポンシブ iframe デザイン</h3>
        <p>すべての埋め込みはデフォルトでレスポンシブであるため、YouTube 動画はデスクトップ、タブレット、モバイル画面に適合します。追加の CSS は必要ありません。</p>
        <h3>高度なプレーヤーパラメータ</h3>
        <ul>
          <li><strong>自動再生とミュート：</strong>ブラウザのサポートを向上させるために、自動再生はミュートとペアになっています。</li>
          <li><strong>動画のループ：</strong>動画が終了すると自動的に再生します。</li>
          <li><strong>カスタム開始時間：</strong>希望する正確な秒数から開始してイントロをスキップします。</li>
          <li><strong>控えめなブランディング：</strong>YouTube UI を減らして、よりクリーンな埋め込みにします。</li>
          <li><strong>プライバシー強化モード：</strong>GDPR 準拠を改善するために youtube-nocookie.com を使用します。</li>
        </ul>
      `
    },
    {
      title: "なぜ YouTube 埋め込みコードジェネレーターを使用するのですか？",
      content: `
        <p>YouTube は基本的な iframe を提供しますが、ここの <strong>youtube 埋め込みコードジェネレーター</strong>は複数のパラメータを自動的に組み合わせます：</p>
        <ul>
          <li>ワンクリックのプライバシー強化モード。</li>
          <li>手動 CSS なしのレスポンシブサイズ設定。</li>
          <li>自動再生、ループ、ミュート、ブランディングのオプションが一箇所に。</li>
          <li>貼り付け可能なクリーンな iframe コード。</li>
        </ul>
      `
    },
    {
      title: "プライバシーと GDPR 準拠",
      content: `
        <p>プライバシー強化モードを有効にして、ドメインを <code>youtube-nocookie.com</code> に切り替えます。これにより、訪問者が動画を再生するまで追跡がオフになり、埋め込みを提供しながらサイトのコンプライアンスを維持するのに役立ちます。</p>
      `
    },
    {
      title: "一般的な YouTube 埋め込みコードの問題",
      content: `
        <h3>動画に「YouTube で見る」と表示される</h3>
        <p>動画の所有者が埋め込みを無効にしました。この制限を無効にすることはできません。</p>
        <h3>自動再生が機能しない</h3>
        <p>最新のブラウザは、ミュートされていない自動再生をブロックします。ジェネレーターで自動再生 + ミュートを一緒に使用してください。</p>
        <h3>動画がレスポンシブでない</h3>
        <p>レスポンシブオプションを選択して、すべてのデバイスでスケーリングする iframe を出力します。</p>
      `
    }
  ],
  faq: [
    {
      question: "YouTube 埋め込みコードを取得するにはどうすればよいですか？",
      answer: "YouTube 埋め込みコードジェネレーターを使用します：動画 URL を貼り付け、自動再生、ループ、プライバシー強化モードなどのオプションを選択し、生成された iframe コードをコピーします。"
    },
    {
      question: "YouTube 埋め込みコードと iframe の違いは何ですか？",
      answer: "それらは同じものです。YouTube 埋め込みコードは、ウェブページ内で動画を読み込む iframe スニペットです。"
    },
    {
      question: "YouTube 埋め込みコードのパラメータをカスタマイズできますか？",
      answer: "はい。コードをコピーする前に、ジェネレーターで直接、自動再生、ミュート、ループ、開始時間、控えめなブランディング、関連動画、プライバシーモードをカスタマイズできます。"
    },
    {
      question: "YouTube 埋め込みコードジェネレーターは無料ですか？",
      answer: "はい。ジェネレーターは完全に無料で、レスポンシブな YouTube 埋め込みコードを作成するために無制限に使用できます。"
    }
  ]
};

// German content
export const youtubeContent_de: SEOContent = {
  title: "YouTube Einbettungscode-Generator Anleitung",
  sections: [
    {
      title: "So erhalten Sie den YouTube-Einbettungscode",
      content: `
        <p>Den richtigen <strong>YouTube-Einbettungscode</strong> zu erhalten ist mit unserem YouTube-Einbettungscode-Generator einfach. Fügen Sie Ihre Video-URL ein, passen Sie die Player-Optionen an und erhalten Sie sofort einen sauberen, responsiven Iframe, den Sie in jede Website einfügen können.</p>
      `
    },
    {
      title: "Schnelle Schritte zum Einbetten von YouTube-Videos",
      content: `
        <ol>
          <li><strong>URL einfügen:</strong> Kopieren Sie Ihren YouTube-Videolink in den Generator.</li>
          <li><strong>Anpassen:</strong> Legen Sie Abmessungen, Autoplay, Loop, Stummschaltung, Datenschutzmodus und Startzeit fest.</li>
          <li><strong>Generieren:</strong> Klicken Sie, um Ihren optimierten <strong>YouTube-Einbettungscode</strong> sofort zu erhalten.</li>
          <li><strong>Kopieren & Einfügen:</strong> Fügen Sie den Iframe-Code in den HTML-Code Ihrer Website ein, wo immer das Video erscheinen soll.</li>
        </ol>
      `
    },
    {
      title: "Funktionen des YouTube-Einbettungscodes",
      content: `
        <h3>Responsives Iframe-Design</h3>
        <p>Jede Einbettung ist standardmäßig responsiv, sodass Ihr YouTube-Video auf Desktop-, Tablet- und Mobilbildschirme passt. Kein zusätzliches CSS erforderlich.</p>
        <h3>Erweiterte Player-Parameter</h3>
        <ul>
          <li><strong>Autoplay & Stummschaltung:</strong> Autoplay wird für eine bessere Browserunterstützung mit Stummschaltung gepaart.</li>
          <li><strong>Video wiederholen:</strong> Automatische Wiedergabe, wenn das Video endet.</li>
          <li><strong>Benutzerdefinierte Startzeit:</strong> Überspringen Sie Intros, indem Sie genau in der gewünschten Sekunde beginnen.</li>
          <li><strong>Dezentes Branding:</strong> Reduzieren Sie die YouTube-Benutzeroberfläche für eine sauberere Einbettung.</li>
          <li><strong>Erweiterter Datenschutzmodus:</strong> Verwenden Sie youtube-nocookie.com, um die DSGVO-Konformität zu verbessern.</li>
        </ul>
      `
    },
    {
      title: "Warum einen YouTube-Einbettungscode-Generator verwenden?",
      content: `
        <p>Während YouTube einen einfachen Iframe bereitstellt, kombiniert der <strong>YouTube-Einbettungscode-Generator</strong> hier automatisch mehrere Parameter:</p>
        <ul>
          <li>Erweiterter Datenschutzmodus mit einem Klick.</li>
          <li>Responsive Größenanpassung ohne manuelles CSS.</li>
          <li>Autoplay, Loop, Stummschaltung und Branding-Optionen an einem Ort.</li>
          <li>Sauberer Iframe-Code, bereit zum Einfügen.</li>
        </ul>
      `
    },
    {
      title: "Datenschutz & DSGVO-Konformität",
      content: `
        <p>Aktivieren Sie den erweiterten Datenschutzmodus, um die Domain auf <code>youtube-nocookie.com</code> umzustellen. Dies hält das Tracking deaktiviert, bis ein Besucher das Video abspielt, und hilft Ihrer Website, konform zu bleiben, während die Einbettung bereitgestellt wird.</p>
      `
    },
    {
      title: "Häufige Probleme mit YouTube-Einbettungscodes",
      content: `
        <h3>Video sagt „Auf YouTube ansehen"</h3>
        <p>Der Videoeigentümer hat das Einbetten deaktiviert. Sie können diese Einschränkung nicht umgehen.</p>
        <h3>Autoplay funktioniert nicht</h3>
        <p>Moderne Browser blockieren nicht stummgeschaltetes Autoplay. Verwenden Sie Autoplay + Stummschaltung zusammen im Generator.</p>
        <h3>Video nicht responsiv</h3>
        <p>Wählen Sie die responsive Option, um einen Iframe auszugeben, der auf jedem Gerät skaliert.</p>
      `
    }
  ],
  faq: [
    {
      question: "Wie erhalte ich einen YouTube-Einbettungscode?",
      answer: "Verwenden Sie den YouTube-Einbettungscode-Generator: Fügen Sie Ihre Video-URL ein, wählen Sie Optionen wie Autoplay, Loop und erweiterten Datenschutzmodus und kopieren Sie dann den generierten Iframe-Code."
    },
    {
      question: "Was ist der Unterschied zwischen YouTube-Einbettungscode und Iframe?",
      answer: "Sie sind dasselbe. Ein YouTube-Einbettungscode ist ein Iframe-Snippet, das Ihr Video in eine Webseite lädt."
    },
    {
      question: "Kann ich YouTube-Einbettungscode-Parameter anpassen?",
      answer: "Ja. Passen Sie Autoplay, Stummschaltung, Loop, Startzeit, dezentes Branding, verwandte Videos und Datenschutzmodus direkt im Generator an, bevor Sie den Code kopieren."
    },
    {
      question: "Ist der YouTube-Einbettungscode-Generator kostenlos?",
      answer: "Ja. Der Generator ist völlig kostenlos und kann unbegrenzt zur Erstellung responsiver YouTube-Einbettungscodes verwendet werden."
    }
  ]
};

// French content
export const youtubeContent_fr: SEOContent = {
  title: "Guide du Générateur de Code d'Intégration YouTube",
  sections: [
    {
      title: "Comment obtenir le code d'intégration YouTube",
      content: `
        <p>Obtenir le bon <strong>code d'intégration YouTube</strong> est facile avec notre générateur de code d'intégration YouTube. Collez l'URL de votre vidéo, personnalisez les options du lecteur et obtenez instantanément un iframe propre et responsive que vous pouvez déposer sur n'importe quel site.</p>
      `
    },
    {
      title: "Étapes rapides pour intégrer des vidéos YouTube",
      content: `
        <ol>
          <li><strong>Coller l'URL :</strong> Copiez le lien de votre vidéo YouTube dans le générateur.</li>
          <li><strong>Personnaliser :</strong> Définissez les dimensions, la lecture automatique, la boucle, le mode muet, le mode confidentialité et l'heure de début.</li>
          <li><strong>Générer :</strong> Cliquez pour obtenir votre <strong>code d'intégration YouTube</strong> optimisé instantanément.</li>
          <li><strong>Copier & Coller :</strong> Ajoutez le code iframe au HTML de votre site Web partout où vous souhaitez que la vidéo apparaisse.</li>
        </ol>
      `
    },
    {
      title: "Fonctionnalités du code d'intégration YouTube",
      content: `
        <h3>Design iframe responsive</h3>
        <p>Chaque intégration est responsive par défaut afin que votre vidéo YouTube s'adapte aux écrans d'ordinateur, de tablette et de mobile. Aucun CSS supplémentaire n'est nécessaire.</p>
        <h3>Paramètres avancés du lecteur</h3>
        <ul>
          <li><strong>Lecture automatique & Muet :</strong> La lecture automatique est associée au mode muet pour une meilleure prise en charge du navigateur.</li>
          <li><strong>Vidéo en boucle :</strong> Rejouez automatiquement lorsque la vidéo se termine.</li>
          <li><strong>Heure de début personnalisée :</strong> Sautez les intros en commençant à la seconde exacte que vous souhaitez.</li>
          <li><strong>Marquage modeste :</strong> Réduisez l'interface utilisateur YouTube pour une intégration plus propre.</li>
          <li><strong>Mode confidentialité amélioré :</strong> Utilisez youtube-nocookie.com pour améliorer la conformité RGPD.</li>
        </ul>
      `
    },
    {
      title: "Pourquoi utiliser un générateur de code d'intégration YouTube ?",
      content: `
        <p>Alors que YouTube fournit un iframe de base, le <strong>générateur de code d'intégration youtube</strong> ici combine plusieurs paramètres automatiquement :</p>
        <ul>
          <li>Mode confidentialité amélioré en un clic.</li>
          <li>Dimensionnement responsive sans CSS manuel.</li>
          <li>Options de lecture automatique, boucle, muet et marquage au même endroit.</li>
          <li>Code iframe propre prêt à coller.</li>
        </ul>
      `
    },
    {
      title: "Confidentialité et conformité RGPD",
      content: `
        <p>Activez le mode confidentialité amélioré pour basculer le domaine vers <code>youtube-nocookie.com</code>. Cela désactive le suivi jusqu'à ce qu'un visiteiteur lise la vidéo, aidant votre site à rester conforme tout en fournissant l'intégration.</p>
      `
    },
    {
      title: "Problèmes courants de code d'intégration YouTube",
      content: `
        <h3>La vidéo dit « Regarder sur YouTube »</h3>
        <p>Le propriétaire de la vidéo a désactivé l'intégration. Vous ne pouvez pas outrepasser cette restriction.</p>
        <h3>La lecture automatique ne fonctionne pas</h3>
        <p>Les navigateurs modernes bloquent la lecture automatique non muette. Utilisez lecture automatique + muet ensemble dans le générateur.</p>
        <h3>La vidéo n'est pas responsive</h3>
        <p>Sélectionnez l'option responsive pour produire un iframe qui s'adapte à chaque appareil.</p>
      `
    }
  ],
  faq: [
    {
      question: "Comment obtenir un code d'intégration YouTube ?",
      answer: "Utilisez le générateur de code d'intégration YouTube : collez l'URL de votre vidéo, choisissez des options comme la lecture automatique, la boucle et le mode confidentialité amélioré, puis copiez le code iframe généré."
    },
    {
      question: "Quelle est la différence entre le code d'intégration YouTube et l'iframe ?",
      answer: "Ce sont la même chose. Un code d'intégration YouTube est un extrait d'iframe qui charge votre vidéo dans une page Web."
    },
    {
      question: "Puis-je personnaliser les paramètres du code d'intégration YouTube ?",
      answer: "Oui. Personnalisez la lecture automatique, le mode muet, la boucle, l'heure de début, le marquage modeste, les vidéos connexes et le mode confidentialité directement dans le générateur avant de copier le code."
    },
    {
      question: "Le générateur de code d'intégration YouTube est-il gratuit ?",
      answer: "Oui. Le générateur est entièrement gratuit avec une utilisation illimitée pour créer des codes d'intégration YouTube responsifs."
    }
  ]
};

// Get content by locale
export function getYoutubeContent(locale: Locale): SEOContent {
  switch (locale) {
    case 'zh':
      return youtubeContent_zh;
    case 'es':
      return youtubeContent_es;
    case 'ja':
      return youtubeContent_ja;
    case 'de':
      return youtubeContent_de;
    case 'fr':
      return youtubeContent_fr;
    case 'en':
    default:
      return youtubeContent_en;
  }
}
