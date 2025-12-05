import { Locale } from '@/i18n/config';
import { SEOContent } from './home';

// English content
export const googleMapsContent_en: SEOContent = {
  title: "Google Map Embed Generator Guide",
  sections: [
    {
      title: "How to Embed Google Maps on Your Website",
      content: `
        <p>Embedding a <strong>Google Map</strong> helps customers find your location faster. The <strong>Google Map embed generator</strong> on this page outputs clean iframe code without an API key, so you can add maps to any site in seconds.</p>
      `
    },
    {
      title: "Quick Steps to Embed Google Map",
      content: `
        <ol>
          <li><strong>Enter Location:</strong> Type your business address, name, or coordinates.</li>
          <li><strong>Customize Map:</strong> Adjust zoom level (10-18) and choose Roadmap, Satellite, or Hybrid map types.</li>
          <li><strong>Set Dimensions:</strong> Pick presets or set custom width/height for responsive embeds.</li>
          <li><strong>Copy Code:</strong> Copy your Google Map embed code and paste it into your website HTML.</li>
        </ol>
      `
    },
    {
      title: "Google Map Embed Code Features",
      content: `
        <h3>No API Key Required</h3>
        <p>The generator outputs a standard iframe, so you avoid Google Cloud billing and API setup.</p>
        <h3>Responsive Map Embed</h3>
        <p>Enable the responsive option to output a fluid-width iframe that scales on mobile, tablet, and desktop.</p>
        <h3>Custom Zoom and Map Type</h3>
        <ul>
          <li><strong>Zoom 15-18:</strong> Show specific buildings and entrances.</li>
          <li><strong>Zoom 10-12:</strong> Give city or district context.</li>
          <li><strong>Roadmap / Satellite / Hybrid:</strong> Pick the map style that matches your use case.</li>
        </ul>
      `
    },
    {
      title: "Why Use Our Google Maps Embed Generator?",
      content: `
        <p>Google's "Share > Embed a map" is basic. Our <strong>google maps embed generator</strong> adds:</p>
        <ul>
          <li><strong>No API key:</strong> Ship maps fast without billing setup.</li>
          <li><strong>Custom dimensions:</strong> Presets for mobile/tablet/desktop or manual sizing.</li>
          <li><strong>Responsive embed:</strong> One-click responsive option for all screens.</li>
          <li><strong>Lazy loading:</strong> <code>loading="lazy"</code> added for better performance.</li>
          <li><strong>Clean code:</strong> Optimized iframe ready to paste.</li>
        </ul>
      `
    },
    {
      title: "Google Maps Embed Best Practices",
      content: `
        <h3>Use Lazy Loading</h3>
        <p><code>loading="lazy"</code> keeps your page fast until users scroll to the map.</p>
        <h3>Make It Responsive</h3>
        <p>Select the responsive option so the <strong>google map embed</strong> fits every screen.</p>
        <h3>Choose the Right Zoom</h3>
        <ul>
          <li><strong>15-18:</strong> Storefronts and points of interest.</li>
          <li><strong>12-14:</strong> Neighborhoods and districts.</li>
          <li><strong>10-11:</strong> City-wide or regional context.</li>
        </ul>
      `
    }
  ],
  faq: [
    {
      question: "How do I embed a Google Map on my website?",
      answer: "Use the Google Map embed generator: enter your location, pick zoom and size, then copy the iframe code. Paste it into your site HTML—no API key required."
    },
    {
      question: "Do I need an API key to embed Google Maps?",
      answer: "No. Standard iframe embeds from this generator do not require API keys or billing, so they work immediately."
    },
    {
      question: "How do I get Google Map embed code?",
      answer: "Enter your address, adjust zoom and dimensions, and click copy. You can also use Google Maps \"Share > Embed a map,\" but the generator adds responsive design and lazy loading."
    },
    {
      question: "Is embedding Google Maps free?",
      answer: "Yes. Using iframe embed code is free and does not need an API key. Our tool remains free with unlimited use."
    },
    {
      question: "How do I make my embedded Google Map responsive?",
      answer: "Enable the responsive option in the generator so the iframe automatically adapts to mobile, tablet, and desktop widths."
    }
  ]
};

