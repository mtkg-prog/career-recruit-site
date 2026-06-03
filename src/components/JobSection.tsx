import Image from "next/image";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

const jobs = [
  {
    number: "01",
    label: "COORDINATOR",
    role: "人材コーディネーター",
    title: (
      <>
        働きたい人と、
        <br />
        必要とする現場をつなぐ。
      </>
    ),
    body: "求職者の希望や経験をヒアリングし、介護・医療現場との最適なマッチングを支援します。一人ひとりの働き方に向き合いながら、現場の安心にもつながる仕事です。",
    pcImage: `${bp}/images/recruit/jobs/job-coordinator-pc.png`,
    spImage: `${bp}/images/recruit/jobs/job-coordinator-sp.png`,
  },
  {
    number: "02",
    label: "SALES / BRANCH",
    role: "営業・支店運営",
    title: (
      <>
        地域の介護・医療現場の
        <br />
        課題に向き合う。
      </>
    ),
    body: "施設や医療機関の人材課題を把握し、必要な支援を提案・実行します。地域ごとのニーズに向き合い、現場を支える仕組みを広げていく仕事です。",
    pcImage: `${bp}/images/recruit/jobs/job-sales-branch-pc.png`,
    spImage: `${bp}/images/recruit/jobs/job-sales-branch-sp.png`,
  },
  {
    number: "03",
    label: "SENIOR WORK",
    role: "シニアワーク担当",
    title: (
      <>
        年齢に関係なく、
        <br />
        活躍できる機会をつくる。
      </>
    ),
    body: "働く意欲のあるシニアと企業・現場をつなぎ、社会参加の機会を広げます。経験や意欲が社会の力になる場をつくる仕事です。",
    pcImage: `${bp}/images/recruit/jobs/job-senior-work-pc.png`,
    spImage: `${bp}/images/recruit/jobs/job-senior-work-sp.png`,
  },
  {
    number: "04",
    label: "PLANNING / DX",
    role: "事業企画・新規事業",
    title: (
      <>
        人と仕組みで、
        <br />
        課題解決を進化させる。
      </>
    ),
    body: "既存事業の改善、新規事業、DX、教育支援などを通じて、高齢社会に必要な仕組みをつくります。現場の課題を事業に変えていく仕事です。",
    pcImage: `${bp}/images/recruit/jobs/job-business-planning-pc.png`,
    spImage: `${bp}/images/recruit/jobs/job-business-planning-sp.png`,
  },
];

export default function JobSection() {
  return (
    <section id="jobs" className="bg-[#f8faf7] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.25em] text-[#40916c] md:text-sm">
          JOBS
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-extrabold leading-[1.35] text-[#073B34] md:mt-5 md:text-6xl">
          高齢社会の課題に、
          <br />
          それぞれの役割で挑む。
        </h2>

        {/* Lead */}
        <p className="mt-6 max-w-3xl text-base leading-[2] text-slate-700 md:mt-8 md:text-lg">
          キャリアの仕事は、誰か一人の力だけで完結するものではありません。
          <br className="hidden md:block" />
          求職者に向き合う人、現場の課題を聞く人、事業をつくる人。
          <br className="hidden md:block" />
          それぞれの役割がつながることで、高齢社会を支える仕組みが生まれます。
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
          {jobs.map((job) => (
            <div
              key={job.number}
              className="overflow-hidden rounded-[24px] border border-gray-200 bg-white transition-shadow hover:shadow-md"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-[#e8f0ec] to-[#d4e4db] md:h-64">
                <Image
                  src={job.spImage}
                  alt={job.role}
                  fill
                  sizes="(min-width: 768px) 0px, 100vw"
                  className="object-cover md:hidden"
                />
                <Image
                  src={job.pcImage}
                  alt={job.role}
                  fill
                  sizes="(min-width: 768px) 50vw, 0px"
                  className="hidden object-cover md:block"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold tabular-nums text-[#40916c]">
                    {job.number}
                  </span>
                  <span className="text-[0.6rem] font-semibold tracking-[0.15em] text-slate-500">
                    {job.label}
                  </span>
                </div>

                <p className="mt-2 text-xl font-bold text-[#073B34] md:text-2xl">
                  {job.role}
                </p>

                <h3 className="mt-3 text-lg font-bold leading-[1.7] text-[#073B34] md:text-xl">
                  {job.title}
                </h3>

                <p className="mt-3 text-sm leading-[1.9] text-[#4b5563] md:text-base">
                  {job.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
