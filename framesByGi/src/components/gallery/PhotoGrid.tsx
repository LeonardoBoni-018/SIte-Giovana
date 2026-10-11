import { useState } from 'react';
import type { Photo } from '../../lib/photos';
import Lightbox from './Lightbox';
import PhotoImage from './PhotoImage';

interface PhotoGridProps {
  photos: Photo[];
  title: string;
}

export default function PhotoGrid({ photos, title }: PhotoGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // Evita foto sozinha na última linha: 3 ou 6 fotos em 3 colunas, 4 fotos em 4 colunas.
  const columns = photos.length % 3 === 0 ? 'sm:grid-cols-3' : 'lg:grid-cols-4';

  return (
    <>
      <ul className={`grid grid-cols-2 gap-2 sm:gap-3 ${columns}`}>
        {photos.map((photo, index) => (
          <li key={photo.src}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Ampliar ${title}, foto ${index + 1} de ${photos.length}`}
              className="group relative block aspect-[3/4] w-full overflow-hidden rounded-sm bg-ivory"
            >
              <PhotoImage
                photo={photo}
                alt=""
                sizes="(min-width: 1024px) 240px, (min-width: 640px) 33vw, 48vw"
                className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
              />
              <span className="pointer-events-none absolute inset-0 bg-mocha/0 transition-colors duration-300 group-hover:bg-mocha/10" />
            </button>
          </li>
        ))}
      </ul>

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
