import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

/** Botão flutuante que aparece depois de rolar uma tela e meia. */
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > window.innerHeight * 1.5);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          // Sem `behavior`: segue o scroll-behavior do html, que já é desligado com prefers-reduced-motion.
          onClick={() => {
            window.scrollTo({ top: 0 });
            // O botão some ao chegar no topo; leva o foco para o primeiro link do cabeçalho em vez de perdê-lo.
            document.querySelector<HTMLElement>('header a')?.focus({ preventScroll: true });
          }}
          aria-label="Voltar ao topo"
          className="group fixed bottom-5 right-5 z-30 grid h-12 w-12 place-items-center rounded-full border border-line bg-ivory/90 text-mocha shadow-print backdrop-blur-sm transition-colors hover:bg-rosewood hover:text-ivory sm:bottom-8 sm:right-8"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ type: 'spring', stiffness: 380, damping: 26 }}
          whileTap={{ scale: 0.92 }}
        >
          <FiArrowUp size={20} aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
