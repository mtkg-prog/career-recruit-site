"use client";

import { useState } from "react";

// TODO: FAQ項目を実際の内容に差し替え
const faqs = [
  {
    question: "未経験でも応募できますか？",
    answer:
      "はい、未経験から挑戦している社員もいます。\n入社後は、業務理解や顧客・求職者対応を学びながら、段階的に仕事を覚えていける環境です。",
  },
  {
    question: "介護・医療業界の知識がなくても大丈夫ですか？",
    answer:
      "入社時点で専門知識がなくても問題ありません。\n大切なのは、求職者や現場の課題に向き合う姿勢です。\n業界知識は、日々の業務や研修を通じて身につけていけます。",
  },
  {
    question: "配属先はどのように決まりますか？",
    answer:
      "ご希望や適性、募集状況を踏まえて決定します。\n面接や面談の中で、希望勤務地や関心のある職種についても確認します。",
  },
  {
    question: "若手でもマネジメントや新規事業に挑戦できますか？",
    answer:
      "はい。成果や意欲に応じて、リーダー、支店運営、マネジメント、新規事業などに挑戦する機会があります。\n年齢だけでなく、課題に向き合う姿勢や行動を大切にしています。",
  },
  {
    question: "リモートワークはありますか？",
    answer:
      "職種や配属部門によって異なります。\n現場や求職者との接点が多い職種では出社や対面対応もありますが、本部職や企画業務では一部リモートを相談できる場合があります。",
  },
  {
    question: "まず話を聞くだけでも大丈夫ですか？",
    answer:
      "はい、大丈夫です。\nすぐに応募するか迷っている方も、カジュアル面談を通じて会社や仕事について知っていただけます。",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.25em] text-[#40916c] md:text-sm">
          FAQ
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-extrabold leading-[1.35] text-[#073B34] md:mt-5 md:text-6xl">
          よくある質問
        </h2>

        {/* Lead */}
        <p className="mt-6 max-w-3xl text-base leading-[2] text-slate-700 md:mt-8 md:text-lg">
          応募前に気になることをまとめました。
          <br className="hidden md:block" />
          少しでも気になることがあれば、カジュアル面談でも気軽にお聞きください。
        </p>

        {/* FAQ List */}
        <div className="mt-10 space-y-3 md:mt-14 md:space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className="rounded-[20px] border border-gray-200 bg-white transition-shadow hover:shadow-sm md:rounded-[24px]"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full cursor-pointer items-center justify-between p-5 text-left md:p-6"
                >
                  <span className="pr-4 text-base font-bold text-[#073B34] md:text-lg">
                    {item.question}
                  </span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8F0EC] text-lg text-[#40916c] transition-transform duration-300"
                    style={{
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  className="grid transition-[grid-template-rows] duration-300"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="whitespace-pre-line px-5 pb-5 text-sm leading-[1.9] text-slate-600 md:px-6 md:pb-6 md:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
