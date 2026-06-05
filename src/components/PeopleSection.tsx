import Image from "next/image";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

const people = [
  {
    label: "ROLE 01",
    role: "経営企画・事業企画",
    entryType: "中途入社",
    joined: "2024年入社",
    background: "前職：事業企画・営業企画",
    catchcopy: (
      <>
        現場の違和感を見過ごさず、
        <br />
        仕組みで変えていく。
      </>
    ),
    reason:
      "現場で見えてくる課題を、仕組みや事業として変えていく仕事に挑戦したかったから。",
    focus:
      "既存事業の改善や新しい取り組みを通じて、高齢社会を支える仕組みづくりに向き合っています。",
    pcImage: `${bp}/images/recruit/people/people-planning-pc.png`,
    spImage: `${bp}/images/recruit/people/people-planning-sp.png`,
    alt: "経営企画・事業企画として仕組みづくりに向き合う社員",
  },
  {
    label: "ROLE 02",
    role: "営業職／人材コーディネーター",
    entryType: "新卒入社",
    joined: "2023年入社",
    background: "出身：文系学部",
    catchcopy: (
      <>
        一人ひとりの声を聞き、
        <br />
        できることを一緒に探す。
      </>
    ),
    reason:
      "人に向き合いながら、社会課題にも関われる仕事だと感じたから。",
    focus:
      "求職者と現場の双方に向き合い、希望や課題を丁寧に受け止めながら、より良いマッチングを支えています。",
    pcImage: `${bp}/images/recruit/people/people-senior-work-pc.png`,
    spImage: `${bp}/images/recruit/people/people-senior-work-sp.png`,
    alt: "営業職／人材コーディネーターとして就労相談に向き合う社員",
  },
  {
    label: "ROLE 03",
    role: "営業職／人材コーディネーター",
    entryType: "中途入社",
    joined: "2022年入社",
    background: "前職：接客・サービス業",
    catchcopy: (
      <>
        年齢に関係なく働ける機会を、
        <br />
        人材サービスから広げる。
      </>
    ),
    reason:
      "一人ひとりの人生や働き方に寄り添いながら、地域に必要な支援ができる仕事だと感じたから。",
    focus:
      "働きたい人の声に耳を傾け、その人らしく活躍できる機会をチームで考えています。",
    pcImage: `${bp}/images/recruit/people/people-coordinator-pc.png`,
    spImage: `${bp}/images/recruit/people/people-coordinator-sp.png`,
    alt: "営業職／人材コーディネーターとして求職者に向き合う社員",
  },
  {
    label: "ROLE 04",
    role: "コーポレート",
    entryType: "中途入社",
    joined: "2021年入社",
    background: "前職：管理部門・バックオフィス",
    catchcopy: (
      <>
        安心して挑戦できる土台を、
        <br />
        チームで支える。
      </>
    ),
    reason:
      "成長する事業を、組織の土台から支えたいと考えたから。",
    focus:
      "現場や事業部門が力を発揮できるよう、制度、仕組み、日々の運用を整えています。",
    pcImage: `${bp}/images/recruit/people/people-sales-pc.png`,
    spImage: `${bp}/images/recruit/people/people-sales-sp.png`,
    alt: "コーポレートとしてチームを支える社員",
  },
];

export default function PeopleSection() {
  return (
    <section id="people" className="bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.25em] text-[#40916c] md:text-sm">
          PEOPLE
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-extrabold leading-[1.35] text-[#073B34] md:mt-5 md:text-6xl">
          入社の理由も、挑戦の形も、
          <br />
          ひとつではない。
        </h2>

        {/* Lead */}
        <p className="mt-6 max-w-3xl text-base leading-[2] text-slate-700 md:mt-8 md:text-lg">
          新卒で入社した人、異業種から転職した人、現場に近い場所で挑戦する人、仕組みづくりに向き合う人。
          <br className="hidden md:block" />
          それぞれの経験や想いを活かしながら、高齢社会の課題に向き合っています。
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
          {people.map((person, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[28px] border border-gray-200 bg-white transition-shadow hover:shadow-md"
            >
              {/* Image */}
              <div className="relative h-56 bg-gradient-to-br from-[#dceae2] to-[#c5ddd0] md:h-72">
                <Image
                  src={person.spImage}
                  alt={person.alt}
                  fill
                  sizes="(min-width: 768px) 0px, 100vw"
                  className="object-cover md:hidden"
                />
                <Image
                  src={person.pcImage}
                  alt={person.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 0px"
                  className="hidden object-cover md:block"
                />
                {/* Label overlay */}
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-[#40916c] backdrop-blur-sm md:bottom-4 md:left-4 md:px-4 md:py-1.5 md:text-xs">
                  {person.label}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Role */}
                <p className="text-sm font-bold text-[#073B34] md:text-base">
                  {person.role}
                </p>

                {/* Tags */}
                <div className="mt-2 flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-[#e8f5ee] px-2.5 py-0.5 text-[11px] font-medium text-[#40916c]">
                    {person.entryType}
                  </span>
                  <span className="rounded-full bg-[#e8f5ee] px-2.5 py-0.5 text-[11px] font-medium text-[#40916c]">
                    {person.joined}
                  </span>
                  <span className="rounded-full bg-[#e8f5ee] px-2.5 py-0.5 text-[11px] font-medium text-[#40916c]">
                    {person.background}
                  </span>
                </div>

                {/* Catchcopy */}
                <h3 className="mt-4 text-lg font-bold leading-[1.6] text-[#073B34] md:text-xl">
                  {person.catchcopy}
                </h3>

                {/* Reason */}
                <div className="mt-3">
                  <p className="text-[11px] font-semibold tracking-wide text-[#40916c]">
                    入社理由
                  </p>
                  <p className="mt-1 text-sm leading-[1.8] text-[#4b5563]">
                    {person.reason}
                  </p>
                </div>

                {/* Focus */}
                <div className="mt-3">
                  <p className="text-[11px] font-semibold tracking-wide text-[#40916c]">
                    今向き合っていること
                  </p>
                  <p className="mt-1 text-sm leading-[1.8] text-[#4b5563]">
                    {person.focus}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
