const { htm } = require('@zeit/integration-utils')

const logObject = require('../../lib/logObject')

module.exports = async (integrationObject) => {
  logObject(integrationObject, "integrationObject")

  return htm`
    <Page>
    </Page>
  `
}
