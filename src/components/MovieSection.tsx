"use client";

import { useState } from "react";

// 正式な自社採用動画（確定済み）
const VIDEO_ID = "4r6ZqwyphD0";
const THUMBNAIL_URL = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;
const EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`;

export default function MovieSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="movie" className="bg-[#f8faf7] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.25em] text-[#40916c] md:text-sm">
          CULTURE MOVIE
        </p>

        {/* Heading */}
        <h2 className="mt-3 text-2xl font-bold leading-snug text-[#073B34] md:mt-4 md:text-4xl">
          キャリアで働くということ
        </h2>

        {/* Video card */}
        <div className="mt-8 overflow-hidden rounded-[28px] bg-[#073B34] md:mt-10">
          <div className="relative aspect-video w-full">
            {isPlaying ? (
              <iframe
                src={EMBED_URL}
                title="株式会社キャリア 採用動画"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label="動画を再生する"
                className="group relative h-full w-full cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={THUMBNAIL_URL}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />

                {/* Overlay text */}
                <span className="absolute bottom-6 left-6 text-xs font-semibold tracking-[0.2em] text-white/70 md:bottom-8 md:left-8 md:text-sm">
                  UPDATE AGING SOCIETY
                </span>

                {/* Play button */}
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm transition-transform group-hover:scale-110 md:h-20 md:w-20">
                    <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[18px] border-y-transparent border-l-white md:border-y-[12px] md:border-l-[20px]" />
                  </span>
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
