import { useRef, useEffect, useState } from 'react'
import { GoDeviceCameraVideo } from 'react-icons/go'

import { ASSETS } from '../constants/assets'

const VIDEO_AVRIL_FULL = ASSETS.videos.avrilLiveFull
const VIDEO_AVRIL_SHORT = ASSETS.videos.avrilLiveShort
const LOOP_SECONDS = 2

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(false)
  const [src, setSrc] = useState(VIDEO_AVRIL_FULL)
  const [muted, setMuted] = useState(true)
  const [showLista, setShowLista] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = muted
    video.play().then(() => setPlaying(true)).catch(() => {})
  }, [src, muted])
  useEffect(() => {
    const video = videoRef.current
    if (video) video.muted = muted
  }, [muted])
  useEffect(() => {
    const tick = () => {
      const v = videoRef.current
      if (!v) return
      if (v.paused) {
        v.currentTime = 0
        v.muted = muted
        v.play().catch(() => {})
      } else if (v.currentTime >= LOOP_SECONDS - 0.05) {
        v.currentTime = 0
        v.play().catch(() => {})
      }
    }
    const id = setInterval(tick, 200)
    return () => clearInterval(id)
  }, [src, muted])
  const handlePlay = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = muted
    video.play().then(() => setPlaying(true)).catch(() => {})
  }
  const handleToggleMute = () => setMuted((m) => !m)
  const handleLayout = async () => {
    const v = videoRef.current
    if (!v) return
    try {
      if (document.pictureInPictureElement) await document.exitPictureInPicture()
      else await v.requestPictureInPicture()
    } catch (_) {}
  }
  const handleError = () => {
    if (src === VIDEO_AVRIL_FULL) setSrc(VIDEO_AVRIL_SHORT)
  }
  const handleEnded = () => {
    const video = videoRef.current
    if (video) {
      video.currentTime = 0
      video.play().catch(() => {})
    }
  }
  return (
    <section className="relative w-full max-w-[100vw] bg-surface overflow-hidden">
      <div ref={containerRef} className="aspect-video max-h-[70vh] sm:max-h-[75vh] relative bg-[#111114] w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/40 via-neutral-900 to-neutral-900" />
        <div className="absolute inset-0 flex items-center justify-center">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src={src}
            autoPlay
            playsInline
            muted={muted}
            loop
            preload="auto"
            onError={handleError}
            onEnded={handleEnded}
            onTimeUpdate={(e) => {
              const v = e.currentTarget
              if (v.currentTime >= LOOP_SECONDS - 0.05) {
                v.currentTime = 0
                v.play().catch(() => {})
              }
            }}
            onStalled={() => { videoRef.current?.play().catch(() => {}) }}
            onSuspend={() => { videoRef.current?.play().catch(() => {}) }}
            onWaiting={() => { videoRef.current?.play().catch(() => {}) }}
            onCanPlay={() => videoRef.current?.play().catch(() => {})}
          />
          <div
            role="button"
            tabIndex={0}
            onClick={handlePlay}
            onKeyDown={(e) => e.key === 'Enter' && handlePlay()}
            className={`w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 sm:border-4 border-white/30 flex items-center justify-center bg-black/40 relative z-10 cursor-pointer transition-all duration-300 hover:scale-110 ${playing ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
          >
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-0.5 sm:border-t-[12px] sm:border-l-[20px] sm:border-b-[12px] sm:ml-1" />
          </div>
        </div>
        <div className="absolute top-2 sm:top-4 left-4 sm:left-6 lg:left-20">
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-white">Avril Lavigne</h3>
          <p className="text-white/70 text-xs sm:text-sm">LIVE · Sunset · Singer Camera</p>
        </div>
        <button className="absolute bottom-2 sm:bottom-4 left-4 sm:left-6 lg:left-14 px-1.5 py-1 sm:px-4 sm:py-2 rounded-4xl bg-[#E96744] text-white text-[10px] sm:text-sm font-medium flex items-center gap-0.5 sm:gap-2 hover:bg-[#d85a38] transition-all duration-200 hover:scale-105 active:scale-95 h-4 sm:h-6 min-w-0 sm:min-w-[187px]">
          <span className="inline-flex w-2.5 h-2.5 sm:w-4 sm:h-4 flex-shrink-0"><GoDeviceCameraVideo size="100%" /></span>
          <span className="hidden sm:inline">Chose your camera</span>
          <span className="sm:hidden">Camera</span>
        </button>
        <div className="absolute bottom-2 sm:bottom-4 flex flex-col sm:flex-row items-center gap-0.5 sm:gap-2" style={{ right: 'var(--player-edge-right)' }}>
          <button
            type="button"
            onClick={() => setShowLista((s) => !s)}
            className="p-0.5 sm:p-1 rounded-lg bg-transparent hover:bg-white/15 text-white border-0 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Lista"
          >
            <img src={ASSETS.player.list} alt="" className="w-7 h-7 sm:w-12 sm:h-12 object-contain" />
          </button>
          <button
            type="button"
            onClick={handleLayout}
            className="p-0.5 sm:p-1 rounded-lg bg-transparent hover:bg-white/15 text-white border-0 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Picture-in-picture"
          >
            <img src={ASSETS.player.pip} alt="" className="w-7 h-7 sm:w-12 sm:h-12 object-contain" />
          </button>
          <button
            type="button"
            onClick={handleToggleMute}
            className="p-0.5 sm:p-1 rounded-lg bg-transparent hover:bg-white/15 text-white border-0 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            aria-label={muted ? 'Ativar som' : 'Desativar som'}
          >
            <img src={ASSETS.player.volume} alt="" className="w-7 h-7 sm:w-12 sm:h-12 object-contain" />
          </button>
          <button
            type="button"
            onClick={() => setShowSettings((s) => !s)}
            className="p-0.5 sm:p-1 rounded-lg bg-transparent hover:bg-white/15 text-white border-0 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Configurações"
          >
            <img src={ASSETS.player.settings} alt="" className="w-7 h-7 sm:w-12 sm:h-12 object-contain" />
          </button>
        </div>
        {showLista && (
          <div className="absolute bottom-24 z-20 py-2 px-3 rounded-lg bg-black/80 backdrop-blur border border-white/10 min-w-[160px]" style={{ right: 'var(--player-edge-right)' }}>
            <p className="text-white text-sm font-medium mb-1">Câmeras</p>
            <button type="button" className="block w-full text-left text-white/80 text-sm py-1 hover:text-white">Singer Camera</button>
            <button type="button" className="block w-full text-left text-white/80 text-sm py-1 hover:text-white">Wide Shot</button>
            <button type="button" className="block w-full text-left text-white/80 text-sm py-1 hover:text-white">Crowd</button>
            <button type="button" onClick={() => setShowLista(false)} className="mt-1 pt-1 border-t border-white/10 text-white/60 text-xs">Fechar</button>
          </div>
        )}
        {showSettings && (
          <div className="absolute bottom-24 z-20 py-2 px-3 rounded-lg bg-black/80 backdrop-blur border border-white/10 min-w-[160px]" style={{ right: 'var(--player-edge-right)' }}>
            <p className="text-white text-sm font-medium mb-1">Configurações</p>
            <button type="button" className="block w-full text-left text-white/80 text-sm py-1 hover:text-white">Qualidade: Auto</button>
            <button type="button" className="block w-full text-left text-white/80 text-sm py-1 hover:text-white">Velocidade: 1x</button>
            <button type="button" onClick={() => setShowSettings(false)} className="mt-1 pt-1 border-t border-white/10 text-white/60 text-xs">Fechar</button>
          </div>
        )}
      </div>
      <div className="h-0.5 bg-[#6b21a8]" />
    </section>
  )
}
