const { withUiHook} = require('@zeit/integration-utils')

let count = 0

/*
  Every time the button is clicked, the UIHook is called - updating the counter and providing the updated HTML as a response
*/
module.exports = withUiHook(({ payload }) => {
  count++
  return `
    <Page>
      <P>Counter: ${count}</P>
      <Button>Count Me</Button>
    </Page>
  `
})