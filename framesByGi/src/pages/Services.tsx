import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

export default function Services() {
  return (
    <section className="space-y-12">
      <SectionHeader title="Serviços & Valores" subtitle="O que ofereço" />

      <div className="grid gap-8 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            price={service.price}
            description={service.description}
          />
        ))}
      </div>

      <div className="rounded-[40px] border border-white/70 bg-white/90 p-10 text-center card-shadow">
        <h3 className="section-title text-3xl font-semibold text-mocha">Vamos desenhar seu próximo story?</h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#5c4232]">
          Entre em contato pelo Instagram ou WhatsApp para receber uma proposta personalizada e ver como seu conteúdo pode ganhar um novo nível de sofisticação.
        </p>
      </div>
    </section>
  );
}
