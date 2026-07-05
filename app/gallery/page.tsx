import Link from "next/link";
import { MediaFrame } from "@/components/media-frame";
import { ROUTES } from "@/lib/site-routes";

export const metadata = {
  title: "Gallery · 施設写真 | St Monica",
  description: "A quiet look around St Monica — rooms, shared spaces, the garden, and daily life.",
};

type Tile = {
  src: string;
  caption: string;
  span?: string;
  gradient?: string;
};

const TILES: Tile[] = [
  {
    src: "/images/hero.png",
    caption: "縁側からの庭",
    span: "col-span-2 row-span-2",
    gradient: "linear-gradient(160deg,#d9d3c0,#b7ad92)",
  },
  { src: "/images/fac-room.png", caption: "個室", gradient: "linear-gradient(160deg,#cfc7b1,#bab097)" },
  { src: "/images/fac-dining.png", caption: "食堂", gradient: "linear-gradient(160deg,#d2cab4,#beb49a)" },
  { src: "/images/fac-bath.png", caption: "浴室", gradient: "linear-gradient(160deg,#c8c0a9,#b4aa8f)" },
  { src: "/images/fac-lounge.png", caption: "談話室", gradient: "linear-gradient(160deg,#d6ceb8,#c1b79c)" },
  { src: "/images/svc-calligraphy.png", caption: "書道の時間" },
  { src: "/images/festival.png", caption: "季節の行事", span: "col-span-2", gradient: "linear-gradient(160deg,#d9d3c0,#c4bca4)" },
  { src: "/images/svc-morning.png", caption: "朝の支度", gradient: "linear-gradient(160deg,#cfc7b1,#bab097)" },
  { src: "/images/room-garden.png", caption: "庭側個室", gradient: "linear-gradient(160deg,#d2cab4,#beb49a)" },
  { src: "/images/entrance.png", caption: "玄関の朝" },
  { src: "/images/fac-garden.png", caption: "縁側と庭", span: "col-span-2", gradient: "linear-gradient(160deg,#d9d3c0,#b7ad92)" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="mx-auto max-w-[1240px] px-6 pt-[84px] pb-11 sm:px-9">
        <div className="mb-[22px] text-[12px] uppercase tracking-[0.3em] text-sage">
          Gallery · 施設写真
        </div>
        <h1 className="m-0 mb-[10px] max-w-[820px] font-mincho text-[40px] font-medium leading-[1.25] sm:text-[52px]">
          A quiet look around.
        </h1>
        <p className="m-0 font-mincho text-[24px] tracking-[0.08em] text-muted">
          St Monica の風景。
        </p>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 pb-[90px] sm:px-9">
        <div className="grid auto-rows-[160px] grid-cols-2 gap-4 md:auto-rows-[240px] md:grid-cols-3">
          {TILES.map((tile) => (
            <MediaFrame
              key={tile.caption}
              src={tile.src}
              alt={tile.caption}
              caption={tile.caption}
              gradient={tile.gradient}
              className={tile.span ?? ""}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-cream-2">
        <div className="mx-auto max-w-[1240px] px-6 py-[66px] text-center sm:px-9">
          <p className="m-0 mb-6 font-mincho text-[24px] text-body-2">
            Nothing beats seeing it in person.
          </p>
          <Link
            href={ROUTES.contact}
            className="inline-block bg-ink px-9 py-4 text-[14px] tracking-[0.1em] text-cream no-underline"
          >
            Book a visit →
          </Link>
        </div>
      </section>
    </>
  );
}
