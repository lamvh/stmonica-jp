import Link from "next/link";
import { ROUTES } from "@/lib/site-routes";

const EXPLORE = [
  { href: ROUTES.about, label: "About & Philosophy" },
  { href: ROUTES.services, label: "Services" },
  { href: ROUTES.facilities, label: "Facilities" },
  { href: ROUTES.dailylife, label: "Daily Life" },
];

const MORE = [
  { href: ROUTES.team, label: "Our Team" },
  { href: ROUTES.gallery, label: "Gallery" },
  { href: ROUTES.voices, label: "Family Voices" },
  { href: ROUTES.blog, label: "Blog" },
  { href: ROUTES.faq, label: "FAQ" },
  { href: ROUTES.careers, label: "Careers" },
];

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <div className="mb-4 text-[11px] uppercase tracking-[0.2em] text-muted">
        {title}
      </div>
      <div className="flex flex-col gap-[11px] text-[13px]">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-footlink no-underline"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream-2">
      <div className="mx-auto max-w-[1240px] px-6 pt-16 pb-9 sm:px-9">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="mb-[6px] font-mincho text-[24px] font-semibold text-cream">
              St&nbsp;Monica
            </div>
            <div className="mb-5 text-[10px] tracking-[0.4em] text-muted">
              聖モニカ ケアホーム
            </div>
            <p className="m-0 max-w-[260px] text-[13px] leading-[1.9] text-footdim">
              A small residential care home where warmth, dignity, and calm come
              first.
            </p>
          </div>

          <FooterLinks title="Explore" links={EXPLORE} />
          <FooterLinks title="More" links={MORE} />

          <div>
            <div className="mb-4 text-[11px] uppercase tracking-[0.2em] text-muted">
              Visit us · 所在地
            </div>
            <p className="m-0 mb-[14px] text-[13px] leading-[1.9] text-footdim">
              神奈川県鎌倉市○○ 1-2-3
              <br />
              Kamakura, Kanagawa
            </p>
            <p className="m-0 text-[13px] leading-[1.9] text-footdim">
              TEL 0467-00-0000
              <br />
              hello@stmonica.jp
            </p>
          </div>
        </div>

        <div className="mt-11 flex flex-col justify-between gap-2 border-t border-white/15 pt-6 text-[12px] text-muted sm:flex-row">
          <span>St Monica Care Home · 聖モニカ</span>
          <span>© 2026 St Monica. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
