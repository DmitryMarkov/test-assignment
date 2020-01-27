import React from 'react'
import theme from '@rebass/preset'
import { ThemeProvider } from 'emotion-theming'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header'
import Offer from './components/offer'
import Offers from './components/offers'
import { store } from './store'

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/offer/:id">
              <Offer />
            </Route>
            <Route path="/">
              <Header />
              <Offers />
            </Route>
          </Switch>
        </ThemeProvider>
      </Provider>
    </Router>
  )
}

export default App
