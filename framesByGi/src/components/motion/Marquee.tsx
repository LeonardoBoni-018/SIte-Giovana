interface MarqueeProps {
  items: readonly string[];
}

/**
 * Faixa de texto rolando continuamente. O conteúdo é duplicado para o loop não ter emenda;
 * a segunda cópia fica escondida de leitores de tela. Pausa ao passar o mouse.
 */
export default function Marquee({ items }: MarqueeProps) {
  const track = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <span className="px-6 font-serif text-2xl italic text-caramel sm:px-8 sm:text-3xl">{item}</span>
          <span className="text-sm text-rosewood/60" aria-hidden>
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="group overflow-hidden border-t border-line py-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] sm:py-6">
      <div className="marquee-track flex w-max group-hover:[animation-play-state:paused]">
        {track(false)}
        {track(true)}
      </div>
    </div>
  );
}
