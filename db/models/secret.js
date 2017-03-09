'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Secret = db.define('secrets', {
  text: Sequelize.TEXT,
/*  coordinates: {
    Need PostGIS to use this type, gives access to methods I'll need later
    type:Sequelize.GEOMETRY('POINT')
  },*/
  latitude: {
    type:Sequelize.DECIMAL
  },
  longitude: {
    type:Sequelize.DECIMAL
  },
}, {})

module.exports = Secret
