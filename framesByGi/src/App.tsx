import { lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import BackToTop from './components/motion/BackToTop';
import ScrollProgress from './components/motion/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

// Só a Home vai no pacote inicial; Trabalhos (galerias e vídeos) e Sobre carregam quando visitadas.
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Portfolio = lazy(() => import('./pages/Portfolio'));

export default function App() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#conteudo"
        className="sr-only z-50 rounded-full bg-mocha px-4 py-2 text-ivory focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
      <ScrollToTop />
      <ScrollProgress />
      <Header />

      <AnimatePresence mode="wait">
        <motion.main
          id="conteudo"
          key={location.pathname}
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.25 } }}
          exit={{ opacity: 0, transition: { duration: 0.12 } }}
        >
          <Suspense fallback={null}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/trabalhos" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </motion.main>
      </AnimatePresence>

      <Footer />
      <BackToTop />
    </div>
  );
}
