import { useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import type { Photo } from '../lib/photos';
import { easeOutExpo } from '../lib/motion';
import PhotoImage from './gallery/PhotoImage';

export interface StorySlide {
  photo: Photo;
  caption: string;
  sticker: string;
}

interface StoryPhoneProps {
  slides: StorySlide[];
  /** Duração de cada story, em segundos. */
  duration?: number;
}

/**
 * Celular com stories passando, como no Instagram: barras segmentadas no topo que enchem uma a uma,
 * toque nas laterais para voltar/avançar e segurar para pausar. A legenda sobe e o adesivo "pula"
 * a cada troca. Só anda enquanto está visível; com "menos movimento" fica parado e navega por toque.
 */
export default function StoryPhone({ slides, duration = 4.5 }: StoryPhoneProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [held, setHeld] = useState(false);

  const go = (target: number) => setIndex((target + slides.length) % slides.length);
  const slide = slides[index];
  const running = inView && !held && !reduceMotion;
  // Animações infinitas só rodam com o celular na tela: fora dela gastariam bateria à toa.
  const ambient = inView && !reduceMotion;

  return (
    <div ref={rootRef} className="relative mx-auto w-[min(260px,72vw)] sm:w-[280px]">
      {/* Cartão flutuante que acompanha o celular. */}
      <motion.span
        aria-hidden
        className="absolute -right-1 top-[28%] z-20 rounded-xl bg-ivory px-2.5 py-1.5 text-[0.7rem] font-medium text-mocha shadow-print min-[400px]:-right-6 min-[400px]:px-3 min-[400px]:py-2 min-[400px]:text-xs sm:-right-12"
        animate={ambient ? { y: [0, -8, 0], rotate: [3, 5, 3] } : undefined}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        Toque nas laterais
      </motion.span>

      <motion.div
        className="relative aspect-[9/19] rounded-[2.6rem] bg-mocha p-2 shadow-print"
        animate={ambient ? { y: [0, -10, 0], rotate: [-1, 0.5, -1] } : undefined}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="relative h-full w-full select-none overflow-hidden rounded-[2.1rem] bg-caramel"
          onPointerDown={() => setHeld(true)}
          onPointerUp={() => setHeld(false)}
          onPointerLeave={() => setHeld(false)}
          onPointerCancel={() => setHeld(false)}
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.12 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: easeOutExpo }}
            >
              <PhotoImage
                photo={slide.photo}
                alt=""
                sizes="280px"
                fetchPriority="low"
                loading="eager"
                draggable={false}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Véus no topo e embaixo para barra, legenda e resposta aparecerem sobre qualquer foto. */}
          <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-mocha/60 to-transparent" />
          <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-mocha/80 to-transparent" />

          <span aria-hidden className="absolute left-1/2 top-2 z-30 h-4 w-16 -translate-x-1/2 rounded-full bg-mocha" />

          <ol className="absolute inset-x-3 top-7 z-20 flex gap-1" aria-label="Progresso dos stories">
            {slides.map((_, item) => (
              <li key={item} className="h-[3px] flex-1 overflow-hidden rounded-full bg-ivory/40">
                {item < index && <span className="block h-full bg-ivory" />}
                {item === index && (
                  <span
                    key={index}
                    className={`block h-full origin-left bg-ivory ${reduceMotion ? '' : 'story-fill'}`}
                    style={{
                      animationDuration: `${duration}s`,
                      animationPlayState: running ? 'running' : 'paused',
                      transform: reduceMotion ? 'none' : undefined
                    }}
                    onAnimationEnd={() => go(index + 1)}
                  />
                )}
              </li>
            ))}
          </ol>

          <div className="absolute left-3 top-[3.1rem] z-20 flex items-center gap-2 text-xs font-medium text-ivory">
            <span className="h-6 w-6 rounded-full border-2 border-rosewood bg-ivory" aria-hidden />
            framesbygi
          </div>

          <AnimatePresence mode="wait">
            <motion.span
              key={`sticker-${index}`}
              className="absolute right-4 top-24 z-20 rounded-full bg-ivory px-3 py-1 text-xs font-medium text-rosewood shadow-print"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 6 }}
              transition={{ type: 'spring', stiffness: 380, damping: 14, delay: 0.5 }}
            >
              {slide.sticker}
            </motion.span>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`caption-${index}`}
              className="absolute inset-x-4 bottom-14 z-20 font-serif text-2xl leading-tight text-ivory"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOutExpo }}
            >
              {slide.caption}
            </motion.p>
          </AnimatePresence>

          {/* Corações subindo, como as reações de quem assiste. */}
          {ambient &&
            [0, 1, 2].map((heart) => (
              <motion.span
                key={heart}
                aria-hidden
                className="absolute bottom-14 right-4 z-20 text-lg text-ivory"
                style={{ right: 16 + heart * 14 }}
                animate={{ y: [0, -150], x: [0, heart % 2 ? 10 : -10], opacity: [0, 1, 0] }}
                transition={{ duration: 3, delay: heart * 1, repeat: Infinity, ease: 'easeIn' }}
              >
                ♥
              </motion.span>
            ))}

          <span
            aria-hidden
            className="absolute inset-x-3 bottom-3 z-20 flex h-8 items-center rounded-full border border-ivory/70 px-4 text-xs text-ivory"
          >
            Enviar mensagem
          </span>

          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Story anterior"
            className="absolute inset-y-0 left-0 z-10 w-2/5 cursor-pointer"
          />
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Próximo story"
            className="absolute inset-y-0 right-0 z-10 w-2/5 cursor-pointer"
          />
        </div>
      </motion.div>
    </div>
  );
}
