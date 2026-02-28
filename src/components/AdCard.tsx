interface Props {
  brand: string
  tagline: string
  ctaText: string
  ctaHref?: string
  ctaColor?: string
  className?: string
  doubleWidth?: boolean
  image?: string
}

const BASE_CLASS = 'flex-shrink-0 rounded-xl bg-black border border-white/10 relative'
const WIDTH_CLASS = 'w-[72vw] sm:w-[44vw] md:w-[30vw] lg:w-[24vw]'
const WIDTH_DOUBLE_CLASS = 'w-[85vw] sm:w-[60vw] md:w-[42vw] lg:w-[36vw] xl:w-[32vw] max-w-[600px]'

export function AdCard({ brand, tagline, ctaText, ctaHref = '#', ctaColor = 'text-red-500', className = '', doubleWidth, image }: Props) {
  return (
    <article className={`${BASE_CLASS} ${doubleWidth ? WIDTH_DOUBLE_CLASS : WIDTH_CLASS} ${className} transition-transform duration-300 hover:scale-[1.02]`}>
      <div className="absolute right-0 bottom-0 w-full h-full overflow-hidden [border-radius:inherit] z-0">
        {image && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}
        <div className="absolute top-3 right-3 z-10">
          <span className="badge-announcement">
            Announcement
          </span>
        </div>
        <div
          className={`p-[2vw] sm:p-[1.5vw] pt-[6vw] sm:pt-[5vw] min-h-[14vw] flex flex-col justify-end relative z-[1] ${image ? '' : 'bg-gradient-to-br from-neutral-900 to-blue-900/20'}`}
          style={image ? { background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%)' } : undefined}
        >
        <p className="text-white/80 text-base sm:text-xl font-light tracking-tight mb-1">{brand}</p>
        <p className="text-white font-semibold text-xs sm:text-sm mb-2 sm:mb-3">{tagline}</p>
        <a href={ctaHref} className={`${ctaColor} font-medium text-sm inline-flex items-center gap-1 hover:underline transition-transform duration-200 hover:scale-105 origin-left`}>
          {ctaText}
          <span>→</span>
        </a>
        </div>
      </div>
    </article>
  )
}
