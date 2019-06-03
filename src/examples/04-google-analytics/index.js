const { htm } = require('@zeit/integration-utils')

// Useful functions and libraries
const configuration = require('./lib/configuration/configuration')
const log = require('../../lib/log/log')
const renderContent = require('./lib/render-content/renderContent')
const { appIdentifier } = require('../04-google-analytics/lib/constants')

module.exports = async ({ payload, zeitClient }) => {
  let metadata
  const { action, clientState } = payload
  const { readConfiguration, saveConfiguration } = configuration

  // Initialize metadata store for this specific integration configuration (max size 100 KB)
  try {
    metadata = await readConfiguration({ zeitClient })
  } catch (error) {
    log.error({ error })
  }

  try {
    // TODO: If we have a projectId, secret, and secret key...and the right action...let's try creating the secret
    const { projectId } = payload

    if (projectId) {
      const { "ga-tracking-id": trackingID, "zeit-now-secret": secretForZEITNow } = clientState
      // TODO: REMOVE test values and replace with empty string
      const googleAnalyticsTrackingID = trackingID || 'test'
      const zeitNowSecretForGoogleAnalyticsTrackingID = secretForZEITNow || 'delete-this-test-secret'

      log.entity({ obj: zeitClient, label: `${appIdentifier} renderContent received zeitClient ` })

      log.message({ message: `${appIdentifier} upsert ATTEMPT with
      projectId -> ${projectId}
      googleAnalyticsTrackingID -> ${googleAnalyticsTrackingID}
      zeitNowSecretForGoogleAnalyticsTrackingID - ${zeitNowSecretForGoogleAnalyticsTrackingID}
      ` })

      // This gives us something like delete-this-test-secret-a94a8fe5cc
      const secretName = await zeitClient.ensureSecret(zeitNowSecretForGoogleAnalyticsTrackingID, googleAnalyticsTrackingID)
      log.message({ message: `${appIdentifier} secretName: ${secretName}` })
      await zeitClient.upsertEnv(projectId, googleAnalyticsTrackingID, secretName)
      log.message({ message: `${appIdentifier} upsert COMPLETE` })

    }
  } catch (error) {
    log.message({ message: `${appIdentifier} upsert FAILURE` })
    log.error({ error })
  }

  // Store our metadata for this specific integration configuration
  try {
    await saveConfiguration({ zeitClient, metadata })
  } catch (error) {
    log.error({ error })
  }

  return htm`<Page>${renderContent({ action, clientState, payload, zeitClient })}</Page>`
}
