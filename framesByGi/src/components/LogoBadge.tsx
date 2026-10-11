import logoUrl from '../assets/brand/logo.png';

interface LogoBadgeProps {
  className?: string;
}

export default function LogoBadge({ className = 'h-12 w-12' }: LogoBadgeProps) {
  return (
    <span className={`inline-flex shrink-0 overflow-hidden rounded-full border border-line bg-ivory ${className}`}>
      <img src={logoUrl} alt="" width={500} height={500} className="h-full w-full scale-125 object-contain" />
    </span>
  );
}
