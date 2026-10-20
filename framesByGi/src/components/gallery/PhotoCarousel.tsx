import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiMaximize2, FiPause, FiPlay, FiShuffle } from 'react-icons/fi';
import type { Photo } from '../../lib/photos';
import { developPhoto, stagger, useDevelopFrame } from '../../lib/motion';
import { shuffle } from '../../lib/random';
import Lightbox from './Lightbox';
import PhotoImage from './PhotoImage';

interface PhotoCarouselProps {
  photos: Photo[];
  title: string;
  /** Título e descrição da categoria, exibidos ao lado dos controles. */
  header: ReactNode;
}

/** Quanto tempo cada "página" fica na tela antes de passar para a próxima, como num story. */
const STORY_MS = 4500;

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Medidas da faixa: distância entre slides, quantos cabem inteiros por página e quantas páginas há. */
function measure(track: HTMLElement) {
  const items = Array.from(track.children) as HTMLElement[];
  if (items.length === 0) return { step: 1, perPage: 1, pages: 1 };
  const step = items.length > 1 ? items[1].offsetLeft - items[0].offsetLeft : items[0].offsetWidth;
  const style = getComputedStyle(track);
  const gap = parseFloat(style.columnGap) || 0;
  const content = track.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight) + gap;
  const perPage = Math.max(1, Math.round(content / step));
  return { step, perPage, pages: Math.ceil(items.length / perPage) };
}

/**
 * Galeria no formato de stories: as fotos aparecem inteiras, em páginas (2 no celular, 3 no
 * tablet, 4 no desktop), e uma barra segmentada no topo mostra em que página se está e enche
 * com o tempo até passar para a próxima. A ordem das fotos é sorteada a cada visita.
 */
