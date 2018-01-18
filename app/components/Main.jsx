'use strict'

import 'babel-polyfill'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { BroswerRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import NavBar from './NavBar'


class Main extends Component {
  render() {
    console.log("this is auth: ", this.props.auth)
    return (
            <div>
                <NavBar />
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

const mainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)

export default mainContainer
