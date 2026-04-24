import SectionHeader from '../components/SectionHeader';
import WorkCard from '../components/WorkCard';
import { portfolioItems } from '../data/portfolio';

export default function Portfolio() {
  return (
    <section className="space-y-12">
      <SectionHeader title="Trabalhos" subtitle="Portfólio" />

      <div className="grid gap-8 lg:grid-cols-3">
        {portfolioItems.map((item) => (
          <WorkCard key={item.title} title={item.title} category={item.category} description={item.description} />
        ))}
      </div>

      <div className="rounded-[40px] border border-white/70 bg-white/90 p-10 card-shadow">
        <p className="text-sm leading-7 text-[#5c4232]">
          Estes são exemplos do estilo visual que desenvolvo para stories e sequências de Instagram. A cada novo projeto busco uma identidade personalizada e um acabamento refinado.
        </p>
      </div>
    </section>
  );
}
