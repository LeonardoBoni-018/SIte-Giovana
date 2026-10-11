// Formato retornado por vite-imagetools com `as=picture`.
interface Picture {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
}

export interface Photo {
  src: string;
  srcSet: string;
  width: number;
  height: number;
}

// Cada foto é convertida para WebP em três larguras no build (vite-imagetools),
// então os PNGs originais nunca chegam ao navegador.
const pictures = import.meta.glob<Picture>('../assets/photos/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
  query: { w: '480;960;1200', format: 'webp', withoutEnlargement: '', as: 'picture' }
});

const byFileName = new Map(
  Object.entries(pictures).map(([path, picture]) => [path.split('/').pop()!, picture])
);

export function photo(fileName: string): Photo {
  const picture = byFileName.get(fileName);
  if (!picture) {
    throw new Error(`Foto não encontrada em src/assets/photos: ${fileName}`);
  }

  return {
    src: picture.img.src,
    srcSet: picture.sources.webp ?? `${picture.img.src} ${picture.img.w}w`,
    width: picture.img.w,
    height: picture.img.h
  };
}
