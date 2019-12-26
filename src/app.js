import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import { Provider } from 'react-redux'
import { store } from './store'
import Test from './components/test'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Test />
      </ThemeProvider>
    </Provider>
  )
}

export default App
