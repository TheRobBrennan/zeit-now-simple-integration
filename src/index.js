const { withUiHook, htm } = require('@zeit/integration-utils')  // https://zeit.co/docs/integrations#htm-support/why-use-htm
/*

  "A UIHook accepts a set of inputs, such as a token or projectId, and sends back a string of HTML, including components, as the response.

  With JavaScript template literals, this is relatively straightforward. However, there are a few things to be aware of:

    + Escaping prop names and values
    + Escaping the content that goes into components
    + No array.map() support
    + Difficult to share common components across different Integrations and teams" - https://zeit.co/docs/integrations#htm-support/background

  By using htm, we can effectively write JSX as we want - even using array.map(), passing prop names/values, etc - without transpilation.

*/
module.exports = withUiHook(async ({ payload, zeitClient }) => {
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
})