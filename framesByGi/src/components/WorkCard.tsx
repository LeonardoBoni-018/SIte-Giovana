interface WorkCardProps {
  title: string;
  category: string;
  description: string;
}

export default function WorkCard({ title, category, description }: WorkCardProps) {
  return (
    <article className="card-shadow rounded-[32px] border border-white/70 bg-ivory/90 p-8">
      <span className="mb-4 inline-flex rounded-full bg-rosewood/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-rosewood">
        {category}
      </span>
      <h3 className="section-title text-2xl font-semibold text-mocha">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-[#5c4232]">{description}</p>
    </article>
  );
}
