const { appIdentifier } = require('../constants')
const { htm } = require('@zeit/integration-utils')
const log = require('../../../../lib/log/log')

module.exports = (action) => {
  log.value(action, `${appIdentifier} renderContent received action: `)
  log.message(`${appIdentifier} renderContent complete`)
  return htm``
}