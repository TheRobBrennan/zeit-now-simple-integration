const { htm } = require('@zeit/integration-utils')

// API
const zeit = require('../../api/zeit/zeit-now-api')

// Useful functions and libraries
const { appIdentifier } = require('./lib/constants')
const log = require('../../lib/log/log')
const configuration = require('./lib/configuration/configuration')
const { readConfiguration, saveConfiguration } = configuration

module.exports = async ({ payload, zeitClient }) => {
  let metadata
  const { action } = payload

  // DEBUG
  log.value(action, `${appIdentifier} Page received action: `)

  // Initialize metadata store for this specific integration configuration (max size 100 KB)
  try {
    metadata = await readConfiguration(zeitClient)
  } catch (e) {
    log.error(e)
  }

  // Store our metadata for this specific integration configuration
  try {
    await saveConfiguration(zeitClient, metadata)
  } catch (e) {
    log.error(e)
  }

  // DEBUG
  log.message(`${appIdentifier} Page render complete`)

  // TODO: Find a way to programmatically display content 😁
  return htm`
    <Page>
    </Page>
  `
}
