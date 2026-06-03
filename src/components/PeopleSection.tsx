import Image from "next/image";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

const people = [
  {
    role: "経営企画・事業企画",
    copy: (
      <>
        現場の課題を、
        <br />
        新しい仕組みに変えていく。
      </>
    ),
    body: "既存事業の改善や新規事業、DXを通じて、課題解決の仕組みをつくります。人と事業の力で、高齢社会を前に進める仕事です。",
    pcImage: `${bp}/images/recruit/people/people-planning-pc.png`,
    spImage: `${bp}/images/recruit/people/people-planning-sp.png`,
    alt: "経営企画・事業企画として仕組みづくりに向き合う社員",
  },
  {
    role: "営業職／人材コーディネーター",
    copy: (
      <>
        年齢に関係なく働ける機会を、
        <br />
        人材サービスから広げる。
      </>
    ),
    body: "働きたいシニアと企業をつなぎ、社会参加の機会を広げています。経験や意欲が活きる場を増やすことが、私たちの役割です。",
    pcImage: `${bp}/images/recruit/people/people-senior-work-pc.png`,
    spImage: `${bp}/images/recruit/people/people-senior-work-sp.png`,
    alt: "営業職／人材コーディネーターとして就労相談に向き合う社員",
  },
  {
    role: "営業職／人材コーディネーター",
    copy: (
      <>
        一人ひとりの希望に向き合い、
        <br />
        働く一歩を支える。
      </>
    ),
    body: "求職者の経験や希望を丁寧に聞き、現場との最適な出会いをつくる仕事です。誰かの働き方が前に進む瞬間に、やりがいを感じます。",
    pcImage: `${bp}/images/recruit/people/people-coordinator-pc.png`,
    spImage: `${bp}/images/recruit/people/people-coordinator-sp.png`,
    alt: "営業職／人材コーディネーターとして求職者に向き合う社員",
  },
  {
    role: "営業職／人材コーディネーター",
    copy: (
      <>
        地域の現場に入り込み、
        <br />
        課題を一緒に解決する。
      </>
    ),
    body: "介護・医療現場の課題を聞き、必要な人材や支援を届けます。地域ごとのニーズに向き合いながら、現場を支える仕事です。",
    pcImage: `${bp}/images/recruit/people/people-sales-pc.png`,
    spImage: `${bp}/images/recruit/people/people-sales-sp.png`,
    alt: "営業職／人材コーディネーターとして提案に向き合う社員",
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
          高齢社会の未来を変える、
          <br />
          人がいる。
        </h2>

        {/* Lead */}
        <p className="mt-6 max-w-3xl text-base leading-[2] text-slate-700 md:mt-8 md:text-lg">
          キャリアで働く人たちは、求職者、現場、事業、仕組みに向き合いながら、
          <br className="hidden md:block" />
          それぞれの立場で高齢社会の課題解決に挑んでいます。
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
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-xs font-semibold tracking-[0.1em] text-[#40916c]">
                  {person.role}
                </p>

                <h3 className="mt-3 text-xl font-bold leading-[1.6] text-[#073B34] md:text-2xl">
                  {person.copy}
                </h3>

                <p className="mt-3 text-sm leading-[1.9] text-[#4b5563] md:text-base">
                  {person.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