// Chinese content
export const googleMapsContent_zh: SEOContent = {
  title: "Google 地图嵌入生成器指南",
  sections: [
    {
      title: "如何在您的网站上嵌入 Google 地图",
      content: `
        <p>嵌入 <strong>Google 地图</strong>可帮助客户更快找到您的位置。本页面的 <strong>Google 地图嵌入生成器</strong>无需 API 密钥即可输出干净的 iframe 代码，让您可以在几秒钟内将地图添加到任何网站。</p>
      `
    },
    {
      title: "嵌入 Google 地图的快速步骤",
      content: `
        <ol>
          <li><strong>输入位置：</strong>输入您的企业地址、名称或坐标。</li>
          <li><strong>自定义地图：</strong>调整缩放级别（10-18）并选择道路地图、卫星或混合地图类型。</li>
          <li><strong>设置尺寸：</strong>选择预设或设置自定义宽度/高度以实现响应式嵌入。</li>
          <li><strong>复制代码：</strong>复制您的 Google 地图嵌入代码并将其粘贴到您网站的 HTML 中。</li>
        </ol>
      `
    },
    {
      title: "Google 地图嵌入代码功能",
      content: `
        <h3>无需 API 密钥</h3>
        <p>生成器输出标准 iframe，因此您无需 Google Cloud 计费和 API 设置。</p>
        <h3>响应式地图嵌入</h3>
        <p>启用响应式选项可输出流式宽度 iframe，可在移动设备、平板电脑和桌面上缩放。</p>
        <h3>自定义缩放和地图类型</h3>
        <ul>
          <li><strong>缩放 15-18：</strong>显示特定建筑物和入口。</li>
          <li><strong>缩放 10-12：</strong>提供城市或地区背景。</li>
          <li><strong>道路地图/卫星/混合：</strong>选择与您的用例匹配的地图样式。</li>
        </ul>
      `
    },
    {
      title: "为什么使用我们的 Google 地图嵌入生成器？",
      content: `
        <p>Google 的"分享 > 嵌入地图"功能很基础。我们的 <strong>Google 地图嵌入生成器</strong>添加了：</p>
        <ul>
          <li><strong>无需 API 密钥：</strong>无需设置计费即可快速部署地图。</li>
          <li><strong>自定义尺寸：</strong>移动/平板/桌面预设或手动调整大小。</li>
          <li><strong>响应式嵌入：</strong>一键响应式选项，适用于所有屏幕。</li>
          <li><strong>延迟加载：</strong>添加 <code>loading="lazy"</code> 以获得更好的性能。</li>
          <li><strong>干净代码：</strong>优化的 iframe，可直接粘贴使用。</li>
        </ul>
      `
    },
    {
      title: "Google 地图嵌入最佳实践",
      content: `
        <h3>使用延迟加载</h3>
        <p><code>loading="lazy"</code> 可保持页面快速加载，直到用户滚动到地图位置。</p>
        <h3>使其响应式</h3>
        <p>选择响应式选项，使 <strong>Google 地图嵌入</strong>适合每个屏幕。</p>
        <h3>选择合适的缩放级别</h3>
        <ul>
          <li><strong>15-18：</strong>店面和兴趣点。</li>
          <li><strong>12-14：</strong>社区和地区。</li>
          <li><strong>10-11：</strong>全市或区域背景。</li>
        </ul>
      `
    }
  ],
  faq: [
    {
      question: "如何在我的网站上嵌入 Google 地图？",
      answer: "使用 Google 地图嵌入生成器：输入您的位置，选择缩放和大小，然后复制 iframe 代码。将其粘贴到您网站的 HTML 中——无需 API 密钥。"
    },
    {
      question: "嵌入 Google 地图需要 API 密钥吗？",
      answer: "不需要。此生成器的标准 iframe 嵌入不需要 API 密钥或计费，因此可以立即使用。"
    },
    {
      question: "如何获取 Google 地图嵌入代码？",
      answer: "输入您的地址，调整缩放和尺寸，然后点击复制。您也可以使用 Google 地图的\"分享 > 嵌入地图\"，但生成器添加了响应式设计和延迟加载。"
    },
    {
      question: "嵌入 Google 地图是免费的吗？",
      answer: "是的。使用 iframe 嵌入代码是免费的，不需要 API 密钥。我们的工具保持免费，无限使用。"
    },
    {
      question: "如何使嵌入的 Google 地图响应式？",
      answer: "在生成器中启用响应式选项，使 iframe 自动适应移动、平板和桌面宽度。"
    }
  ]
};

