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
  .get('/:id',
  (req, res, next) =>
    Companies.findById(req.params.id)
    .then(company => res.json(company))
    .catch(next)
)
