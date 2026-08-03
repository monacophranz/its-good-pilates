import { useEffect, useState } from "react";
import { hero } from "../content";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 bg-hero" />

      <div className="relative z-10 flex flex-col justify-end h-screen px-6 md:px-16 pb-16 md:pb-24">
        <div
          className={`transition-all duration-1000 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs tracking-[0.3em] uppercase mb-4 font-body text-[hsl(var(--foreground))]">
            {hero.eyebrow}
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8 text-[hsl(var(--foreground))]">
            {hero.title}
          </h1>
          <p className="font-body text-sm tracking-[0.12em] max-w-xs text-[hsl(var(--foreground))]">
            {hero.subtitle}
          </p>
        </div>

        <div className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 opacity-60">
          <span
            className="text-xs tracking-[0.2em] uppercase text-primary-foreground font-body"
            style={{ writingMode: "vertical-rl" }}
          >
            {hero.scrollLabel}
          </span>
          <div className="w-px h-12 bg-primary-foreground/60 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
