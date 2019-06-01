const { htm } = require('@zeit/integration-utils')
const Heading = require('./Heading')

module.exports = () => htm`
  <${Heading} heading=${"Example Container"} tag=${"H2"} />
  <Container>
    <Input name="username" />
    <Button action="submit">Submit</Button>
    <Button action="reset">Reset</Button>
  </Container>
`