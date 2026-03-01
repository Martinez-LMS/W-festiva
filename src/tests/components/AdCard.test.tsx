import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AdCard } from '../../components/AdCard'

describe('AdCard', () => {
  it('renderiza brand, tagline e CTA', () => {
    render(
      <AdCard
        brand="Tesla"
        tagline="Drive the future"
        ctaText="Saiba mais"
      />
    )
    expect(screen.getByText('Tesla')).toBeInTheDocument()
    expect(screen.getByText('Drive the future')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /saiba mais/i })).toBeInTheDocument()
  })

  it('renderiza o badge Announcement', () => {
    render(
      <AdCard
        brand="Tesla"
        tagline="Tag"
        ctaText="CTA"
      />
    )
    expect(screen.getByText('Announcement')).toBeInTheDocument()
  })

  it('CTA usa o href passado', () => {
    render(
      <AdCard
        brand="X"
        tagline="Y"
        ctaText="Link"
        ctaHref="/promo"
      />
    )
    const link = screen.getByRole('link', { name: /link/i })
    expect(link).toHaveAttribute('href', '/promo')
  })
})
