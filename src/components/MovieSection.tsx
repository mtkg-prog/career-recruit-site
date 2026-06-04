// TODO: YouTube URL は仮（参考動画）。正式な自社採用動画URLが決まり次第、EMBED_URL を差し替える
const EMBED_URL =
  "https://www.youtube.com/embed/4r6ZqwyphD0?rel=0&modestbranding=1";

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
        <div className="mt-12 overflow-hidden rounded-[28px] bg-[#073B34] md:mt-16">
          <div className="relative aspect-video w-full">
            <iframe
              src={EMBED_URL}
              title="株式会社キャリア 採用動画"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
