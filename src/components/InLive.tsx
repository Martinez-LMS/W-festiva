import { ShowCard } from './ShowCard'
import { ScrollRow } from './ScrollRow'
import { SectionWrapper } from './SectionWrapper'

const LIVE_SHOWS = [
  { artist: 'Demi Lovato', stage: 'Stage Sunset', gradient: 'from-red-900/80 to-neutral-900', image: '/icons/84297d29c6360383aac10f28c7c4e6ba18683563.png' },
  { artist: 'Demi Lovato', stage: 'Stage World', gradient: 'from-blue-900/80 to-neutral-900', image: '/icons/357bd39f222b0eae62b28003bf3dc69b8efe70fa.png' },
  { artist: 'Demi Lovato', stage: 'Stage Favela', gradient: 'from-amber-900/80 to-neutral-900', image: '/icons/de6c3f9d813317630aefe9162f275607b5c44450.png' },
]

export function InLive() {
  return (
    <SectionWrapper title="In Live" bg="bg-surface" scrollEdgeAlign contentClassName="!pr-0">
      <ScrollRow className="lg:!pr-0">
        {LIVE_SHOWS.map((show, i) => (
          <ShowCard key={i} artist={show.artist} stage={show.stage} gradient={show.gradient} image={show.image} isLive stretch />
        ))}
      </ScrollRow>
    </SectionWrapper>
  )
}
