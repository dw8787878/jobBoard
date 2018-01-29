'use strict'

import 'babel-polyfill'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'

import { fetchJobs } from '../reducers/jobs'

import store from '../store.jsx'

class Jobs extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount() {
    this.props.loadAllJobs()
  }
  render(){
    console.log('here....')
    console.log('this.props.jobs:',this.props.jobs)
    return(
      <div>
        these are the jobs...
      </div>
    )
  }
}

const mapStateToProps = function(state, ownProps) {
  const jobs = ownProps.jobs || state.jobs
  return {
    jobs
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    loadAllJobs: () => {
      dispatch(fetchJobs())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)


