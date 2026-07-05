import { MediaFrame } from "@/components/media-frame";

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-[1200px] items-stretch md:grid-cols-[1.05fr_0.95fr]">
      <div className="px-6 py-16 sm:px-10 md:py-24 md:pr-14">
        <div className="mb-[30px] text-[12px] uppercase tracking-[0.3em] text-sage">
          A quiet home in Kamakura · 鎌倉
        </div>
        <h1 className="m-0 mb-3 font-mincho text-[44px] font-medium leading-[1.2] text-ink sm:text-[60px]">
          Where every day
          <br />
          feels unhurried.
        </h1>
        <p className="m-0 mb-[34px] font-mincho text-[28px] tracking-[0.08em] text-muted">
          穏やかな毎日を、そばで。
        </p>
        <p className="m-0 mb-[42px] max-w-[440px] text-[15.5px] leading-[1.95] text-body">
          St Monica is a small residential care home where warmth, dignity, and
          calm come first — a place families trust and residents call home.
        </p>
        <div className="flex flex-wrap items-center gap-[18px]">
          <a
            href="#contact"
            className="bg-ink px-8 py-4 text-[13px] tracking-[0.1em] text-cream no-underline"
          >
            Book a visit →
          </a>
          <a
            href="#about"
            className="border-b border-sage pb-[3px] text-[13px] text-sage no-underline"
          >
            Our philosophy
          </a>
        </div>
      </div>

      <MediaFrame
        src="/images/hero.png"
        alt="縁側からの庭"
        className="min-h-[360px] md:min-h-[560px]"
        verticalAccent="安心の暮らし"
        caption="縁側からの庭"
        gradient="linear-gradient(160deg,#d9d3c0,#b7ad92)"
        style={{ position: "relative" }}
      />
    </section>
  );
}
