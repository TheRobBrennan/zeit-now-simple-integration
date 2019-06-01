const timingBegin = require('../../../lib/timingBegin')
const timingEnd = require('../../../lib/timingEnd')

// https://zeit.co/docs/api#endpoints/deployments/list-deployments
module.exports = async (zeitClient, limit = 5) => {
  const timeTrackingLabel = "ZEIT Now - getDeployments"
  // Prevent against
  let apiUrl = `/v4/now/deployments?limit=${limit}`

  // Start timing our API call
  timingBegin(timeTrackingLabel)

  // API
  const { deployments } = await zeitClient.fetchAndThrow(apiUrl, {
    method: 'GET',
  })

  // End timing of our API call
  timingEnd(timeTrackingLabel)

  // Return our data
  return Promise.resolve(deployments)
}