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
    let text = req.body.text,
        coordinates = req.body.coordinates
    Secret.create({
      text: text,
      coordinates: coordinates,
    })
    .then(secret => res.send(secret))
    .catch(next)
  })
