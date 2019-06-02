const { htm } = require('@zeit/integration-utils')
const { appIdentifier, supportedActions } = require('../../constants')
const log = require('../../../../../lib/log/log')

module.exports = ({ clientState }) => {
  log.message({ message: `${appIdentifier} rendering Google Analytics configuration` })
  log.entity({ obj: clientState, label: `${appIdentifier} renderGAConfiguration received clientState ` })
  // TODO: Use clientState to populate values of form field
  // TODO: Add project selector
  // TODO: Disable button until a valid tracking ID and secret have been entered
  // TODO: Add error states/messaging
  return htm`
    <H2>Configure Google Analytics</H2>
    <Box display="flex" width="80%">
      <Input name="ga-tracking-id" label="GA Tracking ID" placeholder="UA-########-##" maxLength="15" width="80%" value="UA-68343119-5" />
      <Input name="zeit-now-secret" label="ZEIT Now secret" placeholder="GOOGLE_ANALYTICS_TRACKING_ID" width="150%" value="GOOGLE_ANALYTICS_TRACKING_ID" />
      <Box paddingTop="22px" paddingLeft="20%">
        <Button action="${supportedActions["create-ga-secret"]}">Create Secret</Button>
      </Box>
    </Box>
  `
}