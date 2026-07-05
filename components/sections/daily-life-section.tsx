import { MediaFrame } from "@/components/media-frame";
import { SectionHeading } from "@/components/section-heading";

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

export function DailyLifeSection() {
  return (
    <>
      <section
        id="dailylife"
        className="mx-auto max-w-[1200px] px-6 pt-20 pb-11 sm:px-10"
      >
        <SectionHeading
          eyebrow="Daily life · 一日の流れ"
          title="The gentle shape of a day."
          subtitle="おだやかな、一日。"
        />
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-5 sm:px-10">
        <div className="grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
          {SCHEDULE.map((slot) => (
            <div key={slot.time} className="bg-cream-card px-[26px] py-[34px]">
              <div className="mb-3 font-mincho text-[24px] text-sage">
                {slot.time}
              </div>
              <h4 className="m-0 mb-2 font-mincho text-[18px] font-medium">
                {slot.title}
              </h4>
              <p className="m-0 text-[13px] leading-[1.85] text-body">
                {slot.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pt-10 pb-[76px] sm:px-10">
        <div className="grid gap-[14px] md:grid-cols-2">
          <MediaFrame
            src="/images/festival.png"
            alt="季節の行事"
            caption="季節の行事"
            className="min-h-[240px]"
          />
          <div className="flex flex-col justify-center border border-line bg-cream-2 p-10">
            <h3 className="m-0 mb-[14px] font-mincho text-[26px] font-medium">
              Meals to look forward to
            </h3>
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
    </>
  );
}
