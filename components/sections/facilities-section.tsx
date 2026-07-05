import { MediaFrame } from "@/components/media-frame";
import { SectionHeading } from "@/components/section-heading";

const ROOMS = [
  {
    src: "/images/room-private.png",
    title: "Private room",
    spec: "個室 · 18㎡",
    body: "A calm private space with a bed, storage, and room for treasured belongings.",
  },
  {
    src: "/images/room-garden.png",
    title: "Garden room",
    spec: "庭側個室 · 20㎡",
    body: "A larger room opening onto the engawa, with a full view of the garden.",
    gradient: "linear-gradient(160deg,#cfc7b1,#bab097)",
  },
  {
    src: "/images/room-care.png",
    title: "Care room",
    spec: "介護個室 · 20㎡",
    body: "Fully accessible, with a care bed and support for higher-need residents.",
    gradient: "linear-gradient(160deg,#d2cab4,#beb49a)",
  },
];

const SHARED = [
  "Dining hall · 食堂",
  "Lounge & library · 談話室",
  "Assisted bath · 介護浴室",
  "Garden & engawa · 庭・縁側",
  "Activity room · 多目的室",
  "Nurse station · 看護室",
];

const PEACE = [
  "Barrier-free · バリアフリー",
  "Nurse call system · ナースコール",
  "Earthquake-ready · 耐震構造",
  "Sprinklers & alarms · 防災設備",
  "24h staffing · 24時間体制",
  "Backup power · 非常用電源",
];

function AmenityList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="m-0 mb-[22px] font-mincho text-[28px] font-medium">{title}</h3>
      <div className="grid grid-cols-2 gap-x-7 gap-y-[14px] text-[14px] text-body-2">
        {items.map((item) => (
          <div key={item} className="border-t border-line-2 pt-3">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function FacilitiesSection() {
  return (
    <>
      <section
        id="facilities"
        className="mx-auto max-w-[1200px] px-6 pt-20 pb-11 sm:px-10"
      >
        <SectionHeading
          eyebrow="Facilities · 施設のご案内"
          title="A home of light, wood, and quiet."
          subtitle="光と木と、静けさの住まい。"
        />
      </section>

      {/* photo mosaic */}
      <section className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <div className="grid grid-cols-2 gap-[14px] md:grid-cols-[2fr_1fr_1fr] md:grid-rows-[220px_220px]">
          <MediaFrame
            src="/images/fac-garden.png"
            alt="縁側と庭"
            caption="縁側と庭"
            gradient="linear-gradient(160deg,#d9d3c0,#b7ad92)"
            className="col-span-2 h-[220px] md:col-span-1 md:row-span-2 md:h-auto"
          />
          <MediaFrame
            src="/images/fac-room.png"
            alt="個室"
            caption="個室"
            gradient="linear-gradient(160deg,#cfc7b1,#bab097)"
            className="h-[220px] md:h-auto"
          />
          <MediaFrame
            src="/images/fac-dining.png"
            alt="食堂"
            caption="食堂"
            gradient="linear-gradient(160deg,#d2cab4,#beb49a)"
            className="h-[220px] md:h-auto"
          />
          <MediaFrame
            src="/images/fac-bath.png"
            alt="浴室"
            caption="浴室"
            gradient="linear-gradient(160deg,#c8c0a9,#b4aa8f)"
            className="h-[220px] md:h-auto"
          />
          <MediaFrame
            src="/images/fac-lounge.png"
            alt="談話室"
            caption="談話室"
            gradient="linear-gradient(160deg,#d6ceb8,#c1b79c)"
            className="h-[220px] md:h-auto"
          />
        </div>
      </section>

      {/* rooms */}
      <section className="mx-auto max-w-[1200px] px-6 pt-[60px] pb-10 sm:px-10">
        <h3 className="m-0 mb-[6px] font-mincho text-[30px] font-medium">
          Your room · お部屋
        </h3>
        <p className="m-0 mb-9 text-[14px] tracking-[0.08em] text-muted">
          18 private rooms, each with garden light.
        </p>
        <div className="grid gap-[26px] md:grid-cols-3">
          {ROOMS.map((room) => (
            <div
              key={room.title}
              className="overflow-hidden border border-line bg-cream-card"
            >
              <MediaFrame
                src={room.src}
                alt=""
                gradient={room.gradient}
                className="h-[170px]"
              />
              <div className="px-[26px] pt-6 pb-7">
                <h4 className="m-0 mb-1 font-mincho text-[20px] font-medium">
                  {room.title}
                </h4>
                <p className="m-0 mb-3 text-[12px] tracking-[0.1em] text-muted">
                  {room.spec}
                </p>
                <p className="m-0 text-[13.5px] leading-[1.85] text-body">
                  {room.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* amenities */}
      <section className="border-t border-line bg-cream-2">
        <div className="mx-auto grid max-w-[1200px] gap-14 px-6 py-[66px] sm:px-10 md:grid-cols-2">
          <AmenityList title="Shared spaces · 共用" items={SHARED} />
          <AmenityList title="Peace of mind · 安心" items={PEACE} />
        </div>
      </section>
    </>
  );
}
