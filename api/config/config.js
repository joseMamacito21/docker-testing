const keys = require('./keys');

module.exports = {
  db: `mongodb://mongo:${keys.port}/cacique-project?authSource=admin`
}