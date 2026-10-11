import { motion } from 'framer-motion';
import type { Photo } from '../lib/photos';
import PhotoImage from './gallery/PhotoImage';

interface HeroFramesProps {
  main: Photo;
  left: Photo;
  right: Photo;
}

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Três fotos em moldura de impressão, sobrepostas como cópias recém-reveladas.
 * Esse é o único momento animado do carregamento: cada moldura abre de baixo
 * para cima, como um obturador, enquanto a foto assenta levemente.
 */
export default function HeroFrames({ main, left, right }: HeroFramesProps) {
  const frames = [
    { photo: left, alt: 'Ensaio infantil ao ar livre', className: 'left-0 top-[14%] w-[44%]', delay: 0.35 },
    { photo: right, alt: 'Ensaio feminino com luz natural', className: 'right-0 top-[36%] w-[42%]', delay: 0.5 },
    { photo: main, alt: 'Casal em ensaio sob um arco de folhagens', className: 'left-[22%] top-0 z-10 w-[56%]', delay: 0.15 }
  ];

  return (
    <div className="relative mx-auto aspect-[25/24] w-full max-w-[520px]">
      {frames.map(({ photo, alt, className, delay }) => (
        <motion.figure
          key={photo.src}
          className={`print-frame absolute ${className}`}
          initial={{ clipPath: 'inset(100% 0% 0% 0%)', y: 24 }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)', y: 0 }}
          transition={{ duration: 1, delay, ease }}
        >
          <div className="aspect-[3/4] overflow-hidden">
            <motion.div
              className="h-full w-full"
              initial={{ scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, delay, ease }}
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
      ))}
    </div>
  );
}
