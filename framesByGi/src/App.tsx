import { AnimatePresence, motion } from 'framer-motion';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import SocialButton from './components/SocialButton';
import logoUrl from './assets/logo.svg';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Trabalhos', path: '/trabalhos' },
  { label: 'Serviços', path: '/servicos' }
];

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-sand text-mocha">
      <header className="sticky top-0 z-50 border-b border-[#dcb8aa] bg-ivory/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <img src={logoUrl} alt="Frames by Gi logo" className="h-14 w-14 rounded-3xl border border-rosewood/10 bg-ivory p-2" />
            <div>
              <span className="block text-xs uppercase tracking-[0.45em] text-rosewood">Frames by Gi</span>
              <span className="font-serif text-2xl font-semibold">Story Maker</span>
            </div>
          </div>

          <nav className="hidden gap-8 md:flex">
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

          <div className="flex items-center gap-3">
            <SocialButton label="Instagram" href="https://instagram.com" />
            <SocialButton label="WhatsApp" href="https://wa.me/" />
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="mx-auto max-w-7xl px-6 py-10"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/trabalhos" element={<Portfolio />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <footer className="border-t border-[#dcb8aa] bg-ivory px-6 py-8 text-center text-sm text-rosewood/90">
        <p>Frames by Gi — Stories elegantes para marcas, casamentos e momentos especiais.</p>
      </footer>
    </div>
  );
}

export default App;
