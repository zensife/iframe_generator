# Iframe Generator

<div align="center">

![Iframe Generator](public/logo.svg)

 **The most comprehensive, free, and privacy-focused online iframe tool.**
 
 [Live Demo](https://www.iframegenerator.org) · [Report Bug](https://github.com/zensife/iframe-generator/issues) · [Request Feature](https://github.com/zensife/iframe-generator/issues)

</div>

## 📖 About

**Iframe Generator** is a modern, responsive web application designed to simplify the process of creating and customizing iframes. Whether you need a simple website embed, a responsive YouTube video player, or a custom Google Map, this tool provides clean, SEO-friendly code without requiring any technical expertise.

Built with performance and user experience in mind, it features a real-time preview, multi-language support, and a responsive design system.

## ✨ Key Features

- **🛠️ Versatile Generators**:
  - **Iframe Generator**: Create custom iframes for any URL with adjustable width, height, and border settings.
  - **Google Maps Embed**: Generate map embeds instantly without needing an API key.
  - **YouTube Embed**: Customize YouTube video players with advanced options (autoplay, mute, loop, controls).
  - **Responsive Checker**: Preview how your iframes look on different devices (Mobile, Tablet, Desktop).

- **🌍 Internationalization (i18n)**:
  - Fully localized in **6 languages**: English, Chinese (中文), Spanish (Español), Japanese (日本語), German (Deutsch), and French (Français).
  - SEO-optimized URL structure (e.g., `/es/google-maps-iframe-generator`).

- **⚡ Modern Tech Stack**:
  - Built on **Next.js 15+** (App Router) for server-side rendering and static generation.
  - **TypeScript** for type safety and developer experience.
  - **Tailwind CSS** for a responsive, dark-mode ready UI.
  - **Cloudflare Workers** ready for high-performance edge deployment.

- **🎨 User Experience**:
  - **Dark Mode** support.
  - Real-time syntax highlighting for generated code.
  - Copy-to-clipboard functionality.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [CSS Modules](https://github.com/css-modules/css-modules) / [Tailwind CSS](https://tailwindcss.com/) idea
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Deployment**: [Cloudflare Workers](https://workers.cloudflare.com/) (@opennextjs/cloudflare)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/zensife/iframe-generator.git
   cd iframe-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`.

### Build for Production

To build the project for standard Next.js deployment:

```bash
npm run build
```

To build and deploy to **Cloudflare Workers**:

```bash
npm run deploy
```

## 📂 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── [locale]/        # Localized routes
│   │   └── api/             # API routes
│   ├── components/          # React components
│   │   ├── content/         # Content sections
│   │   ├── tools/           # Generator tools logic
│   │   └── ui/              # Reusable UI components
│   ├── data/                # Static data & content
│   │   ├── seo-content/     # Localized SEO metadata
│   │   └── static-content/  # Localized static pages (Privacy, Terms, etc.)
│   ├── i18n/                # Internationalization config
│   ├── messages/            # JSON translation files
│   └── styles/              # Global styles
├── public/                  # Static assets
└── ...
```

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📬 Contact

Project Link: [https://github.com/zensife/iframe-generator](https://github.com/zensife/iframe-generator)
