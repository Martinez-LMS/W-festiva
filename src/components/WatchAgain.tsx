import { AdCard } from './AdCard'
import { ScrollRow } from './ScrollRow'
import { SectionWrapper } from './SectionWrapper'
import { ASSETS } from '../constants/assets'

const WATCH_AGAIN_ITEMS = [
  { name: 'Alok', tag: 'Watch Again', sub: 'Festival', gradient: 'from-red-900 to-neutral-900', image: ASSETS.artists.alok },
  { name: 'Rita Ora', tag: 'Watch Again', sub: 'Festival', gradient: 'from-blue-900 to-neutral-900', image: ASSETS.artists['rita-ora'] },
  { name: 'Dua Lipa', tag: 'Watch Again', sub: 'Festival', gradient: 'from-purple-700 to-neutral-900', image: ASSETS.artists['dua-lipa'] },
  { name: 'Måneskin', tag: 'Watch Again', sub: 'Festival', gradient: 'from-rose-900 to-neutral-900', image: ASSETS.artists.maneskin },
  { name: 'Coldplay', tag: 'Watch Again', sub: 'Festival', gradient: 'from-blue-800 to-neutral-900' },
]

const WATCH_AGAIN_ORDER = [0, 1, 'tesla', 2, 3, 4]

function WatchCard({ name, tag, sub, gradient, image }: { name: string; tag: string; sub: string; gradient: string; image?: string }) {
  return (
    <article className="flex-shrink-0 w-[48vw] sm:w-[30vw] md:w-[20vw] lg:w-[16vw] xl:w-[14vw] h-[28vw] sm:h-[24vw] md:h-[20vw] lg:h-[14vw] min-h-[18vw] lg:flex-1 lg:min-w-0 lg:max-w-none lg:w-auto rounded-xl overflow-hidden bg-neutral-800 transition-transform duration-300 hover:scale-[1.02]">
      <div
        className={`h-full bg-gradient-to-b ${gradient} relative flex flex-col justify-between bg-cover bg-center bg-no-repeat`}
        style={image ? { backgroundImage: `linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.75) 100%), url("${image.replace(/"/g, '%22')}")` } : undefined}
      >
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
          <p className="text-white/80 text-[18px] sm:text-[18px]">{tag}</p>
          <p className="text-white/60 text-[17px] sm:text-[17px]">{sub}</p>
        </div>
        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center sm:bottom-10">
          <h3 className="font-semibold text-white text-sm sm:text-base text-center">{name}</h3>
        </div>
      </div>
    </article>
  )
}

export function WatchAgain() {
  return (
    <SectionWrapper title="Watch Again" bg="bg-surface" scrollEdgeAlign contentClassName="!pr-0">
      <ScrollRow className="lg:!pr-0" innerClassName="!pr-0">
        {WATCH_AGAIN_ORDER.map((key) =>
          key === 'tesla' ? (
            <AdCard key="tesla" brand="TESLA" tagline="Supercharger Technology" ctaText="learn more" doubleWidth image={ASSETS.brands.tesla} />
          ) : (
            <WatchCard key={WATCH_AGAIN_ITEMS[key as number].name} {...WATCH_AGAIN_ITEMS[key as number]} />
          )
        )}
      </ScrollRow>
    </SectionWrapper>
  )
}