// Spanish content
export const googleMapsContent_es: SEOContent = {
  title: "Guía del Generador de Embed de Google Maps",
  sections: [
    {
      title: "Cómo insertar Google Maps en su sitio web",
      content: `
        <p>Insertar un <strong>mapa de Google</strong> ayuda a los clientes a encontrar su ubicación más rápido. El <strong>generador de embed de Google Maps</strong> en esta página produce un código iframe limpio sin clave API, por lo que puede agregar mapas a cualquier sitio en segundos.</p>
      `
    },
    {
      title: "Pasos rápidos para insertar Google Map",
      content: `
        <ol>
          <li><strong>Ingrese la ubicación:</strong> Escriba la dirección, el nombre o las coordenadas de su empresa.</li>
          <li><strong>Personalice el mapa:</strong> Ajuste el nivel de zoom (10-18) y elija los tipos de mapa Mapa de carreteras, Satélite o Híbrido.</li>
          <li><strong>Establezca las dimensiones:</strong> Elija ajustes preestablecidos o establezca ancho/alto personalizado para incrustaciones responsivas.</li>
          <li><strong>Copie el código:</strong> Copie su código de inserción de Google Map y péguelo en el HTML de su sitio web.</li>
        </ol>
      `
    },
    {
      title: "Características del código de inserción de Google Map",
      content: `
        <h3>No se requiere clave API</h3>
        <p>El generador produce un iframe estándar, por lo que evita la facturación de Google Cloud y la configuración de la API.</p>
        <h3>Embed de mapa responsivo</h3>
        <p>Habilite la opción responsiva para obtener un iframe de ancho fluido que se escala en móviles, tabletas y escritorios.</p>
        <h3>Zoom y tipo de mapa personalizados</h3>
        <ul>
          <li><strong>Zoom 15-18:</strong> Muestra edificios específicos y entradas.</li>
          <li><strong>Zoom 10-12:</strong> Da contexto de la ciudad o el distrito.</li>
          <li><strong>Mapa de carreteras / Satélite / Híbrido:</strong> Elija el estilo de mapa que coincida con su caso de uso.</li>
        </ul>
      `
    },
    {
      title: "¿Por qué usar nuestro generador de embeds de Google Maps?",
      content: `
        <p>La opción "Compartir > Insertar un mapa" de Google es básica. Nuestro <strong>generador de embeds de google maps</strong> agrega:</p>
        <ul>
          <li><strong>Sin clave API:</strong> Implemente mapas rápido sin configuración de facturación.</li>
          <li><strong>Dimensiones personalizadas:</strong> Ajustes preestablecidos para móvil/tableta/escritorio o tamaño manual.</li>
          <li><strong>Embed responsivo:</strong> Opción responsiva de un clic para todas las pantallas.</li>
          <li><strong>Carga diferida:</strong> <code>loading="lazy"</code> añadido para un mejor rendimiento.</li>
          <li><strong>Código limpio:</strong> Iframe optimizado listo para pegar.</li>
        </ul>
      `
    },
    {
      title: "Mejores prácticas para insertar Google Maps",
      content: `
        <h3>Use carga diferida</h3>
        <p><code>loading="lazy"</code> mantiene su página rápida hasta que los usuarios se desplazan hasta el mapa.</p>
        <h3>Hágalo responsivo</h3>
        <p>Seleccione la opción responsiva para que el <strong>embed de google map</strong> se ajuste a cada pantalla.</p>
        <h3>Elija el zoom correcto</h3>
        <ul>
          <li><strong>15-18:</strong> Escaparates y puntos de interés.</li>
          <li><strong>12-14:</strong> Vecindarios y distritos.</li>
          <li><strong>10-11:</strong> Contexto de toda la ciudad o regional.</li>
        </ul>
      `
    }
  ],
  faq: [
    {
      question: "¿Cómo inserto un mapa de Google en mi sitio web?",
      answer: "Use el generador de embed de Google Map: ingrese su ubicación, elija zoom y tamaño, luego copie el código iframe. Péguelo en el HTML de su sitio, no se requiere clave API."
    },
    {
      question: "¿Necesito una clave API para insertar Google Maps?",
      answer: "No. Los embeds de iframe estándar de este generador no requieren claves API ni facturación, por lo que funcionan de inmediato."
    },
    {
      question: "¿Cómo obtengo el código de inserción de Google Map?",
      answer: "Ingrese su dirección, ajuste el zoom y las dimensiones, y haga clic en copiar. También puede usar \"Compartir > Insertar un mapa\" de Google Maps, pero el generador agrega diseño responsivo y carga diferida."
    },
    {
      question: "¿Es gratuito insertar Google Maps?",
      answer: "Sí. Usar código de inserción iframe es gratuito y no necesita una clave API. Nuestra herramienta sigue siendo gratuita con uso ilimitado."
    },
    {
      question: "¿Cómo hago que mi mapa de Google insertado sea responsivo?",
      answer: "Habilite la opción responsiva en el generador para que el iframe se adapte automáticamente a los anchos de móvil, tableta y escritorio."
    }
  ]
};

