'use strict'

const router = require('express').Router()

const db = require('APP/db')
const Secret = db.model('secrets')

//this is: /api/secrets

  // returns all secrets
  router.get('/', (req, res, next) => {
    Secret.findAll()
    .then(secrets => res.send(secrets))
    .catch(next)
  })

//returns one with a specific id
  router.get('/:secretId', (req, res, next) => {
    Secret.findOne({
      where: {
        id: req.params.secretId,
      }
    })
    .then(secret => res.send(secret.text))
  })

//returns nearby secrets
//put route for payload with location
  router.put('/nearby', (req, res, next) => {
    let longitude = req.body.longitude
    let latitude = req.body.latitude
    let longitudeMin = +longitude - 0.01
    let longitudeMax = +longitude + 0.01
    let latitudeMin = +latitude - 0.01
    let latitudeMax = +latitude + 0.01
    // console.log('~~~~~body', req.body)
    Secret.findAll({
      where: {
        longitude: {
          between: [longitudeMin, longitudeMax]
        },
        latitude: {
          between: [latitudeMin, latitudeMax]
        },
      }
    })
    .then(nearby => res.send(nearby))
    .catch(next)
  })

//returns acessible secrets
  router.put('/here', (req, res, next) => {
    let longitude = req.body.longitude
    let latitude = req.body.latitude
    let longitudeMin = +longitude - 0.005
    let longitudeMax = +longitude + 0.005
    let latitudeMin = +latitude - 0.005
    let latitudeMax = +latitude + 0.005
    // console.log('~~~~~body', req.body)
    Secret.findAll({
      where: {
        longitude: {
          between: [longitudeMin, longitudeMax]
        },
        latitude: {
          between: [latitudeMin, latitudeMax]
        },
      }
    })
    .then(here => res.send(here))
    .catch(next)
  })

  //makes a new secret
  router.post('/drop', (req, res, next) => {
    let text = req.body.secret,
        latitude = req.body.latitude,
        longitude = req.body.longitude
    Secret.create({
      text: text,
      latitude: latitude,
      longitude: longitude,
    })
    .then(secret => res.status(201).send(secret))
    .catch(next)
  })


module.exports = router
