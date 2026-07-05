import Link from "next/link";
import { MediaFrame } from "@/components/media-frame";
import { ROUTES } from "@/lib/site-routes";

export const metadata = {
  title: "Blog · ケアの日記 | St Monica",
  description: "Notes on care & living well — stories from daily life at St Monica.",
};

const POSTS = [
  {
    src: "/images/festival.png",
    meta: "Seasons · 20 June 2026",
    title: "Celebrating the summer festival together",
    body: "Lanterns, yukata, and shaved ice — how small celebrations bring the whole home to life.",
  },
  {
    src: "/images/fac-dining.png",
    meta: "Nutrition · 2 June 2026",
    title: "Cooking soft meals that still delight",
    body: "Our chef on making texture-modified food that residents actually look forward to.",
    gradient: "linear-gradient(160deg,#d2cab4,#beb49a)",
  },
  {
    src: "/images/svc-care.png",
    meta: "For families · 18 May 2026",
    title: "Talking with a parent about moving into care",
    body: "A gentle, practical guide to one of the hardest conversations families face.",
    gradient: "linear-gradient(160deg,#cfc7b1,#bab097)",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="mx-auto max-w-[1240px] px-6 pt-[84px] pb-11 sm:px-9">
        <div className="mb-[22px] text-[12px] uppercase tracking-[0.3em] text-sage">
          Blog · ケアの日記
        </div>
        <h1 className="m-0 mb-[10px] max-w-[820px] font-mincho text-[40px] font-medium leading-[1.25] sm:text-[52px]">
          Notes on care &amp; living well.
        </h1>
        <p className="m-0 font-mincho text-[24px] tracking-[0.08em] text-muted">
          日々のこと、ケアのこと。
        </p>
      </section>

      {/* featured */}
      <section className="mx-auto max-w-[1240px] px-6 pb-5 sm:px-9">
        <Link
          href={ROUTES.contact}
          className="grid overflow-hidden border border-line bg-cream-card text-inherit no-underline md:grid-cols-[1.1fr_0.9fr]"
        >
          <MediaFrame
            src="/images/svc-calligraphy.png"
            alt=""
            className="min-h-[280px] md:min-h-[360px]"
          />
          <div className="flex flex-col justify-center px-8 py-12 sm:px-12">
            <div className="mb-4 text-[12px] uppercase tracking-[0.16em] text-sage">
              Featured · 6 July 2026
            </div>
            <h2 className="m-0 mb-4 font-mincho text-[30px] font-medium leading-[1.4]">
              Why unhurried mornings matter in dementia care
            </h2>
            <p className="m-0 mb-[22px] text-[14px] leading-[1.9] text-body">
              Rushing is the enemy of calm. We look at how a slower start to the
              day reduces anxiety and restores a sense of dignity for our
              residents.
            </p>
            <span className="self-start border-b border-sage pb-[3px] text-[13px] text-sage">
              Read article →
            </span>
          </div>
        </Link>
      </section>

      {/* post grid */}
      <section className="mx-auto max-w-[1240px] px-6 pt-10 pb-20 sm:px-9">
        <div className="grid gap-[26px] md:grid-cols-3">
          {POSTS.map((post) => (
            <Link
              key={post.title}
              href={ROUTES.contact}
              className="block overflow-hidden border border-line bg-cream-card text-inherit no-underline"
            >
              <MediaFrame
                src={post.src}
                alt=""
                gradient={post.gradient}
                className="h-[190px]"
              />
              <div className="px-7 pt-[26px] pb-[30px]">
                <div className="mb-3 text-[11px] uppercase tracking-[0.14em] text-muted">
                  {post.meta}
                </div>
                <h3 className="m-0 mb-[10px] font-mincho text-[20px] font-medium leading-[1.45]">
                  {post.title}
                </h3>
                <p className="m-0 text-[13.5px] leading-[1.85] text-body">
                  {post.body}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
