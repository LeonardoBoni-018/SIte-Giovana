import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, type PanInfo, type Variants } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { easeOutExpo } from '../../lib/motion';
import type { Photo } from '../../lib/photos';
import PhotoImage from './PhotoImage';

interface LightboxProps {
  photos: Photo[];
  title: string;
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

const SWIPE_THRESHOLD = 60;

/**
 * Funções de `custom`: a foto que sai é um elemento antigo, então só lê a direção atual
 * através do `custom` do AnimatePresence. Ao abrir (direção 0) a foto cresce levemente;
 * ao navegar, desliza para o lado.
 */
const slide: Variants = {
  enter: (direction: number) => ({ opacity: 0, x: direction * 48, scale: direction === 0 ? 0.94 : 1 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (direction: number) => ({ opacity: 0, x: direction * -48, transition: { duration: 0.18 } })
};

export default function Lightbox({ photos, title, index, onIndexChange, onClose }: LightboxProps) {
  const isOpen = index !== null;
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [direction, setDirection] = useState(0);

  // Zera a direção ao fechar, para a próxima abertura usar a animação de entrada e não a de navegação.
  useEffect(() => {
    if (!isOpen) setDirection(0);
  }, [isOpen]);

  const go = (step: number) => {
    if (index === null) return;
    setDirection(step);
    onIndexChange((index + step + photos.length) % photos.length);
  };

  // Ref com os handlers atuais, para o listener de teclado não precisar ser recriado a cada foto.
  const keyHandlerRef = useRef<(event: KeyboardEvent) => void>(() => {});
  keyHandlerRef.current = (event) => {
    if (event.key === 'Escape') onClose();
    if (event.key === 'ArrowRight') go(1);
    if (event.key === 'ArrowLeft') go(-1);
    if (event.key === 'Tab') trapFocus(event, dialogRef.current);
  };

  // Ao abrir: trava a rolagem do fundo e move o foco. Ao fechar: devolve o foco à miniatura.
  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => keyHandlerRef.current(event);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [isOpen]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) go(1);
    else if (info.offset.x > SWIPE_THRESHOLD) go(-1);
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${title}, foto ${index + 1} de ${photos.length}`}
          className="fixed inset-0 z-50 flex flex-col bg-mocha [&_:focus-visible]:outline-ivory"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex items-center justify-between px-4 py-3 text-ivory sm:px-6">
            <p className="text-sm">
              <span className="font-serif text-base">{title}</span>
              <span className="ml-3 tabular-nums text-sand/80">
                {index + 1} / {photos.length}
              </span>
            </p>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-ivory/10"
            >
              <FiX size={24} aria-hidden />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 sm:px-20">
            {/* Sem initial={false}: este AnimatePresence monta a cada abertura e a entrada deve tocar. */}
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div
                key={index}
                custom={direction}
                className="flex h-full w-full items-center justify-center"
                variants={slide}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: easeOutExpo }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragEnd={onDragEnd}
              >
                <PhotoImage
                  photo={photos[index]}
                  alt={`${title}, foto ${index + 1}`}
                  sizes="(min-width: 768px) 70vh, 100vw"
                  loading="eager"
                  draggable={false}
                  className="h-auto max-h-full w-auto max-w-full select-none rounded-sm object-contain shadow-print"
                />
              </motion.div>
            </AnimatePresence>

            <NavButton side="left" onClick={() => go(-1)} />
            <NavButton side="right" onClick={() => go(1)} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

function NavButton({ side, onClick }: { side: 'left' | 'right'; onClick: () => void }) {
  const isLeft = side === 'left';
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isLeft ? 'Foto anterior' : 'Próxima foto'}
      className={`absolute top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-ivory/10 text-ivory transition-colors hover:bg-ivory/20 sm:grid ${
        isLeft ? 'left-4' : 'right-4'
      }`}
    >
      {isLeft ? <FiChevronLeft size={24} aria-hidden /> : <FiChevronRight size={24} aria-hidden />}
    </button>
  );
}

function trapFocus(event: KeyboardEvent, container: HTMLElement | null) {
  const focusable = container?.querySelectorAll<HTMLElement>('button:not([disabled])');
  if (!focusable?.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}
