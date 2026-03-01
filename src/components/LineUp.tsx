import { useEffect, useState } from 'react'
import { ArtistCard } from './ArtistCard'
import { AdCard } from './AdCard'
import { ScrollRow } from './ScrollRow'
import { SectionWrapper } from './SectionWrapper'
import { fetchLineUp, type LineUpItem } from '../services/lineup'
import { ASSETS } from '../constants/assets'

function LineUpSkeleton() {
  return (
    <ScrollRow>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="flex-shrink-0 w-[48vw] sm:w-[30vw] md:w-[20vw] lg:w-[16vw] xl:w-[14vw] h-[28vw] sm:h-[24vw] md:h-[20vw] lg:h-[14vw] min-h-[18vw] rounded-xl bg-neutral-800/50 animate-pulse"
        />
      ))}
    </ScrollRow>
  )
}

export function LineUp() {
  const [items, setItems] = useState<LineUpItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetchLineUp()
      .then((data) => {
        if (!cancelled) setItems(data)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => { cancelled = true }
  }, [])

  return (
    <SectionWrapper title="Line Up" scrollEdgeAlign contentClassName="!pr-0">
      {loading && <LineUpSkeleton />}
      {!loading && items.length > 0 && (
        <ScrollRow className="lg:!pr-0" innerClassName="!pr-0">
          {items.map((item) =>
            item.type === 'artist' ? (
              <ArtistCard key={item.id} name={item.name} gradient={item.gradient} variant="lineup" image={item.image} />
            ) : (
              <AdCard key={item.id} brand={item.brand} tagline={item.tagline} ctaText={item.ctaText} className={item.className} image={item.image} />
            )
          )}
          <ArtistCard key="peek" name="Coldplay" gradient="from-blue-800 to-neutral-900" variant="lineup" image={ASSETS.artists.coldplay} />
        </ScrollRow>
      )}
    </SectionWrapper>
  )
}
