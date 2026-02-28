import { useRef, useState, useEffect, type ReactNode } from 'react'

interface Props {
  title: string
  description?: string
  bg?: string
  withAccent?: boolean
  action?: ReactNode
  className?: string
  contentClassName?: string
  headerBeside?: boolean
  headerAsCardWidth?: boolean
  headerCardWidthClass?: string
  contentFullWidth?: boolean
  scrollEdgeAlign?: boolean
  contentScrollEdge?: boolean
  hideTitle?: boolean
  children: ReactNode
}

export function SectionWrapper({
  title,
  description,
  bg = 'bg-surface',
  withAccent,
  action,
  className = '',
  contentClassName = '',
  headerBeside = false,
  headerAsCardWidth = false,
  headerCardWidthClass,
  contentFullWidth = true,
  scrollEdgeAlign = false,
  contentScrollEdge = false,
  hideTitle = false,
  children,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setHasAnimated(true)
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  const headerWidthClass = headerAsCardWidth
    ? (headerCardWidthClass ?? 'min-w-0 max-w-[380px] w-[90vw] sm:w-[55vw] md:w-[38vw] lg:w-[380px]')
    : 'min-w-0 w-[200px] sm:w-[240px]'
  const headerBlock = (narrow?: boolean) => (
    <div className={`flex items-start gap-3 sm:gap-4 flex-shrink-0 flex-col min-w-0 ${narrow ? `${headerWidthClass} min-h-[160px] pt-6 sm:pt-10 pb-6 sm:pb-10` : 'justify-between'}`}>
      <div className="min-w-0 w-full">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white transition-transform duration-200 hover:scale-105 origin-left">{title}</h2>
        {withAccent && <div className="accent-line" />}
        {description && (
          <p className={`text-white/70 text-left text-sm sm:text-base md:text-lg mt-1 mr-4 sm:mr-[50px] ${narrow ? '' : 'max-w-lg'}`}>{description}</p>
        )}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  )
  return (
    <section
      ref={sectionRef}
      className={`py-4 sm:py-6 md:py-8 overflow-hidden w-full max-w-full min-w-0 ${hasAnimated ? 'animate-fade-in-up' : 'opacity-0'} ${bg} ${className}`}
    >
      {scrollEdgeAlign ? (
        <>
          {!hideTitle && (
            <div className={`section-padding ${headerBeside ? `flex flex-row items-start ${headerAsCardWidth ? 'gap-4' : 'gap-4 sm:gap-6'}` : ''}`}>
              {headerBeside ? (
                <>
                  {headerBlock(true)}
                  <div className={`flex-1 min-w-0 overflow-hidden ${contentScrollEdge ? 'lineup-scroll-edge' : ''}`}>{children}</div>
                </>
              ) : (
                <div className="mb-3 sm:mb-4">{headerBlock(false)}</div>
              )}
            </div>
          )}
          {!headerBeside && (
            <div className={`lineup-scroll-edge ${contentClassName}`}>
              {children}
            </div>
          )}
        </>
      ) : (
        <div className={`section-padding ${contentFullWidth ? '' : 'content-max'} ${contentClassName} ${headerBeside ? `flex flex-row items-start ${headerAsCardWidth ? 'gap-4' : 'gap-4 sm:gap-6'}` : ''}`}>
          {headerBeside ? (
            <>
              {headerBlock(true)}
              <div className={`flex-1 min-w-0 overflow-hidden ${contentScrollEdge ? 'lineup-scroll-edge' : ''}`}>{children}</div>
            </>
          ) : (
            <>
              <div className="mb-3 sm:mb-4">{headerBlock(false)}</div>
              {children}
            </>
          )}
        </div>
      )}
    </section>
  )
}
