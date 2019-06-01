const { withUiHook, htm } = require('@zeit/integration-utils')  // https://zeit.co/docs/integrations#htm-support/why-use-htm

let count = 0

/*
  Every time the button is clicked, the UIHook is called - updating the counter and providing the updated HTML as a response.

  "A UIHook accepts a set of inputs, such as a token or projectId, and sends back a string of HTML, including components, as the response.

  With JavaScript template literals, this is relatively straightforward. However, there are a few things to be aware of:

    + Escaping prop names and values
    + Escaping the content that goes into components
    + No array.map() support
    + Difficult to share common components across different Integrations and teams" - https://zeit.co/docs/integrations#htm-support/background

  By using htm, we can effectively write JSX as we want - even using array.map(), passing prop names/values, etc - without transpilation.

*/
module.exports = withUiHook(({ payload }) => {
  count++
  return htm`
    <Page>
      <P>Counter: ${count}</P>
      <Button>Count Me</Button>
    </Page>
  `
})