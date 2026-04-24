interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="text-sm uppercase tracking-[0.35em] text-rosewood/80">{subtitle}</p>
      <h2 className="section-title mt-3 text-4xl font-semibold text-mocha sm:text-5xl">{title}</h2>
    </div>
  );
}
