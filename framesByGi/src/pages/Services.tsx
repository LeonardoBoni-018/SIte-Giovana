import { FiBriefcase, FiDollarSign, FiShield } from 'react-icons/fi';
import FeatureCard from '../components/FeatureCard';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const benefits = [
  {
    title: 'Proposta transparente',
    description: 'Valores claros e serviços organizados para facilitar sua escolha e planejamento.',
    icon: <FiDollarSign size={20} />
  },
  {
    title: 'Processo profissional',
    description: 'Atendimento estruturado e entregas com prazo definido e revisão leve.',
    icon: <FiBriefcase size={20} />
  },
  {
    title: 'Trabalho seguro',
    description: 'Conteúdo criado com cuidado e respeito pela sua identidade visual e objetivos.',
    icon: <FiShield size={20} />
  }
];

export default function Services() {
  return (
    <section className="space-y-16">
      <SectionHeader
        title="Serviços & Valores"
        subtitle="O que ofereço"
        description="Escolha o formato ideal para seu conteúdo e confira como o Frames by Gi ajuda a criar stories com personalidade e estratégia."
      />

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              price={service.price}
              description={service.description}
            />
          ))}
        </div>

        <div className="rounded-[40px] border border-white/80 bg-white/90 p-10 card-shadow">
          <h3 className="section-title text-3xl font-semibold text-mocha">O seu próximo story</h3>
          <p className="mt-4 text-sm leading-7 text-[#5c4232]">
            Conteúdos criados para engajar e transmitir a sensação certa de cada momento. Cada pacote inclui direção visual e adaptação à sua identidade.
          </p>
          <div className="mt-8 space-y-4">
            {benefits.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-rosewood/10 text-rosewood">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-mocha">{item.title}</h4>
                <p className="mt-2 text-sm leading-7 text-[#5c4232]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-[40px] border border-white/80 bg-white/90 p-10 card-shadow">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-rosewood/80">Vamos criar</p>
            <h2 className="section-title text-3xl font-semibold text-mocha">Escolha o serviço que mais combina com você.</h2>
          </div>
          <a
            href="https://wa.me/5518996048185"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-rosewood px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-rosewood/15 transition hover:bg-mocha"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
