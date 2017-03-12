'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

//this is: /api

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/secrets', require('./secrets'))

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
