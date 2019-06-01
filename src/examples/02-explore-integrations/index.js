const { htm } = require('@zeit/integration-utils')

// Useful functions and libraries
const logObject = require('../../lib/logObject')

// Custom components
// These must return whitelisted components - see https://zeit.co/docs/integrations#creating-user-interfaces/components
const Heading = require('../../components/Heading')

module.exports = async (integrationObject) => {
  logObject(integrationObject, "integrationObject")

  return htm`
    <Page>
      <${Heading} heading=${"Welcome"} />
    </Page>
  `
}
