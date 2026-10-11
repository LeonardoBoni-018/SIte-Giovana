import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiInstagram, FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { navItems, site } from '../../config/site';
import LogoBadge from '../LogoBadge';

const MOBILE_MENU_ID = 'menu-mobile';

export default function Header() {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => setIsMenuOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setIsMenuOpen(false);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-ivory/95 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 ${
        isScrolled || isMenuOpen ? 'border-line shadow-[0_6px_20px_-12px_rgba(75,52,36,0.25)]' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:h-[4.5rem] sm:px-8">
        <Link to="/" className="group flex items-center gap-3" aria-label={`${site.name}, página inicial`}>
          <LogoBadge className="h-10 w-10 transition-transform duration-700 ease-out-expo group-hover:-rotate-12 sm:h-11 sm:w-11" />
          <span className="leading-tight">
            <span className="block font-serif text-lg font-medium text-mocha sm:text-xl">{site.name}</span>
            <span className="block text-xs text-cocoa sm:text-[0.8rem]">{site.tagline}</span>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `group relative block px-4 py-2 text-[0.95rem] transition-colors ${
                      isActive ? 'text-mocha' : 'text-cocoa hover:text-mocha'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {/* Linha clara que cresce no hover; a ativa desliza por cima dela. */}
                      <span className="absolute inset-x-4 -bottom-px h-px origin-left scale-x-0 bg-line transition-transform duration-500 ease-out-expo group-hover:scale-x-100" />
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute inset-x-4 -bottom-px h-px bg-rosewood"
                          transition={{ type: 'spring', stiffness: 420, damping: 38 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-1 md:flex">
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group grid h-10 w-10 place-items-center rounded-full text-rosewood transition-colors hover:bg-sand hover:text-mocha"
          >
            <FiInstagram size={19} aria-hidden className="transition-transform duration-500 ease-out-expo group-hover:scale-110" />
          </a>
          <a
            href={site.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group ml-2 inline-flex min-h-10 items-center gap-2 rounded-full bg-rosewood px-4 text-sm font-medium text-ivory transition-[background-color,transform,box-shadow] duration-300 ease-out-expo hover:-translate-y-0.5 hover:bg-mocha hover:shadow-print"
          >
            <FaWhatsapp size={17} aria-hidden className="transition-transform duration-500 ease-out-expo group-hover:-rotate-12 group-hover:scale-110" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls={MOBILE_MENU_ID}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="-mr-2 grid h-11 w-11 place-items-center rounded-full text-mocha md:hidden"
        >
          {isMenuOpen ? <FiX size={22} aria-hidden /> : <FiMenu size={22} aria-hidden />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            id={MOBILE_MENU_ID}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden md:hidden"
          >
            <nav aria-label="Principal" className="border-t border-line px-5 pb-6 pt-2">
              <ul>
                {navItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      end={item.path === '/'}
                      className={({ isActive }) =>
                        `block border-b border-line/70 py-3.5 font-serif text-2xl ${isActive ? 'text-rosewood' : 'text-mocha'}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-rosewood/40 text-mocha"
                >
                  <FiInstagram size={18} aria-hidden />
                  Instagram
                </a>
                <a
                  href={site.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-rosewood text-ivory"
                >
                  <FaWhatsapp size={18} aria-hidden />
                  WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
