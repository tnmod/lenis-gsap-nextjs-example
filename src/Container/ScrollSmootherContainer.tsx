"use client";
import ReactLenis, { LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const SmoothScrollProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 700);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      {children}
    </ReactLenis>
  );
};
