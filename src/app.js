import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import { Provider } from 'react-redux'
import { store } from './store'
import Header from './components/header'
import Offers from './components/offers'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
        <Offers />
      </ThemeProvider>
    </Provider>
  )
}

export default App
