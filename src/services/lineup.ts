import { ASSETS } from '../constants/assets'

export type LineUpItem =
  | { type: 'artist'; id: string; name: string; gradient: string; image?: string }
  | { type: 'ad'; id: string; brand: string; tagline: string; ctaText: string; className?: string; image?: string }

export const DEFAULT_LINEUP: LineUpItem[] = [
  { type: 'artist', id: 'iron-maiden', name: 'Iron Maiden', gradient: 'from-amber-900 to-neutral-900', image: ASSETS.artists['iron-maiden'] },
  { type: 'artist', id: 'alok', name: 'Alok', gradient: 'from-red-900 to-neutral-900', image: ASSETS.artists.alok },
  { type: 'artist', id: 'rita-ora', name: 'Rita Ora', gradient: 'from-blue-900 to-neutral-900', image: ASSETS.artists['rita-ora'] },
  { type: 'artist', id: 'dream-theatre', name: 'Dream Theatre', gradient: 'from-neutral-700 to-neutral-900', image: ASSETS.artists['dream-theatre'] },
  { type: 'ad', id: 'tesla', brand: 'TESLA', tagline: 'Supercharger Technology', ctaText: 'learn more', className: '!w-[85vw] sm:!w-[60vw] md:!w-[42vw] lg:!w-[36vw] xl:!w-[32vw] !max-w-[600px]', image: ASSETS.brands.tesla },
  { type: 'artist', id: 'maneskin', name: 'Måneskin', gradient: 'from-rose-900 to-neutral-900', image: ASSETS.artists.maneskin },
]

const ARTIST_IDS = ['iron-maiden', 'alok', 'rita-ora', 'dream-theatre', 'maneskin'] as const
function normalizeLineUpItems(items: LineUpItem[]): LineUpItem[] {
  return items.map((item) => {
    if (item.type === 'artist' && item.image && ARTIST_IDS.includes(item.id as typeof ARTIST_IDS[number])) {
      return { ...item, image: ASSETS.artists[item.id as keyof typeof ASSETS.artists] ?? item.image }
    }
    if (item.type === 'ad' && item.id === 'tesla') {
      return { ...item, image: ASSETS.brands.tesla }
    }
    return item
  })
}

export async function fetchLineUp(): Promise<LineUpItem[]> {
  try {
    const res = await fetch('/api/lineup.json')
    if (!res.ok) return DEFAULT_LINEUP
    const data = await res.json()
    const items = data?.items
    if (!Array.isArray(items) || items.length === 0) return DEFAULT_LINEUP
    return normalizeLineUpItems(items)
  } catch {
    return DEFAULT_LINEUP
  }
}
