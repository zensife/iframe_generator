import { Locale } from '@/i18n/config';
import { SEOContent } from './home';

// English content
export const responsiveContent_en: SEOContent = {
  title: "Complete Guide to Responsive Iframes",
  sections: [
    {
      title: "Introduction",
      content: `
        <p>In a mobile-first world, <strong>responsive iframes</strong> are non-negotiable. With over 50% of web traffic coming from mobile devices, a fixed-width iframe will break your layout and frustrate users.</p>
        <p>Our <strong>Responsive Iframe Generator</strong> solves this by creating embed codes that automatically adapt to any screen size while maintaining the correct aspect ratio.</p>
      `
    },
    {
      title: "Two Methods Explained",
      content: `
        <p>We offer two ways to make iframes responsive:</p>
        <ul>
          <li><strong>Modern CSS (aspect-ratio):</strong> Uses the new <code>aspect-ratio</code> CSS property. It's clean, requires less code, and is supported by all modern browsers. Best for new projects.</li>
          <li><strong>Legacy Hack (padding-bottom):</strong> The classic "padding-hack" uses a wrapper div with a percentage-based padding-bottom to force an aspect ratio. It's 100% compatible with even the oldest browsers (like Internet Explorer).</li>
        </ul>
      `
    },
    {
      title: "Step-by-Step Tutorial",
      content: `
        <ol>
          <li><strong>Choose Method:</strong> Select "Modern CSS" for cleaner code or "Legacy Hack" for maximum compatibility.</li>
          <li><strong>Set Aspect Ratio:</strong> Common ratios are 16:9 (video), 4:3 (standard), 1:1 (square), or 21:9 (ultrawide).</li>
          <li><strong>Max Width:</strong> Optionally set a maximum width (e.g., 800px) to prevent the iframe from getting too large on desktop screens.</li>
          <li><strong>Test:</strong> Use the preview to see how it behaves on different screen sizes.</li>
        </ol>
      `
    },
    {
      title: "Common Aspect Ratios",
      content: `
        <ul>
          <li><strong>16:9:</strong> The standard for YouTube videos and most modern media.</li>
          <li><strong>4:3:</strong> Common for older videos, presentations, or standard documents.</li>
          <li><strong>1:1:</strong> Perfect for Instagram posts, maps, or square widgets.</li>
          <li><strong>21:9:</strong> Ultrawide format, great for cinematic content.</li>
        </ul>
      `
    },
    {
      title: "Troubleshooting",
      content: `
        <p><strong>Content Overflow:</strong> If the content inside the iframe is wider than the iframe itself, you might see scrollbars. Ensure the source content is also responsive.</p>
        <p><strong>Mobile Scrolling:</strong> On iOS, scrolling inside an iframe can sometimes be tricky. Using the "Legacy Hack" often provides a more stable scrolling experience on older iPhones.</p>
      `
    }
  ],
  faq: [
    {
      question: "What is the difference between Modern and Legacy methods?",
      answer: "Modern uses the 'aspect-ratio' CSS property which is cleaner but requires modern browsers. Legacy uses a padding trick that works everywhere but requires more HTML code."
    },
    {
      question: "How do I calculate the aspect ratio?",
      answer: "Divide the height by the width. For example, 9 / 16 = 0.5625 (56.25%). Our tool calculates this automatically for you."
    },
    {
      question: "Can I limit how wide the iframe gets?",
      answer: "Yes, use the 'Max Width' setting to ensure the iframe doesn't stretch too wide on large desktop screens."
    }
  ]
};

