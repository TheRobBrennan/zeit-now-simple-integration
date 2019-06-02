const { appIdentifier, supportedActions } = require('../constants')
const { htm } = require('@zeit/integration-utils')
const log = require('../../../../lib/log/log')

// Render functions
const renderGAConfiguration = require('./lib/renderGAConfiguration')
const renderWelcome = require('./lib/renderWelcome')

// TODO: Payload needs to be passed into renderContent
module.exports = ({ action, clientState }) => {
  let output

  log.message({ message: `${appIdentifier} renderContent received action "${action}"` })
  log.entity({ obj: clientState, label: `${appIdentifier} renderContent received clientState ` })

  switch (action) {
    case supportedActions["create-ga-secret"]: // Create Google Analytics secret
    case supportedActions.view:  // Initial load
      // TODO: Payload needs to be passed into GA Config
      output = htm`${renderWelcome()} ${renderGAConfiguration({ clientState })}`
      break
    default:
      break
  }

  return htm`${output}`
}