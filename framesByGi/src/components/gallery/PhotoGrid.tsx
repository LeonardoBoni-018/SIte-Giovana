import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMaximize2 } from 'react-icons/fi';
import type { Photo } from '../../lib/photos';
import { developPhoto, stagger, useDevelopFrame } from '../../lib/motion';
import Lightbox from './Lightbox';
import PhotoImage from './PhotoImage';

interface PhotoGridProps {
  photos: Photo[];
  title: string;
}

export default function PhotoGrid({ photos, title }: PhotoGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const frameVariants = useDevelopFrame();
  // Evita foto sozinha na última linha: 3 ou 6 fotos em 3 colunas, 4 fotos em 4 colunas.
  const columns = photos.length % 3 === 0 ? 'sm:grid-cols-3' : 'lg:grid-cols-4';

  return (
    <>
      <motion.ul
        className={`grid grid-cols-2 gap-2 sm:gap-3 ${columns}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger(0.1)}
      >
        {photos.map((photo, index) => (
          <motion.li key={photo.src} variants={frameVariants}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Ampliar ${title}, foto ${index + 1} de ${photos.length}`}
              className="group relative block aspect-[3/4] w-full cursor-zoom-in overflow-hidden rounded-sm bg-ivory"
            >
              <motion.span className="block h-full w-full" variants={developPhoto}>
                <PhotoImage
                  photo={photo}
                  alt=""
                  sizes="(min-width: 1024px) 240px, (min-width: 640px) 33vw, 48vw"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
                />
              </motion.span>
              <span className="pointer-events-none absolute inset-0 bg-mocha/0 transition-colors duration-500 group-hover:bg-mocha/20" />
              <span className="pointer-events-none absolute right-2.5 top-2.5 grid h-9 w-9 scale-75 place-items-center rounded-full bg-ivory/90 text-mocha opacity-0 transition-[opacity,transform] duration-500 ease-out-expo group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100">
                <FiMaximize2 size={15} aria-hidden />
              </span>
            </button>
          </motion.li>
        ))}
      </motion.ul>

      <Lightbox
        photos={photos}
        title={title}
        index={openIndex}
        onIndexChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />
    </>
  );
}
