import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CocaBanner } from '../../components/CocaBanner'

describe('CocaBanner', () => {
  it('renderiza o primeiro slide com CTA', () => {
    render(<CocaBanner />)
    expect(screen.getByText(/GET A TASTE OF THE NEW COKE/i)).toBeInTheDocument()
  })

  it('renderiza três indicadores de slide', () => {
    render(<CocaBanner />)
    expect(screen.getByRole('button', { name: /ir para slide 1/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /ir para slide 2/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /ir para slide 3/i })).toBeInTheDocument()
  })

  it('muda de slide ao clicar no segundo indicador', async () => {
    render(<CocaBanner />)
    expect(screen.getByText(/GET A TASTE OF THE NEW COKE/i)).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: /ir para slide 2/i }))
    expect(screen.getByText(/EXPLORE FLAVORS/i)).toBeInTheDocument()
  })

  it('muda de slide ao clicar no terceiro indicador', async () => {
    render(<CocaBanner />)
    await userEvent.click(screen.getByRole('button', { name: /ir para slide 3/i }))
    expect(screen.getByText(/DISCOVER/i)).toBeInTheDocument()
  })
})
