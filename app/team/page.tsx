import Link from "next/link";
import { MediaFrame } from "@/components/media-frame";
import { ROUTES } from "@/lib/site-routes";

export const metadata = {
  title: "Our team · スタッフ | St Monica",
  description:
    "The people who make St Monica home — experienced nurses, carers, and a chef who know every resident by name.",
};

const STAFF = [
  { src: "/images/staff1.png", name: "田中 健一", role: "Head of Nursing · 看護主任" },
  {
    src: "/images/staff2.png",
    name: "鈴木 花子",
    role: "Care Lead · 介護リーダー",
    gradient: "linear-gradient(160deg,#cfc7b1,#bab097)",
  },
  {
    src: "/images/staff3.png",
    name: "山本 太郎",
    role: "Chef · 管理栄養士",
    gradient: "linear-gradient(160deg,#d2cab4,#beb49a)",
  },
  {
    src: "/images/staff4.png",
    name: "伊藤 美穂",
    role: "Activities · 生活相談員",
    gradient: "linear-gradient(160deg,#c8c0a9,#b4aa8f)",
  },
];

const STATS = [
  { value: "1:2", label: "Attentive staff-to-resident ratio · 手厚い人員配置" },
  { value: "100%", label: "Certified care staff · 有資格の介護職員" },
  { value: "24h", label: "Nursing on call, day and night · 看護オンコール" },
];

export default function TeamPage() {
  return (
    <>
      <section className="mx-auto max-w-[1240px] px-6 pt-[84px] pb-11 sm:px-9">
        <div className="mb-[22px] text-[12px] uppercase tracking-[0.3em] text-sage">
          Our team · スタッフ
        </div>
        <h1 className="m-0 mb-[10px] max-w-[820px] font-mincho text-[40px] font-medium leading-[1.25] sm:text-[52px]">
          The people who make it home.
        </h1>
        <p className="m-0 font-mincho text-[24px] tracking-[0.08em] text-muted">
          この家を、あたたかくする人たち。
        </p>
      </section>

      {/* director quote */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-6 py-14 sm:px-9 md:grid-cols-[auto_1fr] md:gap-14">
          <MediaFrame
            src="/images/director.png"
            alt="Monica — Director"
            className="h-[250px] w-[200px] shrink-0"
          />
          <div>
            <p className="m-0 mb-[18px] max-w-[720px] font-mincho text-[25px] leading-[1.7] text-body-2">
              &ldquo;I want every family to feel, the moment they arrive, that
              their loved one is truly home.&rdquo;
            </p>
            <div className="text-[13.5px] text-body">Monica — Director · 施設長</div>
          </div>
        </div>
      </section>

      {/* staff grid */}
      <section className="mx-auto max-w-[1240px] px-6 pt-5 pb-[60px] sm:px-9">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STAFF.map((member) => (
            <div key={member.name}>
              <MediaFrame
                src={member.src}
                alt=""
                gradient={member.gradient}
                className="mb-4 h-[220px]"
              />
              <h3 className="m-0 mb-[3px] font-mincho text-[18px] font-medium">
                {member.name}
              </h3>
              <p className="m-0 text-[12.5px] text-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* stats band */}
      <section className="border-t border-line bg-cream-2">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-[66px] text-center sm:px-9 md:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.value}>
              <div className="font-mincho text-[40px] text-sage">{stat.value}</div>
              <p className="mx-auto mt-2 max-w-[220px] text-[13.5px] text-body">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-[70px] text-center sm:px-9">
        <p className="m-0 mb-6 font-mincho text-[22px] text-body-2">
          Want to join our team?
        </p>
        <Link
          href={ROUTES.careers}
          className="inline-block bg-ink px-9 py-4 text-[14px] tracking-[0.1em] text-cream no-underline"
        >
          See careers →
        </Link>
      </section>
    </>
  );
}
