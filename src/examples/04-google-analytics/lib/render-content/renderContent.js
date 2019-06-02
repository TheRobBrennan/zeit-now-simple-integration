const { appIdentifier } = require('../constants')
const { htm } = require('@zeit/integration-utils')
const log = require('../../../../lib/log/log')

// Components
const Welcome = require('../../components/Welcome')

module.exports = (action) => {
  let renderedOutput

  log.message(`${appIdentifier} renderContent received action "${action}"`)

  switch (action) {
    case 'view':  // Initial load
      renderedOutput = htm`<${Welcome} message=${"Welcome"} tag=${"H1"} />`
      break
    default:
      break
  }

  log.message(`${appIdentifier} renderContent complete`)

  return htm`${renderedOutput}`
}