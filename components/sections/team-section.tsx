import { MediaFrame } from "@/components/media-frame";
import { SectionHeading } from "@/components/section-heading";

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

export function TeamSection() {
  return (
    <section id="team" className="border-t border-line bg-cream-2">
      <div className="mx-auto max-w-[1200px] px-6 pt-20 sm:px-10">
        <SectionHeading
          eyebrow="Our team · スタッフ"
          title="The people who make it home."
          subtitle="この家を、あたたかくする人たち。"
        />
      </div>

      {/* director quote */}
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-11 sm:px-10 md:grid-cols-[auto_1fr]">
        <MediaFrame
          src="/images/director.png"
          alt="Monica — Director"
          className="h-[210px] w-[170px] shrink-0"
        />
        <div>
          <p className="m-0 mb-[18px] max-w-[720px] font-mincho text-[25px] leading-[1.7] text-body-2">
            &ldquo;I want every family to feel, the moment they arrive, that
            their loved one is truly home.&rdquo;
          </p>
          <div className="text-[13.5px] text-body">Monica — Director · 施設長</div>
        </div>
      </div>

      {/* staff grid */}
      <div className="mx-auto max-w-[1200px] px-6 pt-5 pb-[76px] sm:px-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STAFF.map((member) => (
            <div key={member.name}>
              <MediaFrame
                src={member.src}
                alt=""
                gradient={member.gradient}
                className="mb-4 h-[200px]"
              />
              <h4 className="m-0 mb-[3px] font-mincho text-[18px] font-medium">
                {member.name}
              </h4>
              <p className="m-0 text-[12.5px] text-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
