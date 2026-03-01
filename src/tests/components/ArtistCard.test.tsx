import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ArtistCard } from '../../components/ArtistCard'

describe('ArtistCard', () => {
  it('renderiza o nome do artista', () => {
    render(
      <ArtistCard
        name="Coldplay"
        gradient="from-blue-900 to-indigo-950"
      />
    )
    expect(screen.getByText('Coldplay')).toBeInTheDocument()
  })

  it('renderiza como article', () => {
    render(
      <ArtistCard
        name="Alok"
        gradient="from-amber-900 to-orange-950"
      />
    )
    const article = screen.getByRole('article')
    expect(article).toBeInTheDocument()
  })

  it('aceita variant lineup', () => {
    const { container } = render(
      <ArtistCard
        name="Marshmello"
        gradient="from-purple-900 to-pink-950"
        variant="lineup"
      />
    )
    expect(screen.getByText('Marshmello')).toBeInTheDocument()
    expect(container.querySelector('article')).toBeInTheDocument()
  })
})
