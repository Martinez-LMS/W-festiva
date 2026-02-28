import { useRef, useState, useCallback, useEffect, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  innerClassName?: string
  showScrollbar?: boolean
  animateStagger?: boolean
}

export function ScrollRow({ children, className = '', innerClassName = '', showScrollbar = false, animateStagger = true }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)
  const justDraggedRef = useRef(false)

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return
    justDraggedRef.current = false
    setIsDragging(true)
    startXRef.current = e.clientX
    scrollLeftRef.current = scrollRef.current.scrollLeft
  }, [])

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !scrollRef.current) return
      e.preventDefault()
      const walk = (e.clientX - startXRef.current) * 1.2
      scrollRef.current.scrollLeft = scrollLeftRef.current - walk
    },
    [isDragging]
  )

  const onMouseUp = useCallback(() => {
    if (isDragging) justDraggedRef.current = true
    setIsDragging(false)
  }, [isDragging])

  const onMouseLeave = useCallback(() => {
    if (isDragging) justDraggedRef.current = true
    setIsDragging(false)
  }, [isDragging])

  const onCaptureClick = useCallback((e: React.MouseEvent) => {
    if (justDraggedRef.current) {
      e.preventDefault()
      e.stopPropagation()
    }
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent) => onMouseMove(e)
    const onUp = () => onMouseUp()
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [onMouseMove, onMouseUp])

  return (
    <div
      ref={scrollRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onClickCapture={onCaptureClick}
      className={`overflow-x-auto overflow-y-hidden pb-[1vw] w-full max-w-full -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:pl-0 lg:pr-8 min-w-0 select-none ${showScrollbar ? '' : 'scrollbar-hide'} ${className} ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} scroll-smooth`}
      style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
    >
      <div className={`flex items-stretch gap-[2.5vw] sm:gap-[2vw] lg:gap-[1.2vw] min-w-max pr-[4rem] ${animateStagger ? 'scroll-row-stagger' : ''} ${innerClassName}`}>
        {children}
      </div>
    </div>
  )
}
