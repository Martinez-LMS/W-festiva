import { ScrollRow } from './ScrollRow'
import { SectionWrapper } from './SectionWrapper'

import { ASSETS } from '../constants/assets'

const CONTENT_ITEMS = [
  { title: 'Back Stage', subtitle: 'Festival', gradient: 'from-black/60 to-black/90', image: ASSETS.content.backStage },
  { title: 'Interviews', subtitle: 'Festival', gradient: 'from-black/60 to-black/90', image: ASSETS.content.interviews },
]

function ContentCard({ title, subtitle, gradient, image, stretch }: { title: string; subtitle: string; gradient: string; image?: string; stretch?: boolean }) {
  return (
    <article className={`flex-shrink-0 w-[80vw] sm:w-[50vw] md:w-[36vw] max-w-[440px] h-[280px] rounded-xl overflow-hidden bg-neutral-800 transition-transform duration-300 hover:scale-[1.02] ${stretch ? 'lg:flex-1 lg:min-w-[280px] lg:max-w-none lg:w-auto' : ''}`}>
      <div className={`h-full relative flex flex-col justify-end p-4 sm:p-6 ${!image ? `bg-gradient-to-br ${gradient}` : ''}`}>
        {image && (
          <>
            <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" aria-hidden />
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} pointer-events-none`} aria-hidden />
          </>
        )}
        <div className="absolute bottom-0 right-0 flex items-end justify-end p-4 opacity-10 pointer-events-none select-none translate-x-3 translate-y-3 z-10">
          <img src={ASSETS.logo.wFestival} alt="" className="w-32 h-auto object-contain -rotate-12" />
        </div>
        <h3 className="text-[32px] font-bold text-white relative z-10">{title}</h3>
        <p className="text-white/70 text-2xl relative z-10">{subtitle}</p>
      </div>
    </article>
  )
}

const NIKE_THUMBS = [ASSETS.nike.thumb3, ASSETS.nike.shoe, ASSETS.nike.thumb4]

function NikeAdCard({ stretch }: { stretch?: boolean }) {
  return (
    <article className={`relative flex-shrink-0 w-[80vw] sm:w-[50vw] md:w-[32vw] max-w-[420px] max-h-[400px] rounded-xl overflow-hidden bg-white text-neutral-900 transition-transform duration-300 hover:scale-[1.02] ${stretch ? 'lg:flex-1 lg:min-w-[280px] lg:max-w-none lg:w-auto' : ''}`}>
      <div className="absolute top-2 left-2 z-10 w-10 h-10 sm:w-12 sm:h-12 text-neutral-900" aria-hidden>
        <img src={ASSETS.nike.logo} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col sm:flex-row h-full max-h-[400px] min-h-0">
        <div className="flex-1 min-h-[110px] sm:min-h-0 sm:min-w-0 bg-neutral-100 flex items-center justify-center p-3 sm:p-5">
          <img src={ASSETS.nike.thumb1} alt="Nike Air Max 90 Futura" className="max-h-[130px] sm:max-h-[180px] w-auto object-contain" />
        </div>
        <div className="w-0.5 flex-shrink-0 bg-black hidden sm:block self-stretch mt-10 sm:mt-12 mb-3 sm:mb-4 min-h-0" aria-hidden />
        <div className="flex-1 flex flex-col justify-between min-w-0 p-3 sm:p-4">
          <div>
            <div className="flex justify-end items-center mb-1 sm:mb-2">
              <span className="px-2 py-0.5 rounded-full bg-[#E96744] text-white text-xs font-medium flex items-center gap-1">
                Announcement
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
            <h3 className="text-3xl font-normal mb-1 text-[#c39e93] font-['Bebas_Neue'] leading-tight">NIKE AIR MAX 90 FUTURA</h3>
            <div className="text-neutral-700 text-[10px] leading-relaxed mb-0.5 min-w-0">
              <span className="block whitespace-nowrap">the nike air max 90 futura re-imagines the icon</span>
              <span className="block whitespace-nowrap">of air through your eyes—from design to testing</span>
              <span className="block whitespace-nowrap">to styling.</span>
            </div>
            <div className="flex w-full justify-between items-center gap-1.5 mt-2 mb-1">
              {NIKE_THUMBS.map((src, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="w-px h-5 sm:h-6 bg-black flex-shrink-0" aria-hidden />}
                  <button type="button" className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-lg overflow-hidden border-2 border-transparent hover:border-neutral-400 focus:border-neutral-500">
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                </span>
              ))}
            </div>
          </div>
          <a href="#" className="inline-flex items-center justify-center gap-1 w-fit max-w-[50%] px-4 py-1.5 rounded-none bg-[#C39E93] hover:bg-[#b08d82] text-white font-medium text-xs underline transition-colors shrink-0">
            <span className="whitespace-nowrap">learn more</span>
            <img src="/carousel/arrow.png" alt="" className="w-4 h-5 object-contain shrink-0 ml-1" aria-hidden />
          </a>
        </div>
      </div>
    </article>
  )
}

export function ExclusiveContent() {
  return (
    <SectionWrapper title="Exclusive Content" scrollEdgeAlign contentClassName="!pr-0">
      <ScrollRow className="lg:!pr-0">
        {CONTENT_ITEMS.map((item) => (
          <ContentCard key={item.title} {...item} stretch />
        ))}
        <NikeAdCard stretch />
      </ScrollRow>
    </SectionWrapper>
  )
}
