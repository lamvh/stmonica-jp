import Link from "next/link";
import { ROUTES } from "@/lib/site-routes";

export const metadata = {
  title: "Family voices · ご家族の声 | St Monica",
  description: "Trusted by families like yours — words from the families of our residents.",
};

const VOICES = [
  {
    quote: "My mother smiles again. Coming here was the best decision we made.",
    by: "— Daughter of a resident · ご息女",
  },
  {
    quote: "The calm here is real. My father is at peace, and so are we.",
    by: "— Son of a resident · ご子息",
  },
  {
    quote: "Staff know every resident by name and by heart. We never worry.",
    by: "— Family of a resident · ご家族",
  },
  {
    quote:
      "The meals, the garden, the little celebrations — it feels like a real home, not an institution.",
    by: "— Daughter of a resident · ご息女",
  },
  {
    quote:
      "They kept us informed every step of the way. The trust we feel is priceless.",
    by: "— Son of a resident · ご子息",
  },
];

function VoiceCard({ quote, by }: { quote: string; by: string }) {
  return (
    <div className="border border-line bg-cream-card px-8 py-9">
      <div className="mb-[14px] font-mincho text-[36px] leading-none text-sage">
        &rdquo;
      </div>
      <p className="m-0 mb-[22px] font-mincho text-[19px] leading-[1.75] text-body-2">
        {quote}
      </p>
      <div className="text-[12.5px] text-muted">{by}</div>
    </div>
  );
}

export default function VoicesPage() {
  return (
    <>
      <section className="mx-auto max-w-[1240px] px-6 pt-[84px] pb-11 sm:px-9">
        <div className="mb-[22px] text-[12px] uppercase tracking-[0.3em] text-sage">
          Family voices · ご家族の声
        </div>
        <h1 className="m-0 mb-[10px] max-w-[820px] font-mincho text-[40px] font-medium leading-[1.25] sm:text-[52px]">
          Trusted by families like yours.
        </h1>
        <p className="m-0 font-mincho text-[24px] tracking-[0.08em] text-muted">
          ご家族から、いただいた言葉。
        </p>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 pb-5 sm:px-9">
        <div className="grid gap-[26px] md:grid-cols-3">
          {VOICES.slice(0, 3).map((voice) => (
            <VoiceCard key={voice.quote} {...voice} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 pt-[26px] pb-5 sm:px-9">
        <div className="grid gap-[26px] md:grid-cols-2">
          {VOICES.slice(3).map((voice) => (
            <VoiceCard key={voice.quote} {...voice} />
          ))}
        </div>
      </section>

      <section className="mt-10 bg-ink text-cream-2">
        <div className="mx-auto max-w-[1240px] px-6 py-[70px] text-center sm:px-9">
          <h2 className="m-0 mb-6 font-mincho text-[34px] font-medium text-cream">
            See it for yourself.
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
