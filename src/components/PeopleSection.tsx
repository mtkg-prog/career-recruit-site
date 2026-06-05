import Image from "next/image";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

const people = [
  {
    role: "経営企画・事業企画",
    copy: (
      <>
        現場の違和感を見過ごさず、
        <br />
        仕組みで変えていく。
      </>
    ),
    body: "日々の事業で見えてくる課題を受け止め、サービス改善や新しい仕組みづくりにつなげていきます。",
    pcImage: `${bp}/images/recruit/people/people-planning-pc.png`,
    spImage: `${bp}/images/recruit/people/people-planning-sp.png`,
    alt: "経営企画・事業企画として仕組みづくりに向き合う社員",
  },
  {
    role: "営業職／人材コーディネーター",
    copy: (
      <>
        一人ひとりの声を聞き、
        <br />
        できることを一緒に探す。
      </>
    ),
    body: "求職者と現場の双方に向き合い、希望や課題を丁寧に受け止めながら、より良いマッチングを支えます。",
    pcImage: `${bp}/images/recruit/people/people-senior-work-pc.png`,
    spImage: `${bp}/images/recruit/people/people-senior-work-sp.png`,
    alt: "営業職／人材コーディネーターとして就労相談に向き合う社員",
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
    body: "シニア領域の就労支援も、相手の声を聞くことから始まります。一人ひとりに合った働き方を、チームで考えていきます。",
    pcImage: `${bp}/images/recruit/people/people-coordinator-pc.png`,
    spImage: `${bp}/images/recruit/people/people-coordinator-sp.png`,
    alt: "営業職／人材コーディネーターとして求職者に向き合う社員",
  },
  {
    role: "支店運営・マネジメント",
    copy: (
      <>
        安心して挑戦できる土台を、
        <br />
        チームで支える。
      </>
    ),
    body: "現場や事業部門が力を発揮できるよう、制度、仕組み、日々の運用を整え、組織全体を支えます。",
    pcImage: `${bp}/images/recruit/people/people-sales-pc.png`,
    spImage: `${bp}/images/recruit/people/people-sales-sp.png`,
    alt: "支店運営・マネジメントとしてチームを支える社員",
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
          事業を動かしているのは、一人ひとりの課題に向き合う社員たち。
          <br className="hidden md:block" />
          求職者、現場、地域、組織に向き合いながら、それぞれの役割で挑戦しています。
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
