const { appIdentifier, supportedActions } = require('../constants')
const { htm } = require('@zeit/integration-utils')
const log = require('../../../../lib/log/log')

// Render functions
const renderGAConfiguration = require('./lib/renderGAConfiguration')
const renderWelcome = require('./lib/renderWelcome')

// TODO: Add zeitClient prop
module.exports = ({ action, clientState, payload }) => {
  let output

  log.message({ message: `${appIdentifier} renderContent received
  action  -> ${action}`})
  log.entity({ obj: clientState, label: `${appIdentifier} renderContent received clientState ` })
  // log.entity({ obj: payload, label: `${appIdentifier} renderContent received payload ` })
  log.message({ message: `${appIdentifier} renderContent received payload` })
  // TODO: Add logging to verify zeitClient

  switch (action) {
    case supportedActions["create-ga-secret"]: // Create Google Analytics secret
    case supportedActions.view:  // Initial load
      // TODO: Pass zeitClient to renderGAConfiguration
      output = htm`${renderWelcome()} ${renderGAConfiguration({ clientState, payload, action })}`
      break
    default:
      break
  }

  return htm`${output}`
}