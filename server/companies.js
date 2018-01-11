'use strict'

const db = require('APP/db')
const Companies = db.model('company')
const Jobs = db.model('job')

module.exports = require('express').Router()
  .get('/',
(req, res, next) =>
  Companies.findAll()
  .then(companies => res.json(companies))
  .catch(next)
)
