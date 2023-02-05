import Map from '.'
import { render, screen } from '@testing-library/react'

describe('Map', () => {
  it('should render without any marker', () => {
    render(<Map />)
    expect(
      screen.getByRole('link', {
        name: /Leaflet/i
      })
    ).toBeInTheDocument()
  })
  it('should render with the Marker in the correct place ', () => {
    const place = {
      id: '1',
      name: 'Brasília',
      slug: 'brasilia',
      location: { latitude: -15.793889, longitude: -47.882778 }
    }
    const place2 = {
      id: '2',
      name: 'São Paulo',
      slug: 'sao paulo',
      location: { latitude: 0, longitude: 0 }
    }
    render(<Map places={[place, place2]} />)

    expect(screen.getByTitle(/brasília/i)).toBeInTheDocument()
    expect(screen.getByTitle(/são paulo/i)).toBeInTheDocument()
  })
})
