import React from 'react'
import theme from '@rebass/preset'
import { ThemeProvider } from 'emotion-theming'
import { Provider } from 'react-redux'
import Header from './components/header'
import Offers from './components/offers'
import { store } from './store'

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
