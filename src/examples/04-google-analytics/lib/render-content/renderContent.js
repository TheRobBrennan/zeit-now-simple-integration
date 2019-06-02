const { appIdentifier, supportedActions } = require('../constants')
const { htm } = require('@zeit/integration-utils')
const log = require('../../../../lib/log/log')

// Render functions
const renderGAConfiguration = require('./lib/renderGAConfiguration')
const renderWelcome = require('./lib/renderWelcome')

// TODO: Add clientState as an argument
module.exports = (action) => {
  let output

  log.message(`${appIdentifier} renderContent received action "${action}"`)

  switch (action) {
    case supportedActions["create-ga-secret"]: // Create Google Analytics secret
    case supportedActions.view:  // Initial load
      // TODO: Pass clientState to our GA component
      output = htm`${renderWelcome()} ${renderGAConfiguration()}`
      break
    default:
      break
  }

  return htm`${output}`
}