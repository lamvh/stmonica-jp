import Link from "next/link";
import { MediaFrame } from "@/components/media-frame";
import { ROUTES } from "@/lib/site-routes";

export const metadata = {
  title: "Careers · 採用情報 | St Monica",
  description:
    "Care with time to truly care. Join a small, close-knit team where every resident gets real attention.",
};

const REASONS = [
  {
    kanji: "間",
    title: "Time, not targets",
    body: "A 1:2 ratio means you can slow down and give each resident real attention.",
  },
  {
    kanji: "育",
    title: "Grow with support",
    body: "Funded qualifications, mentoring, and a clear path from carer to lead.",
  },
  {
    kanji: "和",
    title: "A kind team",
    body: "Small, close-knit, and genuinely supportive — of residents and of each other.",
  },
];

const OPENINGS = [
  {
    title: "Care Staff · 介護スタッフ",
    meta: "Full-time · 正社員 — Kamakura",
  },
  {
    title: "Registered Nurse · 看護師",
    meta: "Full-time / Part-time · 常勤・非常勤 — Kamakura",
  },
  {
    title: "Kitchen / Nutrition · 調理・栄養",
    meta: "Part-time · パート — Kamakura",
  },
];

const BENEFITS = [
  "Social insurance · 社会保険完備",
  "Paid training · 研修制度",
  "Qualification support · 資格取得支援",
  "Commuting allowance · 交通費支給",
  "No night rush · ゆとりある勤務",
  "Regular days off · 週休二日",
  "Retirement plan · 退職金制度",
  "Meals provided · 食事補助",
];

export default function CareersPage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto grid max-w-[1240px] items-stretch md:grid-cols-[1.05fr_0.95fr]">
        <div className="px-6 py-16 sm:px-9 md:py-[88px] md:pr-14">
          <div className="mb-[26px] text-[12px] uppercase tracking-[0.3em] text-sage">
            Careers · 採用情報
          </div>
          <h1 className="m-0 mb-3 font-mincho text-[38px] font-medium leading-[1.25] sm:text-[50px]">
            Care with time
            <br />
            to truly care.
          </h1>
          <p className="m-0 mb-[30px] font-mincho text-[24px] tracking-[0.08em] text-muted">
            ひとりに、じっくり向き合える職場。
          </p>
          <p className="m-0 mb-9 max-w-[440px] text-[15px] leading-[1.95] text-body">
            At St Monica we keep our home small so our team can do their best
            work — unhurried, respected, and supported. If that&apos;s the kind
            of care you believe in, we&apos;d love to meet you.
          </p>
          <a
            href="#openings"
            className="inline-block bg-ink px-8 py-4 text-[13px] tracking-[0.1em] text-cream no-underline"
          >
            See open roles →
          </a>
        </div>
        <MediaFrame
          src="/images/svc-care.png"
          alt="看護スタッフ"
          className="min-h-[340px] md:min-h-[520px]"
          gradient="linear-gradient(160deg,#cfc7b1,#bab097)"
        />
      </section>

      {/* WHY */}
      <section className="border-y border-line bg-cream-2">
        <div className="mx-auto max-w-[1240px] px-6 py-[70px] sm:px-9">
          <h2 className="m-0 mb-[6px] text-center font-mincho text-[32px] font-medium">
            Why work with us
          </h2>
          <p className="m-0 mb-11 text-center text-[14px] tracking-[0.08em] text-muted">
            St Monica で働く理由
          </p>
          <div className="grid gap-[26px] md:grid-cols-3">
            {REASONS.map((reason) => (
              <div
                key={reason.kanji}
                className="border border-line bg-cream px-[30px] py-[34px]"
              >
                <div className="mb-4 font-mincho text-[40px] text-sage">
                  {reason.kanji}
                </div>
                <h3 className="m-0 mb-[10px] font-mincho text-[19px] font-medium">
                  {reason.title}
                </h3>
                <p className="m-0 text-[13.5px] leading-[1.85] text-body">
                  {reason.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPENINGS */}
      <section
        id="openings"
        className="mx-auto max-w-[1000px] px-6 pt-[76px] pb-10 sm:px-9"
      >
        <h2 className="m-0 mb-[6px] font-mincho text-[32px] font-medium">
          Open positions
        </h2>
        <p className="m-0 mb-9 text-[14px] tracking-[0.08em] text-muted">
          現在の募集
        </p>
        <div className="border-t border-line">
          {OPENINGS.map((role) => (
            <Link
              key={role.title}
              href={ROUTES.contact}
              className="flex items-center justify-between gap-6 border-b border-line px-1 py-[26px] text-inherit no-underline"
            >
              <div>
                <h3 className="m-0 mb-[6px] font-mincho text-[21px] font-medium">
                  {role.title}
                </h3>
                <p className="m-0 text-[13px] text-muted">{role.meta}</p>
              </div>
              <span className="shrink-0 border-b border-sage pb-[3px] text-[13px] text-sage">
                Apply →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-[1000px] px-6 pt-5 pb-[76px] sm:px-9">
        <div className="grid grid-cols-2 gap-x-10 gap-y-[14px] text-[14px] text-body-2 md:grid-cols-4">
          {BENEFITS.map((benefit) => (
            <div key={benefit} className="border-t border-line pt-3">
              {benefit}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-cream-2">
        <div className="mx-auto max-w-[1240px] px-6 py-[70px] text-center sm:px-9">
          <h2 className="m-0 mb-3 font-mincho text-[34px] font-medium text-cream">
            Come work where care has time.
          </h2>
          <p className="m-0 mb-8 font-mincho text-[20px] text-footdim">
            まずは、お気軽にご連絡ください。
          </p>
          <Link
            href={ROUTES.contact}
            className="inline-block bg-sage px-9 py-4 text-[14px] tracking-[0.1em] text-cream no-underline"
          >
            Apply / ask a question →
          </Link>
        </div>
      </section>
    </>
  );
}
