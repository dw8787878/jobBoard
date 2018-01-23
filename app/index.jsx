'use strict'

import 'babel-polyfill'

import React from 'react'
import {render} from 'react-dom'
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import store from './store'
import Routes from './components/Routes'
// import Login from './components/Login'
// import WhoAmI from './components/WhoAmI'
// import NotFound from './components/NotFound'

render(
  <Provider store={store}>
      <Routes />
  </Provider>,
  document.getElementById('main')
)
