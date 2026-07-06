"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, ROUTES } from "@/lib/site-routes";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-line backdrop-blur-[10px]"
      style={{ background: "rgba(244,240,230,0.92)" }}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-6 py-[18px] sm:px-9">
        <Link
          href={ROUTES.home}
          onClick={() => setOpen(false)}
          className="flex shrink-0 flex-col leading-none no-underline"
        >
          <span className="font-mincho text-[21px] font-semibold tracking-[0.02em] text-ink">
            St&nbsp;Monica
          </span>
          <span className="mt-[6px] text-[9px] tracking-[0.4em] text-muted">
            聖モニカ ケアホーム
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden flex-wrap justify-center gap-[19px] text-[12.5px] lg:flex">
          {NAV_ITEMS.map((item) => {
            const href = ROUTES[item.key];
            const active = isActive(pathname, href);
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
          className="hidden shrink-0 border border-ink px-[18px] py-[9px] text-[11.5px] uppercase tracking-[0.12em] text-ink no-underline lg:inline-block"
        >
          見学予約 · Visit
        </Link>

        {/* mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 shrink-0 items-center justify-center border border-ink text-ink lg:hidden"
        >
          <span className="text-[18px] leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <nav className="border-t border-line bg-cream lg:hidden">
          <div className="mx-auto flex max-w-[1240px] flex-col px-6 py-2 sm:px-9">
            {NAV_ITEMS.map((item) => {
              const href = ROUTES[item.key];
              const active = isActive(pathname, href);
              return (
                <Link
                  key={item.key}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-[14px] text-[15px] no-underline"
                  style={{
                    color: active ? "#23262B" : "#6B655A",
                    fontWeight: active ? 600 : 400,
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={ROUTES.contact}
              onClick={() => setOpen(false)}
              className="mt-4 mb-2 inline-block border border-ink px-[18px] py-3 text-center text-[12px] uppercase tracking-[0.12em] text-ink no-underline"
            >
              見学予約 · Visit
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
