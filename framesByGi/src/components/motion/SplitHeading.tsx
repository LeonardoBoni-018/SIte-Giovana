import { motion, type Variants } from 'framer-motion';
import { easeOutExpo, stagger } from '../../lib/motion';

const wordRise: Variants = {
  hidden: { y: '110%' },
  visible: { y: 0, transition: { duration: 0.9, ease: easeOutExpo } }
};

interface SplitHeadingProps {
  text: string;
  className?: string;
  /** Atraso antes da primeira palavra, em segundos. */
  delay?: number;
}

/**
 * Título em que cada palavra sobe por trás de uma máscara, uma após a outra.
 * As palavras continuam como texto real, separadas por espaço, então leitores de tela leem a frase normalmente.
 */
export default function SplitHeading({ text, className, delay = 0 }: SplitHeadingProps) {
  const words = text.split(' ');

  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="visible"
      variants={stagger(0.045, delay)}
    >
      {words.map((word, index) => (
        <span key={index}>
          {/* O padding inferior evita cortar letras com descendente (g, p, ç) dentro da máscara. */}
          <span className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
            <motion.span className="inline-block" variants={wordRise}>
              {word}
            </motion.span>
          </span>
          {index < words.length - 1 && ' '}
        </span>
      ))}
    </motion.h1>
  );
}
