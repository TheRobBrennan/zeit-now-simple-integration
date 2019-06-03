const { htm } = require('@zeit/integration-utils')
const { supportedActions } = require('../lib/constants')

// TODO: Need to receive an action
module.exports = ({
  projectID,
  googleAnalyticsTrackingID = '',
  zeitNowSecretForGoogleAnalyticsTrackingID = '',
}) => {
  // Do not display configuration form if a project has not been selected
  if (!projectID) return ''

  // TODO: Log action
  // log.message({ message: `${appIdentifier} ProjectConfiguration received
  // action  -> ${action}`})

  // TODO: THINK - how might you handle upserting a secret?

  // Display configuration form
  return htm`
    <Box display="flex" paddingTop="8px" paddingBottom="8px" />
    <H2>Configure ZEIT Now</H2>
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
