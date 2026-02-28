interface Props {
  artist: string
  stage: string
  gradient: string
  image?: string
  isLive?: boolean
  date?: string
  stretch?: boolean
}

export function ShowCard({ artist, stage, gradient, image, isLive = false, date = 'dd.mm.aa - 00:00 h', stretch = false }: Props) {
  return (
    <article className={`flex-shrink-0 rounded-xl overflow-hidden bg-neutral-800 transition-transform duration-300 hover:scale-[1.02] ${stretch ? 'min-w-[260px] max-w-[420px] w-[85vw] sm:w-[52vw] md:w-[36vw] lg:flex-1 lg:min-w-[280px] lg:max-w-none lg:w-auto' : 'min-w-[220px] max-w-[380px] w-[78vw] sm:w-[46vw] md:w-[31vw]'}`}>
      <div
        className={`aspect-video bg-gradient-to-b ${gradient} bg-cover bg-center`}
        style={image ? { backgroundImage: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%), url(${image})` } : undefined}
      />
      <div className="p-2 sm:p-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-[#E96744] text-xs truncate">{artist}</h3>
          {isLive && (
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-500 text-xs font-medium">Live</span>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between gap-2 mt-0.5">
          <p className="text-white/60 text-xs sm:text-sm truncate">{stage}</p>
          {isLive && (
            <span className="text-white/50 text-xs flex-shrink-0">{date}</span>
          )}
        </div>
      </div>
    </article>
  )
}
