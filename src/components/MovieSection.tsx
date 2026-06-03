// TODO: YouTube URL は仮（参考動画）。正式な自社採用動画URLが決まり次第差し替える
// TODO: Hero背景動画化は将来検討。現時点ではMovieSectionとしてYouTubeリンクを設置
const YOUTUBE_URL =
  "https://youtu.be/4r6ZqwyphD0?si=h1_k_g_hUuNQQzgV";

export default function MovieSection() {
  return (
    <section id="movie" className="bg-[#f8faf7] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.25em] text-[#40916c] md:text-sm">
          MOVIE
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-extrabold leading-[1.35] text-[#073B34] md:mt-5 md:text-6xl">
          動画で知る、
          <br />
          キャリアの仕事。
        </h2>

        {/* Lead */}
        <p className="mt-6 max-w-3xl text-base leading-[2] text-slate-700 md:mt-8 md:text-lg">
          高齢社会の課題に、どのように向き合っているのか。
          <br className="hidden md:block" />
          働く人や事業の雰囲気を、動画でご覧いただけます。
        </p>

        {/* Video card */}
        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ブランドムービーをYouTubeで再生する"
          className="group mt-12 block overflow-hidden rounded-[28px] bg-[#073B34] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40916c] md:mt-16"
        >
          <div className="relative aspect-video w-full">
            {/* Play button & text overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
              {/* Play icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/80 transition-transform group-hover:scale-110 md:h-20 md:w-20">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-1 h-6 w-6 text-white md:h-8 md:w-8"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>

              {/* Label */}
              <p className="mt-5 text-[0.65rem] font-semibold tracking-[0.25em] text-white/50 md:text-xs">
                BRAND MOVIE
              </p>

              {/* Title */}
              <p className="mt-2 text-lg font-bold text-white md:text-2xl">
                キャリアで働くということ
              </p>

              {/* Subtitle */}
              <p className="mt-1 text-xs text-white/60 md:text-sm">
                高齢社会の未来を変える仕事を、動画で見る。
              </p>

              {/* CTA */}
              <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#40916c] transition-colors group-hover:text-[#52b788] md:text-base">
                動画を見る
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
