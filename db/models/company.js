'use strict'

const DataTypes = require('sequelize')

module.exports = db => db.define('company', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  website: {
    type: DataTypes.STRING
  },
  logo: {
    type: DataTypes.STRING
  }
})

module.exports.associations = (Company, {Job}) => {
  Company.belongsToMany(Job, {through: 'companyJob'})
}

//Company Information:
// Company Name
// Description
// Contact Email
// Website
// Logo
