import { FiInstagram, FiPhone } from 'react-icons/fi';

interface SocialButtonProps {
  label: string;
  href: string;
}

const iconMap = {
  Instagram: <FiInstagram size={18} />,
  WhatsApp: <FiPhone size={18} />
};

export default function SocialButton({ label, href }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-rosewood/15 bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-rosewood transition hover:-translate-y-0.5 hover:bg-rosewood/10"
    >
      {iconMap[label as keyof typeof iconMap]}
      {label}
    </a>
  );
}
