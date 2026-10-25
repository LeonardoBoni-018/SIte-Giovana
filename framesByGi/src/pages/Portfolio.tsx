import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ContactCta from '../components/ContactCta';
import PhotoCarousel from '../components/gallery/PhotoCarousel';
import Reveal from '../components/motion/Reveal';
import SectionHeader from '../components/SectionHeader';
import VideoPlayer from '../components/VideoPlayer';
import { photoCategories, videoCategories } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';
import { usePageTitle } from '../hooks/usePageTitle';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';

const VIDEOS_ID = 'videos';

const sections = [
  ...photoCategories.map(({ id, title }) => ({ id, title })),
  { id: VIDEOS_ID, title: 'Vídeos' }
];
const sectionIds = sections.map(({ id }) => id);

export default function Portfolio() {
  usePageTitle('Trabalhos');
  const activeId = useActiveSection(sectionIds);
  const navListRef = useRef<HTMLUListElement>(null);

  // No celular o menu de categorias rola na horizontal: mantém a categoria ativa centralizada.
  // Rola só a lista (e não usa scrollIntoView) para não interferir na rolagem da página.
  useEffect(() => {
    const list = navListRef.current;
    const link = list?.querySelector<HTMLElement>(`a[href="#${activeId}"]`);
    if (!list || !link || list.scrollWidth <= list.clientWidth) return;
    // Suavidade vem da classe scroll-smooth da lista, que respeita prefers-reduced-motion.
    list.scrollTo({ left: link.offsetLeft - (list.clientWidth - link.offsetWidth) / 2 });
  }, [activeId]);

  return (
    <>
      <Reveal className="mx-auto max-w-6xl px-5 pt-10 sm:px-8 sm:pt-14 lg:pt-20">
        <SectionHeader
          as="h1"
          title="Trabalhos"
          description="Ensaios, casamentos, eventos e vídeos feitos com o celular."
        />
      </Reveal>

      <nav
        aria-label="Categorias"
        className="sticky top-16 z-30 mt-8 border-b border-line bg-sand/95 backdrop-blur-sm sm:top-[4.5rem]"
      >
        <ul
          ref={navListRef}
          className="relative mx-auto flex max-w-6xl scroll-smooth gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] motion-reduce:scroll-auto sm:px-8"
        >
          {sections.map(({ id, title }) => {
            const isActive = id === activeId;
            return (
              <li key={id} className="shrink-0">
                <a
                  href={`#${id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative isolate block rounded-full border px-4 py-1.5 text-sm transition-colors duration-300 ${
                    isActive ? 'border-rosewood text-ivory' : 'border-line text-cocoa hover:border-rosewood hover:text-mocha'
                  }`}
                >
                  {/* Fundo que desliza de uma categoria para a outra. */}
                  {isActive && (
                    <motion.span
                      layoutId="category-pill"
                      className="absolute -inset-px -z-10 rounded-full bg-rosewood"
                      transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                    />
                  )}
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {photoCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            aria-labelledby={`${category.id}-titulo`}
            className="border-b border-line pb-6 pt-12 last:border-b-0 lg:pb-8 lg:pt-16"
          >
            <PhotoCarousel
              photos={category.photos}
              title={category.title}
              header={
                <Reveal>
                  <h2 id={`${category.id}-titulo`} className="text-2xl font-medium sm:text-3xl">
                    {category.title}
                  </h2>
                  <p className="mt-3 max-w-[56ch] text-cocoa">
                    {category.description}
                    <span className="ml-2 whitespace-nowrap text-sm text-rosewood">{category.photos.length} fotos</span>
                  </p>
                </Reveal>
              }
            />
          </section>
        ))}
      </div>

      <section id={VIDEOS_ID} aria-labelledby="videos-titulo" className="border-t border-line bg-ivory">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
          <Reveal>
            <h2 id="videos-titulo" className="text-2xl font-medium sm:text-3xl">
              Vídeos
            </h2>
          </Reveal>
          {/* Um player por categoria; categorias com vários trabalhos viram um reel de stories.
              A última linha incompleta fica centralizada: 1 coluna no celular, 2 no tablet, 3 no desktop. */}
          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-14 lg:gap-x-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger(0.15)}
          >
            {videoCategories.map((category) => (
              <motion.article
                key={category.id}
                id={`video-${category.id}`}
                variants={fadeUp}
                className="w-full text-center sm:w-[calc((100%_-_2.5rem)/2)] lg:w-[calc((100%_-_6rem)/3)]"
              >
                <VideoPlayer videos={category.videos} label={`Vídeo de exemplo: ${category.title}`} />
                <h3 className="mt-6 text-xl font-medium">
                  {category.title}
                  {category.videos.length > 1 && (
                    <span className="ml-2 align-middle font-sans text-sm font-normal text-rosewood">
                      {category.videos.length} vídeos
                    </span>
                  )}
                </h3>
                <p className="mx-auto mt-2 max-w-[40ch] text-cocoa">{category.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
