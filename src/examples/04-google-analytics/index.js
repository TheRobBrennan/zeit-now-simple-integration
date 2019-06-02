const { htm } = require('@zeit/integration-utils')

// Useful functions and libraries
const configuration = require('./lib/configuration/configuration')
const log = require('../../lib/log/log')
const renderContent = require('./lib/render-content/renderContent')

module.exports = async ({ payload, zeitClient }) => {
  let metadata
  // TODO: Grab clientState from payload
  const { action } = payload
  const { readConfiguration, saveConfiguration } = configuration

  // Initialize metadata store for this specific integration configuration (max size 100 KB)
  try {
    metadata = await readConfiguration({ zeitClient })
  } catch (error) {
    log.error({ error })
  }

  // Store our metadata for this specific integration configuration
  try {
    await saveConfiguration({ zeitClient, metadata })
  } catch (error) {
    log.error({ error })
  }

  // TODO: Pass clientState to renderContent
  return htm`<Page>${renderContent({ action })}</Page>`
}
