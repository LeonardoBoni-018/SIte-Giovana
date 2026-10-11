import ButtonLink from '../components/ui/ButtonLink';
import { usePageTitle } from '../hooks/usePageTitle';

export default function NotFound() {
  usePageTitle('Página não encontrada');

  return (
    <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 py-20 text-center">
      <h1 className="text-4xl font-medium">Página não encontrada</h1>
      <p className="mt-4 text-cocoa">O endereço pode ter mudado. Veja os trabalhos ou volte para o início.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">Ir para o início</ButtonLink>
        <ButtonLink href="/trabalhos" variant="secondary">
          Ver trabalhos
        </ButtonLink>
      </div>
    </section>
  );
}
