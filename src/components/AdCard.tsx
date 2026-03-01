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
const WIDTH_DOUBLE_CLASS = 'w-[90vw] sm:w-[65vw] md:w-[48vw] lg:w-[42vw] xl:w-[38vw] max-w-[720px]'

const TESLA_LOGO_BG = '/tesla/443cfee3ec7ea880857aed409ec28b7093b5eb33%20(1).png'

function TeslaCard({ tagline, ctaText, ctaHref, image }: { tagline: string; ctaText: string; ctaHref: string; image: string }) {
  return (
    <article className={`${BASE_CLASS} ${WIDTH_DOUBLE_CLASS} !w-[85vw] sm:!w-[60vw] md:!w-[42vw] lg:!w-[36vw] xl:!w-[32vw] !max-w-[600px] min-h-[200px] sm:min-h-[220px] transition-transform duration-300 hover:scale-[1.02] overflow-hidden`}>
      <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(180deg, #343434 0%, #1C1C1C 60.21%)' }} />
      <div
        className="absolute left-0 top-0 bottom-0 w-[65%] sm:w-[62%] bg-no-repeat z-[1] brightness-0 invert"
        style={{ backgroundImage: `url(${TESLA_LOGO_BG})`, backgroundPosition: 'left center', backgroundSize: 'auto 115%' }}
      />
      {image && (
        <div
          className="absolute left-0 bottom-0 w-[55%] sm:w-[48%] h-full bg-no-repeat z-0"
          style={{ backgroundImage: `url(${image})`, backgroundPosition: 'left bottom', backgroundSize: 'contain' }}
        />
      )}
      <div className="absolute top-3 left-3 sm:left-4 z-10">
        <img src={TESLA_LOGO_BG} alt="" className="w-20 h-20 sm:w-28 sm:h-28 object-contain object-left brightness-0 invert" aria-hidden />
      </div>
      <div className="absolute top-3 right-3 z-10">
        <span className="badge-announcement">Announcement</span>
      </div>
      <div
        className="absolute z-[20] flex flex-col justify-center items-center text-center pb-6 sm:pb-8"
        style={{ left: '58%', right: '15%', top: '35%' }}
      >
        <p className="text-white text-3xl font-light tracking-[0.15em] mb-1">TESLA</p>
        <div className="text-white text-lg sm:text-xl md:text-2xl font-light tracking-tight leading-tight mb-3 sm:mb-4 max-w-full text-left inline-block">
          {tagline.includes(' ') ? (
            <>
              <span>{tagline.split(' ')[0]}</span>
              <br />
              <span className="inline-block pl-6 sm:pl-3">{tagline.split(' ').slice(1).join(' ')}</span>
            </>
          ) : (
            tagline
          )}
        </div>
        <a
          href={ctaHref}
          className="inline-flex items-center justify-center gap-1.5 w-fit min-w-[120px] px-5 py-2 rounded-none bg-[#BE1E22] hover:bg-[#a61a1e] text-white font-medium text-xs underline transition-colors shrink-0 text-center"
        >
          <span className="whitespace-nowrap">{ctaText}</span>
          <img src="/carousel/arrow.png" alt="" className="w-4 h-5 object-contain shrink-0" aria-hidden />
        </a>
      </div>
    </article>
  )
}

export function AdCard({ brand, tagline, ctaText, ctaHref = '#', ctaColor = 'text-red-500', className = '', doubleWidth, image }: Props) {
  const isTesla = brand.toUpperCase() === 'TESLA' && image
  if (isTesla) {
    return <TeslaCard tagline={tagline} ctaText={ctaText} ctaHref={ctaHref} image={image} />
  }
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
