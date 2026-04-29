import { motion } from 'framer-motion';
import { FiArrowRight, FiClock, FiLayers, FiPenTool, FiTrendingUp } from 'react-icons/fi';
import SocialButton from '../components/SocialButton';
import LogoBadge from '../components/LogoBadge';
import SectionHeader from '../components/SectionHeader';
import FeatureCard from '../components/FeatureCard';

const stats = [
  {
    title: 'Atenção aos Detalhes',
    description: 'Produção de fotos e vídeos personalizada, com foco nos detalhes e na demanda do cliente.',
    icon: <FiLayers size={20} />
  },
  {
    title: 'Atendimento Rápido',
    description: 'Comunicação dedicada via WhatsApp para garantir agilidade e clareza em cada etapa do processo.',
    icon: <FiClock size={20} />
  },
  {
    title: 'Entrega Ágil',
    description: 'Entrega rápida e eficiente, com foco em agilidade, organização e cumprimento consistente dos prazos definidos.',
    icon: <FiTrendingUp size={20} />
  }
];

const steps = [
  {
    title: 'Briefing estratégico',
    description: 'Entendo seu estilo, público e objetivo para criar narrativas verdadeiras.',
    icon: <FiPenTool size={20} />
  },
  {
    title: 'Criação visual',
    description: 'Design de stories personalizados com paleta, tipografia e ritmo visual únicos.',
    icon: <FiLayers size={20} />
  },
  {
    title: 'Aprovação & entrega',
    description: 'Feedbacks claros e entregas finais prontas para publicação imediata.',
    icon: <FiClock size={20} />
  }
];

export default function Home() {
  return (
    <section className="space-y-20">
      <div className="space-y-10 text-center">
        <div className="flex justify-center">
          <LogoBadge size={138} className="rounded-full border border-rosewood/20 bg-ivory p-4" />
        </div>
        <span className="inline-flex rounded-full bg-rosewood/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-rosewood">
          Frames by Gi
        </span>
        <div className="space-y-6">
          <h1 className="section-title mx-auto max-w-[5000px] text-5xl font-semibold leading-tight text-mocha sm:text-6xl">
            Transformo momentos em memórias através de fotos e vídeos que contam histórias
          </h1>
          <p className="mx-auto max-w-[1000px] text-lg leading-8 text-[#5c4232]">
            Registros pensados para eternizar cada detalhe com sensibilidade, leveza e intenção
          </p>
        </div>

        

        <div className="flex flex-wrap justify-center gap-3">
          <div className="min-w-[130px] rounded-full border border-white/80 bg-white/90 px-5 py-3 text-sm text-[#5c4232] shadow-[0_18px_40px_rgba(75,52,36,0.06)]">
            Fotografia Mobile
          </div>
          <div className="min-w-[130px] rounded-full border border-white/80 bg-white/90 px-5 py-3 text-sm text-[#5c4232] shadow-[0_18px_40px_rgba(75,52,36,0.06)]">
            Videomaker
          </div>
          <div className="min-w-[130px] rounded-full border border-white/80 bg-white/90 px-5 py-3 text-sm text-[#5c4232] shadow-[0_18px_40px_rgba(75,52,36,0.06)]">
            Storymaker
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <SocialButton label="Instagram" href="https://www.instagram.com/frames_by_gi/" />
          <SocialButton label="WhatsApp" href="https://wa.me/5518996048185" />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {stats.map((item) => (
          <FeatureCard key={item.title} title={item.title} description={item.description} icon={item.icon} />
        ))}
      </div>

      {/* <section className="space-y-10">
        <SectionHeader
          title="Processo visual eficiente"
          subtitle="Como trabalhamos"
          description="Do briefing à entrega, cada passo é pensado para gerar resultados visuais consistentes e cair no gosto do público." 
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <FeatureCard key={step.title} title={step.title} description={step.description} icon={step.icon} />
          ))}
        </div>
      </section> */}

      <div className="rounded-[40px] border border-white/80 bg-white/90 p-10 shadow-[0_18px_50px_rgba(75,52,36,0.08)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-rosewood/80">Vamos eternizar o seu momento?</p>
            <h2 className="section-title text-3xl font-semibold text-mocha">Solicite o seu orçamento</h2>
          </div>
          <a
            href="https://wa.me/5518996048185"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-rosewood px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-rosewood/15 transition hover:bg-mocha"
          >
            Falar no WhatsApp
            <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
