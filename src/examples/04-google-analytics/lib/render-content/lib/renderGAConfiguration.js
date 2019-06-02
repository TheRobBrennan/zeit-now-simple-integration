const { htm } = require('@zeit/integration-utils')
const { appIdentifier, supportedActions } = require('../../constants')
const log = require('../../../../../lib/log/log')

// TODO: Payload needs to be passed into GA Config
module.exports = ({ clientState }) => {
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

  // Return our rendered content
  // TODO: Break project selector and configurator into separate components
  // TODO: Do not display configuration form if a project has not been selected
  return htm`
  <H2>Please select a project</H2>
  <ProjectSwitcher />
  <H2>Configure Google Analytics</H2>
    <Box display="flex">
      <Input name="ga-tracking-id" label="GA Tracking ID" placeholder="UA-########-##" maxLength="15" width="90%"
        value="${googleAnalyticsTrackingID}" />
      <Input name="zeit-now-secret" label="ZEIT Now secret" placeholder="GOOGLE_ANALYTICS_TRACKING_ID" width="150%"
        value="${zeitNowSecretForGoogleAnalyticsTrackingID}" />
      <Box paddingTop="22px" paddingLeft="20%">
        <Button action="${
          supportedActions['create-ga-secret']
        }">Create Secret</Button>
      </Box>
    </Box>
  `
}
