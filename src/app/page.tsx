"use client";
import { useGSAP } from "@gsap/react";
import randomColor from "randomcolor";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true });

      tl.to(".box", {
        duration: 1,
        stagger: 0.5,
        width: "100%",
      });

      const st = ScrollTrigger.create({
        animation: tl,
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: true,
      });
    },
    { scope: containerRef }
  );

  return (
    <div>
      {Array.from({ length: 1 }).map((_, i) => (
        <div
          key={i}
          suppressHydrationWarning
          className="min-h-screen w-full"
          style={{
            backgroundColor: randomColor(),
          }}
        ></div>
      ))}
      <div ref={containerRef} className="h-screen flex flex-col justify-center">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            suppressHydrationWarning
            className="box size-24"
            style={{
              width: "0%",
              backgroundColor: randomColor(),
            }}
          ></div>
        ))}
      </div>
      {Array.from({ length: 1 }).map((_, i) => (
        <div
          key={i}
          suppressHydrationWarning
          className="min-h-screen w-full"
          style={{
            backgroundColor: randomColor(),
          }}
        ></div>
      ))}
    </div>
  );
}
