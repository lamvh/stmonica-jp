import Link from "next/link";
import { MediaFrame } from "@/components/media-frame";
import { ROUTES } from "@/lib/site-routes";

export const metadata = {
  title: "Services & care · サービス | St Monica",
  description:
    "Care shaped around each person — daily living support, health & nursing, and life & joy.",
};

type Service = {
  index: string;
  title: string;
  body: string;
  items: string[];
  media: { src: string; alt: string; gradient?: string };
  imageFirst: boolean;
};

const SERVICES: Service[] = [
  {
    index: "01 · 生活支援",
    title: "Daily living support",
    body: "Gentle, unhurried help with the rhythms of the day — always at the resident's own pace, never rushed.",
    items: [
      "Bathing, dressing & personal care · 入浴・身支度",
      "Nutritious home-cooked meals · お食事",
      "Mobility & gentle exercise · 歩行・機能訓練",
      "Laundry & housekeeping · 洗濯・清掃",
    ],
    media: { src: "/images/svc-morning.png", alt: "朝の支度" },
    imageFirst: false,
  },
  {
    index: "02 · 看護・健康",
    title: "Health & nursing",
    body: "Registered nurses on site and a partnering clinic nearby, so medical needs are met calmly and quickly.",
    items: [
      "Daily health & vitals monitoring · 健康管理",
      "Medication management · 服薬管理",
      "Partnering clinic & 24h on-call · 協力医療機関",
      "Rehabilitation support · リハビリ支援",
    ],
    media: {
      src: "/images/svc-care.png",
      alt: "看護スタッフ",
      gradient: "linear-gradient(160deg,#cfc7b1,#bab097)",
    },
    imageFirst: true,
  },
  {
    index: "03 · 日々の楽しみ",
    title: "Life & joy",
    body: "A full life is more than care. We fill each season with small pleasures, company, and things to look forward to.",
    items: [
      "Seasonal outings & festivals · 季節の行事",
      "Gardening & crafts · 園芸・手工芸",
      "Music, calligraphy & tea · 音楽・書道・お茶",
      "Family gatherings · ご家族との集い",
    ],
    media: { src: "/images/svc-calligraphy.png", alt: "書道の時間" },
    imageFirst: false,
  },
];

function ServiceRow({ service }: { service: Service }) {
  const text = (
    <div className="px-6 py-16 sm:px-9 md:px-14">
      <div className="mb-[18px] font-mincho text-[15px] text-sage">
        {service.index}
      </div>
      <h2 className="m-0 mb-[18px] font-mincho text-[32px] font-medium">
        {service.title}
      </h2>
      <p className="m-0 mb-[26px] max-w-[440px] text-[14.5px] leading-[2] text-body">
        {service.body}
      </p>
      <div className="flex flex-col gap-[14px]">
        {service.items.map((item) => (
          <div
            key={item}
            className="flex items-baseline gap-[14px] border-t border-line pt-[14px]"
          >
            <span className="font-mincho text-sage">—</span>
            <span className="text-[14px] text-body-2">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const media = (
    <MediaFrame
      src={service.media.src}
      alt={service.media.alt}
      gradient={service.media.gradient}
      className="min-h-[320px] md:min-h-[440px]"
    />
  );

  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-[1240px] items-stretch md:grid-cols-2">
        {service.imageFirst ? (
          <>
            {media}
            {text}
          </>
        ) : (
          <>
            {text}
            {media}
          </>
        )}
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-[1240px] px-6 pt-[84px] pb-14 sm:px-9">
        <div className="mb-[22px] text-[12px] uppercase tracking-[0.3em] text-sage">
          Services &amp; care · サービス
        </div>
        <h1 className="m-0 mb-[10px] max-w-[820px] font-mincho text-[40px] font-medium leading-[1.25] sm:text-[52px]">
          Care shaped around each person.
        </h1>
        <p className="m-0 font-mincho text-[24px] tracking-[0.08em] text-muted">
          お一人おひとりに、寄り添うケアを。
        </p>
      </section>

      {SERVICES.map((service) => (
        <ServiceRow key={service.title} service={service} />
      ))}

      <section className="border-t border-line bg-cream-2">
        <div className="mx-auto max-w-[1240px] px-6 py-[76px] text-center sm:px-9">
          <div className="mb-5 font-mincho text-[80px] leading-none text-sage">
            個
          </div>
          <h2 className="m-0 mb-[18px] font-mincho text-[32px] font-medium">
            Every resident, an individual care plan
          </h2>
          <p className="mx-auto m-0 max-w-[640px] text-[14.5px] leading-[2] text-body">
            Before moving in, we sit down with each family to build a care plan
            around the person — their history, their preferences, and the
            support they truly need. It is reviewed together, regularly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-[70px] text-center sm:px-9">
        <Link
          href={ROUTES.contact}
          className="inline-block bg-ink px-9 py-4 text-[14px] tracking-[0.1em] text-cream no-underline"
        >
          Ask about care for your family →
        </Link>
      </section>
    </>
  );
}
