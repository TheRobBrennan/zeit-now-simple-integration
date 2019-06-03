const getDeployments = require('./lib/getDeployments')
const upsertSecret = require('./lib/upsertSecret')

module.exports = {
  getDeployments,
  upsertSecret,
}