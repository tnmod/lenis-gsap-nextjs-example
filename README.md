# Lenis + GSAP Scroll Smoother with Next.js

This example repository demonstrates how to implement smooth scrolling and scroll-triggered animations using Lenis and GSAP within a Next.js project.

## 🚀 Features

- **Smooth scrolling** powered by [Lenis](https://github.com/studio-freight/lenis).
- **Scroll-triggered animations** using [GSAP](https://greensock.com/) and the ScrollTrigger plugin.
- Built with Next.js (`v15.2.2`) and TurboPack.
- Fully configured with TypeScript, Tailwind CSS, and ESLint for a streamlined development experience.

## 📦 Tech Stack

- Next.js (`v15.2.2`)
- React (`v19`)
- GSAP (`v3.12.7`)
- Lenis (`v1.2.3`)
- Tailwind CSS (`v4`)
- TypeScript (`v5`)
- ESLint (`v9`)

## 🛠️ Installation

1. Clone the repository:

```sh
git clone https://github.com/tnmod/lenis-gsap-nextjs-example.git
```

2. Navigate to the project folder:

```sh
cd lenis-gsap-nextjs-example
```

3. Install dependencies:

```sh
yarn install
```

## 🚧 Development

Run the development server with TurboPack:

```sh
yarn dev
```

Or, to run with HTTPS locally:

```sh
yarn https
```

## 🔨 Building

Build your application for production:

```sh
yarn build
```

Then start the production server:

```sh
yarn start
```

## 📁 Project Structure

```
lenis-gsap-nextjs-example
├── app
│   └── page.tsx           # Home page with GSAP animations
├── components
│   └── SmoothScrollProvider.tsx  # Lenis smooth scroll provider
├── styles
│   └── globals.css        # Global styles and Tailwind integration
├── package.json
└── tsconfig.json
```

## 🧩 Usage

Wrap your Next.js application in the `SmoothScrollProvider` to enable Lenis smooth scrolling:

```tsx
// layout.tsx
import { SmoothScrollProvider } from "../components/SmoothScrollProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      {children}
    </SmoothScrollProvider>
  );
}
```

Use GSAP with ScrollTrigger inside your components to animate elements on scroll:

```tsx
// page.tsx
'use client';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// GSAP animation setup as demonstrated in Home component...
```

## 💡 Customization

You can easily adjust scroll smoothing, animation duration, easing functions, and scroll triggers directly within the provided components.

## 📜 License

MIT © [tnmod](https://github.com/tnmod)

