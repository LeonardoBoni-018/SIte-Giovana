import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import ContactCta from '../components/ContactCta';
import PhotoImage from '../components/gallery/PhotoImage';
import Reveal from '../components/motion/Reveal';
import SplitHeading from '../components/motion/SplitHeading';
import SectionHeader from '../components/SectionHeader';
import { usePageTitle } from '../hooks/usePageTitle';
import { developPhoto, fadeUp, stagger, useDevelopFrame, viewportOnce } from '../lib/motion';
import { photo } from '../lib/photos';

const portrait = photo('aboutMe1.png');
const portraitDetail = photo('aboutMe2.png');

const steps = [
  'Contato inicial e escolha do serviço que melhor atende às suas necessidades.',
  'Alinhamento das expectativas.',
  'Captação dos elementos visuais.',
  'Edição minuciosa.',
  'Feedbacks e ajustes finais.',
  'Entrega dos arquivos finalizados em alta resolução.'
];

const reasons = [
  'Olhar sensível para os detalhes.',
  'Compromisso com a qualidade e a originalidade.',
  'Atendimento personalizado e proximidade com o cliente.',
  'Entregas rápidas e um acabamento visual que eleva sua presença digital com suavidade e estilo.'
];

export default function About() {
  usePageTitle('Sobre');
  const portraitsRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  // A foto menor sobe mais rápido que a maior ao rolar, como se estivesse mais perto.
  const { scrollYProgress } = useScroll({ target: portraitsRef, offset: ['start start', 'end start'] });
  const detailY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -90]);
  const frameVariants = useDevelopFrame();

  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-14 px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:pb-24 lg:pt-20">
        <motion.div
          ref={portraitsRef}
          className="relative mx-auto w-full max-w-[420px] pb-16 pr-12 sm:pr-20"
          initial="hidden"
          animate="visible"
          variants={stagger(0.3, 0.1)}
        >
          <motion.figure className="print-frame" variants={frameVariants}>
            <div className="overflow-hidden">
              <motion.div variants={developPhoto}>
                <PhotoImage
                  photo={portrait}
                  alt="Giovana mostrando na tela do celular uma foto que acabou de tirar"
                  sizes="(min-width: 1024px) 360px, 80vw"
                  loading="eager"
                  className="aspect-[3/4] w-full object-cover object-[50%_80%]"
                />
              </motion.div>
            </div>
          </motion.figure>
          <motion.div className="absolute bottom-0 right-0 w-[46%]" style={{ y: detailY }}>
            <motion.figure className="print-frame" variants={frameVariants}>
              <div className="overflow-hidden">
                <motion.div variants={developPhoto}>
                  <PhotoImage
                    photo={portraitDetail}
                    alt="Giovana sorrindo com o celular, sua ferramenta de trabalho, na mão"
                    sizes="(min-width: 1024px) 190px, 40vw"
                    className="aspect-[3/4] w-full object-cover object-[50%_80%]"
                  />
                </motion.div>
              </div>
            </motion.figure>
          </motion.div>
        </motion.div>

        <div>
          <SplitHeading text="Sobre o Frames by Gi" delay={0.2} className="text-4xl font-medium leading-tight sm:text-5xl" />
          <motion.div
            className="mt-8 max-w-[60ch] space-y-5 text-cocoa"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger(0.12, 0.4)}
          >
            <motion.p variants={fadeUp} className="font-serif text-xl leading-relaxed text-mocha sm:text-[1.35rem]">
              O Frames by Gi nasceu do meu olhar para aquilo que muitas vezes passa despercebido: os detalhes, os
              sentimentos e a essência de cada momento.
            </motion.p>
            <motion.p variants={fadeUp}>
              O que começou como uma paixão por registrar memórias se transformou em um trabalho feito com propósito,
              criando fotos e vídeos que permitem reviver histórias de forma leve, natural e verdadeira.
            </motion.p>
            <motion.p variants={fadeUp}>
              Hoje, cada registro carrega um pouco da minha dedicação, do meu cuidado e da minha forma de enxergar a
              beleza nos momentos reais.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-line bg-ivory">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <Reveal>
            <SectionHeader
              title="Como eu trabalho"
              description="Do briefing à entrega, cada etapa é pensada para garantir um resultado que vá além do visual."
            />
          </Reveal>
          <motion.ol
            className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger(0.1)}
          >
            {steps.map((step, index) => (
              <motion.li key={step} variants={fadeUp} className="group relative flex gap-5 border-t border-line pt-5">
                {/* Linha de destaque que percorre a borda no hover. */}
                <span
                  className="absolute -top-px left-0 h-px w-full origin-left scale-x-0 bg-rosewood transition-transform duration-700 ease-out-expo group-hover:scale-x-100"
                  aria-hidden
                />
                <span
                  className="font-serif text-3xl leading-none text-rosewood transition-transform duration-500 ease-out-expo group-hover:-translate-y-1"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <p className="text-mocha">{step}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:py-24">
        <Reveal>
          <SectionHeader title="Por que escolher o Frames by Gi?" />
        </Reveal>
        <motion.ul
          className="space-y-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.1)}
        >
          {reasons.map((reason) => (
            <motion.li key={reason} variants={fadeUp} className="flex gap-4 text-lg text-mocha">
              <FiCheck className="mt-1.5 shrink-0 text-rosewood" size={20} aria-hidden />
              {reason}
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <ContactCta />
    </>
  );
}
