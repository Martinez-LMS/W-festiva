import { useEffect, useState } from 'react'
import { ASSETS } from '../constants/assets'
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
        <img src={ASSETS.logo.wFestival} alt="" className="w-[18vw] sm:w-[15vw] md:w-[10vw] lg:w-[7vw] h-auto object-contain -rotate-12" />
      </div>
      <div className="absolute right-0 bottom-0 w-full h-full flex flex-col justify-end p-[3vw] sm:p-[2vw] max-w-full">
        <span className="text-[25px] font-bold text-white leading-tight">{name}</span>
        <span className="text-white/80 text-[19px]">{sub}</span>
      </div>
    </article>
  )
}

const AIRPODS_IMAGE = '/airpods/abee3c512eeeaeea2bfe8e1f377d9443868949c4.png'

function AppleLogoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-1.26 1.86-2.89 3.64-4.77 5.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  )
}

function AirPodsCard() {
  return (
    <article className="flex-shrink-0 w-[90vw] sm:w-[65vw] md:w-[48vw] lg:w-[42vw] xl:w-[38vw] max-w-[720px] !w-[85vw] sm:!w-[60vw] md:!w-[42vw] lg:!w-[36vw] xl:!w-[32vw] !max-w-[600px] h-[22vw] sm:h-[20vw] md:h-[16vw] lg:h-[12vw] min-h-[180px] rounded-xl overflow-hidden bg-black border border-white/10 transition-transform duration-300 hover:scale-[1.02] relative">
      <div className="absolute inset-0 bg-black z-0" />
      <div
        className="absolute inset-0 z-[1] opacity-40"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 30% 50%, rgba(255,255,255,0.25) 0%, transparent 60%)'
        }}
      />
      <div className="absolute top-3 left-3 sm:left-4 z-10 text-white w-8 h-8 sm:w-9 sm:h-9">
        <AppleLogoIcon className="w-full h-full" />
      </div>
      <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-white bg-[#e55d3e]">
        <span>Announcement</span>
        <svg className="w-3.5 h-3.5 text-white/90" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
      </div>
      <div className="relative z-[2] grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] h-full">
        <div className="flex items-center gap-0 pl-6 sm:pl-8 pr-1 pt-5 sm:pt-6 pb-4 min-w-0 overflow-hidden -mt-1">
          <span className="text-white font-light text-sm sm:text-base md:text-lg whitespace-nowrap shrink-0 -mr-6 sm:-mr-8 md:-mr-10">AirPods</span>
          <div className="w-[140px] sm:w-[175px] md:w-[210px] h-[140px] sm:h-[175px] md:h-[210px] shrink-0 flex items-center justify-center min-w-0 -mx-3">
            <img src={AIRPODS_IMAGE} alt="AirPods Pro" className="w-full h-full object-contain" />
          </div>
          <span className="text-white font-light text-sm sm:text-base md:text-lg whitespace-nowrap shrink-0 -ml-6 sm:-ml-8 md:-ml-10">Pro</span>
        </div>
        <div className="flex flex-col justify-center pr-4 sm:pr-6 pl-0 -ml-2 sm:-ml-3 py-4 min-w-0 overflow-hidden">
          <ul className="text-white space-y-0.5 sm:space-y-1 text-[11px] sm:text-xs leading-tight">
            <li className="flex items-baseline gap-0.5 sm:gap-1">
              <span className="font-bold text-[11px] sm:text-xs w-12 sm:w-14 shrink-0">24 hrs</span>
              <span className="font-normal text-white/90 min-w-0">of listening time with multiple additional charges in the case</span>
            </li>
            <li className="flex items-baseline gap-0.5 sm:gap-1">
              <span className="font-bold text-[11px] sm:text-xs w-12 sm:w-14 shrink-0">4.5 hrs</span>
              <span className="font-normal text-white/90 min-w-0">of listening time on one charge</span>
            </li>
            <li className="flex items-baseline gap-0.5 sm:gap-1">
              <span className="font-bold text-[11px] sm:text-xs w-12 sm:w-14 shrink-0">1 hrs</span>
              <span className="font-normal text-white/90 min-w-0 text-[10px]">of listening time on only 5 minutes of charging</span>
            </li>
          </ul>
          <a href="#" className="mt-2 text-white text-[17px] font-normal inline-flex items-center gap-0.5 hover:underline transition-transform duration-200 hover:scale-105 origin-left w-fit">
            buy now
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </article>
  )
}

const SeeAllButton = () => (
  <button type="button" className="rounded-full px-7 py-0.5 text-lg w-fit min-w-0 shrink-0 mt-4 transition-transform duration-200 hover:scale-105 active:scale-95 font-medium text-white bg-[#E96744] hover:bg-[#d85a38] transition-colors">
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
