const { withUiHook } = require('@zeit/integration-utils')  // https://zeit.co/docs/integrations#htm-support/why-use-htm

// Choose the example code you would like to run
// const handler = require('./examples/01-metadata-counter')
// const handler = require('./examples/02-kitchen-sink')
const handler = require('./examples/03-zeit-now-deployments')

module.exports = withUiHook(handler)
