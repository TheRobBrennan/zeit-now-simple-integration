const { htm } = require('@zeit/integration-utils')
const { supportedActions, appIdentifier } = require('../lib/constants')
const log = require('../../../lib/log/log')
// TODO: Import zeit-now-api
// const zeit = require('../../api/zeit/zeit-now-api')

// TODO: Add zeitClient prop
module.exports = ({
  action,
  projectID,
  googleAnalyticsTrackingID = '',
  zeitNowSecretForGoogleAnalyticsTrackingID = '',
}) => {
  // Do not display configuration form if a project has not been selected
  if (!projectID) return ''

  // Logging
  log.message({ message: `${appIdentifier} ProjectConfiguration received
  action  -> ${action}`})

  // TODO: Use newly created function to upsert our secret to ZEIT Now
  // const deployments = await zeit.upsertSecret({ zeitClient })
  // TODO: Don't forget to wrap await in a try...catch block

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
