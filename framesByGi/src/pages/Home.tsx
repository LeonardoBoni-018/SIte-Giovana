import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import SocialButton from '../components/SocialButton';
import LogoBadge from '../components/LogoBadge';

export default function Home() {
  return (
    <section className="space-y-16">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-7">
          <span className="inline-flex rounded-full bg-rosewood/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-rosewood">
            Frames by Gi
          </span>
          <h1 className="section-title text-5xl font-semibold leading-tight text-mocha sm:text-6xl">
            Histórias visuais que transformam seus stories em conteúdo sofisticado.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-[#5c4232]">
            Story maker para creators, casamentos e marcas que buscam um feed leve, elegante e com narrativa visual.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <SocialButton label="Instagram" href="https://www.instagram.com/frames_by_gi/" />
            <SocialButton label="WhatsApp" href="https://wa.me/5518996048185" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[40px] border border-white/80 bg-white/70 px-8 py-14 shadow-[0_20px_50px_rgba(75,52,36,0.08)]"
        >
          <div className="absolute inset-x-10 top-0 h-24 rounded-b-[80px] bg-rosewood/10 blur-2xl"></div>
          <div className="relative space-y-6">
            <div className="rounded-[28px] bg-sand p-10 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-rosewood/70">Logotipo</p>
              <div className="mx-auto mt-8">
                <LogoBadge size={112} className="rounded-full border border-rosewood/20 bg-ivory p-3" />
              </div>
              <p className="mt-6 text-sm leading-7 text-[#5c4232]">A logo da marca agora está aplicada no site.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] bg-ivory p-6 text-sm leading-7 text-[#5c4232]">
                <span className="block text-xs uppercase tracking-[0.4em] text-rosewood/70">Cobertura</span>
                Stories criativos para casamentos, aniversários e eventos.
              </div>
              <div className="rounded-[28px] bg-ivory p-6 text-sm leading-7 text-[#5c4232]">
                <span className="block text-xs uppercase tracking-[0.4em] text-rosewood/70">Antes x Depois</span>
                Formatos elegantes para mostrar transformação com personalidade.
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="rounded-[32px] bg-white/90 p-8 card-shadow">
          <h2 className="section-title text-3xl">Qualidade visual</h2>
          <p className="mt-4 text-sm leading-7 text-[#5c4232]">Conteúdos pensados para destacar seu perfil e elevar a percepção da sua marca.</p>
        </div>
        <div className="rounded-[32px] bg-white/90 p-8 card-shadow">
          <h2 className="section-title text-3xl">Atendimento rápido</h2>
          <p className="mt-4 text-sm leading-7 text-[#5c4232]">Entrega ágil nos prazos e comunicação dedicada via WhatsApp.</p>
        </div>
        <div className="rounded-[32px] bg-white/90 p-8 card-shadow">
          <h2 className="section-title text-3xl">Conteúdo estratégico</h2>
          <p className="mt-4 text-sm leading-7 text-[#5c4232]">Stories com estética alinhada ao branding e foco em engajamento.</p>
        </div>
      </div>

      <div className="rounded-[40px] border border-white/70 bg-white/90 p-10 card-shadow">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-rosewood/80">Pronto para contar sua história?</p>
            <h2 className="section-title mt-3 text-3xl font-semibold text-mocha">Vamos criar stories com personalidade.</h2>
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
