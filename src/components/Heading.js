const { htm } = require('@zeit/integration-utils')

module.exports = ({ heading }) => htm`<H1>${heading}</H1>`