// Chinese content
export const responsiveContent_zh: SEOContent = {
  title: "响应式 Iframe 完全指南",
  sections: [
    {
      title: "简介",
      content: `
        <p>在移动优先的世界中，<strong>响应式 iframe</strong> 是不可或缺的。超过 50% 的网络流量来自移动设备，固定宽度的 iframe 会破坏您的布局并让用户感到沮丧。</p>
        <p>我们的 <strong>响应式 Iframe 生成器</strong>通过创建自动适应任何屏幕尺寸同时保持正确宽高比的嵌入代码来解决这个问题。</p>
      `
    },
    {
      title: "两种方法详解",
      content: `
        <p>我们提供两种使 iframe 响应式的方法：</p>
        <ul>
          <li><strong>现代 CSS (aspect-ratio)：</strong>使用新的 <code>aspect-ratio</code> CSS 属性。它干净、需要更少的代码，并且所有现代浏览器都支持。最适合新项目。</li>
          <li><strong>传统方案 (padding-bottom)：</strong>经典的"padding-hack"使用带有基于百分比的 padding-bottom 的包装 div 来强制宽高比。它与最古老的浏览器（如 Internet Explorer）100% 兼容。</li>
        </ul>
      `
    },
    {
      title: "分步教程",
      content: `
        <ol>
          <li><strong>选择方法：</strong>选择"现代 CSS"以获得更干净的代码，或选择"传统方案"以获得最大兼容性。</li>
          <li><strong>设置宽高比：</strong>常见比例有 16:9（视频）、4:3（标准）、1:1（正方形）或 21:9（超宽）。</li>
          <li><strong>最大宽度：</strong>可选择设置最大宽度（例如 800px）以防止 iframe 在桌面屏幕上变得太大。</li>
          <li><strong>测试：</strong>使用预览查看它在不同屏幕尺寸上的表现。</li>
        </ol>
      `
    },
    {
      title: "常见宽高比",
      content: `
        <ul>
          <li><strong>16:9：</strong>YouTube 视频和大多数现代媒体的标准。</li>
          <li><strong>4:3：</strong>常用于较旧的视频、演示文稿或标准文档。</li>
          <li><strong>1:1：</strong>非常适合 Instagram 帖子、地图或正方形小部件。</li>
          <li><strong>21:9：</strong>超宽格式，非常适合电影内容。</li>
        </ul>
      `
    },
    {
      title: "故障排除",
      content: `
        <p><strong>内容溢出：</strong>如果 iframe 内的内容比 iframe 本身宽，您可能会看到滚动条。确保源内容也是响应式的。</p>
        <p><strong>移动端滚动：</strong>在 iOS 上，iframe 内的滚动有时会很棘手。使用"传统方案"通常可在旧款 iPhone 上提供更稳定的滚动体验。</p>
      `
    }
  ],
  faq: [
    {
      question: "现代方法和传统方法有什么区别？",
      answer: "现代方法使用 'aspect-ratio' CSS 属性，更干净但需要现代浏览器。传统方法使用 padding 技巧，可在任何地方工作，但需要更多 HTML 代码。"
    },
    {
      question: "如何计算宽高比？",
      answer: "将高度除以宽度。例如，9 / 16 = 0.5625（56.25%）。我们的工具会自动为您计算。"
    },
    {
      question: "我可以限制 iframe 的宽度吗？",
      answer: "可以，使用\"最大宽度\"设置来确保 iframe 在大型桌面屏幕上不会拉伸得太宽。"
    }
  ]
};

// Spanish content
export const responsiveContent_es: SEOContent = {
  title: "Guía Completa de Iframes Responsivos",
  sections: [
    {
      title: "Introducción",
      content: `
        <p>En un mundo mobile-first, los <strong>iframes responsivos</strong> son innegociables. Con más del 50% del tráfico web proveniente de dispositivos móviles, un iframe de ancho fijo romperá su diseño y frustrará a los usuarios.</p>
        <p>Nuestro <strong>Generador de Iframes Responsivos</strong> resuelve esto creando códigos de inserción que se adaptan automáticamente a cualquier tamaño de pantalla mientras mantienen la relación de aspecto correcta.</p>
      `
    },
    {
      title: "Dos Métodos Explicados",
      content: `
        <p>Ofrecemos dos formas de hacer que los iframes sean responsivos:</p>
        <ul>
          <li><strong>CSS Moderno (aspect-ratio):</strong> Usa la nueva propiedad CSS <code>aspect-ratio</code>. Es limpio, requiere menos código y es compatible con todos los navegadores modernos. Lo mejor para nuevos proyectos.</li>
          <li><strong>Hack Heredado (padding-bottom):</strong> El clásico "padding-hack" usa un div contenedor con un padding-bottom basado en porcentaje para forzar una relación de aspecto. Es 100% compatible incluso con los navegadores más antiguos (como Internet Explorer).</li>
        </ul>
      `
    },
    {
      title: "Tutorial Paso a Paso",
      content: `
        <ol>
          <li><strong>Elija el Método:</strong> Seleccione "CSS Moderno" para un código más limpio o "Hack Heredado" para máxima compatibilidad.</li>
          <li><strong>Establezca la Relación de Aspecto:</strong> Las relaciones comunes son 16:9 (video), 4:3 (estándar), 1:1 (cuadrado) o 21:9 (ultra ancho).</li>
          <li><strong>Ancho Máximo:</strong> Opcionalmente establezca un ancho máximo (ej. 800px) para evitar que el iframe sea demasiado grande en pantallas de escritorio.</li>
          <li><strong>Prueba:</strong> Use la vista previa para ver cómo se comporta en diferentes tamaños de pantalla.</li>
        </ol>
      `
    },
    {
      title: "Relaciones de Aspecto Comunes",
      content: `
        <ul>
          <li><strong>16:9:</strong> El estándar para videos de YouTube y la mayoría de los medios modernos.</li>
          <li><strong>4:3:</strong> Común para videos antiguos, presentaciones o documentos estándar.</li>
          <li><strong>1:1:</strong> Perfecto para publicaciones de Instagram, mapas o widgets cuadrados.</li>
          <li><strong>21:9:</strong> Formato ultra ancho, ideal para contenido cinematográfico.</li>
        </ul>
      `
    },
    {
      title: "Solución de Problemas",
      content: `
        <p><strong>Desbordamiento de Contenido:</strong> Si el contenido dentro del iframe es más ancho que el iframe mismo, puede ver barras de desplazamiento. Asegúrese de que el contenido fuente también sea responsivo.</p>
        <p><strong>Desplazamiento Móvil:</strong> En iOS, el desplazamiento dentro de un iframe a veces puede ser complicado. Usar el "Hack Heredado" a menudo proporciona una experiencia de desplazamiento más estable en iPhones antiguos.</p>
      `
    }
  ],
  faq: [
    {
      question: "¿Cuál es la diferencia entre los métodos Moderno y Heredado?",
      answer: "El moderno usa la propiedad CSS 'aspect-ratio' que es más limpia pero requiere navegadores modernos. El heredado usa un truco de padding que funciona en todas partes pero requiere más código HTML."
    },
    {
      question: "¿Cómo calculo la relación de aspecto?",
      answer: "Divida la altura por el ancho. Por ejemplo, 9 / 16 = 0.5625 (56.25%). Nuestra herramienta calcula esto automáticamente por usted."
    },
    {
      question: "¿Puedo limitar qué tan ancho se vuelve el iframe?",
      answer: "Sí, use la configuración 'Ancho Máximo' para asegurar que el iframe no se estire demasiado en pantallas de escritorio grandes."
    }
  ]
};

