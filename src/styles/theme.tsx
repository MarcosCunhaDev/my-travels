import React, { ReactNode } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    highlight: '#e20e8d',
    background: '#030518',
    white: '#FFFFFF'
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em'
  }
}

function Theme({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
