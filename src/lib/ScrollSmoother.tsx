import Script from "next/script";

declare global {
  interface Window {
    ScrollSmoother: any;
  }
}

export function getScrollSmoother() {
  if (typeof window !== "undefined" && window.ScrollSmoother) {
    return window.ScrollSmoother;
  }
  console.error("ScrollSmoother is not available in the current environment.");
  return null;
}

export const ScrollSmootherScript = () => {
  return <Script src="/ScrollSmoother.min.js" strategy="lazyOnload" />;
};
