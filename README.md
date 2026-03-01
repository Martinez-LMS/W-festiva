# W Festival | Watch Brasil – Landing Page

Landing page do W Festival (Watch Brasil), desenvolvida como case técnico. Interface com streaming ao vivo, line-up de artistas, conteúdo exclusivo e Watch Again. Layout baseado no [Figma do case](https://www.figma.com/design/zLdxmhmhKajPbZwlyNA4nk/Teste?node-id=0-1&t=NRkiSbnEKcly1vTc-1).

## Stack

- **React** + **TypeScript**
- **Vite** 7
- **Tailwind CSS** 4
- **Vitest** + **React Testing Library** (testes unitários)

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

## Testes unitários

Os testes usam **Vitest** e **React Testing Library**. Os arquivos ficam em `src/tests/`, com testes de componentes em `src/tests/components/` (Header, Footer, AdCard, ShowCard, BannerCarousel, CocaBanner, ArtistCard, SectionWrapper).

```bash
npm run test
```

Modo watch: executa os testes e reexecuta ao salvar. Para rodar uma vez e encerrar:

```bash
npm run test:run
```

## Estrutura

- `src/components/` – Componentes reutilizáveis (Header, cards, seções, footer)
- `src/App.tsx` – Composição da página
- `src/index.css` – Estilos globais e tema (Design System)
- `src/tests/` – Testes unitários dos componentes
- Layout responsivo e scroll horizontal nas seções de cards

## Deploy

O projeto pode ser publicado na **Vercel** ou **Netlify** (conectar o repositório e usar build command `npm run build` e output `dist`).
