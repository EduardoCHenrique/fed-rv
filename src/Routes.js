import React from 'react'
import ReactDOM from 'react-dom'
import Home from 'components/views/Home'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

export default class Routes {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  )
}
