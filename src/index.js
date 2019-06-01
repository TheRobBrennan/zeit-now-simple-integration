const { withUiHook, htm } = require('@zeit/integration-utils')  // https://zeit.co/docs/integrations#htm-support/why-use-htm
const metadataCounter = require('./examples/01-metadata-counter')

module.exports = withUiHook(metadataCounter)
