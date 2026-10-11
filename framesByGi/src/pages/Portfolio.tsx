import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ContactCta from '../components/ContactCta';
import PhotoGrid from '../components/gallery/PhotoGrid';
import Reveal from '../components/motion/Reveal';
import SectionHeader from '../components/SectionHeader';
import VideoPlayer from '../components/VideoPlayer';
import { photoCategories, videoWorks } from '../data/portfolio';
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
          description="Ensaios, casamentos e vídeos feitos com o celular. Toque em uma foto para ampliar."
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
            className="grid gap-6 border-b border-line py-12 last:border-b-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] lg:gap-14 lg:py-16"
          >
            <header className="lg:sticky lg:top-40 lg:self-start">
              <Reveal>
                <h2 id={`${category.id}-titulo`} className="text-2xl font-medium sm:text-3xl">
                  {category.title}
                </h2>
                <p className="mt-3 max-w-[48ch] text-cocoa">{category.description}</p>
                <p className="mt-4 text-sm text-cocoa">{category.photos.length} fotos</p>
              </Reveal>
            </header>
            <PhotoGrid photos={category.photos} title={category.title} />
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
          <motion.div
            className="mt-10 grid gap-14 sm:grid-cols-2 sm:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger(0.15)}
          >
            {videoWorks.map((video) => (
              <motion.article key={video.id} variants={fadeUp} className="text-center">
                <VideoPlayer src={video.src} label={`Vídeo de exemplo: ${video.title}`} />
                <h3 className="mt-6 text-xl font-medium">{video.title}</h3>
                <p className="mx-auto mt-2 max-w-[40ch] text-cocoa">{video.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
