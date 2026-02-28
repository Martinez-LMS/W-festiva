import { useEffect, useState } from 'react'
import { ScrollRow } from './ScrollRow'
import { SectionWrapper } from './SectionWrapper'
import { fetchFestivalForYou, type FestivalForYouItem } from '../services/festivalForYou'

const CARD_CLASS = 'flex-shrink-0 w-[48vw] sm:w-[30vw] md:w-[20vw] lg:w-[16vw] xl:w-[14vw] min-w-[200px] h-[22vw] sm:h-[20vw] md:h-[16vw] lg:h-[12vw] min-h-[180px] rounded-xl overflow-hidden relative'

function FestivalHeaderCard() {
  return (
    <div className={`${CARD_CLASS} flex flex-col justify-between p-[3vw] sm:p-[2vw] transition-transform duration-300 hover:scale-[1.02]`}>
      <div>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">Festival for you</h2>
        <p className="text-white/70 text-left text-sm sm:text-base md:text-lg mt-1">Explore your favorite genres and discover new rhythms to love!</p>
      </div>
      <SeeAllButton />
    </div>
  )
}

function GenreCard({ name, sub, bg }: { name: string; sub: string; bg: string }) {
  return (
    <article className={`${CARD_CLASS} transition-transform duration-300 hover:scale-[1.02]`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${bg}`} />
      <div className="absolute bottom-0 right-0 flex items-end justify-end p-2 opacity-10 pointer-events-none select-none translate-x-3 translate-y-3">
        <img src="/icons/vector.png" alt="" className="w-[18vw] sm:w-[15vw] md:w-[10vw] lg:w-[7vw] h-auto object-contain -rotate-12" />
      </div>
      <div className="absolute right-0 bottom-0 w-full h-full flex flex-col justify-end p-[3vw] sm:p-[2vw] max-w-full">
        <span className="text-[25px] font-bold text-white leading-tight">{name}</span>
        <span className="text-white/80 text-[19px]">{sub}</span>
      </div>
    </article>
  )
}

function AirPodsCard() {
  return (
    <article className="flex-shrink-0 w-[78vw] sm:w-[62vw] md:w-[48vw] lg:w-[28vw] xl:w-[32vw] min-w-[380px] h-[22vw] sm:h-[20vw] md:h-[16vw] lg:h-[12vw] min-h-[180px] rounded-2xl overflow-hidden bg-black border border-white/10 transition-transform duration-300 hover:scale-[1.02]">
      <div className="p-[3vw] sm:p-[2vw] flex gap-[2vw] items-center h-full">
        <div className="flex-1 min-w-0">
          <span className="badge-announcement mb-1 sm:mb-2">
            Announcement
          </span>
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2">AirPods Pro</h3>
          <ul className="text-white/60 text-[10px] sm:text-xs space-y-0.5">
            <li><span className="text-white font-medium">24 hrs</span> listening time with extra charges</li>
            <li><span className="text-white font-medium">4.5 hrs</span> on one charge</li>
            <li><span className="text-white font-medium">1 hr</span> with 5 min charging</li>
          </ul>
          <a href="#" className="mt-3 text-white text-xs font-medium inline-flex items-center gap-1 hover:underline transition-transform duration-200 hover:scale-105 origin-left">
            buy now →
          </a>
        </div>
        <div className="w-[12vw] h-[12vw] sm:w-[10vw] sm:h-[10vw] lg:w-[6vw] lg:h-[6vw] rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0">
          <span className="text-3xl sm:text-4xl">🎧</span>
        </div>
      </div>
    </article>
  )
}

const SeeAllButton = () => (
  <button type="button" className="btn-primary rounded-full px-7 py-0.5 text-lg w-fit min-w-0 shrink-0 mt-4 transition-transform duration-200 hover:scale-105 active:scale-95">
    See All
  </button>
)

function FestivalSkeleton() {
  return (
    <ScrollRow>
      <div className={`${CARD_CLASS} bg-neutral-800/50 animate-pulse`} />
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="flex-shrink-0 w-[48vw] sm:w-[30vw] md:w-[20vw] lg:w-[16vw] xl:w-[14vw] min-w-[22vw] h-[20vw] sm:h-[16vw] md:h-[12vw] lg:h-[14vw] min-h-[180px] rounded-xl bg-neutral-800/50 animate-pulse"
        />
      ))}
    </ScrollRow>
  )
}

export function FestivalForYou() {
  const [items, setItems] = useState<FestivalForYouItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetchFestivalForYou()
      .then((data) => {
        if (!cancelled) setItems(data)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => { cancelled = true }
  }, [])

  return (
    <SectionWrapper title="Festival for you" bg="bg-surface" scrollEdgeAlign hideTitle contentClassName="!pr-0">
      {loading && <FestivalSkeleton />}
      {!loading && items.length > 0 && (
        <ScrollRow className="lg:!pr-0" innerClassName="!pr-0">
          <FestivalHeaderCard />
          {items.map((item) =>
            item.type === 'genre' ? (
              <GenreCard key={item.id} name={item.name} sub={item.sub} bg={item.bg} />
            ) : (
              <AirPodsCard key={item.id} />
            )
          )}
          <GenreCard key="peek" name="Sertanejo" sub="Festival" bg="from-amber-800/80 to-neutral-900" />
        </ScrollRow>
      )}
    </SectionWrapper>
  )
}
