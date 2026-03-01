import { ShowCard } from './ShowCard'
import { ScrollRow } from './ScrollRow'
import { SectionWrapper } from './SectionWrapper'
import { ASSETS } from '../constants/assets'

const LIVE_SHOWS = [
  { artist: 'Demi Lovato', stage: 'Stage Sunset', gradient: 'from-red-900/80 to-neutral-900', image: ASSETS.artists['demi-lovato-sunset'] },
  { artist: 'Demi Lovato', stage: 'Stage World', gradient: 'from-blue-900/80 to-neutral-900', image: ASSETS.artists['demi-lovato-world'] },
  { artist: 'Demi Lovato', stage: 'Stage Favela', gradient: 'from-amber-900/80 to-neutral-900', image: ASSETS.artists['demi-lovato-favela'] },
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
