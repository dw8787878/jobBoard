'use strict'

const db = require('APP/db')
const Company = db.model('company')
const Jobs = db.model('job')

module.exports = require('express').Router()
  .get('/',
  (req, res, next) =>
    Jobs.findAll()
    .then(jobs => res.json(jobs))
    .catch(next)
  )
