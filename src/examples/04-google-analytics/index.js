const { htm } = require('@zeit/integration-utils')

// API
const zeit = require('../../api/zeit/zeit-now-api')

// Useful functions and libraries
const { appIdentifier } = require('./lib/constants')
const logError = require('../../lib/logError')
const logMessage = require('../../lib/logMessage')
const logObject = require('../../lib/logObject')
const logValue = require('../../lib/logValue')
const readConfiguration = require('./lib/configuration/readConfiguration')

module.exports = async ({ payload, zeitClient }) => {
  let metadata
  const { action } = payload

  // DEBUG
  logValue(action, `${appIdentifier} Page received action: `)

  // Initialize metadata store for this specific integration configuration (max size 100 KB)
  try {
    metadata = await readConfiguration(zeitClient)
  } catch (e) {
    logError(e)
  }

  // switch (action) {
  //   case 'view':  // Initial load
  //     console.log(`${appIdentifier} Initial load`)
  //     break
  //   default:
  //     break
  // }

  // Store our metadata for this specific integration configuration
  // await zeitClient.setMetadata(metadata)

  // TODO: Render initial view
  // TODO: Render welcome screen
  // TODO: Render page timing result

  // DEBUG
  logMessage(`${appIdentifier} Page render complete`)

  return htm`
    <Page>
    </Page>
  `
}
