import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/views/Home'

import 'assets/style/base.scss'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </BrowserRouter>
), document.getElementById('app'))
