'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')
const Secret = require('./secret')

OAuth.belongsTo(User)
User.hasOne(OAuth)

//Will need to add user > secret associations later

module.exports = {
  User,
  Secret,
}
