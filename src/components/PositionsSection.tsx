import { RECRUIT_LINKS } from "@/constants/links";

// TODO: 各職種に href を追加し、実際の求人詳細ページURLを設定する
const positions = [
  {
    category: "CAREER SUPPORT",
    title: "人材コーディネーター",
    description:
      "求職者の希望や経験を丁寧に聞き、介護・医療現場との最適なマッチングを支援する仕事です。",
    location: "全国各拠点",
    employmentType: "正社員",
  },
  {
    category: "SALES / BRANCH",
    title: "営業・支店運営",
    description:
      "介護・医療現場の人材課題を把握し、必要な支援を提案・実行する仕事です。地域ごとの課題に向き合い、支店運営にも関わります。",
    location: "全国各拠点",
    employmentType: "正社員",
  },
  {
    category: "SENIOR WORK",
    title: "シニアワーク担当",
    description:
      "働く意欲のあるシニアと企業・現場をつなぎ、年齢に関係なく活躍できる機会を広げる仕事です。",
    location: "東京・各拠点",
    employmentType: "正社員",
  },
  {
    category: "PLANNING / DX",
    title: "事業企画・新規事業",
    description:
      "既存事業の改善、新規事業、DX、教育支援などを通じて、高齢社会を支える仕組みをつくる仕事です。",
    location: "本社・一部リモート相談可",
    employmentType: "正社員",
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

              {/* TODO: 求人詳細URL確定後に a タグに戻し href を設定する */}
              <div className="mt-auto pt-6">
                <span className="inline-block rounded-full border-2 border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-400">
                  募集要項は面談時にご案内します
                </span>
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
              href={RECRUIT_LINKS.positions}
              className="w-full rounded-full bg-[#40916c] px-8 py-4 text-center text-base font-medium text-white transition-colors hover:bg-[#358a60] sm:w-auto"
            >
              募集職種一覧を見る
            </a>
            <a
              href={RECRUIT_LINKS.casualInterview}
              className="w-full rounded-full border-2 border-[#40916c] px-8 py-4 text-center text-base font-medium text-[#40916c] transition-colors hover:bg-[#40916c] hover:text-white sm:w-auto"
            >
              カジュアル面談を申し込む
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
