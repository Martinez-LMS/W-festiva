import { useState, useCallback, useRef, useEffect } from 'react'
import { ASSETS } from '../constants/assets'

const SLIDES = [
  {
    id: 'heineken',
    bgImage: ASSETS.carousel.bg,
    gradient: "from-emerald-900/80 via-amber-900/40 to-amber-950/80",
    star: true,
    cta: { text: "GET A TASTE OF AMSTERDAM", href: "#" },
  },
  {
    id: 'slide2',
    bgImage: ASSETS.carousel.bg,
    gradient: "from-blue-900/80 via-slate-800/40 to-slate-900/80",
    star: false,
    cta: { text: "EXPLORE MORE", href: "#" },
  },
  {
    id: 'slide3',
    bgImage: ASSETS.carousel.bg,
    gradient: "from-purple-900/80 via-pink-900/40 to-amber-950/80",
    star: false,
    cta: { text: "DISCOVER", href: "#" },
  },
]

const DRAG_THRESHOLD = 50

export function BannerCarousel() {
  const [index, setIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const mouseStartRef = useRef<number | null>(null)
  const indexRef = useRef(index)
  indexRef.current = index

  const goTo = useCallback((i: number) => {
    setIndex(Math.max(0, Math.min(i, SLIDES.length - 1)))
  }, [])

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }, [])

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStart === null) return
    const end = e.changedTouches[0].clientX
    const delta = touchStart - end
    if (delta > DRAG_THRESHOLD) goTo(index + 1)
    else if (delta < -DRAG_THRESHOLD) goTo(index - 1)
    setTouchStart(null)
  }, [touchStart, index, goTo])

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return
    mouseStartRef.current = e.clientX
  }, [])

  useEffect(() => {
    const onMouseUp = (e: MouseEvent) => {
      if (mouseStartRef.current === null) return
      const delta = mouseStartRef.current - e.clientX
      if (delta > DRAG_THRESHOLD) goTo(indexRef.current + 1)
      else if (delta < -DRAG_THRESHOLD) goTo(indexRef.current - 1)
      mouseStartRef.current = null
    }
    document.addEventListener('mouseup', onMouseUp)
    return () => document.removeEventListener('mouseup', onMouseUp)
  }, [goTo])

  const onMouseLeave = useCallback((e: React.MouseEvent) => {
    if (mouseStartRef.current === null) return
    const delta = mouseStartRef.current - e.clientX
    if (delta > DRAG_THRESHOLD) goTo(indexRef.current + 1)
    else if (delta < -DRAG_THRESHOLD) goTo(indexRef.current - 1)
    mouseStartRef.current = null
  }, [goTo])

  return (
    <section className="section-padding pt-0 pb-4 sm:pb-6 overflow-hidden overflow-y-hidden scrollbar-hide w-full max-w-full min-w-0 bg-surface">
      <div className="w-full max-w-full min-w-0 overflow-hidden scrollbar-hide relative">
        <div className="relative overflow-x-hidden overflow-y-hidden w-full max-w-full min-w-0 border-[40px] border-white rounded-none box-border scrollbar-hide">
          <div
            className="overflow-hidden w-full max-w-full min-w-0 select-none scrollbar-hide"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {SLIDES.map((slide) => (
                <div
                  key={slide.id}
                  className="relative flex-shrink-0 w-full min-h-[200px] sm:min-h-[280px] md:min-h-[320px] bg-gradient-to-br bg-cover bg-center bg-no-repeat flex flex-col justify-between p-4 sm:p-6 md:p-10"
                  style={{
                    backgroundImage: `url('${slide.bgImage}')`,
                    height: '400px',
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} pointer-events-none`} />
                  <div className="relative z-0">
                    {slide.star && (
                      <span className="text-red-400 text-sm mb-0.5 block">★</span>
                    )}
                  </div>
                  <div className="relative z-0 flex flex-col sm:flex-row items-stretch sm:items-end justify-end gap-3 mt-3">
                    <a
                      href={slide.cta.href}
                      className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-none text-white font-medium text-xs sm:text-sm transition-all duration-200 hover:scale-105 active:scale-95"
                      style={{ backgroundColor: '#008630' }}
                    >
                      {slide.cta.text}
                      <img src={ASSETS.carousel.arrow} alt="" className="w-4 h-4 object-contain" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 items-center justify-center z-10 py-2">
          <div className="flex gap-2 items-center justify-center">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir para slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-200 hover:scale-125 ${index === i ? 'w-3 h-3 scale-110 bg-accent' : 'w-2.5 h-2.5 bg-accent/40 hover:bg-accent/60'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
