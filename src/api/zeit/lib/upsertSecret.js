const { appIdentifier } = require('../../../examples/04-google-analytics/lib/constants')
const log = require('../../../lib/log/log')

module.exports = async ({ zeitClient, projectId, secret, secretName }) => {
  // Logging
  log.message({ message: `${appIdentifier} zeit-now-api upsertSecret received
  zeitClient: ${typeof zeitClient === 'object'}
  projectId: ${projectId}
  secret: ${secret}
  secretName: ${secretName}
  `})
  // TODO: Use zeitClient upsertEnv(projectId: string, name: string, secretName: string)
  // TODO: Wrap our await in a try...catch block
  // TODO: return Promise.resolve()

  // TODO: Remove dummy promise resolution
  return Promise.resolve()
}