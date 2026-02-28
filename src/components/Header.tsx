import { useState, useRef, useCallback, useEffect } from 'react'



const LOGO_SRC = '/icons/vector.png'
const NAV_ICON_SRCS = ['/icons/icon.png', '/icons/icons.png', '/icons/icone4.png', '/icons/icone5.png'] as const

function LogoVector() {
  return (
    <img
      src={LOGO_SRC}
      alt="W Festival"
      width={36}
      height={36}
      className="flex-shrink-0 w-9 h-9 object-contain"
      onError={(e) => {
        const target = e.currentTarget
        target.style.display = 'none'
        const fallback = target.nextElementSibling as HTMLElement
        if (fallback) fallback.style.display = 'block'
      }}
    />
  )
}

function LogoFallback() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="flex-shrink-0 w-9 h-9 absolute inset-0 pointer-events-none" style={{ display: 'none' }} aria-hidden>
      <path d="M4 28L10 12L18 22L26 12L32 28" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GearIcon() {
  return (
    <svg className="w-4 h-4 text-white/80 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  )
}

function scrollToSection(id: string) {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

const SWIPE_THRESHOLD = 50
const EDGE_WIDTH = 24

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const openMenu = useCallback(() => setMenuOpen(true), [])
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches[0].clientX <= EDGE_WIDTH) touchStartX.current = e.touches[0].clientX
    }
    const onTouchMove = (e: TouchEvent) => {
      if (touchStartX.current === null) return
      const delta = e.touches[0].clientX - touchStartX.current
      if (delta >= SWIPE_THRESHOLD) {
        openMenu()
        touchStartX.current = null
      }
    }
    const onTouchEnd = () => { touchStartX.current = null }
    document.addEventListener('touchstart', onTouchStart, { passive: true })
    document.addEventListener('touchmove', onTouchMove, { passive: true })
    document.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      document.removeEventListener('touchstart', onTouchStart)
      document.removeEventListener('touchmove', onTouchMove)
      document.removeEventListener('touchend', onTouchEnd)
    }
  }, [openMenu])

  return (
    <header className="sticky top-0 z-50 w-full max-w-[100vw] overflow-x-hidden border-b border-white/5 header-bg">
      <div className="w-full h-16 flex items-center gap-2 min-w-0 px-4 sm:px-6 lg:pl-14 lg:pr-29">
        <div className="flex items-center gap-6 min-w-0 flex-shrink-2">
          <div className="h-10 flex-shrink-0 flex items-center -ml-px">
            <a href="/" className="flex items-end gap-1 w-full h-full items-center">
              <span className="relative inline-flex w-9 h-9 flex-shrink-0">
                <LogoVector />
                <LogoFallback />
              </span>
              <div className="flex flex-col items-start justify-end leading-none gap-0">
                <span className="text-white text-[10px] sm:text-xs font-normal leading-none">labs</span>
                <span className="font-semibold text-white text-[18px] leading-[18.71px] whitespace-nowrap pb-0.5 -mt-0.5">Festival</span>
              </div>
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-10 flex-shrink-0 h-16 max-w-[883px] ml-20">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }} className="flex items-center gap-1.5 text-white/90 hover:text-white text-sm transition-all duration-200 hover:scale-105 origin-left">
              <img src={NAV_ICON_SRCS[0]} alt="" width={16} height={16} className="w-4 h-4 object-contain" />
              Home
            </a>
            <a href="#live" onClick={(e) => { e.preventDefault(); scrollToSection('live') }} className="flex items-center gap-1.5 text-white/90 hover:text-white text-sm transition-all duration-200 hover:scale-105 origin-left">
              <img src={NAV_ICON_SRCS[1]} alt="" width={16} height={16} className="w-4 h-4 object-contain" />
              Live
            </a>
            <button type="button" onClick={() => scrollToSection('musical-styles')} className="flex items-center gap-1.5 text-white/90 hover:text-white text-sm transition-all duration-200 hover:scale-105 origin-left">
              <img src={NAV_ICON_SRCS[2]} alt="" width={16} height={16} className="w-4 h-4 object-contain" />
              Musical Styles
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </button>
            <button type="button" onClick={() => scrollToSection('exclusive-content')} className="flex items-center gap-1.5 text-white/90 hover:text-white text-sm transition-all duration-200 hover:scale-105 origin-left">
              <img src={NAV_ICON_SRCS[3]} alt="" width={16} height={16} className="w-4 h-4 object-contain" />
               Exclusive Content
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </button>
          </nav>
        </div>
        <div className="flex-1 min-w-0" aria-hidden />
        <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer rounded-lg px-2 py-1.5 -m-1 transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-avatar transition-transform duration-300">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
          </div>
          <span className="hidden sm:inline text-white text-sm font-medium whitespace-nowrap">Peter Parker</span>
          <span className="flex-shrink-0 transition-transform duration-200 hover:rotate-90">
            <GearIcon />
          </span>
        </div>
      </div>
      {menuOpen && (
        <>
          <div className="md:hidden fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm transition-opacity" aria-hidden onClick={closeMenu} />
          <nav className="md:hidden fixed left-0 top-0 bottom-0 z-[60] w-72 max-w-[85vw] py-6 px-4 flex flex-col gap-1 header-bg border-r border-white/10 shadow-xl animate-drawer-in">
            <div className="flex items-center justify-between mb-4 px-2">
              <span className="text-white font-semibold">Menu</span>
              <button type="button" onClick={closeMenu} className="p-2 text-white/80 hover:text-white rounded-lg" aria-label="Fechar menu">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </button>
            </div>
            <a href="#home" className="flex items-center gap-3 text-white/90 hover:text-white hover:bg-white/5 py-3 px-3 rounded-lg transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('home'); closeMenu() }}>Home</a>
            <a href="#live" className="flex items-center gap-3 text-white/90 hover:text-white hover:bg-white/5 py-3 px-3 rounded-lg transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('live'); closeMenu() }}>Live</a>
            <button type="button" className="flex items-center gap-3 text-white/90 hover:text-white hover:bg-white/5 py-3 px-3 rounded-lg transition-colors text-left w-full" onClick={() => { scrollToSection('musical-styles'); closeMenu() }}>Musical Styles</button>
            <button type="button" className="flex items-center gap-3 text-white/90 hover:text-white hover:bg-white/5 py-3 px-3 rounded-lg transition-colors text-left w-full" onClick={() => { scrollToSection('exclusive-content'); closeMenu() }}>Exclusive Content</button>
          </nav>
        </>
      )}
    </header>
  )
}
