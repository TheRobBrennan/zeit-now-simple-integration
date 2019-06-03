const { htm } = require('@zeit/integration-utils')
const { supportedActions, appIdentifier } = require('../lib/constants')
const log = require('../../../lib/log/log')

// API
const zeit = require('../../../api/zeit/zeit-now-api')

module.exports = ({
  action,
  projectID,
  googleAnalyticsTrackingID = '',
  zeitNowSecretForGoogleAnalyticsTrackingID = '',
  zeitClient,
}) => {
  // Do not display configuration form if a project has not been selected
  if (!projectID) return ''

  // Logging
  log.message({ message: `${appIdentifier} ProjectConfiguration received
  action  -> ${action}`})

  // TODO: Use newly created function to upsert our secret to ZEIT Now
  // TODO: Pass projectId, secret, and secretName props to zeit.upsertSecret
  // try {
  //   await zeit.upsertSecret({ zeitClient })
  // } catch (error) {
  //   log.error({ error })
  // }

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
