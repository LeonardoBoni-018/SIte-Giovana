import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiLayers, FiTrendingUp } from 'react-icons/fi';
import ContactCta from '../components/ContactCta';
import HeroFrames from '../components/HeroFrames';
import PhotoImage from '../components/gallery/PhotoImage';
import SectionHeader from '../components/SectionHeader';
import ButtonLink from '../components/ui/ButtonLink';
import { site } from '../config/site';
import { photoCategories } from '../data/portfolio';
import { usePageTitle } from '../hooks/usePageTitle';
import { photo } from '../lib/photos';

const heroPhotos = {
  main: photo('casamento2.png'),
  left: photo('ensaioCrianca4.png'),
  right: photo('ensaioFeminino1.png')
};

const services = ['Fotografia mobile', 'Videomaker', 'Storymaker'];

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

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-24 lg:pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-[2.35rem] font-medium leading-[1.1] tracking-[-0.01em] sm:text-5xl lg:text-[3.5rem]">
            Transformo momentos em memórias através de fotos e vídeos que contam histórias
          </h1>
          <p className="mt-6 max-w-[46ch] text-lg text-cocoa">
            Registros pensados para eternizar cada detalhe com sensibilidade, leveza e intenção.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={site.whatsapp.url} icon={<FaWhatsapp size={19} aria-hidden />}>
              Pedir orçamento
            </ButtonLink>
            <ButtonLink href="/trabalhos" variant="secondary">
              Ver trabalhos
            </ButtonLink>
          </div>

          <ul className="mt-10 flex flex-wrap gap-y-2 text-sm text-cocoa" aria-label="Serviços">
            {services.map((service, index) => (
              <li key={service} className={index > 0 ? 'ml-4 border-l border-line pl-4' : ''}>
                {service}
              </li>
            ))}
          </ul>
        </motion.div>

        <HeroFrames {...heroPhotos} />
      </section>

      <section aria-labelledby="diferenciais" className="border-y border-line bg-ivory">
        <h2 id="diferenciais" className="sr-only">
          Diferenciais
        </h2>
        <ul className="mx-auto grid max-w-6xl px-5 sm:px-8 md:grid-cols-3">
          {qualities.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="border-line py-8 [&:not(:first-child)]:border-t md:px-8 md:py-12 md:first:pl-0 md:last:pr-0 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-t-0"
            >
              <Icon className="text-rosewood" size={22} aria-hidden />
              <h3 className="mt-4 text-xl font-medium">{title}</h3>
              <p className="mt-2 text-[0.95rem] text-cocoa">{description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            title="Trabalhos"
            description="Ensaios, casamentos e vídeos feitos com o celular. Escolha uma categoria para ver as fotos."
          />
          <Link to="/trabalhos" className="shrink-0 font-medium text-mocha underline decoration-rosewood/40 underline-offset-4 transition-colors hover:decoration-rosewood">
            Ver todos os trabalhos
          </Link>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {photoCategories.map((category) => (
            <li key={category.id}>
              <Link to={`/trabalhos#${category.id}`} className="group block">
                <span className="block aspect-[3/4] overflow-hidden rounded-sm bg-ivory">
                  <PhotoImage
                    photo={category.photos[category.coverIndex]}
                    alt=""
                    sizes="(min-width: 1024px) 180px, (min-width: 640px) 30vw, 48vw"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                  />
                </span>
                <span className="mt-3 block font-serif text-lg leading-snug text-mocha decoration-rosewood/60 underline-offset-4 group-hover:underline">
                  {category.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <ContactCta />
    </>
  );
}
