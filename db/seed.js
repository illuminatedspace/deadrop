const db = require('APP/db')

// const seedUsers = () => db.Promise.map([
//   {name: 'so many', email: 'god@example.com', password: '1234'},
//   {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
// ], user => db.model('users').create(user))

const seedSecrets = () => db.Promise.map([
  {text: 'this is a secret at GHA', latitude: -74.0123736, longitude: 40.704887199999995},
  {text: 'this is another secret at Open Market', latitude: -74.010152, longitude: 40.705343},
  {text: 'this is a secret at Trinity Church', latitude: -74.011770, longitude: 40.707819},
], secret => db.model('secrets').create(secret))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedSecrets)
  .then(secrets => console.log(`Seeded ${secrets.length} secrets ALRIGHT!`))
  .catch(error => console.error(error))
  .finally(() => db.close())
