import Footer from './index'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'
describe('Footer', () => {
  it('Should render without crashing', async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    )
  })
  it('Should display a button and change the theme', async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    )
    const NightModeButton = screen.getByRole('button')
    expect(NightModeButton.textContent).toBe('Changer de mode : ☀️')
  })
  test('Change theme on click', async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    )
    const NightModeButton = screen.getByRole('button')
    fireEvent.click(NightModeButton)
    expect(NightModeButton.textContent).toBe('Changer de mode : 🌙')
  })
})
