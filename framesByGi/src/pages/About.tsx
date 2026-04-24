import { FiCamera, FiHeart, FiStar } from 'react-icons/fi';
import FeatureCard from '../components/FeatureCard';
import SectionHeader from '../components/SectionHeader';

const highlights = [
  {
    title: 'Paixão pelo detalhe',
    description: 'Cada story é pensado para ser ao mesmo tempo elegante e estrategicamente alinhado ao seu público.',
    icon: <FiHeart size={20} />
  },
  {
    title: 'Histórias com alma',
    description: 'Conteúdos que comunicam emoção e criam conexões reais com quem acompanha seu perfil.',
    icon: <FiStar size={20} />
  },
  {
    title: 'Experiência visual',
    description: 'Estética suave, tipografia refinada e harmonização de cores para um resultado premium.',
    icon: <FiCamera size={20} />
  }
];

export default function About() {
  return (
    <section className="space-y-16">
      <SectionHeader
        title="Sobre Frames by Gi"
        subtitle="Minha história"
        description="Transformo conteúdo em narrativas visuais elegantes que conectam pessoas e fortalecem marcas no Instagram."
      />

      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-6 rounded-[40px] border border-white/80 bg-white/90 p-10 card-shadow">
          <p className="text-sm leading-7 text-[#5c4232]">
            O Frames by Gi nasceu da paixão por transformar momentos em narrativas visuais. Cada projeto é feito com atenção ao estilo, à emoção e às referências pessoais de cada cliente.
          </p>
          <p className="text-sm leading-7 text-[#5c4232]">
            Acreditamos no poder de um stories bem construído: ele aproxima, inspira e transforma seguidores em públicos engajados.
          </p>
          <p className="text-sm leading-7 text-[#5c4232]">
            Trabalhamos com uma linguagem visual delicada, minimalista e moderna para que seu conteúdo se destaque com naturalidade.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-1">
          {highlights.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[40px] border border-white/80 bg-white/90 p-10 card-shadow">
          <h3 className="section-title text-3xl font-semibold text-mocha">Como trabalho</h3>
          <p className="mt-4 text-sm leading-7 text-[#5c4232]">
            Do briefing à entrega, cada etapa é pensada para garantir estética, consistência e resultados reais para seus stories.
          </p>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[#5c4232]">
            <li>• Levantamento do briefing e estilo visual</li>
            <li>• Criação de conceito para sequência de stories</li>
            <li>• Produção de artes com identidade própria</li>
            <li>• Entrega pronta para publicação e revisão</li>
          </ul>
        </div>

        <div className="rounded-[40px] border border-white/80 bg-white/90 p-10 card-shadow">
          <h3 className="section-title text-3xl font-semibold text-mocha">Por que escolher o Frames?</h3>
          <p className="mt-4 text-sm leading-7 text-[#5c4232]">
            Atendimento próximo, entregas rápidas e um acabamento visual que eleva sua presença digital com suavidade e estilo.
          </p>
        </div>
      </div>
    </section>
  );
}
