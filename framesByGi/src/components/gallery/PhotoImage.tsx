import type { ImgHTMLAttributes } from 'react';
import type { Photo } from '../../lib/photos';

interface PhotoImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'width' | 'height'> {
  photo: Photo;
  alt: string;
  /** Largura de exibição para o navegador escolher o arquivo certo do srcset. */
  sizes: string;
}

export default function PhotoImage({ photo, alt, sizes, loading = 'lazy', ...rest }: PhotoImageProps) {
  return (
    <img
      src={photo.src}
      srcSet={photo.srcSet}
      sizes={sizes}
      width={photo.width}
      height={photo.height}
      alt={alt}
      loading={loading}
      decoding="async"
      {...rest}
    />
  );
}
