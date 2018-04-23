import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import Store from './store'
import Home from './components/views/Home'

import 'assets/style/base.scss'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

ReactDOM.render((
  <Provider store={Store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>
), document.getElementById('app'))
