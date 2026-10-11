import { useReducedMotion, type Variants } from 'framer-motion';

/** Desacelera de forma longa e suave, como um obturador fechando. Mesmo valor de `ease-out-expo` no Tailwind. */
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

/** Anima uma vez, quando ~20% do elemento entra na tela. */
export const viewportOnce = { once: true, amount: 0.2 } as const;

/**
 * Sobe e aparece. `custom` recebe um atraso em segundos.
 * Sem `custom` o atraso fica em aberto: um `delay` aqui sobrescreveria o do `stagger` do pai.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay?: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutExpo, ...(delay !== undefined && { delay }) }
  })
};

/** Pai que só orquestra: revela os filhos um após o outro. */
export function stagger(gap = 0.08, delay = 0): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: gap, delayChildren: delay } }
  };
}

/**
 * Moldura que "revela" de baixo para cima, como uma foto saindo da impressora.
 * No fim o recorte é removido, senão ele cortaria a sombra e o anel de foco.
 */
export const developFrame: Variants = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 1, ease: easeOutExpo },
    transitionEnd: { clipPath: 'none' }
  }
};

/**
 * `developFrame`, ou nada quando o usuário pede menos movimento:
 * o MotionConfig desliga transforms, mas não o recorte (clip-path).
 */
export function useDevelopFrame(): Variants | undefined {
  return useReducedMotion() ? undefined : developFrame;
}

/** Foto dentro da moldura assentando do zoom para o tamanho real. */
export const developPhoto: Variants = {
  hidden: { scale: 1.15 },
  visible: { scale: 1, transition: { duration: 1.4, ease: easeOutExpo } }
};
