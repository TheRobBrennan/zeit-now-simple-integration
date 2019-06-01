const { htm } = require('@zeit/integration-utils')

module.exports = async ({ payload, zeitClient }) => {
  // const { action } = payload  // See https://zeit.co/docs/integrations#understanding-uihooks/http-payload for more payload details

  // // Initialize metadata store for this configuration ID (max size 100 KB)
	// const metadata = await zeitClient.getMetadata();

  /*

    Want to create a new secret/environment variable? See https://zeit.co/docs/integrations#project-level-apis/utilities-inside-zeit-integration-utils

  */

  // // Store our count value in the metadata for this specific configuration ID
  // await zeitClient.setMetadata(metadata)

  return htm`
    <Page>
      <P>EXPLORE: ZEIT Now Integrations</P>
    </Page>
  `
}
