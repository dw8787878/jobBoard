const DataTypes = require('sequelize')

module.exports = db => db.define('companyJob', {
  job_id: DataTypes.INTEGER
})
