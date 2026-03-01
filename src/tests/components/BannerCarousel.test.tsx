import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BannerCarousel } from '../../components/BannerCarousel'

describe('BannerCarousel', () => {
  it('renderiza o primeiro slide com CTA', () => {
    render(<BannerCarousel />)
    expect(screen.getByText(/GET A TASTE OF AMSTERDAM/i)).toBeInTheDocument()
  })

  it('renderiza indicadores de slide (dots)', () => {
    render(<BannerCarousel />)
    expect(screen.getByRole('button', { name: /ir para slide 1/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /ir para slide 2/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /ir para slide 3/i })).toBeInTheDocument()
  })
})
