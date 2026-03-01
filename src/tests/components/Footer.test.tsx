import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from '../../components/Footer'

describe('Footer', () => {
  it('renderiza o logo do W Festival', () => {
    render(<Footer />)
    expect(screen.getByAltText('W Labs Festival')).toBeInTheDocument()
    expect(screen.getByText('Festival')).toBeInTheDocument()
  })

  it('renderiza os links do footer', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /about labs festival/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /terms of use and privacy/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /send feedback/i })).toBeInTheDocument()
  })

  it('renderiza os badges de download', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /download on google play/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /download on the app store/i })).toBeInTheDocument()
  })

  it('renderiza o texto de copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/©2024 Watch Brasil/i)).toBeInTheDocument()
  })
})
