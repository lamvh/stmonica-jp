import Link from "next/link";
import { MediaFrame } from "@/components/media-frame";
import { ROUTES } from "@/lib/site-routes";

export const metadata = {
  title: "Daily life · 一日の流れ | St Monica",
  description:
    "The gentle shape of a day at St Monica — unhurried mornings, seasonal activities, and calm evenings.",
};

const SCHEDULE = [
  {
    time: "7:00",
    title: "Morning · 朝",
    body: "Wake at your own pace, gentle stretches, and a warm breakfast together.",
  },
  {
    time: "10:00",
    title: "Daytime · 昼",
    body: "Activities, gardening, or a quiet moment in the sun on the engawa.",
  },
  {
    time: "15:00",
    title: "Afternoon · 午後",
    body: "Tea and sweets, music or calligraphy, and visits from family.",
  },
  {
    time: "18:00",
    title: "Evening · 夜",
    body: "A shared dinner, a warm bath, and a calm, well-tended night's rest.",
  },
];

const SEASONS = [
  { kanji: "春", title: "Spring", body: "Cherry-blossom viewing in the garden." },
  { kanji: "夏", title: "Summer", body: "Evening festivals and cool watermelon." },
  { kanji: "秋", title: "Autumn", body: "Maple leaves and warm roasted chestnuts." },
  { kanji: "冬", title: "Winter", body: "New Year mochi and quiet, warm days." },
];

export default function DailyLifePage() {
  return (
    <>
      <section className="mx-auto max-w-[1240px] px-6 pt-[84px] pb-11 sm:px-9">
        <div className="mb-[22px] text-[12px] uppercase tracking-[0.3em] text-sage">
          Daily life · 一日の流れ
        </div>
        <h1 className="m-0 mb-[10px] max-w-[820px] font-mincho text-[40px] font-medium leading-[1.25] sm:text-[52px]">
          The gentle shape of a day.
        </h1>
        <p className="m-0 font-mincho text-[24px] tracking-[0.08em] text-muted">
          おだやかな、一日。
        </p>
      </section>

      {/* schedule */}
      <section className="mx-auto max-w-[1240px] px-6 pb-5 sm:px-9">
        <div className="grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
          {SCHEDULE.map((slot) => (
            <div key={slot.time} className="bg-cream-card px-[26px] py-[34px]">
              <div className="mb-3 font-mincho text-[24px] text-sage">
                {slot.time}
              </div>
              <h3 className="m-0 mb-2 font-mincho text-[18px] font-medium">
                {slot.title}
              </h3>
              <p className="m-0 text-[13px] leading-[1.85] text-body">
                {slot.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* meals */}
      <section className="mx-auto max-w-[1240px] px-6 pt-10 pb-[76px] sm:px-9">
        <div className="grid gap-[14px] md:grid-cols-2">
          <MediaFrame
            src="/images/festival.png"
            alt="季節の行事"
            caption="季節の行事"
            className="min-h-[260px]"
          />
          <div className="flex flex-col justify-center border border-line bg-cream-2 p-10">
            <h2 className="m-0 mb-[14px] font-mincho text-[26px] font-medium">
              Meals to look forward to
            </h2>
            <p className="m-0 mb-[10px] text-[14px] leading-[1.95] text-body">
              Every meal is cooked in-house from seasonal ingredients, with
              soft-food and dietary options prepared with equal care.
            </p>
            <p className="m-0 text-[13px] tracking-[0.06em] text-muted">
              旬の食材を、館内の厨房で。
            </p>
          </div>
        </div>
      </section>

      {/* seasons */}
      <section className="border-t border-line bg-cream-2">
        <div className="mx-auto max-w-[1240px] px-6 py-[66px] sm:px-9">
          <h2 className="m-0 mb-[6px] text-center font-mincho text-[30px] font-medium">
            Through the seasons
          </h2>
          <p className="m-0 mb-10 text-center text-[14px] tracking-[0.08em] text-muted">
            四季の行事
          </p>
          <div className="grid grid-cols-2 gap-[26px] text-center md:grid-cols-4">
            {SEASONS.map((season) => (
              <div key={season.kanji}>
                <div className="mb-[10px] font-mincho text-[30px] text-sage">
                  {season.kanji}
                </div>
                <h3 className="m-0 mb-[6px] font-mincho text-[17px] font-medium">
                  {season.title}
                </h3>
                <p className="m-0 text-[13px] leading-[1.8] text-body">
                  {season.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-[70px] text-center sm:px-9">
        <Link
          href={ROUTES.contact}
          className="inline-block bg-ink px-9 py-4 text-[14px] tracking-[0.1em] text-cream no-underline"
        >
          Visit and spend a day with us →
        </Link>
      </section>
    </>
  );
}
