const { htm } = require('@zeit/integration-utils')
const { appIdentifier } = require('../../constants')
const log = require('../../../../../lib/log/log')

const ProjectSelector = require('../../../components/ProjectSelector')
const ProjectConfiguration = require('../../../components/ProjectConfiguration')

// TODO: Add zeitClient prop
module.exports = ({ clientState, payload, action }) => {
  const { project, projectId } = payload
  const { "ga-tracking-id": trackingID, "zeit-now-secret": secretForZEITNow } = clientState
  const googleAnalyticsTrackingID = trackingID || ''
  const zeitNowSecretForGoogleAnalyticsTrackingID = secretForZEITNow || ''

  // Logging
  log.message({
    message: `${appIdentifier} rendering Google Analytics configuration`,
  })
  log.entity({
    obj: clientState,
    label: `${appIdentifier} renderGAConfiguration received clientState `,
  })
  // log.entity({ obj: payload, label: `${appIdentifier} renderGAConfiguration received payload ` })
  log.message({
    message: `${appIdentifier} renderGAConfiguration received payload
  project   -> ${JSON.stringify(project)}
  projectId -> ${projectId}
    `,
  })
  log.message({
    message: `${appIdentifier} renderGAConfiguration received
  action    -> ${action}`,
  })
  // TODO: Add logging to verify zeitClient

  // Return our rendered content
  // TODO: Pass zeitClient to ProjectConfiguration
  return htm`
  <${ProjectSelector} />
  <${ProjectConfiguration}
    action="${action}"
    projectID="${projectId}"
    googleAnalyticsTrackingID="${googleAnalyticsTrackingID}"
    zeitNowSecretForGoogleAnalyticsTrackingID="${zeitNowSecretForGoogleAnalyticsTrackingID}" />
  `
}
