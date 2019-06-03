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
  log.message({
    message: `${appIdentifier} ProjectConfiguration received
  action    -> ${action}
  projectID -> ${projectID}
  `,
  })

  if (googleAnalyticsTrackingID && zeitNowSecretForGoogleAnalyticsTrackingID) {
    // We need to use promises here. We cannot use async/await without creating other issues for us in the UI
    zeit
      .upsertSecret({
        zeitClient,
        projectId: projectID,
        secret: googleAnalyticsTrackingID,
        secretName: zeitNowSecretForGoogleAnalyticsTrackingID,
      })
      .then(() => {
        upsertMessage = `Successfully created secret ${secretName}`
      })
      .catch(error => {
        upsertMessage = `Unable to create secret: ${error}`
      })
  } else {
    log.message(
      `${appIdentifier} ProjectConfiguration will skip the upsert until both the secret and secret name have been submitted.`
    )
  }

  // Display configuration form
  return htm`
    <Box display="flex" paddingTop="8px" paddingBottom="8px" />
    <H2>Configure ZEIT Now</H2>
    <Box display="flex" paddingTop="2px">
      <Input name="ga-tracking-id" label="GA Tracking ID" placeholder="UA-########-##" maxLength="15" width="90%"
        value="${googleAnalyticsTrackingID}" />
      <Input name="zeit-now-secret" label="ZEIT Now secret" placeholder="myproject-ga-tracking-id" width="150%"
        value="${zeitNowSecretForGoogleAnalyticsTrackingID}" />
    </Box>
    <Box paddingTop="22px" paddingLeft="17%">
      <Button action="${supportedActions['create-ga-secret']}">Save</Button>
    </Box>
  `
}
