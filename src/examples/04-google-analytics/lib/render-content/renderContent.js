const { appIdentifier } = require('../constants')
const { htm } = require('@zeit/integration-utils')
const log = require('../../../../lib/log/log')

// Render functions
const renderWelcome = require('./lib/renderWelcome')

module.exports = (action) => {
  let output

  log.message(`${appIdentifier} renderContent received action "${action}"`)

  switch (action) {
    case 'view':  // Initial load
      output = renderWelcome()
      break
    default:
      break
  }

  return htm`${output}`
}