// Japanese content
export const responsiveContent_ja: SEOContent = {
  title: "レスポンシブ Iframe 完全ガイド",
  sections: [
    {
      title: "はじめに",
      content: `
        <p>モバイルファーストの世界では、<strong>レスポンシブ iframe</strong> が不可欠です。ウェブトラフィックの 50% 以上がモバイルデバイスからのものであるため、固定幅の iframe はレイアウトを壊し、ユーザーを苛立たせます。</p>
        <p>当社の <strong>レスポンシブ Iframe ジェネレーター</strong>は、正しいアスペクト比を維持しながらあらゆる画面サイズに自動的に適応する埋め込みコードを作成することでこれを解決します。</p>
      `
    },
    {
      title: "2つの方法の解説",
      content: `
        <p>iframe をレスポンシブにするための 2 つの方法を提供しています：</p>
        <ul>
          <li><strong>モダン CSS (aspect-ratio)：</strong>新しい <code>aspect-ratio</code> CSS プロパティを使用します。クリーンで、必要なコードが少なく、すべての最新ブラウザでサポートされています。新しいプロジェクトに最適です。</li>
          <li><strong>レガシーハック (padding-bottom)：</strong>従来の「padding-hack」は、パーセンテージベースの padding-bottom を持つラッパー div を使用してアスペクト比を強制します。最も古いブラウザ（Internet Explorer など）とも 100% 互換性があります。</li>
        </ul>
      `
    },
    {
      title: "ステップバイステップチュートリアル",
      content: `
        <ol>
          <li><strong>方法を選択：</strong>よりクリーンなコードには「モダン CSS」を、最大の互換性には「レガシーハック」を選択します。</li>
          <li><strong>アスペクト比を設定：</strong>一般的な比率は 16:9（動画）、4:3（標準）、1:1（正方形）、または 21:9（ウルトラワイド）です。</li>
          <li><strong>最大幅：</strong>オプションで最大幅（例：800px）を設定して、デスクトップ画面で iframe が大きくなりすぎるのを防ぎます。</li>
          <li><strong>テスト：</strong>プレビューを使用して、さまざまな画面サイズでの動作を確認します。</li>
        </ol>
      `
    },
    {
      title: "一般的なアスペクト比",
      content: `
        <ul>
          <li><strong>16:9：</strong>YouTube 動画やほとんどの最新メディアの標準。</li>
          <li><strong>4:3：</strong>古い動画、プレゼンテーション、または標準ドキュメントに一般的。</li>
          <li><strong>1:1：</strong>Instagram の投稿、地図、または正方形のウィジェットに最適。</li>
          <li><strong>21:9：</strong>ウルトラワイドフォーマット、映画コンテンツに最適。</li>
        </ul>
      `
    },
    {
      title: "トラブルシューティング",
      content: `
        <p><strong>コンテンツのオーバーフロー：</strong>iframe 内のコンテンツが iframe 自体よりも広い場合、スクロールバーが表示されることがあります。ソースコンテンツもレスポンシブであることを確認してください。</p>
        <p><strong>モバイルスクロール：</strong>iOS では、iframe 内のスクロールが難しい場合があります。「レガシーハック」を使用すると、古い iPhone でより安定したスクロール体験が得られることがよくあります。</p>
      `
    }
  ],
  faq: [
    {
      question: "モダンとレガシーの方法の違いは何ですか？",
      answer: "モダンは 'aspect-ratio' CSS プロパティを使用し、よりクリーンですが最新のブラウザが必要です。レガシーはどこでも機能する padding トリックを使用しますが、より多くの HTML コードが必要です。"
    },
    {
      question: "アスペクト比を計算するにはどうすればよいですか？",
      answer: "高さを幅で割ります。例えば、9 / 16 = 0.5625 (56.25%) です。当社のツールはこれを自動的に計算します。"
    },
    {
      question: "iframe の幅を制限できますか？",
      answer: "はい、「最大幅」設定を使用して、大きなデスクトップ画面で iframe が広がりすぎないようにします。"
    }
  ]
};

