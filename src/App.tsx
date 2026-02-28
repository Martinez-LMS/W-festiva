import { Header } from './components/Header'
import { VideoSection } from './components/VideoSection'
import { LineUp } from './components/LineUp'
import { FestivalForYou } from './components/FestivalForYou'
import { BannerCarousel } from './components/BannerCarousel'
import { InLive } from './components/InLive'
import { YesterdayShows } from './components/YesterdayShows'
import { ExclusiveContent } from './components/ExclusiveContent'
import { RockSingers } from './components/RockSingers'
import { CocaBanner } from './components/CocaBanner'
import { WatchAgain } from './components/WatchAgain'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-surface w-full max-w-[100vw] overflow-x-hidden min-w-0">
      <Header />
      <main className="w-full max-w-[100vw] overflow-x-hidden min-w-0">
        <section id="home">
          <VideoSection />
          <LineUp />
        </section>
        <section id="musical-styles">
          <FestivalForYou />
        </section>
        <BannerCarousel />
        <section id="live">
          <InLive />
        </section>
        <YesterdayShows />
        <section id="exclusive-content">
          <ExclusiveContent />
        </section>
        <RockSingers />
        <CocaBanner />
        <WatchAgain />
      </main>
      <Footer />
    </div>
  )
}

export default App
