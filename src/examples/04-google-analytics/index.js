const { htm } = require('@zeit/integration-utils')

// API
const zeit = require('../../api/zeit/zeit-now-api')

// Useful functions and libraries
const { appIdentifier } = require('./lib/constants')
// TODO: Consolidate logging
const logError = require('../../lib/logError')
const logMessage = require('../../lib/logMessage')
const logObject = require('../../lib/logObject')
const logValue = require('../../lib/logValue')
// TODO: Consolidate configuration
const readConfiguration = require('./lib/configuration/readConfiguration')
const saveConfiguration = require('./lib/configuration/saveConfiguration')

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

  // Store our metadata for this specific integration configuration
  try {
    await saveConfiguration(zeitClient, metadata)
  } catch (e) {
    logError(e)
  }

  // DEBUG
  logMessage(`${appIdentifier} Page render complete`)

  // TODO: Find a way to programmatically display content 😁
  return htm`
    <Page>
    </Page>
  `
}
