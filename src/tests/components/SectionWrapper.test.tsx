import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionWrapper } from '../../components/SectionWrapper'

describe('SectionWrapper', () => {
  it('renderiza o título e os children', () => {
    render(
      <SectionWrapper title="Line Up">
        <p>Conteúdo da secção</p>
      </SectionWrapper>
    )
    expect(screen.getByRole('heading', { name: 'Line Up' })).toBeInTheDocument()
    expect(screen.getByText('Conteúdo da secção')).toBeInTheDocument()
  })

  it('renderiza a descrição quando passada', () => {
    render(
      <SectionWrapper title="Shows" description="Confira os próximos shows">
        <div />
      </SectionWrapper>
    )
    expect(screen.getByText('Confira os próximos shows')).toBeInTheDocument()
  })

  it('renderiza o action quando passado', () => {
    render(
      <SectionWrapper title="Vídeos" action={<button type="button">Ver todos</button>}>
        <div />
      </SectionWrapper>
    )
    expect(screen.getByRole('button', { name: 'Ver todos' })).toBeInTheDocument()
  })

  it('oculta o título quando hideTitle e scrollEdgeAlign são true', () => {
    render(
      <SectionWrapper title="Oculto" hideTitle scrollEdgeAlign>
        <span>Conteúdo</span>
      </SectionWrapper>
    )
    expect(screen.queryByRole('heading', { name: 'Oculto' })).not.toBeInTheDocument()
    expect(screen.getByText('Conteúdo')).toBeInTheDocument()
  })
})
