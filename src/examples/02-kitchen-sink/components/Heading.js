const { htm } = require('@zeit/integration-utils')

module.exports = ({ heading, tag }) => htm`<${tag}>${heading}</${tag}>`