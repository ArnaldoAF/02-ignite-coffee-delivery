import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { HashRouter } from 'react-router-dom'
import { Router } from './Router'
import { CoffeeContextProvider } from './contexts/CoffeeContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <CoffeeContextProvider>
          <Router />
        </CoffeeContextProvider>
      </HashRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