// German content
export const responsiveContent_de: SEOContent = {
  title: "Vollständiger Leitfaden für Responsive Iframes",
  sections: [
    {
      title: "Einführung",
      content: `
        <p>In einer Mobile-First-Welt sind <strong>responsive Iframes</strong> unverzichtbar. Da über 50 % des Web-Traffics von Mobilgeräten kommt, wird ein Iframe mit fester Breite Ihr Layout zerstören und Benutzer frustrieren.</p>
        <p>Unser <strong>Responsive Iframe Generator</strong> löst dies, indem er Einbettungscodes erstellt, die sich automatisch an jede Bildschirmgröße anpassen und dabei das korrekte Seitenverhältnis beibehalten.</p>
      `
    },
    {
      title: "Zwei Methoden erklärt",
      content: `
        <p>Wir bieten zwei Möglichkeiten, Iframes responsiv zu machen:</p>
        <ul>
          <li><strong>Modernes CSS (aspect-ratio):</strong> Verwendet die neue <code>aspect-ratio</code> CSS-Eigenschaft. Es ist sauber, erfordert weniger Code und wird von allen modernen Browsern unterstützt. Am besten für neue Projekte.</li>
          <li><strong>Legacy Hack (padding-bottom):</strong> Der klassische "Padding-Hack" verwendet ein Wrapper-Div mit einem prozentualen padding-bottom, um ein Seitenverhältnis zu erzwingen. Es ist zu 100 % kompatibel, sogar mit den ältesten Browsern (wie Internet Explorer).</li>
        </ul>
      `
    },
    {
      title: "Schritt-für-Schritt-Anleitung",
      content: `
        <ol>
          <li><strong>Methode wählen:</strong> Wählen Sie "Modernes CSS" für saubereren Code oder "Legacy Hack" für maximale Kompatibilität.</li>
          <li><strong>Seitenverhältnis festlegen:</strong> Gängige Verhältnisse sind 16:9 (Video), 4:3 (Standard), 1:1 (Quadrat) oder 21:9 (Ultrawide).</li>
          <li><strong>Maximale Breite:</strong> Legen Sie optional eine maximale Breite (z. B. 800px) fest, um zu verhindern, dass der Iframe auf Desktop-Bildschirmen zu groß wird.</li>
          <li><strong>Testen:</strong> Verwenden Sie die Vorschau, um zu sehen, wie es sich auf verschiedenen Bildschirmgrößen verhält.</li>
        </ol>
      `
    },
    {
      title: "Gängige Seitenverhältnisse",
      content: `
        <ul>
          <li><strong>16:9:</strong> Der Standard für YouTube-Videos und die meisten modernen Medien.</li>
          <li><strong>4:3:</strong> Üblich für ältere Videos, Präsentationen oder Standarddokumente.</li>
          <li><strong>1:1:</strong> Perfekt für Instagram-Posts, Karten oder quadratische Widgets.</li>
          <li><strong>21:9:</strong> Ultrawide-Format, großartig für filmische Inhalte.</li>
        </ul>
      `
    },
    {
      title: "Fehlerbehebung",
      content: `
        <p><strong>Inhaltsüberlauf:</strong> Wenn der Inhalt im Iframe breiter ist als der Iframe selbst, sehen Sie möglicherweise Scrollbalken. Stellen Sie sicher, dass der Quellinhalt ebenfalls responsiv ist.</p>
        <p><strong>Mobiles Scrollen:</strong> Auf iOS kann das Scrollen in einem Iframe manchmal schwierig sein. Die Verwendung des "Legacy Hack" bietet oft ein stabileres Scroll-Erlebnis auf älteren iPhones.</p>
      `
    }
  ],
  faq: [
    {
      question: "Was ist der Unterschied zwischen modernen und Legacy-Methoden?",
      answer: "Modern verwendet die CSS-Eigenschaft 'aspect-ratio', die sauberer ist, aber moderne Browser erfordert. Legacy verwendet einen Padding-Trick, der überall funktioniert, aber mehr HTML-Code erfordert."
    },
    {
      question: "Wie berechne ich das Seitenverhältnis?",
      answer: "Teilen Sie die Höhe durch die Breite. Zum Beispiel 9 / 16 = 0,5625 (56,25 %). Unser Tool berechnet dies automatisch für Sie."
    },
    {
      question: "Kann ich die Breite des Iframes begrenzen?",
      answer: "Ja, verwenden Sie die Einstellung 'Maximale Breite', um sicherzustellen, dass der Iframe auf großen Desktop-Bildschirmen nicht zu breit wird."
    }
  ]
};

