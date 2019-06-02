const { htm } = require('@zeit/integration-utils')

// API
const zeit = require('../../api/zeit/zeit-now-api')

// Useful functions and libraries
const log = require('../../lib/log/log')

module.exports = async ({ payload, zeitClient }) => {
  let timingResultInMs
  const NUMBER_OF_DEPLOYMENTS = 100
  const startOfRequest = Date.now()
  const { action, clientState } = payload

  // What are we working with?
  log.value(action, 'action: ')
  log.entity(clientState, 'clientState')

  // Grab our deployments
  log.message(`Requesting data for up to ${NUMBER_OF_DEPLOYMENTS} deployment(s)...`)
  const deployments = await zeit.getDeployments(zeitClient, NUMBER_OF_DEPLOYMENTS)
  timingResultInMs = Date.now() - startOfRequest
  log.message(`...received data for ${deployments.length} deployment(s)`)

  return htm`
    <Page>
      <H1>ZEIT Now Deployments</H1>
      <B>Loaded ${deployments.length} deployment(s) - ${timingResultInMs / 1000}s</B>
      <P></P>
      <Code>${JSON.stringify(deployments, null, 2)}</Code>
    </Page>
  `
}
