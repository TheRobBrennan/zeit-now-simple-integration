const { htm } = require('@zeit/integration-utils')
const { appIdentifier, supportedActions } = require('../../constants')
const log = require('../../../../../lib/log/log')

const ProjectSelector = require('../../../components/ProjectSelector')
// TODO: Create a project configuration component
// TODO: Do not display configuration form if a project has not been selected

module.exports = ({ clientState, payload }) => {
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

  // Return our rendered content
  return htm`
  <${ProjectSelector} />
  <Box display="flex" paddingTop="8px" paddingBottom="8px" />
  <H2>Configure Google Analytics</H2>
  <Box display="flex" paddingTop="2px">
    <Input name="ga-tracking-id" label="GA Tracking ID" placeholder="UA-########-##" maxLength="15" width="90%"
      value="${googleAnalyticsTrackingID}" />
    <Input name="zeit-now-secret" label="ZEIT Now secret" placeholder="GOOGLE_ANALYTICS_TRACKING_ID" width="150%"
      value="${zeitNowSecretForGoogleAnalyticsTrackingID}" />
  </Box>
  <Box paddingTop="22px" paddingLeft="17%">
    <Button action="${
      supportedActions['create-ga-secret']
    }">Create Secret</Button>
  </Box>
`
}
