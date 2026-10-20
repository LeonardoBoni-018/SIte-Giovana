import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowRight, FiClock, FiLayers, FiTrendingUp } from 'react-icons/fi';
import ContactCta from '../components/ContactCta';
import HeroFrames, { type HeroPhoto } from '../components/HeroFrames';
import PhotoImage from '../components/gallery/PhotoImage';
import Marquee from '../components/motion/Marquee';
import Reveal from '../components/motion/Reveal';
import SplitHeading from '../components/motion/SplitHeading';
import SectionHeader from '../components/SectionHeader';
import ButtonLink from '../components/ui/ButtonLink';
import { site } from '../config/site';
import { photoCategories } from '../data/portfolio';
import { usePageTitle } from '../hooks/usePageTitle';
import { developPhoto, fadeUp, stagger, viewportOnce } from '../lib/motion';
import { pickRandom, shuffle } from '../lib/random';

/**
 * Sorteia as três fotos do topo a cada visita: três categorias diferentes e uma foto
 * qualquer de cada. Só entram fotos em pé, que preenchem a moldura 3:4 sem cortes fortes.
 */
function drawHeroPhotos(): { main: HeroPhoto; left: HeroPhoto; right: HeroPhoto } {
  const [main, left, right] = shuffle(photoCategories)
    .slice(0, 3)
    .map((category): HeroPhoto => {
      const portraits = category.photos.filter(({ width, height }) => height > width);
      return {
        photo: pickRandom(portraits.length ? portraits : category.photos),
        alt: `Foto de ${category.title.toLowerCase()}`
      };
    });
  return { main, left, right };
}

const services = ['Fotografia mobile', 'Videomaker', 'Storymaker'];

const marqueeItems = [...services, ...photoCategories.map(({ title }) => title)];

const qualities = [
  {
    title: 'Atenção aos detalhes',
    description: 'Produção de fotos e vídeos personalizada, com foco nos detalhes e no que você precisa.',
    icon: FiLayers
  },
  {
    title: 'Atendimento rápido',
    description: 'Comunicação direta pelo WhatsApp, com agilidade e clareza em cada etapa.',
    icon: FiClock
  },
  {
    title: 'Entrega ágil',
    description: 'Organização e cumprimento dos prazos combinados, do primeiro clique à entrega final.',
    icon: FiTrendingUp
  }
];

export default function Home() {
  usePageTitle();
  const [heroPhotos] = useState(drawHeroPhotos);

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-24 lg:pt-20">
        <div>
          <SplitHeading
            text="Transformo momentos em memórias através de fotos e vídeos que contam histórias"
            className="text-[2.35rem] font-medium leading-[1.1] tracking-[-0.01em] sm:text-5xl lg:text-[3.5rem]"
          />

          {/* Entra depois do título, em sequência: texto, botões e serviços. */}
          <motion.div initial="hidden" animate="visible" variants={stagger(0.12, 0.55)}>
            <motion.p variants={fadeUp} className="mt-6 max-w-[46ch] text-lg text-cocoa">
              Registros pensados para eternizar cada detalhe com sensibilidade, leveza e intenção.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.whatsapp.url} icon={<FaWhatsapp size={19} aria-hidden />}>
                Pedir orçamento
              </ButtonLink>
              <ButtonLink href="/trabalhos" variant="secondary" arrow>
                Ver trabalhos
              </ButtonLink>
            </motion.div>

            <motion.ul variants={fadeUp} className="mt-10 flex flex-wrap gap-y-2 text-sm text-cocoa" aria-label="Serviços">
              {services.map((service, index) => (
                <li key={service} className={index > 0 ? 'ml-4 border-l border-line pl-4' : ''}>
                  {service}
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        <HeroFrames {...heroPhotos} />
      </section>

      <Marquee items={marqueeItems} />

      <section aria-labelledby="diferenciais" className="border-y border-line bg-ivory">
        <h2 id="diferenciais" className="sr-only">
          Diferenciais
        </h2>
        <motion.ul
          className="mx-auto grid max-w-6xl px-5 sm:px-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.12)}
        >
          {qualities.map(({ title, description, icon: Icon }) => (
            <motion.li
              key={title}
              variants={fadeUp}
              className="group border-line py-8 [&:not(:first-child)]:border-t md:px-8 md:py-12 md:first:pl-0 md:last:pr-0 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-t-0"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full border border-line text-rosewood transition-colors duration-300 group-hover:border-rosewood group-hover:bg-rosewood group-hover:text-ivory">
                <Icon size={20} aria-hidden />
              </span>
              <h3 className="mt-5 text-xl font-medium">{title}</h3>
              <p className="mt-2 text-[0.95rem] text-cocoa">{description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            title="Trabalhos"
            description="Ensaios, casamentos, eventos e vídeos feitos com o celular. Escolha uma categoria para ver as fotos."
          />
          <Link to="/trabalhos" className="group inline-flex shrink-0 items-center gap-2 font-medium text-mocha">
            <span className="link-underline-rest">Ver todos os trabalhos</span>
            <FiArrowRight aria-hidden className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <motion.ul
          className="mt-10 grid grid-cols-2 gap-x-3 gap-y-6 md:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.08)}
        >
          {photoCategories.map((category) => (
            <motion.li key={category.id} variants={fadeUp}>
              <Link to={`/trabalhos#${category.id}`} className="group block">
                <span className="relative block aspect-[3/4] overflow-hidden rounded-sm bg-ivory">
                  <motion.span className="block h-full w-full" variants={developPhoto}>
                    <PhotoImage
                      photo={category.photos[category.coverIndex]}
                      alt=""
                      sizes="(min-width: 1152px) 210px, (min-width: 768px) 19vw, 48vw"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.08]"
                    />
                  </motion.span>
                  {/* Véu com a chamada, que sobe no hover. */}
                  <span
                    aria-hidden
                    className="absolute inset-0 flex items-end bg-gradient-to-t from-mocha/75 via-mocha/10 to-transparent p-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  >
                    <span className="flex translate-y-3 items-center gap-1.5 text-sm font-medium text-ivory transition-transform duration-500 ease-out-expo group-hover:translate-y-0">
                      Ver {category.photos.length} fotos
                      <FiArrowRight aria-hidden />
                    </span>
                  </span>
                </span>
                <span className="mt-3 block font-serif text-lg leading-snug text-mocha">
                  <span className="link-underline">{category.title}</span>
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <ContactCta />
    </>
  );
}
