'use strict'

import 'babel-polyfill'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
// import { NavLink, withRouter } from 'react-router-dom'

class NavBar extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(

    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="localhost:1337">

          <img src="https://i.imgur.com/hOT1nFL.jpg" alt="Genius Talent Gofer" width="112" height="91" />
        </a>

        <button className="button navbar-burger">
          <span>Login</span>
          <span>Current Jobs</span>
          <span>Advanced Search Jobs</span>
          <span>Company Login</span>
          <span>FAQ</span>
          <span>Contact Us</span>
        </button>
      </div>

      <div className="navbar-start">
        <a className="navbar-item" href="/#Login">
          Login
        </a>
        <a className="navbar-item" href="/#CurrentJobs">
          Current Jobs
        </a>
        <a className="navbar-item" href="/#AdvanceSearch">
          Advanced Search Jobs
        </a>
        <a className="navbar-item" href="/#Login">
          Company Login
        </a>
        <a className="navbar-item" href="/#FAQ">
          FAQ
        </a>
        <a className="navbar-item" href="/#Contact">
          Contact Us
        </a>
      </div>

    </nav>
    )
  }
}

const mapStateToProps = function(state){
  return {}
}

const mapDispatchToProps = function(dispatch){
  return {}
}

const navBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar)

export default navBarContainer

// class NavBar extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div className="container">
//       <nav className="navbar">
//         <div className="navbar-brand">

//           <img src="http://geniustalentgofer.com/wp-content/uploads/2016/09/2.jpg" alt="Genius Talent Gofer" width="112" height="28" />

//           <div className="navbar-burger burger">
//           <span></span>
//           <span></span>
//           <span></span>
//           </div>
//         </div>

//         <div className="navbar-menu">
//           <div className="navbar-start">
//             <a className="navbar-item" href="/#CurrentJobs">
//             Current Jobs
//             </a>
//           </div>
//         </div>
//       </nav>
//       </div>
//     )
//   }
// }
