interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description?: string;
}

export default function SectionHeader({ title, subtitle, description }: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="text-sm uppercase tracking-[0.35em] text-rosewood/80">{subtitle}</p>
      <h2 className="section-title mt-3 text-4xl font-semibold text-mocha sm:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-[#5c4232]">{description}</p>
      ) : null}
    </div>
  );
}
