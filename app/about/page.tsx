import Link from "next/link";
import { MediaFrame } from "@/components/media-frame";
import { ROUTES } from "@/lib/site-routes";

export const metadata = {
  title: "About · 私たちについて | St Monica",
  description:
    "St Monica began in 2014 with a simple idea: that aging should be met with warmth, not haste.",
};

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

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-[1240px] px-6 pt-[84px] pb-14 sm:px-9">
        <div className="mb-[22px] text-[12px] uppercase tracking-[0.3em] text-sage">
          About St Monica · 私たちについて
        </div>
        <h1 className="m-0 mb-[10px] max-w-[820px] font-mincho text-[40px] font-medium leading-[1.25] sm:text-[52px]">
          A home built on patience and respect.
        </h1>
        <p className="m-0 font-mincho text-[24px] tracking-[0.08em] text-muted">
          辛抱と敬意から生まれた、ひとつの家。
        </p>
      </section>

      {/* story */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1240px] items-stretch md:grid-cols-[0.95fr_1.05fr]">
          <MediaFrame
            src="/images/entrance.png"
            alt="玄関の朝"
            className="min-h-[340px] md:min-h-[480px]"
            verticalAccent="創立の想い"
          />
          <div className="px-6 py-16 sm:px-9 md:pl-16">
            <div className="mb-[18px] text-[12px] uppercase tracking-[0.28em] text-muted">
              Our story · 歩み
            </div>
            <p className="m-0 mb-[22px] font-mincho text-[23px] leading-[1.7] text-body-2">
              St Monica began in 2014 with a simple idea: that aging should be
              met with warmth, not haste.
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
      </section>

      {/* values */}
      <section className="border-y border-line bg-cream-2">
        <div className="mx-auto max-w-[1240px] px-6 py-[76px] sm:px-9">
          <h2 className="m-0 mb-[6px] text-center font-mincho text-[34px] font-medium">
            What we hold to
          </h2>
          <p className="m-0 mb-12 text-center text-[14px] tracking-[0.08em] text-muted">
            大切にしていること
          </p>
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

      {/* director */}
      <section className="mx-auto grid max-w-[1240px] items-center gap-12 px-6 py-20 sm:px-9 md:grid-cols-[auto_1fr] md:gap-14">
        <MediaFrame
          src="/images/director.png"
          alt="Monica — Director"
          className="h-[250px] w-[200px] shrink-0"
        />
        <div>
          <div className="mb-4 text-[12px] uppercase tracking-[0.28em] text-muted">
            A word from our director · 施設長より
          </div>
          <p className="m-0 mb-5 max-w-[720px] font-mincho text-[26px] leading-[1.7] text-body-2">
            &ldquo;I want every family to feel, the moment they arrive, that
            their loved one is truly home.&rdquo;
          </p>
          <div className="text-[13.5px] text-body">Monica — Director · 施設長</div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-cream-2">
        <div className="mx-auto max-w-[1240px] px-6 py-[70px] text-center sm:px-9">
          <h2 className="m-0 mb-6 font-mincho text-[36px] font-medium text-cream">
            Come see how we live.
          </h2>
          <Link
            href={ROUTES.contact}
            className="inline-block bg-sage px-9 py-4 text-[14px] tracking-[0.1em] text-cream no-underline"
          >
            Book a visit →
          </Link>
        </div>
      </section>
    </>
  );
}
