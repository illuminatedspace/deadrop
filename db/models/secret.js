'use strict'

const Secret = db.define('secrets', {
  text: Sequelize.TEXT,
  coordinates: {
    type:Sequelize.GEOMETRY('POINT')
  },
}, {})

module.exports = Secret
