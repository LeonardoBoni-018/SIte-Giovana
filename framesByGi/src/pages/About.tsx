import { FiCheck } from 'react-icons/fi';
import ContactCta from '../components/ContactCta';
import PhotoImage from '../components/gallery/PhotoImage';
import SectionHeader from '../components/SectionHeader';
import { usePageTitle } from '../hooks/usePageTitle';
import { photo } from '../lib/photos';

const portrait = photo('aboutMe1.png');
const portraitDetail = photo('aboutMe2.png');

const steps = [
  'Contato inicial e escolha do serviço que melhor atende às suas necessidades.',
  'Alinhamento das expectativas.',
  'Captação dos elementos visuais.',
  'Edição minuciosa.',
  'Feedbacks e ajustes finais.',
  'Entrega dos arquivos finalizados em alta resolução.'
];

const reasons = [
  'Olhar sensível para os detalhes.',
  'Compromisso com a qualidade e a originalidade.',
  'Atendimento personalizado e proximidade com o cliente.',
  'Entregas rápidas e um acabamento visual que eleva sua presença digital com suavidade e estilo.'
];

export default function About() {
  usePageTitle('Sobre');

  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-14 px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:pb-24 lg:pt-20">
        <div className="relative mx-auto w-full max-w-[420px] pb-16 pr-12 sm:pr-20">
          <figure className="print-frame">
            <PhotoImage
              photo={portrait}
              alt="Retrato segurando um celular e uma luz de LED, os equipamentos de trabalho"
              sizes="(min-width: 1024px) 360px, 80vw"
              loading="eager"
              className="aspect-[3/4] w-full object-cover"
            />
          </figure>
          <figure className="print-frame absolute bottom-0 right-0 w-[46%]">
            <PhotoImage
              photo={portraitDetail}
              alt="Retrato com o celular e a luz de LED erguidos"
              sizes="(min-width: 1024px) 190px, 40vw"
              className="aspect-[3/4] w-full object-cover"
            />
          </figure>
        </div>

        <div>
          <h1 className="text-4xl font-medium leading-tight sm:text-5xl">Sobre o Frames by Gi</h1>
          <div className="mt-8 max-w-[60ch] space-y-5 text-cocoa">
            <p className="font-serif text-xl leading-relaxed text-mocha sm:text-[1.35rem]">
              O Frames by Gi nasceu do meu olhar para aquilo que muitas vezes passa despercebido: os detalhes, os
              sentimentos e a essência de cada momento.
            </p>
            <p>
              O que começou como uma paixão por registrar memórias se transformou em um trabalho feito com propósito,
              criando fotos e vídeos que permitem reviver histórias de forma leve, natural e verdadeira.
            </p>
            <p>
              Hoje, cada registro carrega um pouco da minha dedicação, do meu cuidado e da minha forma de enxergar a
              beleza nos momentos reais.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ivory">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <SectionHeader
            title="Como eu trabalho"
            description="Do briefing à entrega, cada etapa é pensada para garantir um resultado que vá além do visual."
          />
          <ol className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step} className="flex gap-5 border-t border-line pt-5">
                <span className="font-serif text-3xl leading-none text-rosewood" aria-hidden>
                  {index + 1}
                </span>
                <p className="text-mocha">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:py-24">
        <SectionHeader title="Por que escolher o Frames by Gi?" />
        <ul className="space-y-5">
          {reasons.map((reason) => (
            <li key={reason} className="flex gap-4 text-lg text-mocha">
              <FiCheck className="mt-1.5 shrink-0 text-rosewood" size={20} aria-hidden />
              {reason}
            </li>
          ))}
        </ul>
      </section>

      <ContactCta />
    </>
  );
}
