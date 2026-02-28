import { ArtistCard } from './ArtistCard'
import { ScrollRow } from './ScrollRow'
import { SectionWrapper } from './SectionWrapper'

const YESTERDAY_ARTISTS = [
  { name: 'Marshmello', gradient: 'from-amber-600 to-orange-800', image: '/icons/5c6dcc0465b5b8f62e503413b2957ec064088f54.png' },
  { name: 'Alok', gradient: 'from-red-900 to-neutral-900', image: '/icons/2795bd5706948c68cfaaeff6606823c9dc2bbf4d.png' },
  { name: 'Rita Ora', gradient: 'from-blue-900 to-neutral-900', image: '/icons/62e2f69934fb385de838b0299b6b1706dd0d9588.png' },
  { name: 'Dream Theatre', gradient: 'from-neutral-700 to-neutral-900', image: '/icons/26185ff81486c613f7d6d84d2420e5f97c6ddb27.png' },
  { name: 'Dua Lipa', gradient: 'from-purple-700 via-purple-900 to-neutral-900', image: '/icons/a17e851d574eb43d7b6445bc9fda6dc33b0d719b.png' },
  { name: 'Måneskin', gradient: 'from-rose-900 to-neutral-900', image: '/icons/c5effda54924b507d94a0c9b1402171b0a4f7bf4.png' },
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
