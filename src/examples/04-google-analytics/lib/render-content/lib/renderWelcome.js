const { htm } = require('@zeit/integration-utils')
const { appIdentifier } = require('../../constants')
const log = require('../../../../../lib/log/log')
const Welcome = require('../../../components/Welcome')

module.exports = () => {
  log.message({ message: `${appIdentifier} rendering Welcome` })
  return htm`
    <${Welcome} message=${"Welcome"} tag=${"H1"} />
    <P>Use this integration to configure Google Analytics with your ZEIT Now projects.</P>
  `
}