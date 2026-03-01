import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ShowCard } from '../../components/ShowCard'

describe('ShowCard', () => {
  it('renderiza artista e palco', () => {
    render(
      <ShowCard
        artist="Coldplay"
        stage="Palco Principal"
        gradient="from-blue-900 to-indigo-950"
      />
    )
    expect(screen.getByText('Coldplay')).toBeInTheDocument()
    expect(screen.getByText('Palco Principal')).toBeInTheDocument()
  })

  it('não renderiza badge Live quando isLive é false', () => {
    render(
      <ShowCard
        artist="Alok"
        stage="Stage"
        gradient="from-amber-900 to-orange-950"
      />
    )
    expect(screen.queryByText('Live')).not.toBeInTheDocument()
  })

  it('renderiza badge Live e data quando isLive é true', () => {
    render(
      <ShowCard
        artist="Dua Lipa"
        stage="Main Stage"
        gradient="from-pink-900 to-rose-950"
        isLive
        date="28.02.25 - 22:00 h"
      />
    )
    expect(screen.getByText('Live')).toBeInTheDocument()
    expect(screen.getByText('28.02.25 - 22:00 h')).toBeInTheDocument()
  })
})
