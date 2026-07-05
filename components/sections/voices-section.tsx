import { SectionHeading } from "@/components/section-heading";

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
];

export function VoicesSection() {
  return (
    <>
      <section id="voices" className="mx-auto max-w-[1200px] px-6 pt-20 pb-11 sm:px-10">
        <SectionHeading
          eyebrow="Family voices · ご家族の声"
          title="Trusted by families like yours."
          subtitle="ご家族から、いただいた言葉。"
        />
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-[76px] sm:px-10">
        <div className="grid gap-[26px] md:grid-cols-3">
          {VOICES.map((voice) => (
            <div
              key={voice.by}
              className="border border-line bg-cream-card px-8 py-9"
            >
              <div className="mb-[14px] font-mincho text-[36px] leading-none text-sage">
                &rdquo;
              </div>
              <p className="m-0 mb-[22px] font-mincho text-[19px] leading-[1.75] text-body-2">
                {voice.quote}
              </p>
              <div className="text-[12.5px] text-muted">{voice.by}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
