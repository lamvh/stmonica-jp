import Link from "next/link";
import { MediaFrame } from "@/components/media-frame";
import { ROUTES } from "@/lib/site-routes";

const STATS = [
  { value: "24h", label: "見守り体制 · Always here" },
  { value: "1:2", label: "手厚い人員配置 · Staff ratio" },
  { value: "18", label: "個室のお部屋 · Private rooms" },
  { value: "12", suffix: "yrs", label: "地域とともに · In the community" },
];

const SERVICE_CARDS = [
  {
    src: "/images/svc-morning.png",
    index: "01 · 生活支援",
    title: "Daily living",
    body: "Gentle assistance with the everyday, always at the resident's own pace.",
  },
  {
    src: "/images/svc-care.png",
    index: "02 · 看護・健康",
    title: "Health & nursing",
    body: "On-site nurses and a partnering clinic, so care is never far away.",
    gradient: "linear-gradient(160deg,#cfc7b1,#bab097)",
  },
  {
    src: "/images/svc-calligraphy.png",
    index: "03 · 日々の楽しみ",
    title: "Life & joy",
    body: "Seasonal activities, gardening, and shared meals that make a day full.",
    gradient: "linear-gradient(160deg,#d2cab4,#beb49a)",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto grid max-w-[1240px] items-stretch md:grid-cols-[1.05fr_0.95fr]">
        <div className="px-6 py-16 sm:px-9 md:py-24 md:pr-14">
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
            St Monica is a small residential care home where warmth, dignity,
            and calm come first — a place families trust and residents call home.
          </p>
          <div className="flex flex-wrap items-center gap-[18px]">
            <Link
              href={ROUTES.contact}
              className="bg-ink px-8 py-4 text-[13px] tracking-[0.1em] text-cream no-underline"
            >
              Book a visit →
            </Link>
            <Link
              href={ROUTES.about}
              className="border-b border-sage pb-[3px] text-[13px] text-sage no-underline"
            >
              Our philosophy
            </Link>
          </div>
        </div>
        <MediaFrame
          src="/images/hero.png"
          alt="縁側からの庭"
          className="min-h-[360px] md:min-h-[560px]"
          verticalAccent="安心の暮らし"
          gradient="linear-gradient(160deg,#d9d3c0,#b7ad92)"
        />
      </section>

      {/* PHILOSOPHY */}
      <section className="border-y border-line bg-cream-2">
        <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-6 py-[70px] sm:px-9 md:grid-cols-[auto_1fr] md:gap-14">
          <div className="font-mincho text-[80px] leading-none text-sage md:text-[104px]">
            和
          </div>
          <div>
            <div className="mb-4 text-[12px] uppercase tracking-[0.28em] text-muted">
              Our care philosophy · 理念
            </div>
            <p className="m-0 mb-5 max-w-[720px] font-mincho text-[26px] leading-[1.6] text-body-2 sm:text-[30px]">
              We care for the whole person — not a schedule. Slower mornings,
              real conversations, and the quiet respect each life deserves.
            </p>
            <Link
              href={ROUTES.about}
              className="border-b border-sage pb-[3px] text-[13px] text-sage no-underline"
            >
              Read our story →
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto grid max-w-[1240px] grid-cols-2 gap-8 px-6 py-14 sm:px-9 md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="font-mincho text-[44px] text-ink">
              {stat.value}
              {stat.suffix && (
                <span className="text-[22px]">{stat.suffix}</span>
              )}
            </div>
            <div className="mt-[6px] text-[12.5px] tracking-[0.04em] text-muted">
              {stat.label}
            </div>
          </div>
        ))}
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-[1240px] px-6 pt-[50px] pb-[76px] sm:px-9">
        <div className="mb-9 flex items-baseline justify-between">
          <div>
            <h2 className="m-0 mb-[6px] font-mincho text-[36px] font-medium">
              How we care
            </h2>
            <p className="m-0 text-[14px] tracking-[0.08em] text-muted">
              ケアプログラム
            </p>
          </div>
          <Link
            href={ROUTES.services}
            className="border-b border-sage pb-[3px] text-[13px] text-sage no-underline"
          >
            All services →
          </Link>
        </div>
        <div className="grid gap-[26px] md:grid-cols-3">
          {SERVICE_CARDS.map((card) => (
            <Link
              key={card.title}
              href={ROUTES.services}
              className="block overflow-hidden border border-line bg-cream-card text-inherit no-underline"
            >
              <MediaFrame
                src={card.src}
                alt=""
                gradient={card.gradient}
                className="h-[150px]"
              />
              <div className="px-7 pt-[26px] pb-[30px]">
                <div className="mb-[14px] font-mincho text-[14px] text-sage">
                  {card.index}
                </div>
                <h3 className="m-0 mb-[10px] font-mincho text-[20px] font-medium">
                  {card.title}
                </h3>
                <p className="m-0 text-[13.5px] leading-[1.85] text-body">
                  {card.body}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FACILITIES PREVIEW */}
      <section className="border-t border-line bg-cream-2">
        <div className="mx-auto grid max-w-[1240px] items-stretch md:grid-cols-2">
          <MediaFrame
            src="/images/fac-garden.png"
            alt="縁側と庭"
            className="min-h-[300px] md:min-h-[440px]"
            gradient="linear-gradient(160deg,#d9d3c0,#b7ad92)"
          />
          <div className="px-6 py-16 sm:px-9 md:px-14">
            <div className="mb-[18px] text-[12px] uppercase tracking-[0.28em] text-muted">
              Our home · 施設
            </div>
            <h2 className="m-0 mb-5 font-mincho text-[34px] font-medium leading-[1.35]">
              Light-filled rooms, a garden, and quiet corners to rest.
            </h2>
            <p className="m-0 mb-[30px] max-w-[420px] text-[14.5px] leading-[1.95] text-body">
              Every space is designed for calm — natural wood, soft light, and
              views onto the garden through the engawa.
            </p>
            <Link
              href={ROUTES.facilities}
              className="bg-ink px-7 py-[14px] text-[13px] tracking-[0.1em] text-cream no-underline"
            >
              See our facilities →
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-ink text-cream-2">
        <div className="mx-auto max-w-[1240px] px-6 py-20 text-center sm:px-9">
          <div className="mb-4 font-mincho text-[40px] text-sage">&rdquo;</div>
          <p className="mx-auto m-0 mb-6 max-w-[820px] font-mincho text-[26px] leading-[1.65] text-cream sm:text-[30px]">
            My mother smiles again. That is everything.
          </p>
          <div className="text-[13px] tracking-[0.06em] text-footdim">
            — Family of a resident · ご家族より
          </div>
          <Link
            href={ROUTES.voices}
            className="mt-[30px] inline-block border-b border-sage pb-[3px] text-[13px] text-cream-2 no-underline"
          >
            More family voices →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1240px] px-6 py-20 text-center sm:px-9">
        <div className="mb-5 text-[12px] uppercase tracking-[0.3em] text-sage">
          Come and see for yourself
        </div>
        <h2 className="m-0 mb-3 font-mincho text-[42px] font-medium leading-[1.35]">
          Visit St Monica.
        </h2>
        <p className="m-0 mb-[34px] font-mincho text-[22px] text-muted">
          まずは、ご見学から。
        </p>
        <Link
          href={ROUTES.contact}
          className="inline-block bg-sage px-10 py-[17px] text-[14px] tracking-[0.1em] text-cream no-underline"
        >
          Book a visit →
        </Link>
      </section>
    </>
  );
}
