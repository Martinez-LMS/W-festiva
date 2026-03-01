import { ArtistCard } from './ArtistCard'
import { ScrollRow } from './ScrollRow'
import { SectionWrapper } from './SectionWrapper'
import { ASSETS } from '../constants/assets'

const YESTERDAY_ARTISTS = [
  { name: 'Marshmello', gradient: 'from-amber-600 to-orange-800', image: ASSETS.artists.marshmello },
  { name: 'Alok', gradient: 'from-red-900 to-neutral-900', image: ASSETS.artists.alok },
  { name: 'Rita Ora', gradient: 'from-blue-900 to-neutral-900', image: ASSETS.artists['rita-ora'] },
  { name: 'Dream Theatre', gradient: 'from-neutral-700 to-neutral-900', image: ASSETS.artists['dream-theatre'] },
  { name: 'Dua Lipa', gradient: 'from-purple-700 via-purple-900 to-neutral-900', image: ASSETS.artists['dua-lipa'] },
  { name: 'Måneskin', gradient: 'from-rose-900 to-neutral-900', image: ASSETS.artists.maneskin },
  { name: 'Coldplay', gradient: 'from-blue-800 to-neutral-900' },
]

export function YesterdayShows() {
  return (
    <SectionWrapper
      title="Yesterday Shows"
      className="lg:pt-8 lg:pb-4"
      scrollEdgeAlign
      contentClassName="!pr-0"
    >
      <ScrollRow className="lg:!pr-0" innerClassName="!pr-0">
        {YESTERDAY_ARTISTS.map((artist) => (
          <ArtistCard
            key={artist.name}
            name={artist.name}
            gradient={artist.gradient}
            variant="contentRow"
            image={artist.image}
          />
        ))}
      </ScrollRow>
    </SectionWrapper>
  )
}
