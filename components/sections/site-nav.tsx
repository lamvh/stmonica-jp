"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, ROUTES } from "@/lib/site-routes";

export function SiteNav() {
  const pathname = usePathname();

  return (
    <div
      className="sticky top-0 z-50 border-b border-line backdrop-blur-[10px]"
      style={{ background: "rgba(244,240,230,0.92)" }}
    >
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-6 py-[18px] sm:px-9">
        <Link
          href={ROUTES.home}
          className="flex shrink-0 flex-col leading-none no-underline"
        >
          <span className="font-mincho text-[21px] font-semibold tracking-[0.02em] text-ink">
            St&nbsp;Monica
          </span>
          <span className="mt-[6px] text-[9px] tracking-[0.4em] text-muted">
            聖モニカ ケアホーム
          </span>
        </Link>

        <nav className="hidden flex-wrap justify-center gap-[19px] text-[12.5px] lg:flex">
          {NAV_ITEMS.map((item) => {
            const href = ROUTES[item.key];
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={item.key}
                href={href}
                className="pb-[2px] tracking-[0.04em] no-underline transition-colors"
                style={{
                  color: active ? "#23262B" : "#6B655A",
                  fontWeight: active ? 600 : 400,
                  borderBottom: active
                    ? "1px solid #5E7A5A"
                    : "1px solid transparent",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href={ROUTES.contact}
          className="shrink-0 border border-ink px-[18px] py-[9px] text-[11.5px] uppercase tracking-[0.12em] text-ink no-underline"
        >
          見学予約 · Visit
        </Link>
      </div>
    </div>
  );
}
