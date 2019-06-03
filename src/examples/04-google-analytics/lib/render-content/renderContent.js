const { appIdentifier, supportedActions } = require('../constants')
const { htm } = require('@zeit/integration-utils')
const log = require('../../../../lib/log/log')

// Render functions
const renderGAConfiguration = require('./lib/renderGAConfiguration')
const renderWelcome = require('./lib/renderWelcome')

module.exports = ({ action, clientState, payload, zeitClient }) => {
  let output

  // Logging
  log.message({ message: `${appIdentifier} renderContent received
  action  -> ${action}`})
  log.entity({ obj: clientState, label: `${appIdentifier} renderContent received clientState ` })

  // log.entity({ obj: payload, label: `${appIdentifier} renderContent received payload ` })
  log.message({ message: `${appIdentifier} renderContent received payload` })

  // log.entity({ obj: zeitClient, label: `${appIdentifier} renderContent received zeitClient ` })
  log.message({ message: `${appIdentifier} renderContent received zeitClient` })

  switch (action) {
    case supportedActions["create-ga-secret"]: // Create Google Analytics secret
    case supportedActions.view:  // Initial load
      output = htm`${renderWelcome()} ${renderGAConfiguration({ clientState, payload, action, zeitClient })}`
      break
    default:
      break
  }

  return htm`${output}`
}