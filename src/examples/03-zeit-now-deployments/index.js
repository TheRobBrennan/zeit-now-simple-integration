const { htm } = require('@zeit/integration-utils')

// API
const zeit = require('../../api/zeit/zeit-now-api')

// Useful functions and libraries
const logObject = require('../../lib/logObject')
const logValue = require('../../lib/logValue')

module.exports = async ({ payload, zeitClient }) => {
  let timingResultInMs
  const NUMBER_OF_DEPLOYMENTS = 100
  const startOfRequest = Date.now()
  const { action, clientState } = payload

  // What are we working with?
  logValue(action, 'action: ')
  logObject(clientState, 'clientState')

  // Grab our deployments
  console.log(`Requesting data for up to ${NUMBER_OF_DEPLOYMENTS} deployment(s)...`)
  const deployments = await zeit.getDeployments(zeitClient, NUMBER_OF_DEPLOYMENTS)
  timingResultInMs = Date.now() - startOfRequest
  console.log(`...received data for ${deployments.length} deployment(s)`)

  return htm`
    <Page>
      <H1>ZEIT Now Deployments</H1>
      <B>Loaded ${deployments.length} deployment(s) - ${timingResultInMs / 1000}s</B>
      <P></P>
      <Code>${JSON.stringify(deployments, null, 2)}</Code>
    </Page>
  `
}
