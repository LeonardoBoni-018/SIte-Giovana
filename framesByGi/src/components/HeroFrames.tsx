import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import type { Photo } from '../lib/photos';
import { easeOutExpo } from '../lib/motion';
import PhotoImage from './gallery/PhotoImage';

interface HeroFramesProps {
  main: Photo;
  left: Photo;
  right: Photo;
}

/**
 * Três fotos em moldura de impressão, sobrepostas como cópias recém-reveladas.
 * No carregamento cada moldura abre de baixo para cima, como um obturador.
 * Ao rolar, cada uma sobe numa velocidade diferente (parallax), dando profundidade;
 * no hover, a moldura se ergue e inclina levemente, como uma foto pega da mesa.
 */
export default function HeroFrames({ main, left, right }: HeroFramesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const depth = reduceMotion ? 0 : 1;
  const mainY = useTransform(scrollYProgress, [0, 1], [0, -30 * depth]);
  const leftY = useTransform(scrollYProgress, [0, 1], [0, -90 * depth]);
  const rightY = useTransform(scrollYProgress, [0, 1], [0, -150 * depth]);

  const frames = [
    { photo: left, alt: 'Ensaio infantil ao ar livre', className: 'left-0 top-[14%] w-[44%]', y: leftY, tilt: -2.5, delay: 0.35 },
    { photo: right, alt: 'Ensaio feminino com luz natural', className: 'right-0 top-[36%] w-[42%]', y: rightY, tilt: 2.5, delay: 0.5 },
    { photo: main, alt: 'Casal em ensaio sob um arco de folhagens', className: 'left-[22%] top-0 z-10 w-[56%]', y: mainY, tilt: 0, delay: 0.15 }
  ];

  return (
    <div ref={containerRef} className="relative mx-auto aspect-[25/24] w-full max-w-[520px]">
      {frames.map(({ photo, alt, className, y, tilt, delay }) => (
        <motion.div key={photo.src} className={`group absolute hover:z-20 ${className}`} style={{ y }}>
          {/* Camada separada para o hover, para a volta não herdar o atraso da animação de entrada. */}
          <motion.div
            whileHover={{ y: -10, rotate: tilt, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <motion.figure
              className="print-frame transition-shadow duration-500 group-hover:shadow-[0_2px_4px_rgba(75,52,36,0.1),0_24px_48px_-12px_rgba(75,52,36,0.35)]"
              initial={reduceMotion ? false : { clipPath: 'inset(100% 0% 0% 0%)', y: 24 }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)', y: 0, transitionEnd: { clipPath: 'none' } }}
              transition={{ duration: 1, delay, ease: easeOutExpo }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <motion.div
                  className="h-full w-full"
                  initial={{ scale: 1.12 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.4, delay, ease: easeOutExpo }}
                >
                  <PhotoImage
                    photo={photo}
                    alt={alt}
                    sizes="(min-width: 1024px) 300px, 56vw"
                    loading="eager"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.figure>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
