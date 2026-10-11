# Frames by Gi

Site de apresentação do Frames by Gi (fotografia mobile, videomaker e storymaker), feito com React, Vite, Tailwind CSS e Framer Motion.

## Como usar

```bash
npm install     # instala as dependências
npm run dev     # servidor de desenvolvimento
npm run build   # checagem de tipos + build de produção
npm run preview # serve o build localmente
```

## Estrutura

- `src/config/site.ts`: nome, links de Instagram e WhatsApp e itens do menu. Altere os contatos só aqui.
- `src/data/portfolio.ts`: categorias de fotos, foto de capa de cada uma e vídeos.
- `src/pages`: páginas (Início, Sobre, Trabalhos e página não encontrada).
- `src/components`: componentes reutilizáveis
  - `layout/`: cabeçalho e rodapé
  - `gallery/`: grade de fotos, lightbox e imagem responsiva
  - `ui/`: botões
- `src/hooks`: título da página e seção ativa na página de trabalhos.
- `src/lib/photos.ts`: carrega as fotos otimizadas.
- `src/assets/photos`, `src/assets/videos`, `src/assets/brand`: arquivos de mídia.

## Adicionar fotos

1. Coloque o arquivo (`.png`, `.jpg` ou `.jpeg`) em `src/assets/photos`.
2. Adicione o nome do arquivo na categoria certa em `src/data/portfolio.ts`.

No build, cada foto é convertida para WebP em várias larguras (`vite-imagetools`), então não é preciso reduzir as imagens manualmente.

## Deploy

O `vercel.json` redireciona todas as rotas para o `index.html`, para que links diretos como `/sobre` funcionem ao recarregar a página.
