const { appIdentifier } = require('../../../examples/04-google-analytics/lib/constants')
const log = require('../../../lib/log/log')

// TODO: ?? Maybe this needs to be ripped out ??
module.exports = async ({ zeitClient, projectId, secret, secretName }) => {
  // Logging
  log.message({ message: `${appIdentifier} zeit-now-api upsertSecret received
  zeitClient: ${typeof zeitClient === 'object'}
  projectId: ${projectId}
  secret: ${secret}
  secretName: ${secretName}
  `})

  // log.entity({ obj: zeitClient, label: `${appIdentifier} zeit-now-api upsertSecret received zeitClient ` })
  log.message({ message: `${appIdentifier} zeit-now-api upsertSecret received zeitClient` })


  // Upsert our secret to the ZEIT Now API
  try {
    // log.message({ message: `${appIdentifier} zeit-now-api upsertSecret ATTEMPT`})
    // throw new Error('Network unreachable.')  // HACK: Remove when testing proves this works automatically

    // TODO: Maybe not...
    // await zeitClient.upsertEnv(projectId, secret, secretName)
    // log.message({ message: `${appIdentifier} zeit-now-api upsertSecret SUCCESSFUL`})
    // return Promise.resolve()

    // TODO: Replace async/await with regular promise chaining
    // zeitClient.upsertEnv(projectId, secret, secretName).then(() => {
    //   log.message({ message: `${appIdentifier} zeit-now-api upsertSecret WAS SUCCESSFUL`})
    //   return Promise.resolve()
    // }).catch((error) => {
    //   log.message({ message: `${appIdentifier} zeit-now-api upsertSecret WAS NOT SUCCESSFUL`})
    //   log.error({ error })
    //   // return Promise.reject(error)
    // })
  } catch(error) {
    // log.message({ message: `${appIdentifier} zeit-now-api upsertSecret WAS NOT SUCCESSFUL`})
    // log.error({ error })
    // // return Promise.reject(error)
  }

  // TODO: Remove dummy Promise.resolve()
  return Promise.resolve()
}