import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface GalleryCarouselProps {
  images: string[];
  alt?: string;
}

function shuffleArray<T>(array: T[]) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function GalleryCarousel({ images, alt = 'Portfolio image' }: GalleryCarouselProps) {
  const shuffledImages = useMemo(() => shuffleArray(images), [images]);
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => setActiveIndex((current) => (current - 1 + shuffledImages.length) % shuffledImages.length);
  const goNext = () => setActiveIndex((current) => (current + 1) % shuffledImages.length);

  return (
    <div className="mx-auto w-full max-w-[640px] space-y-3 sm:space-y-4">
      <div className="relative overflow-hidden rounded-[20px] sm:rounded-[32px] border border-white/80 bg-ivory/90 p-1 shadow-[0_20px_50px_rgba(75,52,36,0.08)]">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] sm:rounded-[30px] bg-[#f7f0e7]">
          <motion.img
            key={shuffledImages[activeIndex]}
            src={shuffledImages[activeIndex]}
            alt={`${alt} ${activeIndex + 1}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="h-full w-full object-contain"
          />
        </div>

        <button
          type="button"
          onClick={goPrev}
          aria-label="Imagem anterior"
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 sm:p-3 text-rosewood shadow-lg shadow-rosewood/10 transition hover:bg-rosewood/10"
        >
          <FiChevronLeft size={16} sm:size={20} />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Próxima imagem"
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 sm:p-3 text-rosewood shadow-lg shadow-rosewood/10 transition hover:bg-rosewood/10"
        >
          <FiChevronRight size={16} sm:size={20} />
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {shuffledImages.map((_, index) => (
          <button
            key={`${_}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Ir para imagem ${index + 1}`}
            className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition ${index === activeIndex ? 'bg-rosewood' : 'bg-rosewood/30 hover:bg-rosewood/60'}`}
          />
        ))}
      </div>
    </div>
  );
}
