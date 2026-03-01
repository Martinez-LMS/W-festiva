import { ArtistCard } from './ArtistCard'
import { ScrollRow } from './ScrollRow'
import { SectionWrapper } from './SectionWrapper'
import { ASSETS } from '../constants/assets'

const ROCK_ARTISTS = [
  { name: 'Dream Theatre', gradient: 'from-neutral-700 to-neutral-900', image: ASSETS.artists['dream-theatre'] },
  { name: 'Måneskin', gradient: 'from-rose-900 to-neutral-900', image: ASSETS.artists.maneskin },
  { name: 'Coldplay', gradient: 'from-blue-800 to-neutral-900', image: ASSETS.artists.coldplay },
  { name: 'Offspring', gradient: 'from-amber-800 to-neutral-900', image: ASSETS.artists.offspring },
  { name: 'Avril Lavigne', gradient: 'from-pink-700 to-neutral-900', image: ASSETS.artists['avril-lavigne'] },
  { name: 'Black Pantera', gradient: 'from-red-900 to-neutral-900', image: ASSETS.artists['black-pantera'] },
  { name: 'Foo Fighters', gradient: 'from-orange-900 to-neutral-900' },
]

export function RockSingers() {
  return (
    <SectionWrapper title="Rock Singers" bg="bg-surface" scrollEdgeAlign contentClassName="!pr-0">
      <ScrollRow className="lg:!pr-0" innerClassName="!pr-0">
        {ROCK_ARTISTS.map((artist) => (
          <ArtistCard key={artist.name} name={artist.name} gradient={artist.gradient} variant="contentRow" image={artist.image} />
        ))}
      </ScrollRow>
    </SectionWrapper>
  )
}
