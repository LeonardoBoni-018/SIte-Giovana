import { FaWhatsapp } from 'react-icons/fa';
import { site } from '../config/site';
import ButtonLink from './ui/ButtonLink';

export default function ContactCta() {
  return (
    <section className="bg-mocha text-ivory">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-end md:justify-between lg:py-20">
        <div className="max-w-xl">
          <h2 className="text-3xl font-medium leading-tight text-ivory sm:text-4xl">Vamos eternizar o seu momento?</h2>
          <p className="mt-4 text-sand/90">
            Conte o que você imagina e eu te envio um orçamento pelo WhatsApp.
          </p>
        </div>
        <ButtonLink href={site.whatsapp.url} variant="inverse" icon={<FaWhatsapp size={20} aria-hidden />}>
          Pedir orçamento
        </ButtonLink>
      </div>
    </section>
  );
}
