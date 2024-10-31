import Card from './'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

describe('Card', () => {
  test('Should render title and image', async () => {
    render(
      <ThemeProvider>
        <Card
          title="Developpeur frontend"
          label="Freelance"
          picture="/myPicture.png"
        />
      </ThemeProvider>
    )
    const cardPicture = screen.getByRole('img')
    const cardTitle = screen.getByText(/Developpeur/i)
    expect(cardPicture.src).toBe('http://localhost/myPicture.png')
    expect(cardTitle.textContent).toBe(' Developpeur frontend ')
  })
  test('Should add ⭐️ around title', async () => {
    render(
      <ThemeProvider>
        <Card
          title="Developpeur frontend"
          label="Freelance"
          picture="/myPicture.png"
        />
      </ThemeProvider>
    )
    const cardTitle = screen.getByText(/Developpeur/i)
    const parentNode = cardTitle.closest('div')
    fireEvent.click(parentNode)
    expect(cardTitle.textContent).toBe('⭐️ Developpeur frontend ⭐️')
  })
})
