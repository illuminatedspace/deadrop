'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'

//CONTAINERS
import DropContainer from './containers/DropContainer'
import SecretsContainer from './containers/SecretsContainer'
import SecretContainer from './containers/SecretContainer'

//REACT COMPONENTS
import App from './components/App'

//leaving this here for reference
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
)

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/jokes" />
        <Route path="/jokes" component={Jokes} />
        <Route path="/drop" component={DropContainer} />
        <Route path="/secrets" component={SecretsContainer} />
        <Route path="/secret/:secretId" component={SecretContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
