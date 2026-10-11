interface SectionHeaderProps {
  title: string;
  description?: string;
  as?: 'h1' | 'h2';
  className?: string;
}

export default function SectionHeader({ title, description, as: Heading = 'h2', className = '' }: SectionHeaderProps) {
  return (
    <header className={`max-w-2xl ${className}`}>
      <Heading className="text-3xl font-medium leading-tight sm:text-4xl lg:text-[2.75rem]">{title}</Heading>
      {description && <p className="mt-4 max-w-[60ch] text-cocoa">{description}</p>}
    </header>
  );
}
