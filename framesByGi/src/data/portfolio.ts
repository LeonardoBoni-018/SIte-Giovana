import { photo, type Photo } from '../lib/photos';
import storyMakerVideo from '../assets/videos/storyMaker.mp4';
import videoMakerVideo from '../assets/videos/videoMaker.mp4';

export interface PhotoCategory {
  id: string;
  title: string;
  description: string;
  photos: Photo[];
  /** Índice da foto usada como capa na página inicial. */
  coverIndex: number;
}

export interface VideoWork {
  id: string;
  title: string;
  description: string;
  src: string;
}

export const photoCategories: PhotoCategory[] = [
  {
    id: 'pre-wedding',
    coverIndex: 2,
    title: 'Pré-wedding',
    description:
      'Registros de casal com clima romântico e espontâneo, feitos para eternizar o amor antes do grande dia.',
    photos: ['preWedding1.png', 'preWedding2.png', 'preWedding3.png', 'preWedding4.png'].map(photo)
  },
  {
    id: 'ensaio-feminino',
    coverIndex: 2,
    title: 'Ensaio feminino',
    description:
      'Sessões voltadas para a expressão, confiança e estilo feminino, com um toque leve e natural.',
    photos: ['ensaioFeminino1.png', 'ensaioFeminino2.png', 'ensaioFeminino3.png', 'ensaioFeminino4.png'].map(photo)
  },
  {
    id: 'ensaio-infantil',
    coverIndex: 4,
    title: 'Ensaio infantil',
    description:
      'Clima lúdico e afetivo, registrando brincadeiras e momentos espontâneos de cuidado.',
    photos: [
      'ensaioCrianca1.png',
      'ensaioCrianca2.png',
      'ensaioCrianca3.jpeg',
      'ensaioCrianca4.png',
      'ensaioCrianca5.png',
      'ensaioCrianca6.png'
    ].map(photo)
  },
  {
    id: 'ensaio-familia',
    coverIndex: 1,
    title: 'Ensaio de família',
    description:
      'Fotos que capturam a conexão entre gerações, com carinho e composição visual suave para o seu acervo.',
    photos: ['ensaioFamilia5.png', 'ensaioFamilia6.png', 'ensaioFamilia7.png'].map(photo)
  },
  {
    id: 'casamento',
    coverIndex: 0,
    title: 'Casamento',
    description:
      'Cobertura de cerimônias e celebrações com estética sofisticada, equilibrando emoção e detalhes memoráveis.',
    photos: ['casamento1.png', 'casamento2.png', 'casamento3.png', 'casamento4.png'].map(photo)
  },
  {
    id: 'ensaio-posicionamento',
    coverIndex: 2,
    title: 'Ensaio de posicionamento',
    description:
      'Imagens autorais para fortalecer sua presença digital, reforçando sua marca com estilo e personalidade.',
    photos: [
      'ensaioPosicionamento1.png',
      'ensaioPosicionamento2.png',
      'ensaioPosicionamento3.png',
      'ensaioPosicionamento4.png'
    ].map(photo)
  }
];

export const videoWorks: VideoWork[] = [
  {
    id: 'storymaker',
    title: 'Storymaker',
    description:
      'Stories autorais com narrativa visual pensada para engajar e apresentar o seu estilo.',
    src: storyMakerVideo
  },
  {
    id: 'videomaker',
    title: 'Videomaker',
    description:
      'Vídeos com cortes dinâmicos e acabamento profissional para divulgar serviços nas redes sociais.',
    src: videoMakerVideo
  }
];
