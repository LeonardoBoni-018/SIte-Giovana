import SectionHeader from '../components/SectionHeader';
import GalleryCarousel from '../components/GalleryCarousel';
import StoryMakerVideo from '../components/StoryMakerVideo';
import VideoMakerVideo from '../components/VideoMakerVideo';
import preWedding1 from '../assets/preWedding1.png';
import preWedding2 from '../assets/preWedding2.png';
import preWedding3 from '../assets/preWedding3.png';
import preWedding4 from '../assets/preWedding4.png';
import ensaioFeminino1 from '../assets/ensaioFeminino1.png';
import ensaioFeminino2 from '../assets/ensaioFeminino2.png';
import ensaioFeminino3 from '../assets/ensaioFeminino3.png';
import ensaioFeminino4 from '../assets/ensaioFeminino4.png';
import ensaioCrianca1 from '../assets/ensaioCrianca1.png';
import ensaioCrianca2 from '../assets/ensaioCrianca2.png';
import ensaioCrianca3 from '../assets/ensaioCrianca3.jpeg';
import ensaioCrianca4 from '../assets/ensaioCrianca4.png';
import ensaioCrianca5 from '../assets/ensaioCrianca5.png';
import ensaioCrianca6 from '../assets/ensaioCrianca6.png';
import ensaioFamilia5 from '../assets/ensaioFamilia5.png';
import ensaioFamilia6 from '../assets/ensaioFamilia6.png';
import ensaioFamilia7 from '../assets/ensaioFamilia7.png';
import casamento1 from '../assets/casamento1.png';
import casamento2 from '../assets/casamento2.png';
import casamento3 from '../assets/casamento3.png';
import casamento4 from '../assets/casamento4.png';
import ensaioPosicionamento1 from '../assets/ensaioPosicionamento1.png';
import ensaioPosicionamento2 from '../assets/ensaioPosicionamento2.png';
import ensaioPosicionamento3 from '../assets/ensaioPosicionamento3.png';
import ensaioPosicionamento4 from '../assets/ensaioPosicionamento4.png';
import storyMakerVideo from '../assets/storyMaker.mp4';
import videoMakerVideo from '../assets/videoMaker.mp4';

const portfolioSections = [
  {
    title: 'Pré-Wedding',
    description:
      'Registros de casal com clima romântico e espontâneo, feitos para eternizar o amor antes do grande dia.',
    images: [preWedding1, preWedding2, preWedding3, preWedding4]
  },
  {
    title: 'Ensaio feminino',
    description:
      'Sessões voltadas para a expressão, confiança e estilo feminino, com um toque leve e natural.',
    images: [ensaioFeminino1, ensaioFeminino2, ensaioFeminino3, ensaioFeminino4]
  },
  {
    title: 'Ensaio de criança',
    description:
      'Ensaio infantil com clima lúdico e afetivo, registrando brincadeiras e momentos espontâneos de cuidado.',
    images: [ensaioCrianca1, ensaioCrianca2, ensaioCrianca3, ensaioCrianca4, ensaioCrianca5, ensaioCrianca6]
  },
  {
    title: 'Ensaio de família',
    description:
      'Fotos que capturam a conexão entre gerações, com carinho e composição visual suave para o seu acervo.',
    images: [ensaioFamilia5, ensaioFamilia6, ensaioFamilia7]
  },
  {
    title: 'Casamento',
    description:
      'Cobertura de cerimônias e celebrações com estética sofisticada, batonando emoção e detalhes memoráveis.',
    images: [casamento1, casamento2, casamento3, casamento4]
  },
  {
    title: 'Ensaio de posicionamento',
    description:
      'Imagens autorais para fortalecer sua presença digital, reforçando sua marca com estilo e personalidade.',
    images: [ensaioPosicionamento1, ensaioPosicionamento2, ensaioPosicionamento3, ensaioPosicionamento4]
  }
];

export default function Portfolio() {
  return (
    <section className="space-y-16">
      <SectionHeader
        title="Trabalhos"
        subtitle="Portfólio"
        // description="Carrosséis de fotos por tipo de trabalho, com visual elegante e apresentações interativas." 
      />

      <div className="grid gap-12 lg:grid-cols-2">
        {portfolioSections.map((section) => (
          <article key={section.title} className="rounded-[40px] border border-white/80 bg-white/90 p-8 shadow-[0_20px_60px_rgba(75,52,36,0.08)]">
            <div className="mb-8 text-center">
              <span className="inline-flex rounded-full bg-rosewood/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-rosewood">
                {section.title}
              </span>
              {/* <h2 className="section-title mx-auto mt-4 max-w-[16rem] text-3xl font-semibold text-mocha">{section.title}</h2> */}
              <p className="mt-4 mx-auto max-w-2xl text-sm leading-7 text-[#5c4232]">{section.description}</p>
            </div>

            <GalleryCarousel images={section.images} alt={section.title} />
          </article>
        ))}

        <article className="rounded-[40px] border border-white/80 bg-white/90 p-8 shadow-[0_20px_60px_rgba(75,52,36,0.08)]">
          <div className="mb-8 text-center">
            <span className="inline-flex rounded-full bg-rosewood/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-rosewood">
              StoryMaker
            </span>
            {/* <h2 className="section-title mx-auto mt-4 max-w-[16rem] text-3xl font-semibold text-mocha">
              StoryMaker
            </h2> */}
            <p className="mt-4 mx-auto max-w-2xl text-sm leading-7 text-[#5c4232]">
              Vídeo autoral StoryMaker com narrativa visual pensada para engajar e apresentar o estilo criativo do trabalho.
            </p>
          </div>

          <StoryMakerVideo src={storyMakerVideo} />
        </article>

        <article className="rounded-[40px] border border-white/80 bg-white/90 p-8 shadow-[0_20px_60px_rgba(75,52,36,0.08)]">
          <div className="mb-8 text-center">
            <span className="inline-flex rounded-full bg-rosewood/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-rosewood">
              VideoMaker
            </span>
            <p className="mt-4 mx-auto max-w-2xl text-sm leading-7 text-[#5c4232]">
              Vídeo VideoMaker com cortes dinâmicos e acabamento profissional para divulgar serviços em redes sociais.
            </p>
          </div>

          <VideoMakerVideo src={videoMakerVideo} />
        </article>
      </div>

      {/* <div className="rounded-[40px] border border-white/80 bg-white/90 p-10 text-center text-sm leading-7 text-[#5c4232] shadow-[0_20px_60px_rgba(75,52,36,0.08)]">
        Cada carrossel apresenta as fotos em ordem aleatória, para garantir uma experiência visual dinâmica e destacar a variedade de cada estilo de trabalho.
      </div> */}
    </section>
  );
}
