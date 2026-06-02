"use client";

import { useState, useEffect } from "react";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

const heroImages = [
  {
    src: `${bp}/images/recruit/hero-01.png`,
    srcMobile: `${bp}/images/recruit/hero-01sp.png`,
    alt: "キャリアの仕事風景 1",
    kenburns: "animate-kenburns-1",
  },
  {
    src: `${bp}/images/recruit/hero-02.png`,
    srcMobile: `${bp}/images/recruit/hero-02sp.png`,
    alt: "キャリアの仕事風景 2",
    kenburns: "animate-kenburns-2",
  },
  {
    src: `${bp}/images/recruit/hero-03.png`,
    srcMobile: `${bp}/images/recruit/hero-03sp.png`,
    alt: "キャリアの仕事風景 3",
    kenburns: "animate-kenburns-3",
  },
  {
    src: `${bp}/images/recruit/hero-04.png`,
    srcMobile: `${bp}/images/recruit/hero-04sp.png`,
    alt: "キャリアの仕事風景 4",
    kenburns: "animate-kenburns-4",
  },
];

export default function RecruitHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] md:h-[85vh] lg:h-screen w-full overflow-hidden">
      {/* Image layers — <picture> switches src between mobile / desktop */}
      {heroImages.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <picture>
            <source media="(max-width: 767px)" srcSet={image.srcMobile} />
            <img
              src={image.src}
              alt={image.alt}
              className={`h-full w-full object-cover object-[center_70%] md:object-center ${image.kenburns}`}
            />
          </picture>
        </div>
      ))}

      {/* Overlay — PC: uniform / Mobile: top + bottom gradients */}
      <div className="absolute inset-0 hidden md:block bg-[#1a3a2a]/50" />
      {/* Mobile: bottom gradient for text readability */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-t from-[#1a3a2a]/85 via-[#1a3a2a]/40 via-50% to-transparent" />
      {/* Mobile: top gradient for header readability */}
      <div className="absolute inset-x-0 top-0 h-24 md:hidden bg-gradient-to-b from-[#1a3a2a]/60 to-transparent" />

      {/* Content — mobile: bottom-aligned / PC: left-aligned center */}
      <div className="relative z-10 flex h-full items-end pb-14 px-5 md:items-center md:pb-0 md:px-12 lg:px-20">
        <div className="w-full text-center md:max-w-lg md:text-left lg:max-w-xl">
          {/* Sub copy 1 — English label */}
          <p className="text-[0.65rem] font-semibold tracking-[0.3em] text-white/80 sm:text-xs md:text-sm">
            BE A SOCIAL INNOVATOR
          </p>

          {/* Sub copy 2 — Japanese tagline */}
          <p className="mt-1.5 text-sm font-medium text-white/90 sm:text-base md:mt-2 md:text-xl lg:text-2xl">
            高齢社会をアップデート
          </p>

          {/* Main headline */}
          <h1 className="mt-3 text-[2.75rem] font-black leading-[0.95] tracking-tight text-white/90 sm:text-6xl md:mt-5 md:text-7xl lg:text-8xl lg:max-w-[480px]">
            UPDATE
            <br />
            AGING
            <br />
            SOCIETY
          </h1>

          {/* CTA */}
          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row md:mt-10">
            <a
              href="#positions"
              className="rounded-full bg-[#40916c] px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#358a60]"
            >
              募集職種を見る
            </a>
            <a
              href="#final-cta"
              className="rounded-full border border-white/60 px-6 py-3 text-center text-sm font-medium text-white/90 transition-colors hover:bg-white/15"
            >
              カジュアル面談を申し込む
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:bottom-8">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === activeIndex
                ? "w-8 bg-white"
                : "w-2 bg-white/50"
            }`}
            aria-label={`スライド ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
