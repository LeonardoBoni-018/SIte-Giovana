import ContactCta from '../components/ContactCta';
import PhotoGrid from '../components/gallery/PhotoGrid';
import SectionHeader from '../components/SectionHeader';
import VideoPlayer from '../components/VideoPlayer';
import { photoCategories, videoWorks } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';
import { usePageTitle } from '../hooks/usePageTitle';

const VIDEOS_ID = 'videos';

const sections = [
  ...photoCategories.map(({ id, title }) => ({ id, title })),
  { id: VIDEOS_ID, title: 'Vídeos' }
];
const sectionIds = sections.map(({ id }) => id);

export default function Portfolio() {
  usePageTitle('Trabalhos');
  const activeId = useActiveSection(sectionIds);

  return (
    <>
      <div className="mx-auto max-w-6xl px-5 pt-10 sm:px-8 sm:pt-14 lg:pt-20">
        <SectionHeader
          as="h1"
          title="Trabalhos"
          description="Ensaios, casamentos e vídeos feitos com o celular. Toque em uma foto para ampliar."
        />
      </div>

      <nav
        aria-label="Categorias"
        className="sticky top-16 z-30 mt-8 border-b border-line bg-sand/95 backdrop-blur-sm sm:top-[4.5rem]"
      >
        <ul className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] sm:px-8">
          {sections.map(({ id, title }) => {
            const isActive = id === activeId;
            return (
              <li key={id} className="shrink-0">
                <a
                  href={`#${id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`block rounded-full border px-4 py-1.5 text-sm transition-colors duration-200 ${
                    isActive
                      ? 'border-rosewood bg-rosewood text-ivory'
                      : 'border-line text-cocoa hover:border-rosewood hover:text-mocha'
                  }`}
                >
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
              <h2 id={`${category.id}-titulo`} className="text-2xl font-medium sm:text-3xl">
                {category.title}
              </h2>
              <p className="mt-3 max-w-[48ch] text-cocoa">{category.description}</p>
              <p className="mt-4 text-sm text-cocoa">{category.photos.length} fotos</p>
            </header>
            <PhotoGrid photos={category.photos} title={category.title} />
          </section>
        ))}
      </div>

      <section id={VIDEOS_ID} aria-labelledby="videos-titulo" className="border-t border-line bg-ivory">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
          <h2 id="videos-titulo" className="text-2xl font-medium sm:text-3xl">
            Vídeos
          </h2>
          <div className="mt-10 grid gap-14 sm:grid-cols-2 sm:gap-10">
            {videoWorks.map((video) => (
              <article key={video.id} className="text-center">
                <VideoPlayer src={video.src} label={`Vídeo de exemplo: ${video.title}`} />
                <h3 className="mt-6 text-xl font-medium">{video.title}</h3>
                <p className="mx-auto mt-2 max-w-[40ch] text-cocoa">{video.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
