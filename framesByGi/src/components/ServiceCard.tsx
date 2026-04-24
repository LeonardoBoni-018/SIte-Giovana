interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
}

export default function ServiceCard({ title, price, description }: ServiceCardProps) {
  return (
    <article className="card-shadow rounded-[32px] border border-white/60 bg-white/80 p-8 transition hover:-translate-y-1">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h3 className="section-title text-2xl font-semibold text-mocha">{title}</h3>
        <span className="rounded-full bg-rosewood/10 px-3 py-1 text-sm font-semibold text-rosewood">{price}</span>
      </div>
      <p className="text-sm leading-7 text-[#5c4232]">{description}</p>
    </article>
  );
}