// Japanese content
export const googleMapsContent_ja: SEOContent = {
  title: "Google マップ埋め込みジェネレーターガイド",
  sections: [
    {
      title: "ウェブサイトに Google マップを埋め込む方法",
      content: `
        <p><strong>Google マップ</strong>を埋め込むと、顧客が場所をより早く見つけるのに役立ちます。このページの <strong>Google マップ埋め込みジェネレーター</strong>は、API キーなしでクリーンな iframe コードを出力するため、数秒で任意のサイトに地図を追加できます。</p>
      `
    },
    {
      title: "Google マップを埋め込むためのクイックステップ",
      content: `
        <ol>
          <li><strong>場所を入力：</strong>ビジネスの住所、名前、または座標を入力します。</li>
          <li><strong>地図をカスタマイズ：</strong>ズームレベル（10-18）を調整し、ロードマップ、衛星、またはハイブリッドの地図タイプを選択します。</li>
          <li><strong>寸法を設定：</strong>プリセットを選択するか、レスポンシブ埋め込み用にカスタムの幅/高さを設定します。</li>
          <li><strong>コードをコピー：</strong>Google マップの埋め込みコードをコピーして、ウェブサイトの HTML に貼り付けます。</li>
        </ol>
      `
    },
    {
      title: "Google マップ埋め込みコードの機能",
      content: `
        <h3>API キー不要</h3>
        <p>ジェネレーターは標準の iframe を出力するため、Google Cloud の課金や API の設定を回避できます。</p>
        <h3>レスポンシブ地図埋め込み</h3>
        <p>レスポンシブオプションを有効にすると、モバイル、タブレット、デスクトップでスケーリングする流動的な幅の iframe が出力されます。</p>
        <h3>カスタムズームと地図タイプ</h3>
        <ul>
          <li><strong>ズーム 15-18：</strong>特定の建物や入り口を表示します。</li>
          <li><strong>ズーム 10-12：</strong>都市または地区のコンテキストを提供します。</li>
          <li><strong>ロードマップ / 衛星 / ハイブリッド：</strong>ユースケースに合った地図スタイルを選択してください。</li>
        </ul>
      `
    },
    {
      title: "なぜ当社の Google マップ埋め込みジェネレーターを使用するのか？",
      content: `
        <p>Google の「共有 > 地図を埋め込む」は基本的です。当社の <strong>google maps 埋め込みジェネレーター</strong>は以下を追加します：</p>
        <ul>
          <li><strong>API キーなし：</strong>課金設定なしで地図を迅速に展開。</li>
          <li><strong>カスタム寸法：</strong>モバイル/タブレット/デスクトップ用のプリセットまたは手動サイズ変更。</li>
          <li><strong>レスポンシブ埋め込み：</strong>すべての画面に対応するワンクリックのレスポンシブオプション。</li>
          <li><strong>遅延読み込み：</strong>パフォーマンス向上のために <code>loading="lazy"</code> を追加。</li>
          <li><strong>クリーンなコード：</strong>貼り付け可能な最適化された iframe。</li>
        </ul>
      `
    },
    {
      title: "Google マップ埋め込みのベストプラクティス",
      content: `
        <h3>遅延読み込みを使用する</h3>
        <p><code>loading="lazy"</code> は、ユーザーが地図までスクロールするまでページの読み込みを高速に保ちます。</p>
        <h3>レスポンシブにする</h3>
        <p><strong>google マップ埋め込み</strong>がすべての画面に収まるように、レスポンシブオプションを選択してください。</p>
        <h3>適切なズームを選択する</h3>
        <ul>
          <li><strong>15-18：</strong>店先や興味のあるポイント。</li>
          <li><strong>12-14：</strong>近隣や地区。</li>
          <li><strong>10-11：</strong>都市全体または地域のコンテキスト。</li>
        </ul>
      `
    }
  ],
  faq: [
    {
      question: "ウェブサイトに Google マップを埋め込むにはどうすればよいですか？",
      answer: "Google マップ埋め込みジェネレーターを使用します：場所を入力し、ズームとサイズを選択し、iframe コードをコピーします。API キーなしでサイトの HTML に貼り付けます。"
    },
    {
      question: "Google マップを埋め込むには API キーが必要ですか？",
      answer: "いいえ。このジェネレーターからの標準的な iframe 埋め込みには API キーや課金は必要ないため、すぐに機能します。"
    },
    {
      question: "Google マップの埋め込みコードを取得するにはどうすればよいですか？",
      answer: "住所を入力し、ズームと寸法を調整して、コピーをクリックします。Google マップの「共有 > 地図を埋め込む」も使用できますが、ジェネレーターはレスポンシブデザインと遅延読み込みを追加します。"
    },
    {
      question: "Google マップの埋め込みは無料ですか？",
      answer: "はい。iframe 埋め込みコードの使用は無料で、API キーは必要ありません。当社のツールは無制限の使用で無料のままです。"
    },
    {
      question: "埋め込まれた Google マップをレスポンシブにするにはどうすればよいですか？",
      answer: "ジェネレーターでレスポンシブオプションを有効にすると、iframe は自動的にモバイル、タブレット、デスクトップの幅に適応します。"
    }
  ]
};

