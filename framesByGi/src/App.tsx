import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import SocialButton from './components/SocialButton';
import LogoBadge from './components/LogoBadge';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Trabalhos', path: '/trabalhos' }
];

function App() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-sand text-mocha font-sans">
      <header className="sticky top-0 z-50 border-b border-[#dcb8aa] bg-ivory/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <LogoBadge size={44} className="sm:size-56" />
            <div className="flex flex-col items-center text-center">
              <span className="hidden sm:block text-xs uppercase tracking-[0.45em] text-rosewood">Frames by Gi</span>
              <span className="font-serif text-lg sm:text-2xl font-semibold">Fotos e vídeos mobile</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-rosewood md:hidden"
            aria-label="Menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <nav className="hidden gap-6 lg:gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${isActive ? 'text-mocha' : 'text-rosewood/90 hover:text-mocha'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <SocialButton label="Instagram" href="https://www.instagram.com/frames_by_gi/" />
            <SocialButton label="WhatsApp" href="https://wa.me/5518996048185" />
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-[#dcb8aa] bg-ivory/95"
            >
              <nav className="flex flex-col px-4 py-4 gap-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/'}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-base font-medium py-2 border-b border-rosewood/10 ${isActive ? 'text-mocha' : 'text-rosewood/90'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="flex flex-col gap-3 mt-4">
                  <SocialButton label="Instagram" href="https://www.instagram.com/frames_by_gi/" />
                  <SocialButton label="WhatsApp" href="https://wa.me/5518996048185" />
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/trabalhos" element={<Portfolio />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <footer className="border-t border-[#dcb8aa] bg-ivory px-4 sm:px-6 py-6 sm:py-8 text-center text-xs sm:text-sm text-rosewood/90">
        <p>Frames by Gi — Histórias visuais com leveza, sensibilidade e intenção.</p>
      </footer>
    </div>
  );
}

export default App;
