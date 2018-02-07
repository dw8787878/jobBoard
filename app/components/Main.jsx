'use strict'

import 'babel-polyfill'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
// import { BroswerRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import store from '../store.jsx'
import Jobs from './Jobs'
import { fetchJobs } from '../reducers/jobs'


class Main extends Component {
  render() {

    return (
            <div>
                <Jobs />
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main)