// German content
export const googleMapsContent_de: SEOContent = {
  title: "Google Maps Einbettungs-Generator Anleitung",
  sections: [
    {
      title: "So betten Sie Google Maps auf Ihrer Website ein",
      content: `
        <p>Das Einbetten einer <strong>Google Map</strong> hilft Kunden, Ihren Standort schneller zu finden. Der <strong>Google Maps Einbettungs-Generator</strong> auf dieser Seite gibt sauberen Iframe-Code ohne API-Schlüssel aus, sodass Sie Karten in Sekundenschnelle zu jeder Website hinzufügen können.</p>
      `
    },
    {
      title: "Schnelle Schritte zum Einbetten von Google Maps",
      content: `
        <ol>
          <li><strong>Standort eingeben:</strong> Geben Sie Ihre Geschäftsadresse, Ihren Namen oder Ihre Koordinaten ein.</li>
          <li><strong>Karte anpassen:</strong> Passen Sie die Zoomstufe (10-18) an und wählen Sie die Kartentypen Straßenkarte, Satellit oder Hybrid.</li>
          <li><strong>Abmessungen festlegen:</strong> Wählen Sie Voreinstellungen oder legen Sie benutzerdefinierte Breite/Höhe für responsive Einbettungen fest.</li>
          <li><strong>Code kopieren:</strong> Kopieren Sie Ihren Google Maps-Einbettungscode und fügen Sie ihn in den HTML-Code Ihrer Website ein.</li>
        </ol>
      `
    },
    {
      title: "Funktionen des Google Maps Einbettungscodes",
      content: `
        <h3>Kein API-Schlüssel erforderlich</h3>
        <p>Der Generator gibt einen Standard-Iframe aus, sodass Sie die Google Cloud-Abrechnung und API-Einrichtung vermeiden.</p>
        <h3>Responsive Karteneinbettung</h3>
        <p>Aktivieren Sie die responsive Option, um einen Iframe mit fließender Breite auszugeben, der auf Mobilgeräten, Tablets und Desktops skaliert.</p>
        <h3>Benutzerdefinierter Zoom und Kartentyp</h3>
        <ul>
          <li><strong>Zoom 15-18:</strong> Zeigen Sie bestimmte Gebäude und Eingänge.</li>
          <li><strong>Zoom 10-12:</strong> Geben Sie Stadt- oder Bezirkskontext.</li>
          <li><strong>Straßenkarte / Satellit / Hybrid:</strong> Wählen Sie den Kartenstil, der zu Ihrem Anwendungsfall passt.</li>
        </ul>
      `
    },
    {
      title: "Warum unseren Google Maps Einbettungs-Generator verwenden?",
      content: `
        <p>Google's „Teilen > Karte einbetten" ist einfach. Unser <strong>Google Maps Einbettungs-Generator</strong> fügt hinzu:</p>
        <ul>
          <li><strong>Kein API-Schlüssel:</strong> Liefern Sie Karten schnell ohne Abrechnungseinrichtung.</li>
          <li><strong>Benutzerdefinierte Abmessungen:</strong> Voreinstellungen für Mobil/Tablet/Desktop oder manuelle Größenänderung.</li>
          <li><strong>Responsive Einbettung:</strong> Ein-Klick-Responsive-Option für alle Bildschirme.</li>
          <li><strong>Lazy Loading:</strong> <code>loading="lazy"</code> für bessere Leistung hinzugefügt.</li>
          <li><strong>Sauberer Code:</strong> Optimierter Iframe, bereit zum Einfügen.</li>
        </ul>
      `
    },
    {
      title: "Best Practices für Google Maps Einbettungen",
      content: `
        <h3>Verwenden Sie Lazy Loading</h3>
        <p><code>loading="lazy"</code> hält Ihre Seite schnell, bis Benutzer zur Karte scrollen.</p>
        <h3>Machen Sie es responsiv</h3>
        <p>Wählen Sie die responsive Option, damit die <strong>Google Map Einbettung</strong> auf jeden Bildschirm passt.</p>
        <h3>Wählen Sie den richtigen Zoom</h3>
        <ul>
          <li><strong>15-18:</strong> Schaufenster und Sehenswürdigkeiten.</li>
          <li><strong>12-14:</strong> Nachbarschaften und Bezirke.</li>
          <li><strong>10-11:</strong> Stadtweiter oder regionaler Kontext.</li>
        </ul>
      `
    }
  ],
  faq: [
    {
      question: "Wie bette ich eine Google-Karte auf meiner Website ein?",
      answer: "Verwenden Sie den Google Maps Einbettungs-Generator: Geben Sie Ihren Standort ein, wählen Sie Zoom und Größe und kopieren Sie den Iframe-Code. Fügen Sie ihn in den HTML-Code Ihrer Website ein – kein API-Schlüssel erforderlich."
    },
    {
      question: "Benötige ich einen API-Schlüssel, um Google Maps einzubetten?",
      answer: "Nein. Standard-Iframe-Einbettungen von diesem Generator erfordern keine API-Schlüssel oder Abrechnung und funktionieren daher sofort."
    },
    {
      question: "Wie erhalte ich Google Maps Einbettungscode?",
      answer: "Geben Sie Ihre Adresse ein, passen Sie Zoom und Abmessungen an und klicken Sie auf Kopieren. Sie können auch Google Maps „Teilen > Karte einbetten“ verwenden, aber der Generator fügt responsives Design und Lazy Loading hinzu."
    },
    {
      question: "Ist das Einbetten von Google Maps kostenlos?",
      answer: "Ja. Die Verwendung von Iframe-Einbettungscode ist kostenlos und benötigt keinen API-Schlüssel. Unser Tool bleibt bei unbegrenzter Nutzung kostenlos."
    },
    {
      question: "Wie mache ich meine eingebettete Google-Karte responsiv?",
      answer: "Aktivieren Sie die responsive Option im Generator, damit sich der Iframe automatisch an die Breiten von Mobilgeräten, Tablets und Desktops anpasst."
    }
  ]
};

