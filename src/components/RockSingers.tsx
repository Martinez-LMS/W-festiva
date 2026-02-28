import { ArtistCard } from './ArtistCard'
import { ScrollRow } from './ScrollRow'
import { SectionWrapper } from './SectionWrapper'

const ROCK_ARTISTS = [
  { name: 'Dream Theatre', gradient: 'from-neutral-700 to-neutral-900', image: '/icons/26185ff81486c613f7d6d84d2420e5f97c6ddb27.png' },
  { name: 'Måneskin', gradient: 'from-rose-900 to-neutral-900', image: '/icons/c5effda54924b507d94a0c9b1402171b0a4f7bf4.png' },
  { name: 'Coldplay', gradient: 'from-blue-800 to-neutral-900', image: '/icons/9d47ce55a1fef74c98d9158c23a838025e02c21a.png' },
  { name: 'Offspring', gradient: 'from-amber-800 to-neutral-900', image: '/icons/bac9f2ded926d389094606216ce2117354874de4.png' },
  { name: 'Avril Lavigne', gradient: 'from-pink-700 to-neutral-900', image: '/icons/70b441feb1d4012bd93aea413d9638c6f8dab084.png' },
  { name: 'Black Pantera', gradient: 'from-red-900 to-neutral-900', image: '/icons/ab6cba5d56552b8c944339117a35e0966a45ebd0.png' },
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
