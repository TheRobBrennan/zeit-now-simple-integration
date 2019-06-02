const { htm } = require('@zeit/integration-utils')
const { supportedActions } = require('../lib/constants')

module.exports = ({
  googleAnalyticsTrackingID = '',
  zeitNowSecretForGoogleAnalyticsTrackingID = '',
}) => {
  // TODO: Do not display configuration form if a project has not been selected

  return htm`
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
