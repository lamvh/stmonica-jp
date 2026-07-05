"use client";

import { useState, type ReactNode } from "react";

const inputClass =
  "w-full border border-line bg-cream px-[14px] py-3 font-gothic text-[14px] text-ink outline-none focus:border-sage";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-[12px] tracking-[0.08em] text-muted">
        {label}
      </label>
      {children}
    </div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="px-5 py-10 text-center">
        <div className="mb-5 font-mincho text-[64px] leading-none text-sage">
          礼
        </div>
        <h2 className="m-0 mb-3 font-mincho text-[26px] font-medium">Thank you.</h2>
        <p className="mx-auto m-0 max-w-[360px] text-[14px] leading-[1.9] text-body">
          We&apos;ve received your request and will contact you within one
          business day to arrange your visit. ご連絡ありがとうございます。
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        <Field label="Your name · お名前">
          <input type="text" required className={inputClass} />
        </Field>
        <Field label="Relation · 続柄">
          <input type="text" className={inputClass} />
        </Field>
      </div>
      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        <Field label="Phone · お電話">
          <input type="tel" className={inputClass} />
        </Field>
        <Field label="Email · メール">
          <input type="email" className={inputClass} />
        </Field>
      </div>
      <div className="mb-5">
        <Field label="Preferred visit date · ご希望日">
          <input type="date" className={inputClass} />
        </Field>
      </div>
      <div className="mb-7">
        <Field label="Message · ご相談内容">
          <textarea rows={4} className={`${inputClass} resize-y`} />
        </Field>
      </div>
      <button
        type="submit"
        className="cursor-pointer border-none bg-ink px-9 py-4 font-gothic text-[14px] tracking-[0.1em] text-cream"
      >
        Send request · 送信する
      </button>
    </form>
  );
}

function ContactDetail({
  label,
  children,
  strongTop = false,
}: {
  label: string;
  children: ReactNode;
  strongTop?: boolean;
}) {
  return (
    <div
      className={`pt-6 ${
        strongTop ? "border-t-2 border-ink" : "border-t border-line"
      }`}
    >
      <div className="mb-3 text-[11px] uppercase tracking-[0.2em] text-muted">
        {label}
      </div>
      <p className="m-0 text-[14.5px] leading-[1.9] text-body-2">{children}</p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-[1240px] px-6 pt-[84px] pb-11 sm:px-9">
        <div className="mb-[22px] text-[12px] uppercase tracking-[0.3em] text-sage">
          Contact &amp; visit · お問い合わせ
        </div>
        <h1 className="m-0 mb-[10px] max-w-[820px] font-mincho text-[40px] font-medium leading-[1.25] sm:text-[52px]">
          Come and see for yourself.
        </h1>
        <p className="m-0 font-mincho text-[24px] tracking-[0.08em] text-muted">
          まずは、ご見学から。
        </p>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 pb-[90px] sm:px-9">
        <div className="grid items-start gap-14 md:grid-cols-[1.3fr_1fr]">
          <div className="border border-line bg-cream-card p-6 sm:p-11">
            <ContactForm />
          </div>
          <div className="flex flex-col gap-[34px]">
            <ContactDetail label="Address · 所在地" strongTop>
              〒248-0000
              <br />
              神奈川県鎌倉市○○ 1-2-3
              <br />
              Kamakura, Kanagawa, Japan
            </ContactDetail>
            <ContactDetail label="Contact · 連絡先">
              TEL 0467-00-0000
              <br />
              hello@stmonica.jp
            </ContactDetail>
            <ContactDetail label="Visiting hours · 見学受付">
              Mon–Sat · 月〜土
              <br />
              9:00 – 17:00
            </ContactDetail>
          </div>
        </div>
      </section>
    </>
  );
}
