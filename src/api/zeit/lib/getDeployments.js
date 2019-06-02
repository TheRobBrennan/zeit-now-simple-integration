const timing = require('../../../lib/timing/timing')

// https://zeit.co/docs/api#endpoints/deployments/list-deployments
module.exports = async (zeitClient, limit = 5) => {
  let apiUrl = `/v4/now/deployments?limit=${limit}`
  const timeTrackingLabel = "ZEIT Now - getDeployments"

  // Start timing our API call
  timing.begin(timeTrackingLabel)

  // API
  const { deployments } = await zeitClient.fetchAndThrow(apiUrl, {
    method: 'GET',
  })

  // End timing of our API call
  timing.end(timeTrackingLabel)

  // Return our data
  return Promise.resolve(deployments)
}