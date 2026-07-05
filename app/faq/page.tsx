"use client";

import { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/site-routes";

const FAQS = [
  {
    q: "How do I arrange a visit?",
    a: "Simply send a request through our contact page, or call us. We welcome visits Monday to Saturday, 9:00–17:00, and will find a time that suits your family.",
  },
  {
    q: "What levels of care do you provide?",
    a: "From light daily-living support to full nursing care. Before moving in, we build an individual care plan with each family and review it together as needs change.",
  },
  {
    q: "Can family members visit any time?",
    a: "Yes. Family is always welcome, and we encourage regular visits. We simply ask you to check in at reception so we can keep everyone safe and comfortable.",
  },
  {
    q: "Do you accept long-term care insurance?",
    a: "Yes. St Monica works with Japan’s long-term care insurance (介護保険). Our staff will guide you through eligibility, paperwork, and costs during your visit.",
  },
  {
    q: "What are the costs?",
    a: "Fees depend on room type and care level. We provide a clear, itemised estimate for your family after an initial consultation — with no obligation.",
  },
  {
    q: "Is there a waiting list?",
    a: "Because we keep our home small, availability is limited. We recommend visiting early; we’ll let you know current openings and keep you informed if you wish to join the list.",
  },
];

export default function FaqPage() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <section className="mx-auto max-w-[900px] px-6 pt-[84px] pb-10 sm:px-9">
        <div className="mb-[22px] text-center text-[12px] uppercase tracking-[0.3em] text-sage">
          FAQ · よくある質問
        </div>
        <h1 className="m-0 mb-[6px] text-center font-mincho text-[36px] font-medium leading-[1.25] sm:text-[44px]">
          Questions families often ask
        </h1>
        <p className="m-0 text-center font-mincho text-[20px] tracking-[0.08em] text-muted">
          ご家族からよくいただくご質問
        </p>
      </section>

      <section className="mx-auto max-w-[900px] px-6 pt-5 pb-20 sm:px-9">
        <div className="border-t border-line">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-5 border-none bg-transparent px-1 py-6 text-left font-mincho text-[19px] text-ink"
                >
                  <span>{item.q}</span>
                  <span className="shrink-0 font-gothic text-[22px] text-sage">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-[max-height,opacity] duration-300 ease-out"
                  style={{
                    maxHeight: isOpen ? "320px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="m-0 px-1 pb-[26px] text-[14px] leading-[1.95] text-body">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-line bg-cream-2">
        <div className="mx-auto max-w-[1240px] px-6 py-[66px] text-center sm:px-9">
          <p className="m-0 mb-2 font-mincho text-[24px] text-body-2">
            Still have a question?
          </p>
          <p className="m-0 mb-7 text-[14px] text-muted">
            まずはお気軽にお問い合わせください。
          </p>
          <Link
            href={ROUTES.contact}
            className="inline-block bg-ink px-9 py-4 text-[14px] tracking-[0.1em] text-cream no-underline"
          >
            Contact us →
          </Link>
        </div>
      </section>
    </>
  );
}
