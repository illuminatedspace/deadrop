'use strict'

const db = require('APP/db')
const Secret = db.model('secrets')

module.exports = require('express').Router()
  //returns all secrets
  .get('/', (req, res, next) => {
    Secret.findAll()
    .then(secrets => res.send(secrets))
    .catch(next)
  })

  //makes a new secret
  .post('/drop', (req, res, next) => {
    let text = req.body.secret,
        latitude = req.body.latitude,
        longitude = req.body.longitude
    console.log('IN POST ROUTE', req.body)
    Secret.create({
      text: text,
      latitude: latitude,
      longitude: longitude,
    })
    .then(secret => res.send(secret))
    .catch(next)
  })
