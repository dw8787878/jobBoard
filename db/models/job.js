'use strict'

const DataTypes = require('sequelize')

module.exports = db => db.define('job', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  companyId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  companyName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  },
  jobType: {
    type: DataTypes.STRING
  },
  category: {
    type: DataTypes.STRING
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  expiration: {
    type: DataTypes.DATE,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    defaultValue: 'USA'
  },
  state: {
    type: DataTypes.STRING
  },
  city: {
    type: DataTypes.STRING
  },
  zipCode: {
    type: DataTypes.INTEGER
  }
})


//Title
//Description
//Job Type -> Freelance, Full-time, Internship, Part-time, Contract
//Category-> Created by company

// Location:
// Country
// State
// Zip-Code
// City

// Listing
// Listing Type => radio(Post a Job / Visible 40 days)
