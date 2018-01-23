import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './Main'
import NavBar from './NavBar'
import Jobs from './Jobs'

export default class Routes extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path = '/' component = {Main} />
        </div>
      </Router>
    )
  }
}
