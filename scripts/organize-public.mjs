import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const PUB = path.join(ROOT, 'public')
const ICONS = fs.existsSync(path.join(PUB, 'icons')) ? path.join(PUB, 'icons') : path.join(PUB, 'assets', 'icons')

const MOVES = [
  ['vector.png', 'logo'],
  ['icon.png', 'nav'],
  ['icons.png', 'nav'],
  ['icone4.png', 'nav'],
  ['icone5.png', 'nav'],
  ['4847f49c38741e27d74b4d56a55b5ba9204cb16c.png', 'artists'],
  ['2795bd5706948c68cfaaeff6606823c9dc2bbf4d.png', 'artists'],
  ['62e2f69934fb385de838b0299b6b1706dd0d9588.png', 'artists'],
  ['26185ff81486c613f7d6d84d2420e5f97c6ddb27.png', 'artists'],
  ['c5effda54924b507d94a0c9b1402171b0a4f7bf4.png', 'artists'],
  ['5c6dcc0465b5b8f62e503413b2957ec064088f54.png', 'artists'],
  ['a17e851d574eb43d7b6445bc9fda6dc33b0d719b.png', 'artists'],
  ['9d47ce55a1fef74c98d9158c23a838025e02c21a.png', 'artists'],
  ['bac9f2ded926d389094606216ce2117354874de4.png', 'artists'],
  ['70b441feb1d4012bd93aea413d9638c6f8dab084.png', 'artists'],
  ['ab6cba5d56552b8c944339117a35e0966a45ebd0.png', 'artists'],
  ['84297d29c6360383aac10f28c7c4e6ba18683563.png', 'artists'],
  ['357bd39f222b0eae62b28003bf3dc69b8efe70fa.png', 'artists'],
  ['de6c3f9d813317630aefe9162f275607b5c44450.png', 'artists'],
  ['c1ac28b90b7c69f045c9f9d03cd976ca77034382.png', 'brands'],
  ['3d2fafb44246715242e2579bbdfba740ff1259d9.png', 'brands'],
  ['Group 92161.png', 'carousel'],
  ['arrow.png', 'carousel'],
  ['Icons Player 4.png', 'player'],
  ['Icons Player 3.png', 'player'],
  ['Icons Player 2.png', 'player'],
  ['Icons Player.png', 'player'],
  ['google-play-badge.png', 'badges'],
  ['image 82.png', 'badges'],
  ['Frame 39.png', 'social'],
  ['Avril Lavigne - Sk8er Boi Live at Rock in Rio (1).mp4', 'videos'],
  ['avril-live.mp4', 'videos'],
  ['5e70c59dc9340ac96088d51733fcd40be7f26205.jpg', 'content'],
  ['ac305c69ae2c3ab1e2977485dcdc7d79d6804c6e.jpg', 'content'],
]

if (!fs.existsSync(ICONS)) {
  console.log('Pasta de ícones não encontrada. Coloque os arquivos em public/icons ou public/assets/icons e rode: npm run organize-public')
  process.exit(0)
}
console.log('Origem:', ICONS)

for (const [file, folder] of MOVES) {
  const src = path.join(ICONS, file)
  const destDir = path.join(PUB, folder)
  const dest = path.join(destDir, file)
  if (!fs.existsSync(src)) {
    console.warn('Pulando (não existe):', file)
    continue
  }
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true })
  fs.renameSync(src, dest)
  console.log(file, '->', folder + '/')
}
console.log('Organização concluída. Arquivos separados por pasta em public/')
