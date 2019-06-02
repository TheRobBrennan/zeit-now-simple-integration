const { htm } = require('@zeit/integration-utils')

// API
const zeit = require('../../api/zeit/zeit-now-api')

// Useful functions and libraries
const logObject = require('../../lib/logObject')
const logValue = require('../../lib/logValue')

module.exports = async ({ payload, zeitClient }) => {
  let timingResultInMs
  const appIdentifier = '[Example 04: Google Analytics]'
  const startOfRequest = Date.now()
  const { action } = payload

  logValue(action, `${appIdentifier} Received action: `)
  switch (action) {
    case 'view':  // Initial load
      console.log(`${appIdentifier} Initial load`)
      break
    default:
      break
  }
  timingResultInMs = Date.now() - startOfRequest

  return htm`
    <Page>
      <B>Page loaded in ${timingResultInMs}ms</B>
    </Page>
  `
}
