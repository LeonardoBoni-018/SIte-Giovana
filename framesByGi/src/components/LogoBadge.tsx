import logoUrl from '../assets/logo.png';

interface LogoBadgeProps {
  size?: number;
  className?: string;
  alt?: string;
}

export default function LogoBadge({ size = 56, className = '', alt = 'Frames by Gi logo' }: LogoBadgeProps) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-3xl border border-rosewood/10 bg-ivory p-2 ${className}`}
      style={{ width: size, height: size }}
    >
      <img src={logoUrl} alt={alt} className="h-full w-full object-contain" />
    </div>
  );
}
