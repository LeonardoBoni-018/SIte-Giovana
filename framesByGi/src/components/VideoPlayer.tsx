import { useEffect, useRef, useState, type TouchEvent } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface VideoPlayerProps {
  /** Um ou mais vídeos da mesma categoria. Com mais de um, o player vira um "reel" de stories. */
  videos: string[];
  label: string;
}

const SWIPE_THRESHOLD = 50;

/**
 * Vídeo vertical (9:16) que só toca enquanto está visível na tela.
 * Se a pessoa pausar manualmente, ele não volta a tocar sozinho.
 *
 * Com vários vídeos, funciona como stories: uma barra segmentada no topo mostra quantos
 * trabalhos há e o progresso do atual; ao terminar um vídeo, o próximo começa. Dá para trocar
 * pelas setas, tocando num segmento ou deslizando para o lado no celular.
 */
export default function VideoPlayer({ videos, label }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const isReel = videos.length > 1;

  const visibleRef = useRef(false);
  const pausedByUserRef = useRef(false);
  const pausingForVisibilityRef = useRef(false);
  // Trocar o vídeo recarrega o elemento; essa pausa não conta como pausa da pessoa.
  const switchingRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const touchStartXRef = useRef<number | null>(null);

  const goTo = (target: number) => {
    switchingRef.current = true;
    setIndex((target + videos.length) % videos.length);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    reducedMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const onPause = () => {
      if (!pausingForVisibilityRef.current && !switchingRef.current && !video.ended) pausedByUserRef.current = true;
      pausingForVisibilityRef.current = false;
    };
    const onPlay = () => {
      pausedByUserRef.current = false;
    };
    const onLoaded = () => {
      switchingRef.current = false;
    };
    const onTimeUpdate = () => {
      if (video.duration) setProgress(video.currentTime / video.duration);
    };
    const onEnded = () => {
      switchingRef.current = true;
      setIndex((current) => (current + 1) % videos.length);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          if (!pausedByUserRef.current && !reducedMotionRef.current) void video.play().catch(() => undefined);
        } else if (!video.paused) {
          pausingForVisibilityRef.current = true;
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    video.addEventListener('pause', onPause);
    video.addEventListener('play', onPlay);
    video.addEventListener('loadeddata', onLoaded);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('ended', onEnded);
    observer.observe(video);

    return () => {
      observer.disconnect();
      video.removeEventListener('pause', onPause);
      video.removeEventListener('play', onPlay);
      video.removeEventListener('loadeddata', onLoaded);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('ended', onEnded);
    };
  }, [videos.length]);

  // Ao trocar de vídeo, segue tocando se estava tocando (e se está na tela).
  const firstRenderRef = useRef(true);
  useEffect(() => {
    setProgress(0);
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    const video = videoRef.current;
    if (video && visibleRef.current && !pausedByUserRef.current && !reducedMotionRef.current) {
      void video.play().catch(() => undefined);
    }
  }, [index]);

  const onTouchStart = (event: TouchEvent) => {
    touchStartXRef.current = event.touches[0].clientX;
  };
  const onTouchEnd = (event: TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartXRef.current;
    touchStartXRef.current = null;
    if (deltaX < -SWIPE_THRESHOLD) goTo(index + 1);
    else if (deltaX > SWIPE_THRESHOLD) goTo(index - 1);
  };

  return (
    <div
      className="print-frame relative mx-auto w-full max-w-[320px]"
      {...(isReel && { onTouchStart, onTouchEnd })}
    >
      <video
        ref={videoRef}
        // #t=0.1 faz o navegador mostrar o primeiro quadro como capa antes de tocar.
        src={`${videos[index]}#t=0.1`}
        aria-label={isReel ? `${label}, vídeo ${index + 1} de ${videos.length}` : label}
        className="aspect-[9/16] w-full bg-mocha object-cover"
        controls
        muted
        loop={!isReel}
        playsInline
        preload="metadata"
      >
        Seu navegador não suporta vídeo.
      </video>

      {isReel && (
        <>
          {/* Véu escuro no topo para a barra de stories aparecer sobre qualquer vídeo. */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-mocha/60 to-transparent"
          />
          <ol className="absolute inset-x-2.5 top-1.5 flex gap-1" aria-label="Vídeos desta categoria">
            {videos.map((_, item) => (
              <li key={item} className="flex-1">
                <button
                  type="button"
                  onClick={() => goTo(item)}
                  aria-label={`Vídeo ${item + 1} de ${videos.length}`}
                  aria-current={item === index ? 'step' : undefined}
                  className="block w-full py-1.5"
                >
                  <span className="block h-[3px] overflow-hidden rounded-full bg-ivory/40">
                    <span
                      className="block h-full rounded-full bg-ivory transition-[width] duration-300 ease-linear"
                      style={{ width: `${item < index ? 100 : item === index ? progress * 100 : 0}%` }}
                    />
                  </span>
                </button>
              </li>
            ))}
          </ol>
          <ReelArrow side="left" onClick={() => goTo(index - 1)} />
          <ReelArrow side="right" onClick={() => goTo(index + 1)} />
        </>
      )}
    </div>
  );
}

function ReelArrow({ side, onClick }: { side: 'left' | 'right'; onClick: () => void }) {
  const isLeft = side === 'left';
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isLeft ? 'Vídeo anterior' : 'Próximo vídeo'}
      className={`absolute top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-ivory/90 text-mocha shadow-print backdrop-blur-sm transition-colors duration-300 hover:bg-rosewood hover:text-ivory ${
        isLeft ? 'left-2' : 'right-2'
      }`}
    >
      {isLeft ? <FiChevronLeft size={20} aria-hidden /> : <FiChevronRight size={20} aria-hidden />}
    </button>
  );
}
