interface Props {
  name: string
  gradient: string
  variant?: 'standard' | 'featured' | 'lineup' | 'contentRow'
  fillWidth?: boolean
  image?: string
}

const VARIANT_CLASS = {
  standard: 'w-[44vw] sm:w-[28vw] md:w-[22vw] lg:w-[18vw]',
  featured: 'w-[74vw] sm:w-[46vw] md:w-[36vw] lg:w-[28vw]',
  lineup: 'w-[48vw] sm:w-[30vw] md:w-[20vw] lg:w-[16vw] xl:w-[14vw]',
  contentRow: 'w-[48vw] sm:w-[30vw] md:w-[20vw] lg:w-[16vw] xl:w-[14vw] h-[28vw] sm:h-[24vw] md:h-[20vw] lg:h-[14vw] min-h-[18vw] lg:flex-1 lg:min-w-0 lg:max-w-none lg:w-auto',
}

export function ArtistCard({ name, gradient, variant = 'standard', fillWidth, image }: Props) {
  const isFeature = variant === 'featured'
  const isContentRow = variant === 'contentRow'
  const sizeClass = fillWidth
    ? `${VARIANT_CLASS[variant]} lg:w-full lg:min-w-0`
    : VARIANT_CLASS[variant]

  return (
    <article
      className={`flex-shrink-0 ${sizeClass} rounded-xl overflow-hidden bg-neutral-800 transition-transform duration-300 hover:scale-[1.02]`}
    >
      <div
        className={`
          relative flex items-end justify-center bg-cover bg-center bg-no-repeat
          ${isContentRow ? 'h-full' : 'h-[28vw] sm:h-[24vw] md:h-[20vw] lg:h-[14vw] min-h-[18vw]'}
          px-3 sm:px-4 pb-4 sm:pb-6 pt-2 sm:pt-3
          lg:px-4 lg:pb-12
          ${!image ? `bg-gradient-to-b ${gradient} ${isFeature ? 'bg-gradient-to-br' : ''}` : ''}
        `}
        style={image ? { backgroundImage: `linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.75) 100%), url("${image.replace(/"/g, '%22')}")` } : undefined}
      >
        <h3 className="font-semibold text-white text-xs sm:text-sm md:text-base leading-tight text-center relative z-10">{name}</h3>
      </div>
    </article>
  )
}