export default function PhotoCarousel({ photos, title, header }: PhotoCarouselProps) {
  const frameVariants = useDevelopFrame();
  const [reducedMotion] = useState(prefersReducedMotion);
  const [order, setOrder] = useState(() => shuffle(photos));
  // Muda a cada embaralhada: remonta a faixa para as fotos "revelarem" de novo.
  const [round, setRound] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [playing, setPlaying] = useState(!reducedMotion);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [{ page, pages }, setPosition] = useState({ page: 0, pages: 1 });
  const trackRef = useRef<HTMLUListElement>(null);

  const updatePosition = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const { step, perPage, pages } = measure(track);
    const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 4;
    const current = atEnd ? pages - 1 : Math.round(track.scrollLeft / (step * perPage));
    setPosition({ page: Math.min(current, pages - 1), pages });
  }, []);

  const goTo = useCallback(
    (target: number) => {
      const track = trackRef.current;
      if (!track) return;
      const { step, perPage, pages } = measure(track);
      const next = (target + pages) % pages;
      const max = track.scrollWidth - track.clientWidth;
      track.scrollTo({ left: Math.min(next * perPage * step, max), behavior: reducedMotion ? 'auto' : 'smooth' });
    },
    [reducedMotion]
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updatePosition();
    const resizeObserver = new ResizeObserver(updatePosition);
    resizeObserver.observe(track);
    const visibilityObserver = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.5
    });
    visibilityObserver.observe(track);
    return () => {
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
    };
  }, [round, updatePosition]);

  const reshuffle = () => {
    setOrder(shuffle(photos));
    setRound((value) => value + 1);
    trackRef.current?.scrollTo({ left: 0 });
  };

  const autoplay = playing && !reducedMotion;
  const paused = hovering || !visible || openIndex !== null;

  return (
    <div className="min-w-0" role="region" aria-roledescription="carrossel" aria-label={`Fotos de ${title}`}>
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10">
        <div className="min-w-0">{header}</div>
        <div className="flex shrink-0 items-center gap-2">
          <ControlButton label="Fotos anteriores" onClick={() => goTo(page - 1)}>
            <FiChevronLeft size={20} aria-hidden />
          </ControlButton>
          <ControlButton label="Próximas fotos" onClick={() => goTo(page + 1)}>
            <FiChevronRight size={20} aria-hidden />
          </ControlButton>
          <button
            type="button"
            onClick={reshuffle}
            aria-label={`Embaralhar as fotos de ${title}`}
            className="group ml-1 inline-flex h-10 items-center gap-2 rounded-full border border-line px-4 text-sm text-mocha transition-colors duration-300 hover:border-rosewood hover:bg-rosewood hover:text-ivory"
          >
            <FiShuffle size={16} aria-hidden className="transition-transform duration-500 ease-out-expo group-hover:rotate-180" />
            Embaralhar
          </button>
        </div>
      </div>

      {/* Barra de stories: um segmento por página; o atual enche com o tempo. */}
      <div className="mt-7 flex items-center gap-3">
        <ol className="flex flex-1 gap-1.5" aria-label="Páginas de fotos">
          {Array.from({ length: pages }, (_, index) => {
            const isCurrent = index === page;
            return (
              <li key={index} className="flex-1">
                <button
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Página ${index + 1} de ${pages}`}
                  aria-current={isCurrent ? 'step' : undefined}
                  className="group block w-full py-2"
                >
                  <span className="relative block h-[3px] overflow-hidden rounded-full bg-line transition-colors group-hover:bg-caramel">
                    {(index < page || (isCurrent && !autoplay)) && <span className="absolute inset-0 bg-rosewood" />}
                    {isCurrent && autoplay && (
                      <span
                        key={`${round}-${page}`}
                        className="story-fill absolute inset-0 origin-left bg-rosewood"
                        style={{ animationDuration: `${STORY_MS}ms`, animationPlayState: paused ? 'paused' : 'running' }}
                        onAnimationEnd={() => goTo(page + 1)}
                      />
                    )}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
        {!reducedMotion && (
          <button
            type="button"
            onClick={() => setPlaying((value) => !value)}
            aria-label={playing ? 'Pausar a passagem automática' : 'Retomar a passagem automática'}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-mocha transition-colors hover:bg-rosewood hover:text-ivory"
          >
            {playing ? <FiPause size={15} aria-hidden /> : <FiPlay size={15} aria-hidden />}
          </button>
        )}
      </div>

      <motion.ul
        key={round}
        ref={trackRef}
        onScroll={updatePosition}
        onPointerEnter={(event) => event.pointerType === 'mouse' && setHovering(true)}
        onPointerLeave={() => setHovering(false)}
        onFocus={() => setHovering(true)}
        onBlur={() => setHovering(false)}
        className="-mx-3 mt-3 grid snap-x snap-mandatory auto-cols-[calc((100%_-_0.75rem)/2)] grid-flow-col gap-3 overflow-x-auto scroll-px-3 px-3 pb-8 pt-2 [scrollbar-width:none] sm:auto-cols-[calc((100%_-_2rem)/3)] sm:gap-4 lg:auto-cols-[calc((100%_-_3.75rem)/4)] lg:gap-5 [&::-webkit-scrollbar]:hidden"
        initial="hidden"
        {...(round === 0 ? { whileInView: 'visible', viewport: { once: true, amount: 0.15 } } : { animate: 'visible' })}
        variants={stagger(0.08)}
      >
        {order.map((photo, index) => (
          <motion.li key={photo.src} variants={frameVariants} className="snap-start">
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Ampliar ${title}, foto ${index + 1} de ${order.length}`}
              className="print-frame group block w-full cursor-zoom-in transition-[transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-[0_2px_4px_rgba(75,52,36,0.1),0_24px_48px_-12px_rgba(75,52,36,0.35)]"
            >
              <span className="relative block aspect-[3/4] overflow-hidden bg-sand">
                <motion.span className="block h-full w-full" variants={developPhoto}>
                  <PhotoImage
                    photo={photo}
                    alt=""
                    sizes="(min-width: 1152px) 270px, (min-width: 1024px) 23vw, (min-width: 640px) 31vw, 47vw"
                    draggable={false}
                    className="h-full w-full select-none object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                  />
                </motion.span>
                <span className="pointer-events-none absolute right-2.5 top-2.5 grid h-9 w-9 scale-75 place-items-center rounded-full bg-ivory/90 text-mocha opacity-0 transition-[opacity,transform] duration-500 ease-out-expo group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100">
                  <FiMaximize2 size={15} aria-hidden />
                </span>
              </span>
            </button>
          </motion.li>
        ))}
      </motion.ul>

      <Lightbox
        photos={order}
        title={title}
        index={openIndex}
        onIndexChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />
    </div>
  );
}

function ControlButton({ label, onClick, children }: { label: string; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-mocha transition-colors duration-300 hover:border-rosewood hover:bg-rosewood hover:text-ivory"
    >
      {children}
    </button>
  );
}
