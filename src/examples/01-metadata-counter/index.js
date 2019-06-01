const { htm } = require('@zeit/integration-utils')

module.exports = async ({ payload, zeitClient }) => {
  const { action } = payload  // See https://zeit.co/docs/integrations#understanding-uihooks/http-payload for more payload details

  // Initialize metadata store for this configuration ID (max size 100 KB)
	const metadata = await zeitClient.getMetadata();

  // Modify our count value as desired
  switch (action) {
    case 'increment':
      metadata.count++
      break
    case 'decrement':
      metadata.count--
      break
    case 'reset':
      metadata.count = 0
      break
    default:
      // Use the persisted value if one exists
      metadata.count = (metadata.count || 0)
      break
  }

  /*

    Want to create a new secret/environment variable? See https://zeit.co/docs/integrations#project-level-apis/utilities-inside-zeit-integration-utils

  */

  // Store our count value in the metadata for this specific configuration ID
  await zeitClient.setMetadata(metadata)

  return htm`
    <Page>
      <P>Counter: ${metadata.count}</P>
      <Button action="decrement">-</Button>
      <Button action="reset">0</Button>
      <Button action="increment">+</Button>
    </Page>
  `
}

module.exports.doSomething = () => { return "doSomething" }