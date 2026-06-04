import Image from "next/image";
import { RECRUIT_LINKS } from "@/constants/links";

// 個別求人URLが確定したら各カードの href を個別URLに差し替える
const positions = [
  {
    category: "SALES / COORDINATOR",
    title: "営業職／人材コーディネーター",
    description:
      "介護・医療領域を中心に、求職者とクライアント双方に向き合い、最適なマッチングを支援する仕事です。人材不足に悩む現場と、働きたい人をつなぎ、地域の課題解決に関わります。",
    location: "全国各拠点",
    employmentType: "正社員",
    href: RECRUIT_LINKS.jobList,
  },
  {
    category: "CORPORATE",
    title: "コーポレート",
    description:
      "人事、総務、経理、労務、情報システムなど、会社全体の成長を支える仕事です。現場や事業部門がより良いサービスを届けられるよう、組織の土台づくりを担います。",
    location: "本社",
    employmentType: "正社員",
    href: RECRUIT_LINKS.jobList,
  },
  {
    category: "PLANNING / STRATEGY",
    title: "経営企画・事業企画",
    description:
      "既存事業の改善、新規事業、DX、教育支援などを通じて、高齢社会を支える仕組みをつくる仕事です。現場で得た課題を、事業や組織の進化につなげていきます。",
    location: "本社・一部リモート相談可",
    employmentType: "正社員",
    href: RECRUIT_LINKS.jobList,
  },
];

export default function PositionsSection() {
  return (
    <section
      id="positions"
      className="bg-[#f8faf7] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.25em] text-[#40916c] md:text-sm">
          OPEN POSITIONS
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-extrabold leading-[1.35] text-[#073B34] md:mt-5 md:text-6xl">
          募集中のポジション
        </h2>

        {/* Lead */}
        <p className="mt-6 max-w-3xl text-base leading-[2] text-slate-700 md:mt-8 md:text-lg">
          高齢社会の課題に向き合う仕事は、一つではありません。
          <br className="hidden md:block" />
          あなたの経験や志向に合わせて、挑戦できるフィールドがあります。
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
          {positions.map((job) => (
            <div
              key={job.title}
              className="flex flex-col rounded-[24px] border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md md:p-8"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-[#40916c]">
                {job.category}
              </p>

              <h3 className="mt-3 text-xl font-bold leading-[1.5] text-[#073B34] md:text-2xl">
                {job.title}
              </h3>

              <p className="mt-4 text-sm leading-[1.9] text-slate-600 md:text-base">
                {job.description}
              </p>

              {/* メタ情報 */}
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#E8F0EC] px-3 py-1 text-xs font-medium text-[#2d6a4f]">
                  {job.employmentType}
                </span>
                <span className="rounded-full bg-[#E8F0EC] px-3 py-1 text-xs font-medium text-[#2d6a4f]">
                  {job.location}
                </span>
              </div>

              <div className="mt-auto pt-6">
                <a
                  href={job.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border-2 border-[#40916c] px-6 py-2.5 text-sm font-medium text-[#40916c] transition-colors hover:bg-[#40916c] hover:text-white"
                >
                  募集一覧で確認する
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 補足メッセージ + CTA */}
        <div className="mt-12 text-center md:mt-16">
          <p className="text-base leading-[1.9] text-slate-700 md:text-lg">
            掲載中の職種以外でも、あなたの経験を活かせる可能性があります。
            <br className="hidden md:block" />
            まずはカジュアルにお話ししましょう。
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={RECRUIT_LINKS.casualInterview}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-[#40916c] px-8 py-4 text-center text-base font-medium text-white transition-colors hover:bg-[#358a60] sm:w-auto"
            >
              カジュアル面談を申し込む
            </a>
          </div>

          {/* エントリーCTA */}
          <div className="mt-12 border-t border-gray-200 pt-12">
            <h3 className="text-lg font-bold text-[#073B34] md:text-xl">
              エントリーはこちら
            </h3>
            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={RECRUIT_LINKS.entry2027}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-[#40916c] px-8 py-4 text-center text-base font-medium text-white transition-colors hover:bg-[#358a60] sm:w-auto"
              >
                2027卒エントリー
              </a>
              <a
                href={RECRUIT_LINKS.entryMidCareer}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-[#40916c] px-8 py-4 text-center text-base font-medium text-white transition-colors hover:bg-[#358a60] sm:w-auto"
              >
                中途採用エントリー
              </a>
              <a
                href={RECRUIT_LINKS.casualInterview}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full border-2 border-[#40916c] px-8 py-4 text-center text-base font-medium text-[#40916c] transition-colors hover:bg-[#40916c] hover:text-white sm:w-auto"
              >
                カジュアル面談を申し込む
              </a>
            </div>
          </div>

          {/* マイナビバナー */}
          <div className="mt-12 border-t border-gray-200 pt-12">
            <h3 className="text-lg font-bold text-[#073B34] md:text-xl">
              新卒採用はこちら
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              マイナビからも募集情報をご確認いただけます。
            </p>
            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={RECRUIT_LINKS.mynavi2027}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-xl bg-white px-8 py-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <Image
                  src="https://job.mynavi.jp/conts/kigyo/2027/logo/banner_logo_195_60.gif"
                  alt="マイナビ2027"
                  width={195}
                  height={60}
                  unoptimized
                />
              </a>
              <a
                href={RECRUIT_LINKS.mynavi2028}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-xl bg-white px-8 py-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <Image
                  src="https://job.mynavi.jp/conts/kigyo/2028/logo/banner_logo_195_60.gif"
                  alt="マイナビ2028"
                  width={195}
                  height={60}
                  unoptimized
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
