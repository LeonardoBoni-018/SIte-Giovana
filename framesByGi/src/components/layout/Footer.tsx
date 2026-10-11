import { Link } from 'react-router-dom';
import { FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { navItems, site } from '../../config/site';
import LogoBadge from '../LogoBadge';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex items-start gap-4">
          <LogoBadge className="h-14 w-14" />
          <div>
            <p className="font-serif text-xl text-mocha">{site.name}</p>
            <p className="mt-1 max-w-[32ch] text-sm text-cocoa">
              Histórias visuais com leveza, sensibilidade e intenção.
            </p>
          </div>
        </div>

        <nav aria-label="Rodapé">
          <p className="text-sm font-medium text-mocha">Páginas</p>
          <ul className="mt-3 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="link-underline text-cocoa transition-colors hover:text-mocha">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-medium text-mocha">Contato</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-cocoa transition-colors hover:text-mocha"
              >
                <FiInstagram aria-hidden />
                <span className="link-underline">{site.instagram.handle}</span>
              </a>
            </li>
            <li>
              <a
                href={site.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-cocoa transition-colors hover:text-mocha"
              >
                <FaWhatsapp aria-hidden />
                <span className="link-underline">WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-line/70 px-5 py-5 text-center text-xs text-cocoa">
        © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
