import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from '../../components/Header'

describe('Header', () => {
  beforeEach(() => {
    document.getElementById('home')?.remove()
    document.getElementById('live')?.remove()
    const home = document.createElement('div')
    home.id = 'home'
    document.body.appendChild(home)
    const live = document.createElement('div')
    live.id = 'live'
    document.body.appendChild(live)
  })

  it('renderiza o logo e o nome do festival', () => {
    render(<Header />)
    expect(screen.getByAltText('W Festival')).toBeInTheDocument()
    expect(screen.getByText('Festival')).toBeInTheDocument()
  })

  it('renderiza o nome do usuário no desktop', () => {
    render(<Header />)
    expect(screen.getByText('Peter Parker')).toBeInTheDocument()
  })

  it('abre o menu mobile ao clicar no botão hamburger', async () => {
    render(<Header />)
    const menuButton = screen.getByRole('button', { name: /abrir menu/i })
    expect(menuButton).toBeInTheDocument()
    expect(screen.queryByText('Menu')).not.toBeInTheDocument()
    await userEvent.click(menuButton)
    expect(screen.getByText('Menu')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /fechar menu/i })).toBeInTheDocument()
  })

  it('fecha o menu mobile ao clicar no botão fechar', async () => {
    render(<Header />)
    await userEvent.click(screen.getByRole('button', { name: /abrir menu/i }))
    expect(screen.getByText('Menu')).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: /fechar menu/i }))
    expect(screen.queryByText('Menu')).not.toBeInTheDocument()
  })

  it('abre o modal do usuário ao clicar no botão do perfil', async () => {
    render(<Header />)
    const userButton = screen.getByRole('button', { name: /menu do usuário/i })
    expect(userButton).toBeInTheDocument()
    expect(screen.queryByText('Meu perfil')).not.toBeInTheDocument()
    await userEvent.click(userButton)
    expect(screen.getByText('Meu perfil')).toBeInTheDocument()
    expect(screen.getByText('Configurações')).toBeInTheDocument()
    expect(screen.getByText('Sair')).toBeInTheDocument()
  })

  it('modal do usuário exibe informações do perfil', async () => {
    render(<Header />)
    await userEvent.click(screen.getByRole('button', { name: /menu do usuário/i }))
    const dialog = screen.getByRole('dialog')
    expect(within(dialog).getByText('Peter Parker')).toBeInTheDocument()
    expect(within(dialog).getByText('peter.parker@example.com')).toBeInTheDocument()
  })

  it('fecha o modal ao clicar em uma opção', async () => {
    render(<Header />)
    await userEvent.click(screen.getByRole('button', { name: /menu do usuário/i }))
    expect(screen.getByText('Meu perfil')).toBeInTheDocument()
    await userEvent.click(screen.getByText('Configurações'))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('menu mobile exibe links de navegação', async () => {
    render(<Header />)
    await userEvent.click(screen.getByRole('button', { name: /abrir menu/i }))
    expect(screen.getByText('Menu')).toBeInTheDocument()
    const mobileNav = screen.getByText('Menu').closest('nav')
    expect(mobileNav).toBeInTheDocument()
    expect(within(mobileNav!).getByText('Home')).toBeInTheDocument()
    expect(within(mobileNav!).getByText('Live')).toBeInTheDocument()
    expect(within(mobileNav!).getByText('Musical Styles')).toBeInTheDocument()
    expect(within(mobileNav!).getByText('Exclusive Content')).toBeInTheDocument()
  })
})