// French content
export const googleMapsContent_fr: SEOContent = {
  title: "Guide du Générateur d'Intégration Google Maps",
  sections: [
    {
      title: "Comment intégrer Google Maps sur votre site web",
      content: `
        <p>L'intégration d'une <strong>Google Map</strong> aide les clients à trouver votre emplacement plus rapidement. Le <strong>générateur d'intégration Google Maps</strong> sur cette page produit un code iframe propre sans clé API, vous pouvez donc ajouter des cartes à n'importe quel site en quelques secondes.</p>
      `
    },
    {
      title: "Étapes rapides pour intégrer une carte Google",
      content: `
        <ol>
          <li><strong>Entrez l'emplacement :</strong> Tapez l'adresse, le nom ou les coordonnées de votre entreprise.</li>
          <li><strong>Personnalisez la carte :</strong> Ajustez le niveau de zoom (10-18) et choisissez les types de carte Plan, Satellite ou Hybride.</li>
          <li><strong>Définissez les dimensions :</strong> Choisissez des préréglages ou définissez une largeur/hauteur personnalisée pour des intégrations responsives.</li>
          <li><strong>Copiez le code :</strong> Copiez votre code d'intégration Google Map et collez-le dans le HTML de votre site web.</li>
        </ol>
      `
    },
    {
      title: "Caractéristiques du code d'intégration Google Map",
      content: `
        <h3>Pas de clé API requise</h3>
        <p>Le générateur produit un iframe standard, vous évitez donc la facturation Google Cloud et la configuration de l'API.</p>
        <h3>Intégration de carte responsive</h3>
        <p>Activez l'option responsive pour produire un iframe à largeur fluide qui s'adapte aux mobiles, tablettes et ordinateurs de bureau.</p>
        <h3>Zoom et type de carte personnalisés</h3>
        <ul>
          <li><strong>Zoom 15-18 :</strong> Affiche des bâtiments et des entrées spécifiques.</li>
          <li><strong>Zoom 10-12 :</strong> Donne un contexte de ville ou de quartier.</li>
          <li><strong>Plan / Satellite / Hybride :</strong> Choisissez le style de carte qui correspond à votre cas d'utilisation.</li>
        </ul>
      `
    },
    {
      title: "Pourquoi utiliser notre générateur d'intégration Google Maps ?",
      content: `
        <p>La fonction « Partager > Intégrer une carte » de Google est basique. Notre <strong>générateur d'intégration google maps</strong> ajoute :</p>
        <ul>
          <li><strong>Pas de clé API :</strong> Déployez des cartes rapidement sans configuration de facturation.</li>
          <li><strong>Dimensions personnalisées :</strong> Préréglages pour mobile/tablette/bureau ou redimensionnement manuel.</li>
          <li><strong>Intégration responsive :</strong> Option responsive en un clic pour tous les écrans.</li>
          <li><strong>Chargement différé :</strong> <code>loading="lazy"</code> ajouté pour une meilleure performance.</li>
          <li><strong>Code propre :</strong> Iframe optimisé prêt à coller.</li>
        </ul>
      `
    },
    {
      title: "Meilleures pratiques pour l'intégration de Google Maps",
      content: `
        <h3>Utilisez le chargement différé</h3>
        <p><code>loading="lazy"</code> garde votre page rapide jusqu'à ce que les utilisateurs fassent défiler vers la carte.</p>
        <h3>Rendez-le responsive</h3>
        <p>Sélectionnez l'option responsive pour que <strong>l'intégration google map</strong> s'adapte à chaque écran.</p>
        <h3>Choisissez le bon zoom</h3>
        <ul>
          <li><strong>15-18 :</strong> Vitrines et points d'intérêt.</li>
          <li><strong>12-14 :</strong> Quartiers et districts.</li>
          <li><strong>10-11 :</strong> Contexte de toute la ville ou régional.</li>
        </ul>
      `
    }
  ],
  faq: [
    {
      question: "Comment intégrer une carte Google sur mon site web ?",
      answer: "Utilisez le générateur d'intégration Google Map : entrez votre emplacement, choisissez le zoom et la taille, puis copiez le code iframe. Collez-le dans le HTML de votre site — aucune clé API requise."
    },
    {
      question: "Ai-je besoin d'une clé API pour intégrer Google Maps ?",
      answer: "Non. Les intégrations iframe standard de ce générateur ne nécessitent pas de clés API ou de facturation, elles fonctionnent donc immédiatement."
    },
    {
      question: "Comment obtenir le code d'intégration Google Map ?",
      answer: "Entrez votre adresse, ajustez le zoom et les dimensions, et cliquez sur copier. Vous pouvez également utiliser « Partager > Intégrer une carte » de Google Maps, mais le générateur ajoute un design responsive et le chargement différé."
    },
    {
      question: "L'intégration de Google Maps est-elle gratuite ?",
      answer: "Oui. L'utilisation du code d'intégration iframe est gratuite et ne nécessite pas de clé API. Notre outil reste gratuit avec une utilisation illimitée."
    },
    {
      question: "Comment rendre ma carte Google intégrée responsive ?",
      answer: "Activez l'option responsive dans le générateur pour que l'iframe s'adapte automatiquement aux largeurs de mobile, tablette et ordinateur de bureau."
    }
  ]
};

// Get content by locale
export function getGoogleMapsContent(locale: Locale): SEOContent {
  switch (locale) {
    case 'zh':
      return googleMapsContent_zh;
    case 'es':
      return googleMapsContent_es;
    case 'ja':
      return googleMapsContent_ja;
    case 'de':
      return googleMapsContent_de;
    case 'fr':
      return googleMapsContent_fr;
    case 'en':
    default:
      return googleMapsContent_en;
  }
}
