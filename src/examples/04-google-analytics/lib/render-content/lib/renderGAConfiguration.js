const { htm } = require('@zeit/integration-utils')
const { appIdentifier, supportedActions } = require('../../constants')
const log = require('../../../../../lib/log/log')

module.exports = ({ clientState, payload }) => {
  // TODO: Get project and projectId values
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
  log.entity({
    obj: payload,
    label: `${appIdentifier} renderGAConfiguration received payload `,
  })

  // Return our rendered content
  // TODO: Break project selector and configurator into separate components
  // TODO: Do not display configuration form if a project has not been selected
  return htm`
  <H2>Please select a project</H2>
  <ProjectSwitcher />
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
