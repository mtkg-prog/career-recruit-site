import { RECRUIT_LINKS } from "@/constants/links";

export default function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-[#073B34] px-5 py-24 text-center md:px-8 md:py-36"
    >
      {/* 背景英字コピー */}
      <p
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center text-[15vw] font-black leading-none tracking-tight text-white/[0.04] md:text-[12vw]"
      >
        JOIN THE UPDATE
      </p>

      <div className="relative mx-auto max-w-5xl">
        {/* 英字コピー */}
        <p className="text-5xl font-black leading-none tracking-tight text-white/20 md:text-8xl lg:text-9xl">
          JOIN THE
          <br />
          UPDATE
        </p>

        {/* メインコピー */}
        <h2 className="mt-8 text-3xl font-extrabold leading-[1.4] text-white md:mt-10 md:text-6xl">
          自分たちの未来を、
          <br />
          自分たちでアップデート。
        </h2>

        {/* 本文 */}
        <p className="mx-auto mt-6 max-w-3xl text-base leading-[2] text-white/80 md:mt-8 md:text-xl">
          その一歩は、誠実に相手に寄り添い、真摯に向き合うことから始まります。
          <br className="hidden md:block" />
          あらゆる人に訪れる高齢社会の未来を、私たちの手で変えていきます。
        </p>

        {/* CTAボタン */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:mt-12">
          <a
            href={RECRUIT_LINKS.jobList}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-white px-7 py-4 text-base font-bold text-[#073B34] transition-colors hover:bg-white/90 focus:outline-2 focus:outline-offset-2 focus:outline-white sm:w-auto md:px-9"
          >
            募集職種一覧を見る
          </a>
          <a
            href={RECRUIT_LINKS.entryMidCareer}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full border-2 border-white px-7 py-4 text-base font-bold text-white transition-colors hover:bg-white/10 focus:outline-2 focus:outline-offset-2 focus:outline-white sm:w-auto md:px-9"
          >
            中途採用エントリー
          </a>
        </div>

        {/* 補足テキスト */}
        <p className="mt-5 text-sm text-white/[0.65]">
          すぐに応募するか迷っている方も、まずはお気軽にお話しください。
        </p>

        {/* エントリーリンク */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a
            href={RECRUIT_LINKS.entry2027}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/70 underline underline-offset-4 transition-colors hover:text-white"
          >
            2027卒エントリー
          </a>
          <a
            href={RECRUIT_LINKS.entry2028}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/70 underline underline-offset-4 transition-colors hover:text-white"
          >
            2028卒エントリー
          </a>
        </div>
      </div>
    </section>
  );
}
