import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from './index'
import { ThemeProvider } from '../../utils/context'

describe('The Home component', () => {
  it('Should render title', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    )
    // screen.debug()
    // #1 method
    // expect(
    //   screen.getByText(
    //     'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents'
    //   )
    // ).toBeTruthy()
    // #2 method
    expect(
      screen.getByRole('heading', {
        // h2
        level: 2,
        text: 'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents',
      })
    ).toBeTruthy()
  })
})
