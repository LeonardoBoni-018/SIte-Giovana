import { motion, useScroll, useSpring } from 'framer-motion';

/** Linha fina no topo da tela que acompanha quanto da página já foi lido. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[45] h-0.5 origin-left bg-rosewood"
      style={{ scaleX }}
    />
  );
}