// French content
export const responsiveContent_fr: SEOContent = {
  title: "Guide Complet des Iframes Responsives",
  sections: [
    {
      title: "Introduction",
      content: `
        <p>Dans un monde mobile-first, les <strong>iframes responsives</strong> sont non négociables. Avec plus de 50 % du trafic Web provenant d'appareils mobiles, un iframe à largeur fixe cassera votre mise en page et frustrera les utilisateurs.</p>
        <p>Notre <strong>Générateur d'Iframes Responsives</strong> résout ce problème en créant des codes d'intégration qui s'adaptent automatiquement à n'importe quelle taille d'écran tout en conservant le bon rapport hauteur/largeur.</p>
      `
    },
    {
      title: "Deux Méthodes Expliquées",
      content: `
        <p>Nous proposons deux façons de rendre les iframes responsives :</p>
        <ul>
          <li><strong>CSS Moderne (aspect-ratio) :</strong> Utilise la nouvelle propriété CSS <code>aspect-ratio</code>. C'est propre, nécessite moins de code et est pris en charge par tous les navigateurs modernes. Idéal pour les nouveaux projets.</li>
          <li><strong>Hack Hérité (padding-bottom) :</strong> Le classique "padding-hack" utilise une div enveloppante avec un padding-bottom basé sur un pourcentage pour forcer un rapport hauteur/largeur. Il est 100 % compatible même avec les navigateurs les plus anciens (comme Internet Explorer).</li>
        </ul>
      `
    },
    {
      title: "Tutoriel Étape par Étape",
      content: `
        <ol>
          <li><strong>Choisir la Méthode :</strong> Sélectionnez "CSS Moderne" pour un code plus propre ou "Hack Hérité" pour une compatibilité maximale.</li>
          <li><strong>Définir le Rapport d'Aspect :</strong> Les rapports courants sont 16:9 (vidéo), 4:3 (standard), 1:1 (carré) ou 21:9 (ultra-large).</li>
          <li><strong>Largeur Maximale :</strong> Définissez éventuellement une largeur maximale (par exemple 800px) pour éviter que l'iframe ne devienne trop grand sur les écrans de bureau.</li>
          <li><strong>Test :</strong> Utilisez l'aperçu pour voir comment il se comporte sur différentes tailles d'écran.</li>
        </ol>
      `
    },
    {
      title: "Rapports d'Aspect Courants",
      content: `
        <ul>
          <li><strong>16:9 :</strong> La norme pour les vidéos YouTube et la plupart des médias modernes.</li>
          <li><strong>4:3 :</strong> Courant pour les vieilles vidéos, les présentations ou les documents standard.</li>
          <li><strong>1:1 :</strong> Parfait pour les publications Instagram, les cartes ou les widgets carrés.</li>
          <li><strong>21:9 :</strong> Format ultra-large, idéal pour le contenu cinématographique.</li>
        </ul>
      `
    },
    {
      title: "Dépannage",
      content: `
        <p><strong>Débordement de Contenu :</strong> Si le contenu à l'intérieur de l'iframe est plus large que l'iframe lui-même, vous pourriez voir des barres de défilement. Assurez-vous que le contenu source est également responsive.</p>
        <p><strong>Défilement Mobile :</strong> Sur iOS, le défilement à l'intérieur d'un iframe peut parfois être délicat. L'utilisation du "Hack Hérité" offre souvent une expérience de défilement plus stable sur les vieux iPhones.</p>
      `
    }
  ],
  faq: [
    {
      question: "Quelle est la différence entre les méthodes Moderne et Héritée ?",
      answer: "La moderne utilise la propriété CSS 'aspect-ratio' qui est plus propre mais nécessite des navigateurs modernes. L'héritée utilise une astuce de padding qui fonctionne partout mais nécessite plus de code HTML."
    },
    {
      question: "Comment calculer le rapport d'aspect ?",
      answer: "Divisez la hauteur par la largeur. Par exemple, 9 / 16 = 0,5625 (56,25 %). Notre outil le calcule automatiquement pour vous."
    },
    {
      question: "Puis-je limiter la largeur de l'iframe ?",
      answer: "Oui, utilisez le paramètre 'Largeur Maximale' pour vous assurer que l'iframe ne s'étire pas trop large sur les grands écrans de bureau."
    }
  ]
};

