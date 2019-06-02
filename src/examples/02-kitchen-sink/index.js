const { htm } = require('@zeit/integration-utils')

// Useful functions and libraries
const log = require('../../lib/log/log')

// Custom components
const ZEITKitchenSink = require('./components/ZEITKitchenSink')

module.exports = async ({ payload }) => {
  const { action, clientState } = payload

  // What are we working with?
  log.value({ value: action, label: "action: " })
  log.entity({ obj: clientState, label: 'clientState' })

  return htm`
    <Page>
      <${ZEITKitchenSink} />
    </Page>
  `
}
