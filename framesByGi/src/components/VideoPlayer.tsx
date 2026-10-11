import { useEffect, useRef } from 'react';

interface VideoPlayerProps {
  src: string;
  label: string;
}

/**
 * Vídeo vertical (9:16) que só toca enquanto está visível na tela.
 * Se a pessoa pausar manualmente, ele não volta a tocar sozinho.
 */
export default function VideoPlayer({ src, label }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let pausedByUser = false;
    let pausingForVisibility = false;

    const onPause = () => {
      if (!pausingForVisibility) pausedByUser = true;
      pausingForVisibility = false;
    };
    const onPlay = () => {
      pausedByUser = false;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!pausedByUser && !prefersReducedMotion) void video.play().catch(() => undefined);
        } else if (!video.paused) {
          pausingForVisibility = true;
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    video.addEventListener('pause', onPause);
    video.addEventListener('play', onPlay);
    observer.observe(video);

    return () => {
      observer.disconnect();
      video.removeEventListener('pause', onPause);
      video.removeEventListener('play', onPlay);
    };
  }, []);

  return (
    <div className="print-frame mx-auto w-full max-w-[320px]">
      <video
        ref={videoRef}
        // #t=0.1 faz o navegador mostrar o primeiro quadro como capa antes de tocar.
        src={`${src}#t=0.1`}
        aria-label={label}
        className="aspect-[9/16] w-full bg-mocha object-cover"
        controls
        muted
        loop
        playsInline
        preload="metadata"
      >
        Seu navegador não suporta vídeo.
      </video>
    </div>
  );
}
