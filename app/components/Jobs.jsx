'use strict'

import 'babel-polyfill'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'

import { fetchJobs } from '../reducers/jobs'

class Jobs extends Component{
  constructor(props){
    super(props)
  }
  componenentDidMount() {
    this.props.loadAllJobs()
  }
  render(){
    console.log('this.props.jobs:',this.props.jobs)
    console.log("we renderin jobs...")
    return(
      <div>
        these are the jobs...
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    jobs: state.jobs
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    loadAllJobs: () => {
      console.log('dispatchin...')
      dispatch(fetchJobs())
    }
  }
}

const jobsListContainer = connect(mapStateToProps, mapDispatchToProps)(Jobs)

export default jobsListContainer

