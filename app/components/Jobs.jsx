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
    const jobs = this.props.jobs
    return(
      <div>
        <div className="section">
          <div className="container">
            <h1 className="title" id="AllJobs">Jobs in US</h1>
            <hr />
            <table className="table is-fullwidth is-striped">
              <tbody>
                <tr>
                  <td>Title</td>
                  <td>Company Name</td>
                  <td>Description</td>
                  <td>City</td>
                  <td>State</td>
                </tr>
              {
                jobs.map((job, index) => (
                  <tr key={job.id}>
                    <td>{job.title}</td>
                    <td>{job.companyName}</td>
                    <td>{job.description}</td>
                    <td>{job.city}</td>
                    <td>{job.state}</td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </div>
        </div>
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