// Portuguese content
export const responsiveContent_pt: SEOContent = {
  title: "Guia Completo para Iframes Responsivos",
  sections: [
    {
      title: "Introdução",
      content: `
        <p>Num mundo mobile-first, <strong>iframes responsivos</strong> são inegociáveis. Com mais de 50% do tráfego web vindo de dispositivos móveis, um iframe de largura fixa quebrará seu layout e frustrará os usuários.</p>
        <p>Nosso <strong>Gerador de Iframes Responsivos</strong> resolve isso criando códigos de incorporação que se adaptam automaticamente a qualquer tamanho de tela, mantendo a proporção correta.</p>
      `
    },
    {
      title: "Dois Métodos Explicados",
      content: `
        <p>Oferecemos duas maneiras de tornar os iframes responsivos:</p>
        <ul>
          <li><strong>CSS Moderno (aspect-ratio):</strong> Usa a nova propriedade CSS <code>aspect-ratio</code>. É limpo, requer menos código e é suportado por todos os navegadores modernos. Melhor para novos projetos.</li>
          <li><strong>Hack Legado (padding-bottom):</strong> O clássico "padding-hack" usa uma div wrapper com um padding-bottom baseado em porcentagem para forçar uma proporção. É 100% compatível até com os navegadores mais antigos (como o Internet Explorer).</li>
        </ul>
      `
    },
    {
      title: "Tutorial Passo a Passo",
      content: `
        <ol>
          <li><strong>Escolha o Método:</strong> Selecione "CSS Moderno" para um código mais limpo ou "Hack Legado" para compatibilidade máxima.</li>
          <li><strong>Defina a Proporção:</strong> As proporções comuns são 16:9 (vídeo), 4:3 (padrão), 1:1 (quadrado) ou 21:9 (ultrawide).</li>
          <li><strong>Largura Máxima:</strong> Opcionalmente, defina uma largura máxima (ex: 800px) para evitar que o iframe fique muito grande em telas de desktop.</li>
          <li><strong>Teste:</strong> Use a pré-visualização para ver como ele se comporta em diferentes tamanhos de tela.</li>
        </ol>
      `
    },
    {
      title: "Proporções Comuns",
      content: `
        <ul>
          <li><strong>16:9:</strong> O padrão para vídeos do YouTube e a maioria das mídias modernas.</li>
          <li><strong>4:3:</strong> Comum para vídeos mais antigos, apresentações ou documentos padrão.</li>
          <li><strong>1:1:</strong> Perfeito para posts do Instagram, mapas ou widgets quadrados.</li>
          <li><strong>21:9:</strong> Formato ultrawide, ótimo para conteúdo cinematográfico.</li>
        </ul>
      `
    },
    {
      title: "Solução de Problemas",
      content: `
        <p><strong>Transbordamento de Conteúdo:</strong> Se o conteúdo dentro do iframe for mais largo que o próprio iframe, você poderá ver barras de rolagem. Certifique-se de que o conteúdo de origem também seja responsivo.</p>
        <p><strong>Rolagem em Móveis:</strong> No iOS, a rolagem dentro de um iframe às vezes pode ser complicada. Usar o "Hack Legado" muitas vezes proporciona uma experiência de rolagem mais estável em iPhones mais antigos.</p>
      `
    }
  ],
  faq: [
    {
      question: "Qual a diferença entre os métodos Moderno e Legado?",
      answer: "O moderno usa a propriedade CSS 'aspect-ratio' que é mais limpa, mas requer navegadores modernos. O legado usa um truque de preenchimento que funciona em qualquer lugar, mas requer mais código HTML."
    },
    {
      question: "Como calculo a proporção?",
      answer: "Divida a altura pela largura. Por exemplo, 9 / 16 = 0.5625 (56.25%). Nossa ferramenta calcula isso automaticamente para você."
    },
    {
      question: "Posso limitar a largura do iframe?",
      answer: "Sim, use a configuração 'Largura Máxima' para garantir que o iframe não estique demais em telas grandes de desktop."
    }
  ]
};

