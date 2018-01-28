import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './Main'
// import NavBar from './NavBar'
import Jobs from './Jobs'

import { fetchJobs } from '../reducers/jobs'
import store from '../store.jsx'

class Routes extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path = '/' component = {Main} />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = function(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
