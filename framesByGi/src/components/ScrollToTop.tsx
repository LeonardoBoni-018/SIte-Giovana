import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MAX_FRAMES_WAITING_FOR_ANCHOR = 90;

/** Volta ao topo ao trocar de página, ou rola até a âncora quando a URL tem #hash. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    // A página nova pode ainda estar entrando (transição de rota), então espera a âncora existir.
    const id = decodeURIComponent(hash.slice(1));
    let frame = 0;
    let request = 0;
    const tryScroll = () => {
      const target = document.getElementById(id);
      if (target) target.scrollIntoView();
      else if (frame++ < MAX_FRAMES_WAITING_FOR_ANCHOR) request = requestAnimationFrame(tryScroll);
    };
    tryScroll();

    return () => cancelAnimationFrame(request);
  }, [pathname, hash]);

  return null;
}
