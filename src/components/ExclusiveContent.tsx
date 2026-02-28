import { ScrollRow } from './ScrollRow'
import { SectionWrapper } from './SectionWrapper'

const CONTENT_ITEMS = [
  { title: 'Back Stage', subtitle: 'Festival', gradient: 'from-black/60 to-black/90', image: '/icons/5e70c59dc9340ac96088d51733fcd40be7f26205.jpg' },
  { title: 'Interviews', subtitle: 'Festival', gradient: 'from-black/60 to-black/90', image: '/icons/ac305c69ae2c3ab1e2977485dcdc7d79d6804c6e.jpg' },
]

function ContentCard({ title, subtitle, gradient, image, stretch }: { title: string; subtitle: string; gradient: string; image?: string; stretch?: boolean }) {
  return (
    <article className={`flex-shrink-0 w-[80vw] sm:w-[50vw] md:w-[36vw] max-w-[440px] h-[240px] rounded-xl overflow-hidden bg-neutral-800 transition-transform duration-300 hover:scale-[1.02] ${stretch ? 'lg:flex-1 lg:min-w-[280px] lg:max-w-none lg:w-auto' : ''}`}>
      <div className={`h-full relative flex flex-col justify-end p-4 sm:p-6 ${!image ? `bg-gradient-to-br ${gradient}` : ''}`}>
        {image && (
          <>
            <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" aria-hidden />
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} pointer-events-none`} aria-hidden />
          </>
        )}
        <div className="absolute bottom-0 right-0 flex items-end justify-end p-4 opacity-10 pointer-events-none select-none translate-x-3 translate-y-3 z-10">
          <img src="/icons/vector.png" alt="" className="w-32 h-auto object-contain -rotate-12" />
        </div>
        <h3 className="text-[32px] font-bold text-white relative z-10">{title}</h3>
        <p className="text-white/70 text-2xl relative z-10">{subtitle}</p>
      </div>
    </article>
  )
}

function NikeAdCard({ stretch }: { stretch?: boolean }) {
  return (
    <article className={`flex-shrink-0 w-[80vw] sm:w-[50vw] md:w-[32vw] max-w-[420px] rounded-xl overflow-hidden bg-white text-neutral-900 transition-transform duration-300 hover:scale-[1.02] ${stretch ? 'lg:flex-1 lg:min-w-[280px] lg:max-w-none lg:w-auto' : ''}`}>
      <div className="p-4 sm:p-5 h-[208px]">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xl font-black tracking-tight">NIKE</span>
          <span className="px-2 py-0.5 rounded-full bg-orange-500 text-white text-xs font-medium flex items-center gap-1">
            Announcement
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
        <div className="aspect-[4/3] bg-neutral-100 rounded-lg flex items-center justify-center mb-3">
          <span className="text-4xl sm:text-5xl">👟</span>
        </div>
        <h3 className="text-sm sm:text-base font-bold mb-1">NIKE AIR MAX 90 FUTURA</h3>
        <p className="text-neutral-500 text-xs mb-3">
          Re-imagines the icon of air through your eyes—from design to testing to styling.
        </p>
        <div className="flex gap-2 mb-3">
          <span className="w-6 h-6 rounded-full bg-green-400" />
          <span className="w-6 h-6 rounded-full bg-yellow-300" />
          <span className="w-6 h-6 rounded-full bg-neutral-300" />
        </div>
        <a href="#" className="text-neutral-900 font-medium text-xs inline-flex items-center gap-1 hover:underline">
          learn more →
        </a>
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
