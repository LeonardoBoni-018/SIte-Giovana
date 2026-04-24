import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className="rounded-[28px] border border-white/80 bg-white/90 p-7 shadow-[0_18px_50px_rgba(75,52,36,0.08)] transition hover:-translate-y-0.5 hover:border-rosewood/40">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rosewood/10 text-rosewood">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-mocha">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#5c4232]">{description}</p>
    </article>
  );
}
