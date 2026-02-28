# W Festival | Watch Brasil â€“ Landing Page

Landing page do W Festival (Watch Brasil), desenvolvida como case tÃ©cnico. Interface com streaming ao vivo, line-up de artistas, conteÃºdo exclusivo e Watch Again. Layout baseado no [Figma do case](https://www.figma.com/design/zLdxmhmhKajPbZwlyNA4nk/Teste?node-id=0-1&t=NRkiSbnEKcly1vTc-1).

## Stack

- **React** + **TypeScript**
- **Vite** 7
- **Tailwind CSS** 4

## Como rodar

```bash
npm install
npm run dev
```

Abre em [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Estrutura

- `src/components/` â€“ Componentes reutilizÃ¡veis (Header, cards, seÃ§Ãµes, footer)
- `src/App.tsx` â€“ ComposiÃ§Ã£o da pÃ¡gina
- `src/index.css` â€“ Estilos globais e tema (Design System)
- Layout responsivo e scroll horizontal nas seÃ§Ãµes de cards

## Deploy

O projeto pode ser publicado na **Vercel** ou **Netlify** (conectar o repositÃ³rio e usar build command `npm run build` e output `dist`).
