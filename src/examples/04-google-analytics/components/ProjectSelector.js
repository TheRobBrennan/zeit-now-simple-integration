const { htm } = require('@zeit/integration-utils')

module.exports = ({ tag = "H2" }) =>
htm`
  <${tag}>
    Please select a project
  </${tag}>
  <ProjectSwitcher />
`
