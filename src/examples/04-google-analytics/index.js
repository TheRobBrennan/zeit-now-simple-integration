const { htm } = require('@zeit/integration-utils')

// Useful functions and libraries
const { appIdentifier } = require('./lib/constants')
const log = require('../../lib/log/log')
const configuration = require('./lib/configuration/configuration')
const { readConfiguration, saveConfiguration } = configuration
const renderContent = require('./lib/render-content/renderContent')

module.exports = async ({ payload, zeitClient }) => {
  let metadata
  const { action } = payload

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

  return htm`<Page>${renderContent(action)}</Page>`
}
