const { htm } = require('@zeit/integration-utils')

// Useful functions and libraries
const logObject = require('../../lib/logObject')
const logValue = require('../../lib/logValue')

// Custom components
const Heading = require('../../components/Heading')
const ZEITKitchenSink = require('../../components/ZEITKitchenSink')

module.exports = async ({ payload }) => {
  const { action, clientState } = payload

  // What are we working with?
  logValue(action, "Example 02 received action: ")
  logObject(clientState, 'clientState')

  return htm`
    <Page>
      <${Heading} heading=${"Welcome"} tag=${"H1"} />
      <${ZEITKitchenSink} />
    </Page>
  `
}