// Italian content
export const responsiveContent_it: SEOContent = {
  title: "Guida Completa agli Iframe Responsive",
  sections: [
    {
      title: "Introduzione",
      content: `
        <p>In un mondo mobile-first, gli <strong>iframe responsive</strong> sono imprescindibili. Con oltre il 50% del traffico web proveniente da dispositivi mobili, un iframe a larghezza fissa romperà il tuo layout e frustrerà gli utenti.</p>
        <p>Il nostro <strong>Generatore di Iframe Responsive</strong> risolve questo problema creando codici di embed che si adattano automaticamente a qualsiasi dimensione dello schermo mantenendo il corretto rapporto d'aspetto.</p>
      `
    },
    {
      title: "Due Metodi Spiegati",
      content: `
        <p>Offriamo due modi per rendere gli iframe responsive:</p>
        <ul>
          <li><strong>CSS Moderno (aspect-ratio):</strong> Usa la nuova proprietà CSS <code>aspect-ratio</code>. È pulito, richiede meno codice ed è supportato da tutti i browser moderni. Ideale per nuovi progetti.</li>
          <li><strong>Hack Legacy (padding-bottom):</strong> Il classico "padding-hack" utilizza un div wrapper con un padding-bottom basato su percentuale per forzare un rapporto d'aspetto. È compatibile al 100% anche con i browser più vecchi (come Internet Explorer).</li>
        </ul>
      `
    },
    {
      title: "Tutorial Passo-Passo",
      content: `
        <ol>
          <li><strong>Scegli il Metodo:</strong> Seleziona "CSS Moderno" per un codice più pulito o "Hack Legacy" per la massima compatibilità.</li>
          <li><strong>Imposta il Rapporto d'Aspetto:</strong> I rapporti comuni sono 16:9 (video), 4:3 (standard), 1:1 (quadrato) o 21:9 (ultrawide).</li>
          <li><strong>Larghezza Massima:</strong> Opzionalmente imposta una larghezza massima (es. 800px) per evitare che l'iframe diventi troppo grande sugli schermi desktop.</li>
          <li><strong>Test:</strong> Usa l'anteprima per vedere come si comporta su diverse dimensioni dello schermo.</li>
        </ol>
      `
    },
    {
      title: "Rapporti d'Aspetto Comuni",
      content: `
        <ul>
          <li><strong>16:9:</strong> Lo standard per i video di YouTube e la maggior parte dei media moderni.
          <li><strong>4:3:</strong> Comune per vecchi video, presentazioni o documenti standard.
          <li><strong>1:1:</strong> Perfetto per post di Instagram, mappe o widget quadrati.
          <li><strong>21:9:</strong> Formato ultrawide, ottimo per contenuti cinematografici.</li>
        </ul>
      `
    },
    {
      title: "Risoluzione dei Problemi",
      content: `
        <p><strong>Overflow del Contenuto:</strong> Se il contenuto all'interno dell'iframe è più largo dell'iframe stesso, potresti vedere barre di scorrimento. Assicurati che anche il contenuto sorgente sia responsive.</p>
        <p><strong>Scorrimento su Mobile:</strong> Su iOS, lo scorrimento all'interno di un iframe può a volte essere complicato. L'uso dell'"Hack Legacy" fornisce spesso un'esperienza di scorrimento più stabile sui vecchi iPhone.</p>
      `
    }
  ],
  faq: [
    {
      question: "Qual è la differenza tra i metodi Moderno e Legacy?",
      answer: "Il moderno usa la proprietà CSS 'aspect-ratio' che è più pulita ma richiede browser moderni. Il legacy usa un trucco di padding che funziona ovunque ma richiede più codice HTML."
    },
    {
      question: "Come calcolo il rapporto d'aspetto?",
      answer: "Dividi l'altezza per la larghezza. Ad esempio, 9 / 16 = 0.5625 (56.25%). Il nostro strumento lo calcola automaticamente per te."
    },
    {
      question: "Posso limitare la larghezza dell'iframe?",
      answer: "Sì, usa l'impostazione 'Larghezza Massima' per assicurarti che l'iframe non si estenda troppo su grandi schermi desktop."
    }
  ]
};

