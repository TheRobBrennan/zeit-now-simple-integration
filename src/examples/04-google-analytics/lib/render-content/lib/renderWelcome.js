const { htm } = require('@zeit/integration-utils')
const { appIdentifier } = require('../../constants')
const log = require('../../../../../lib/log/log')
const Welcome = require('../../../components/Welcome')

module.exports = () => {
  log.message(`${appIdentifier} rendering Welcome`)
  return htm`<${Welcome} message=${"Welcome"} tag=${"H1"} />`
}