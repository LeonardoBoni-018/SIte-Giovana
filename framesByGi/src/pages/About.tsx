import { FiCamera, FiHeart, FiStar } from 'react-icons/fi';
import FeatureCard from '../components/FeatureCard';
import SectionHeader from '../components/SectionHeader';
import aboutMe1 from '../assets/aboutMe1.png';
import aboutMe2 from '../assets/aboutMe2.png';

// const highlights = [
//   {
//     title: 'Olhar para os detalhes',
//     description: 'Cada foto e vídeo é pensado para registrar não só o momento, mas também a emoção que existe em cada detalhe.',
//     icon: <FiHeart size={20} />
//   },
//   {
//     title: 'Histórias com alma',
//     description: 'Conteúdos que comunicam emoção e criam conexões reais com quem acompanha seu perfil.',
//     icon: <FiStar size={20} />
//   },
//   {
//     title: 'Experiência visual',
//     description: 'Estética suave, tipografia refinada e harmonização de cores para um resultado premium.',
//     icon: <FiCamera size={20} />
//   }
// ];

export default function About() {
  return (
    <section className="space-y-10 sm:space-y-14 lg:space-y-16">
      <SectionHeader
        title="Sobre o Frames by Gi"
        subtitle="Minha história"
        description=""
      />

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-5 sm:space-y-6 rounded-[24px] sm:rounded-[40px] border border-white/80 bg-white/90 p-6 sm:p-10 card-shadow">
          <p className="text-xs sm:text-sm leading-6 sm:leading-7 text-[#5c4232]">
            O Frames by Gi nasceu do meu olhar para aquilo que muitas vezes passa despercebido: os detalhes, os sentimentos e a essência de cada momento.
          </p>
          <p className="text-xs sm:text-sm leading-6 sm:leading-7 text-[#5c4232]">
            O que começou como uma paixão por registrar memórias se transformou em um trabalho feito com propósito — criando fotos e vídeos que permitem reviver histórias de forma leve, natural e verdadeira.
          </p>
          <p className="text-xs sm:text-sm leading-6 sm:leading-7 text-[#5c4232]">
            Hoje, cada registro carrega um pouco da minha dedicação, do meu cuidado e da minha forma de enxergar a beleza nos momentos reais.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
          <div className="relative group overflow-hidden rounded-[24px] sm:rounded-[36px] border border-white/80 bg-white/90 shadow-[0_22px_50px_rgba(75,52,36,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(75,52,36,0.14)]">
            <img
              src={aboutMe1}
              alt="Sobre o Frames by Gi"
              className="h-64 sm:h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#5c4232]/90 to-transparent px-4 sm:px-5 py-3 sm:py-4 text-white">
              <p className="text-xs uppercase tracking-[0.4em]">Estilo pessoal</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[24px] sm:rounded-[36px] border border-white/80 bg-white/90 shadow-[0_22px_50px_rgba(75,52,36,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(75,52,36,0.14)]">
            <img
              src={aboutMe2}
              alt="Fotografia autoral"
              className="h-64 sm:h-full w-full object-cover transition duration-500 hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#5c4232]/90 to-transparent px-4 sm:px-5 py-3 sm:py-4 text-white">
              <p className="text-xs uppercase tracking-[0.4em]">Narrativa visual</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[24px] sm:rounded-[40px] border border-white/80 bg-white/90 p-6 sm:p-10 card-shadow">
          <h3 className="section-title text-2xl sm:text-3xl font-semibold text-mocha">Como eu trabalho</h3>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-6 sm:leading-7 text-[#5c4232]">
            Do briefing à entrega, cada etapa é pensada e estruturada para garantir um resultado que vá além do visual:
          </p>
          <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-xs sm:text-sm leading-6 sm:leading-7 text-[#5c4232]">
            <li>• Contato inicial com o cliente e escolha do serviço que melhor atenda às suas necessidades;</li>
            <li>• Alinhamento das expectativas;</li>
            <li>• Captação dos elementos visuais;</li>
            <li>• Edição minuciosa;</li>
            <li>• Feedbacks e ajustes finais;</li>
            <li>• Entrega dos arquivos finalizados em alta resolução.</li>
            
          </ul>
        </div>

        <div className="rounded-[24px] sm:rounded-[40px] border border-white/80 bg-white/90 p-6 sm:p-10 card-shadow">
          <h3 className="section-title text-2xl sm:text-3xl font-semibold text-mocha">Por que escolher o Frames by Gi?</h3>
          <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-xs sm:text-sm leading-6 sm:leading-7 text-[#5c4232] list-disc list-inside">
            <li>Olhar sensível para os detalhes;</li>
            <li>Compromisso com a qualidade e a originalidade;</li>
            <li>Atendimento personalizado e proximidade com o cliente;</li>
            <li>Entregas rápidas e um acabamento visual que eleva sua presença digital com suavidade e estilo.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
