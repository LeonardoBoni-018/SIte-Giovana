export const site = {
  name: 'Frames by Gi',
  tagline: 'Fotos e vídeos mobile',
  instagram: {
    handle: '@frames_by_gi',
    url: 'https://www.instagram.com/frames_by_gi/'
  },
  whatsapp: {
    url: 'https://wa.me/5518996048185'
  }
} as const;

export const navItems = [
  { label: 'Início', path: '/' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Trabalhos', path: '/trabalhos' }
] as const;
