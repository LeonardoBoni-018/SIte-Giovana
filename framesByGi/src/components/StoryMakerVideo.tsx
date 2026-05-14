interface StoryMakerVideoProps {
  src: string;
  alt?: string;
}

export default function StoryMakerVideo({ src, alt = 'StoryMaker video' }: StoryMakerVideoProps) {
  return (
    <div className="mx-auto w-full max-w-[640px] rounded-[20px] sm:rounded-[32px] border border-white/80 bg-ivory/90 p-1 shadow-[0_20px_50px_rgba(75,52,36,0.08)]">
      <video
        src={src}
        controls
        autoPlay
        muted
        loop
        playsInline
        className="h-[280px] sm:h-[350px] md:h-[420px] w-full rounded-[18px] sm:rounded-[30px] object-cover"
      >
        Seu navegador não suporta vídeo.
      </video>
    </div>
  );
}
