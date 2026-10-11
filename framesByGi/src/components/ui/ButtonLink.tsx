import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

type Variant = 'primary' | 'secondary' | 'inverse';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  /** Mostra uma seta à direita que avança no hover. */
  arrow?: boolean;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary: 'bg-rosewood text-ivory hover:bg-mocha hover:shadow-print',
  secondary: 'border border-rosewood/40 text-mocha hover:border-rosewood hover:bg-ivory hover:shadow-print',
  inverse: 'bg-ivory text-mocha hover:bg-sand hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.45)]'
};

/** Link com aparência de botão. Links externos abrem em nova aba; internos usam o router. */
export default function ButtonLink({ href, children, variant = 'primary', icon, arrow = false, className = '' }: ButtonLinkProps) {
  const classes = `group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-2.5 text-[0.95rem] font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-out-expo hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${variants[variant]} ${className}`;
  const content = (
    <>
      {icon && (
        <span className="inline-flex transition-transform duration-500 ease-out-expo group-hover:-rotate-12 group-hover:scale-110">
          {icon}
        </span>
      )}
      {children}
      {arrow && (
        <FiArrowRight
          size={17}
          aria-hidden
          className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href.startsWith('/')) {
    return (
      <Link to={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {content}
    </a>
  );
}
