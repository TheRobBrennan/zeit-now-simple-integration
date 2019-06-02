const { htm } = require('@zeit/integration-utils')
const { appIdentifier, supportedActions } = require('../../constants')
const log = require('../../../../../lib/log/log')

module.exports = ({ clientState }) => {
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

  // TODO: Add project selector
  // TODO: Disable button until a valid tracking ID and secret have been entered
  // TODO: Disable button if the fields match a known secret we've created using this integration
  // TODO: Add error states/messaging
  return htm`
    <H2>Configure Google Analytics</H2>
    <Box display="flex" width="80%">
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