// Russian content
export const responsiveContent_ru: SEOContent = {
  title: "Полное руководство по адаптивным Iframe",
  sections: [
    {
      title: "Введение",
      content: `
        <p>В мире, ориентированном на мобильные устройства, <strong>адаптивные (responsive) iframe</strong> обязательны. Поскольку более 50% веб-трафика поступает с мобильных устройств, iframe с фиксированной шириной нарушит вашу верстку и разочарует пользователей.</p>
        <p>Наш <strong>Генератор адаптивных Iframe</strong> решает эту проблему, создавая коды для вставки, которые автоматически адаптируются к любому размеру экрана, сохраняя правильное соотношение сторон.</p>
      `
    },
    {
      title: "Объяснение двух методов",
      content: `
        <p>Мы предлагаем два способа сделать iframe адаптивными:</p>
        <ul>
          <li><strong>Современный CSS (aspect-ratio):</strong> Использует новое CSS-свойство <code>aspect-ratio</code>. Это чисто, требует меньше кода и поддерживается всеми современными браузерами. Лучше всего подходит для новых проектов.</li>
          <li><strong>Традиционный хак (padding-bottom):</strong> Классический "padding-hack" использует обертку div с процентным padding-bottom для принудительного задания соотношения сторон. Он на 100% совместим даже со старейшими браузерами (такими как Internet Explorer).</li>
        </ul>
      `
    },
    {
      title: "Пошаговое руководство",
      content: `
        <ol>
          <li><strong>Выберите метод:</strong> Выберите "Современный CSS" для более чистого кода или "Традиционный хак" для максимальной совместимости.</li>
          <li><strong>Установите соотношение сторон:</strong> Распространенные пропорции - 16:9 (видео), 4:3 (стандарт), 1:1 (квадрат) или 21:9 (ультраширокий).</li>
          <li><strong>Максимальная ширина:</strong> Опционально установите максимальную ширину (например, 800px), чтобы iframe не становился слишком большим на экранах настольных ПК.</li>
          <li><strong>Тест:</strong> Используйте предпросмотр, чтобы увидеть, как он ведет себя на экранах разных размеров.</li>
        </ol>
      `
    },
    {
      title: "Распространенные соотношения сторон",
      content: `
        <ul>
          <li><strong>16:9:</strong> Стандарт для видео YouTube и большинства современных медиа.</li>
          <li><strong>4:3:</strong> Обычно для старых видео, презентаций или стандартных документов.</li>
          <li><strong>1:1:</strong> Идеально подходит для постов Instagram, карт или квадратных виджетов.</li>
          <li><strong>21:9:</strong> Ультраширокий формат, отлично подходит для кинематографического контента.</li>
        </ul>
      `
    },
    {
      title: "Устранение неполадок",
      content: `
        <p><strong>Переполнение контента:</strong> Если контент внутри iframe шире, чем сам iframe, вы можете увидеть полосы прокрутки. Убедитесь, что исходный контент также адаптивен.</li>
        <p><strong>Прокрутка на мобильных:</strong> На iOS прокрутка внутри iframe иногда может быть сложной. Использование "Традиционного хака" часто обеспечивает более стабильную прокрутку на старых iPhone.</p>
      `
    }
  ],
  faq: [
    {
      question: "В чем разница между современным и традиционным методами?",
      answer: "Современный использует свойство CSS 'aspect-ratio', которое чище, но требует современных браузеров. Традиционный использует трюк с отступами, который работает везде, но требует больше HTML-кода."
    },
    {
      question: "Как рассчитать соотношение сторон?",
      answer: "Разделите высоту на ширину. Например, 9 / 16 = 0.5625 (56.25%). Наш инструмент рассчитывает это автоматически для вас."
    },
    {
      question: "Могу ли я ограничить ширину iframe?",
      answer: "Да, используйте настройку 'Максимальная ширина', чтобы iframe не растягивался слишком широко на больших экранах."
    }
  ]
};

// Get content by locale
export function getResponsiveContent(locale: Locale): SEOContent {
  switch (locale) {
    case 'zh':
      return responsiveContent_zh;
    case 'es':
      return responsiveContent_es;
    case 'ja':
      return responsiveContent_ja;
    case 'de':
      return responsiveContent_de;
    case 'fr':
      return responsiveContent_fr;
    case 'pt':
      return responsiveContent_pt;
    case 'it':
      return responsiveContent_it;
    case 'ru':
      return responsiveContent_ru;
    case 'en':
    default:
      return responsiveContent_en;
  }
}
