type SectionHeadingProps = {
  /** Uppercase sage eyebrow, e.g. "About St Monica · 私たちについて". */
  eyebrow: string;
  /** English title (serif). */
  title: string;
  /** Japanese sub-line (serif, muted). */
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

/** The recurring eyebrow → serif title → Japanese subtitle header block. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <div className="mb-5 text-[12px] uppercase tracking-[0.3em] text-sage">
        {eyebrow}
      </div>
      <h2
        className={`m-0 font-mincho text-[40px] font-medium leading-[1.3] text-ink sm:text-[44px] ${
          centered ? "mx-auto max-w-none" : "max-w-[760px]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="m-0 mt-2 font-mincho text-[22px] tracking-[0.08em] text-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}
