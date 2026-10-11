import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'inverse';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary: 'bg-rosewood text-ivory hover:bg-mocha',
  secondary: 'border border-rosewood/40 text-mocha hover:border-rosewood hover:bg-ivory',
  inverse: 'bg-ivory text-mocha hover:bg-sand'
};

/** Link com aparência de botão. Links externos abrem em nova aba; internos usam o router. */
export default function ButtonLink({ href, children, variant = 'primary', icon, className = '' }: ButtonLinkProps) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-2.5 text-[0.95rem] font-medium transition-colors duration-200 active:scale-[0.98] ${variants[variant]} ${className}`;
  const content = (
    <>
      {icon}
      {children}
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
