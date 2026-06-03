import RecruitHero from "@/components/RecruitHero";
import IssueSection from "@/components/IssueSection";
import AboutSection from "@/components/AboutSection";
import BusinessSection from "@/components/BusinessSection";
import JobSection from "@/components/JobSection";
import PeopleSection from "@/components/PeopleSection";

/* ─── Section wrapper helpers ─── */
function Section({
  id,
  bg = "white",
  children,
}: {
  id?: string;
  bg?: "white" | "light" | "dark";
  children: React.ReactNode;
}) {
  const bgClass =
    bg === "dark"
      ? "bg-[#1a3a2a] text-white"
      : bg === "light"
        ? "bg-[#f8faf9]"
        : "bg-white";
  return (
    <section id={id} className={`${bgClass} py-16 md:py-24`}>
      <div className="mx-auto max-w-6xl px-4 lg:px-8">{children}</div>
    </section>
  );
}

function SectionHeader({
  en,
  ja,
  light = false,
}: {
  en: string;
  ja: string;
  light?: boolean;
}) {
  return (
    <div className="mb-12 text-center md:mb-16">
      <p
        className={`text-sm tracking-[0.2em] font-medium ${light ? "text-white/60" : "text-[#40916c]"}`}
      >
        {en}
      </p>
      <h2
        className={`mt-2 text-2xl font-bold md:text-3xl lg:text-4xl ${light ? "text-white" : "text-[#1a3a2a]"}`}
      >
        {ja}
      </h2>
    </div>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      {/* 1. ファーストビュー */}
      <RecruitHero />

      {/* 2. 社会課題セクション */}
      <IssueSection />

      {/* 3. ABOUT US */}
      <AboutSection />

      {/* 4. 事業紹介 */}
      <BusinessSection />

      {/* 5. 仕事紹介 */}
      <JobSection />

      {/* 6. 社員インタビュー */}
      <PeopleSection />

      {/* 7. 数字で見るキャリア */}
      <Section id="numbers" bg="light">
        <SectionHeader en="NUMBERS" ja="数字で見るキャリア" />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {[
            { number: "2005", unit: "年", label: "設立" },
            { number: "850", unit: "名", label: "社員数" },
            { number: "31.5", unit: "歳", label: "平均年齢" },
            { number: "12", unit: "拠点", label: "全国展開" },
            { number: "78", unit: "%", label: "有給取得率" },
            { number: "96", unit: "%", label: "育休復帰率" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-[#40916c] md:text-4xl">
                {item.number}
                <span className="text-lg">{item.unit}</span>
              </p>
              <p className="mt-2 text-sm font-medium text-[#1a3a2a]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. カルチャー */}
      <Section id="culture">
        <SectionHeader en="CULTURE" ja="カルチャー" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "社会貢献ファースト",
              desc: "利益よりも先に、社会課題の解決を考える。それが私たちの判断基準です。",
            },
            {
              title: "チームで挑む",
              desc: "一人では解決できない課題も、チームなら乗り越えられる。部署を越えた連携を大切にしています。",
            },
            {
              title: "成長を止めない",
              desc: "研修制度や資格取得支援が充実。学び続ける姿勢を全力で応援します。",
            },
            {
              title: "多様性を力に",
              desc: "年齢・性別・国籍を問わず、多様な視点が集まることで、より良いサービスが生まれます。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-100 p-6"
            >
              <div className="mb-4 h-1 w-12 rounded-full bg-[#40916c]" />
              <h3 className="text-lg font-bold text-[#1a3a2a]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 9. キャリアパス */}
      <Section id="career-path" bg="light">
        <SectionHeader en="CAREER PATH" ja="キャリアパス" />
        <div className="mx-auto max-w-2xl">
          {[
            {
              year: "1年目",
              title: "基礎を学ぶ",
              desc: "充実した研修プログラムで業界知識とビジネススキルの基礎を習得。先輩社員によるOJTで実践力を身につけます。",
            },
            {
              year: "2〜3年目",
              title: "主力として活躍",
              desc: "担当クライアントを持ち、一人前のプロフェッショナルとして活躍。チームの中核メンバーとして成果を出します。",
            },
            {
              year: "4〜5年目",
              title: "リーダーへ",
              desc: "チームリーダーとして後輩の育成やプロジェクトの推進を担当。マネジメントスキルを磨きます。",
            },
            {
              year: "6年目〜",
              title: "マネージャー・専門職",
              desc: "マネージャーとして組織を率いるか、スペシャリストとして専門性を極めるか。自分らしいキャリアを選べます。",
            },
          ].map((step, index) => (
            <div key={step.year} className="relative flex gap-6 pb-10">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#40916c] text-sm font-bold text-white">
                  {index + 1}
                </div>
                {index < 3 && (
                  <div className="mt-2 h-full w-0.5 bg-[#40916c]/20" />
                )}
              </div>
              {/* Content */}
              <div className="pb-2">
                <p className="text-sm font-medium text-[#40916c]">
                  {step.year}
                </p>
                <h3 className="mt-1 text-lg font-bold text-[#1a3a2a]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 10. 募集職種 */}
      <Section id="positions">
        <SectionHeader en="OPEN POSITIONS" ja="募集職種" />
        <div className="space-y-4">
          {[
            {
              title: "法人営業",
              type: "正社員",
              location: "東京・大阪・名古屋",
              tags: ["未経験歓迎", "月給25万円〜"],
            },
            {
              title: "人材コーディネーター",
              type: "正社員",
              location: "全国12拠点",
              tags: ["経験者優遇", "月給23万円〜"],
            },
            {
              title: "Webエンジニア",
              type: "正社員",
              location: "東京（リモート可）",
              tags: ["Go / TypeScript", "月給30万円〜"],
            },
            {
              title: "マーケティング担当",
              type: "正社員",
              location: "東京",
              tags: ["企画経験者歓迎", "月給27万円〜"],
            },
            {
              title: "カスタマーサクセス",
              type: "正社員 / 契約社員",
              location: "東京・大阪",
              tags: ["未経験歓迎", "月給22万円〜"],
            },
          ].map((job) => (
            <div
              key={job.title}
              className="group flex flex-col gap-4 rounded-2xl border border-gray-100 p-6 transition-shadow hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-[#1a3a2a]">
                  {job.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {job.type} ／ {job.location}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#40916c]/10 px-3 py-1 text-xs font-medium text-[#2d6a4f]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="#"
                className="shrink-0 rounded-full border-2 border-[#40916c] px-6 py-2.5 text-center text-sm font-medium text-[#40916c] transition-colors hover:bg-[#40916c] hover:text-white"
              >
                詳細を見る
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* 11. FAQ */}
      <Section id="faq" bg="light">
        <SectionHeader en="FAQ" ja="よくある質問" />
        <div className="mx-auto max-w-3xl space-y-4">
          {[
            {
              q: "未経験でも応募できますか？",
              a: "はい、多くの職種で未経験の方を歓迎しています。入社後は充実した研修プログラムがありますので、安心してスタートできます。実際に、社員の約40%が異業種からの転職者です。",
            },
            {
              q: "選考プロセスを教えてください。",
              a: "書類選考 → 一次面接（オンライン）→ 二次面接（対面）→ 最終面接 → 内定の流れです。応募から内定まで約3〜4週間を予定しています。カジュアル面談も随時受け付けています。",
            },
            {
              q: "リモートワークは可能ですか？",
              a: "職種によって異なりますが、エンジニア職やマーケティング職では週2〜3日のリモートワークが可能です。詳細は各募集要項をご確認ください。",
            },
            {
              q: "福利厚生にはどのようなものがありますか？",
              a: "社会保険完備、通勤手当、住宅手当、資格取得支援制度、育児・介護休業制度、社員旅行、部活動支援など、充実した福利厚生を用意しています。",
            },
            {
              q: "配属先はどのように決まりますか？",
              a: "ご本人の希望と適性を考慮し、面接時にすり合わせを行います。入社後も定期的な面談を通じて、キャリアの方向性を一緒に考えていきます。",
            },
            {
              q: "介護や医療の知識がなくても大丈夫ですか？",
              a: "問題ありません。入社時の研修で業界の基礎知識をしっかり学べます。大切なのは「社会課題を解決したい」という想いです。",
            },
          ].map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-gray-200 bg-white"
            >
              <summary className="flex cursor-pointer items-center justify-between p-6">
                <span className="pr-4 text-base font-medium text-[#1a3a2a]">
                  {item.q}
                </span>
                <span className="faq-icon shrink-0 text-2xl text-[#40916c] transition-transform duration-300">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* 12. 最終CTA */}
      <section
        id="final-cta"
        className="bg-[#1a3a2a] py-20 text-center text-white md:py-28"
      >
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <p className="text-sm tracking-[0.2em] font-medium text-white/60">
            JOIN US
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
            あなたの力で、
            <br />
            高齢社会に希望を。
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
            一人ひとりの挑戦が、社会を変える力になる。
            <br className="hidden md:block" />
            私たちと一緒に、高齢社会の未来をつくりませんか。
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#positions"
              className="w-full rounded-full bg-[#40916c] px-8 py-4 text-base font-medium text-white transition-colors hover:bg-[#358a60] sm:w-auto"
            >
              募集職種を見る
            </a>
            <a
              href="#"
              className="w-full rounded-full border-2 border-white px-8 py-4 text-base font-medium text-white transition-colors hover:bg-white/20 sm:w-auto"
            >
              カジュアル面談を申し込む
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
