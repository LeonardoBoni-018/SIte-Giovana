import { photo, type Photo } from '../lib/photos';
import storyMakerVideo from '../assets/videos/storyMaker.mp4';
import videoMakerVideo from '../assets/videos/videoMaker.mp4';
import sameDayVideo from '../assets/videos/sameDay.mp4';

/** Gera a lista `prefixo1.ext`, `prefixo2.ext`… para fotos numeradas em sequência. */
function numbered(prefix: string, from: number, to: number, ext = 'jpeg'): string[] {
  return Array.from({ length: to - from + 1 }, (_, i) => `${prefix}${from + i}.${ext}`);
}

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
    photos: ['preWedding1.png', 'preWedding2.png', 'preWedding3.png', 'preWedding4.png', ...numbered('preWedding', 5, 10)].map(photo)
  },
  {
    id: 'making-of-noiva',
    coverIndex: 2,
    title: 'Making of da noiva',
    description:
      'Os detalhes e a emoção da preparação: o vestido, os acessórios e os abraços antes de entrar na cerimônia.',
    photos: numbered('makingOfNoiva', 1, 5).map(photo)
  },
  {
    id: 'casamento',
    coverIndex: 0,
    title: 'Casamento',
    description:
      'Cobertura de cerimônias e celebrações com estética sofisticada, equilibrando emoção e detalhes memoráveis.',
    photos: [...numbered('casamento', 1, 4, 'png'), ...numbered('casamento', 5, 10)].map(photo)
  },
  {
    id: 'ensaio-gestante',
    coverIndex: 3,
    title: 'Ensaio gestante',
    description:
      'A espera registrada com delicadeza, em meio à natureza e com a família que está crescendo junto.',
    photos: numbered('ensaioGestante', 1, 10).map(photo)
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
    id: 'aniversario-infantil',
    coverIndex: 3,
    title: 'Aniversário infantil',
    description:
      'A festa contada pelos olhos das crianças: a decoração, os amigos, a família e cada sorriso na hora do parabéns.',
    photos: numbered('aniversarioInfantil', 1, 9).map(photo)
  },
  {
    id: 'batizado',
    coverIndex: 4,
    title: 'Batizado',
    description:
      'A celebração da fé em família: a igreja, os padrinhos, os avós e os gestos espontâneos de quem é o centro do dia.',
    photos: numbered('batizado', 1, 7).map(photo)
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
    id: 'ensaio-posicionamento',
    coverIndex: 2,
    title: 'Ensaio de posicionamento',
    description:
      'Imagens autorais para fortalecer sua presença digital, reforçando sua marca com estilo e personalidade.',
    photos: [...numbered('ensaioPosicionamento', 1, 4, 'png'), ...numbered('ensaioPosicionamento', 5, 8)].map(photo)
  },
  {
    id: 'palestras',
    coverIndex: 2,
    title: 'Palestras',
    description:
      'Cobertura de palestras e eventos corporativos, com registros de quem fala e da presença no palco.',
    photos: numbered('palestra', 1, 5).map(photo)
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
  },
  {
    id: 'same-day',
    title: 'Same day',
    description:
      'O vídeo da cerimônia editado e entregue no mesmo dia, para os noivos reviverem e compartilharem ainda durante a festa.',
    src: sameDayVideo
  }
];
