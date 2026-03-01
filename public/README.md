# Pasta public

## Estrutura organizada por tipo

| Pasta | Conteúdo |
|-------|----------|
| `api/` | JSONs (lineup, festival-for-you) |
| `logo/` | Logo do W Festival (vector.png) |
| `nav/` | Ícones da navegação (icon, icons, icone4, icone5) |
| `artists/` | Fotos de artistas |
| `brands/` | Imagens de marcas (Tesla, Coca-Cola) |
| `carousel/` | Imagem de fundo e seta do carrossel |
| `player/` | Ícones do player de vídeo |
| `badges/` | Badges Google Play e App Store |
| `social/` | Ícones de redes sociais |
| `videos/` | Vídeos (ex.: Avril Lavigne) |
| `content/` | Imagens de conteúdo (Back Stage, Interviews) |

## Como organizar os arquivos

Se os arquivos ainda estiverem todos em `public/icons/`, rode na raiz do projeto:

```bash
npm run organize-public
```

Isso move cada arquivo de `icons/` para a pasta correspondente (logo, nav, artists, etc.).
