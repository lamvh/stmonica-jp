import { MediaFrame } from "@/components/media-frame";
import { SectionHeading } from "@/components/section-heading";

const VALUES = [
  {
    kanji: "和",
    title: "Harmony",
    reading: "和 · なごみ",
    body: "A calm rhythm to each day, so residents feel settled and at ease.",
  },
  {
    kanji: "敬",
    title: "Respect",
    reading: "敬 · うやまい",
    body: "Every choice a resident makes is honoured — their pace, their wishes, their dignity.",
  },
  {
    kanji: "絆",
    title: "Connection",
    reading: "絆 · きずな",
    body: "Families stay close. We keep the door — and the conversation — always open.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="border-t border-line bg-cream-2">
      <div className="mx-auto max-w-[1200px] px-6 pt-[76px] sm:px-10">
        <SectionHeading
          eyebrow="About St Monica · 私たちについて"
          title="A home built on patience and respect."
          subtitle="辛抱と敬意から生まれた、ひとつの家。"
          className="[&>h2]:mb-2"
        />
      </div>

      <div className="mx-auto mt-14 grid max-w-[1200px] items-stretch md:grid-cols-[0.95fr_1.05fr]">
        <MediaFrame
          src="/images/entrance.png"
          alt="玄関の朝"
          className="min-h-[320px] md:min-h-[420px]"
          verticalAccent="創立の想い"
          caption="玄関の朝"
        />
        <div className="px-6 py-16 sm:px-10 md:pl-16">
          <div className="mb-[18px] text-[12px] uppercase tracking-[0.28em] text-muted">
            Our story · 歩み
          </div>
          <p className="m-0 mb-[22px] font-mincho text-[22px] leading-[1.7] text-body-2">
            St Monica began in 2014 with a simple idea: that aging should be met
            with warmth, not haste.
          </p>
          <p className="m-0 mb-[18px] text-[14.5px] leading-[2] text-body">
            We keep our home small on purpose. Eighteen residents, familiar
            faces, and staff who have the time to sit, listen, and truly know
            each person in their care.
          </p>
          <p className="m-0 text-[14.5px] leading-[2] text-body">
            Over more than a decade, we&apos;ve become part of the Kamakura
            community — welcoming families as we would welcome our own.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 pt-[70px] pb-[76px] sm:px-10">
        <div className="grid gap-px border border-line bg-line sm:grid-cols-3">
          {VALUES.map((value) => (
            <div key={value.kanji} className="bg-cream px-[34px] py-11">
              <div className="mb-[22px] font-mincho text-[56px] leading-none text-sage">
                {value.kanji}
              </div>
              <h3 className="m-0 mb-1 font-mincho text-[21px] font-medium">
                {value.title}
              </h3>
              <p className="m-0 mb-[14px] text-[12px] tracking-[0.1em] text-muted">
                {value.reading}
              </p>
              <p className="m-0 text-[13.5px] leading-[1.9] text-body">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
