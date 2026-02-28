export type FestivalForYouItem =
  | { type: 'genre'; id: string; name: string; sub: string; bg: string }
  | { type: 'ad'; id: string }

export const DEFAULT_FESTIVAL: FestivalForYouItem[] = [
  { type: 'genre', id: 'rock', name: 'Rock', sub: 'Festival', bg: 'from-blue-900 to-blue-950' },
  { type: 'genre', id: 'pop', name: 'Pop', sub: 'Festival', bg: 'from-emerald-600 to-emerald-800' },
  { type: 'ad', id: 'airpods' },
  { type: 'genre', id: 'funk', name: 'Funk', sub: 'Festival', bg: 'from-purple-600 to-purple-800' },
]

export async function fetchFestivalForYou(): Promise<FestivalForYouItem[]> {
  try {
    const res = await fetch('/api/festival-for-you.json')
    if (!res.ok) return DEFAULT_FESTIVAL
    const data = await res.json()
    const items = data?.items
    return Array.isArray(items) && items.length > 0 ? items : DEFAULT_FESTIVAL
  } catch {
    return DEFAULT_FESTIVAL
  }
}
