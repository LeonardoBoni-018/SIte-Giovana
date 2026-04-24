import { motion } from 'framer-motion';
import { FiArrowRight, FiClock, FiLayers, FiPenTool, FiTrendingUp } from 'react-icons/fi';
import SocialButton from '../components/SocialButton';
import LogoBadge from '../components/LogoBadge';
import SectionHeader from '../components/SectionHeader';
import FeatureCard from '../components/FeatureCard';

const stats = [
  {
    title: 'Design com propósito',
    description: 'Cada sequência é pensada para comunicar sua intenção e valorizar sua imagem.',
    icon: <FiLayers size={20} />
  },
  {
    title: 'Entrega rápida',
    description: 'Produção ágil para campanhas, casamentos e lançamentos com prazo seguro.',
    icon: <FiClock size={20} />
  },
  {
    title: 'Resultados visíveis',
    description: 'Stories com estética premium que aumentam o engajamento e a percepção da marca.',
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
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <span className="inline-flex rounded-full bg-rosewood/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-rosewood">
            Frames by Gi
          </span>
          <div className="space-y-6">
            <h1 className="section-title max-w-3xl text-5xl font-semibold leading-tight text-mocha sm:text-6xl">
              Histórias digitais com estética refinada e impacto estratégico.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#5c4232]">
              Story maker para creators, casamentos e marcas que querem conteúdo sofisticado, relevante e pronto para atrair olhares.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <SocialButton label="Instagram" href="https://www.instagram.com/frames_by_gi/" />
            <SocialButton label="WhatsApp" href="https://wa.me/5518996048185" />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[28px] border border-white/80 bg-white/90 p-5 text-sm text-[#5c4232] shadow-[0_18px_40px_rgba(75,52,36,0.06)]">
              Identidade visual alinhada à sua marca
            </div>
            <div className="rounded-[28px] border border-white/80 bg-white/90 p-5 text-sm text-[#5c4232] shadow-[0_18px_40px_rgba(75,52,36,0.06)]">
              Sequências prontas para publicar no Instagram
            </div>
            <div className="rounded-[28px] border border-white/80 bg-white/90 p-5 text-sm text-[#5c4232] shadow-[0_18px_40px_rgba(75,52,36,0.06)]">
              Atendimento personalizado para cada projeto
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[40px] border border-white/80 bg-white/80 p-8 shadow-[0_30px_80px_rgba(75,52,36,0.08)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.8),transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(139,95,73,0.14),transparent_18%)]" />
          <div className="relative space-y-10">
            <div className="flex justify-center">
              <LogoBadge size={138} className="rounded-full border border-rosewood/20 bg-ivory p-4" />
            </div>
            <div className="space-y-3 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-rosewood/70">Identidade visual</p>
              <h2 className="section-title text-3xl font-semibold text-mocha">Marca, stories e layouts que conversam entre si.</h2>
              <p className="mx-auto max-w-md text-sm leading-7 text-[#5c4232]">
                Experiência visual com estilo clean e elementos orgânicos para contar cada momento com elegância.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] bg-ivory/95 p-6 text-sm leading-7 text-[#5c4232]">
                Capas e ilustrações sutis para apresentação sofisticada.
              </div>
              <div className="rounded-[28px] bg-ivory/95 p-6 text-sm leading-7 text-[#5c4232]">
                Composição e ritmo visual que valorizam sua mensagem.
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {stats.map((item) => (
          <FeatureCard key={item.title} title={item.title} description={item.description} icon={item.icon} />
        ))}
      </div>

      <section className="space-y-10">
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
      </section>

      <div className="rounded-[40px] border border-white/80 bg-white/90 p-10 shadow-[0_18px_50px_rgba(75,52,36,0.08)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-rosewood/80">Vamos iniciar seu projeto</p>
            <h2 className="section-title text-3xl font-semibold text-mocha">Transforme seus stories em conteúdo memorável.</h2>
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
