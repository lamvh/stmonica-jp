import { MediaFrame } from "@/components/media-frame";
import { SectionHeading } from "@/components/section-heading";

type Service = {
  index: string;
  title: string;
  body: string;
  items: string[];
  media: { src: string; alt: string; caption: string; gradient?: string };
  /** Whether the media sits on the left (image-first) or right. */
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
    media: { src: "/images/svc-morning.png", alt: "朝の支度", caption: "朝の支度" },
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
      caption: "看護スタッフ",
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
    media: { src: "/images/svc-calligraphy.png", alt: "書道の時間", caption: "書道の時間" },
    imageFirst: false,
  },
];

function ServiceRow({ service }: { service: Service }) {
  const text = (
    <div className="px-6 py-16 sm:px-10 md:px-14">
      <div className="mb-4 font-mincho text-[15px] text-sage">{service.index}</div>
      <h3 className="m-0 mb-4 font-mincho text-[30px] font-medium">
        {service.title}
      </h3>
      <p className="m-0 mb-6 max-w-[440px] text-[14.5px] leading-[2] text-body">
        {service.body}
      </p>
      <div className="flex flex-col gap-3">
        {service.items.map((item) => (
          <div
            key={item}
            className="flex items-baseline gap-[14px] border-t border-line pt-3"
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
      caption={service.media.caption}
      gradient={service.media.gradient}
      className="min-h-[300px] md:min-h-[400px]"
    />
  );

  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-[1200px] items-stretch md:grid-cols-2">
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

export function ServicesSection() {
  return (
    <>
      <section
        id="services"
        className="mx-auto max-w-[1200px] px-6 pt-20 sm:px-10"
      >
        <SectionHeading
          eyebrow="Services & care · サービス"
          title="Care shaped around each person."
          subtitle="お一人おひとりに、寄り添うケアを。"
        />
        <div className="h-11" />
      </section>

      {SERVICES.map((service) => (
        <ServiceRow key={service.title} service={service} />
      ))}

      <section className="border-t border-line bg-cream-2">
        <div className="mx-auto max-w-[1200px] px-6 py-[66px] text-center sm:px-10">
          <div className="mb-4 font-mincho text-[70px] leading-none text-sage">
            個
          </div>
          <h3 className="m-0 mb-4 font-mincho text-[30px] font-medium">
            Every resident, an individual care plan
          </h3>
          <p className="mx-auto m-0 max-w-[640px] text-[14.5px] leading-[2] text-body">
            Before moving in, we sit down with each family to build a care plan
            around the person — their history, their preferences, and the
            support they truly need. It is reviewed together, regularly.
          </p>
        </div>
      </section>
    </>
  );
}
