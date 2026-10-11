import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../lib/motion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Atraso em segundos. */
  delay?: number;
}

/** Bloco que sobe e aparece quando entra na tela. Use para títulos, textos e seções. */
export default function Reveal({ children, className, delay }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}
