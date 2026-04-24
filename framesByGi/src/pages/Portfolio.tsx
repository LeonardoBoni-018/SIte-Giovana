import SectionHeader from '../components/SectionHeader';
import WorkCard from '../components/WorkCard';
import { portfolioItems } from '../data/portfolio';

export default function Portfolio() {
  return (
    <section className="space-y-16">
      <SectionHeader
        title="Trabalhos"
        subtitle="Portfólio"
        description="Veja como traduzimos ideias em stories elegantes e conteúdos visuais preparados para o Instagram."
      />

      <div className="rounded-[40px] border border-white/80 bg-white/90 p-10 card-shadow">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-rosewood/80">Seleção recente</span>
            <h2 className="section-title mt-3 text-3xl font-semibold text-mocha">Projetos que mostram nossa identidade visual.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#5c4232]">
              Cada trabalho apresenta um conceito próprio, detalhes elegantes e narrativa visual pensada para encantar o público.
            </p>
          </div>
          <div className="rounded-[32px] bg-sand p-6 text-sm leading-7 text-[#5c4232]">
            <p className="font-semibold text-mocha">Destaques</p>
            <ul className="mt-4 space-y-3">
              <li>• Casamentos com storytelling emocional</li>
              <li>• Sequências Antes x Depois sofisticadas</li>
              <li>• Lançamentos com identidade forte</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {portfolioItems.map((item) => (
          <WorkCard key={item.title} title={item.title} category={item.category} description={item.description} />
        ))}
      </div>

      <div className="rounded-[40px] border border-white/80 bg-white/90 p-10 card-shadow">
        <p className="text-sm leading-7 text-[#5c4232]">
          Estes são apenas alguns exemplos de como podemos traduzir referências, sentimentos e estética em stories com acabamento premium.
        </p>
      </div>
    </section>
  );
}
