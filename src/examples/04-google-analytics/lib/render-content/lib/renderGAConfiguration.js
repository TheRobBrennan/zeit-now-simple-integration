const { htm } = require('@zeit/integration-utils')
const { appIdentifier, supportedActions } = require('../../constants')
const log = require('../../../../../lib/log/log')

module.exports = () => {
  log.message(`${appIdentifier} rendering Google Analytics configuration`)
  return htm`
    <H2>Configure Google Analytics</H2>
    <Box display="flex" width="80%">
      <Input name="ga-tracking-id" label="GA Tracking ID" placeholder="UA-#####-##" maxLength="11" width="80%" value="UA-#####-##" />
      <Input name="zeit-now-secret" label="ZEIT Now secret" placeholder="GOOGLE_ANALYTICS_TRACKING_ID" width="150%" value="GOOGLE_ANALYTICS_TRACKING_ID" />
      <Box paddingTop="22px" paddingLeft="20%">
        <Button action="${supportedActions["create-ga-secret"]}">Create Secret</Button>
      </Box>
    </Box>
  `
}