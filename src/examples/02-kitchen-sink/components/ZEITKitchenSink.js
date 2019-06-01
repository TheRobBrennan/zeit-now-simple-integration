const { htm } = require('@zeit/integration-utils')
const Heading = require('./Heading')

module.exports = () => htm`
<Container>
  <${Heading} heading=${"Example Components"} tag=${"H1"} />
</Container>

<Container>
  <${Heading} heading=${"Project switcher"} tag=${"H2"} />
  <ProjectSwitcher />
</Container>

<Container>
  <${Heading} heading=${"Example container"} tag=${"H2"} />
  <Input name="username" />
  <Button action="submit">Submit</Button>
  <Button action="reset">Reset</Button>
</Container>

<Container>
  <${Heading} heading=${"Buttons"} tag=${"H2"} />
  <Button action="click-small-button" small>Small button</Button>
  <Button disabled>Disabled button</Button>
  <Button action="click-width-button" width="20">Width button</Button>
  <Button action="click-secondary-button" secondary>Secondary button</Button>
  <Button action="click-warning-button" warning>Warning button</Button>
  <Button action="click-highlight-button" highlight>Highlight button</Button>
  <Button action="click-abort-button" abort>Abort button</Button>
</Container>

<Container>
  <${Heading} heading=${"Input"} tag=${"H2"} />
  <Input name="dbName" label="Name for the Database" value="the default value" />
  <Input name="dbNameDisabled" label="Name for the Database" value="the default value" disabled />
  <Input name="dbNameError" label="Name for the Database" value="the default value" errored />

  <Textarea
  name="description"
  label="Enter your description"
  >
      The value
  </Textarea>

  <Textarea
  name="descriptionDisabled"
  label="Enter your description"
  disabled
  >
      The value
  </Textarea>

  <Textarea
  name="descriptionErrored"
  label="Enter your description"
  errored
  >
      The value
  </Textarea>

  <Checkbox name="allowOptionA" label="Allow Option A" checked="true" />
  <Checkbox name="allowOptionB" label="Allow Option B" />
</Container>

<Container>
  <${Heading} heading=${"Link"} tag=${"H2"} />
  <Link href="https://www.woatw.com" target="__blank">Visit Wyatt Olney & The Wreckage in a new browser</Link>
  <P></P>
  <Link href="https://www.woatw.com" action="link-click-woatw">Handle click for Wyatt Olney & The Wreckage</Link>
</Container>

<Container>
  <${Heading} heading=${"Select"} tag=${"H2"} />
  <Select name="dbName" value="selectedValue" action="change-db">
    <Option value="" caption="-- Select database --" />
    <Option value="mongodb" caption="MongoDB" />
    <Option value="redis" caption="Redis" />
  </Select>
</Container>

<Container>
  <${Heading} heading=${"Additional UI Components"} tag=${"H1"} />

  <Box display="flex" justifyContent="space-between">
    <H1>Your Databases</H1>
    <Button action="create-new-database">Create New Database</Button>
  </Box>

  <H1>The Title</H1>
  <H2>The Secondary Title</H2>
  <P>A paragraph.</P>
  <B>Some Bold Text</B>
  <BR />
  <Img src="https://i.kym-cdn.com/entries/icons/original/000/005/574/takemymoney.jpg" height="200" width="400" />

  <Code>
    ${`
    // Example snippet
    <html>
      <h1>Title</h1>
      <h2>Subtitle</h2>
    </html>`}
  </Code>

  <Fieldset>
    <FsContent>
      <H2>This is the Title</H2>
      <P>This is some content.</P>
    </FsContent>
    <FsFooter>
      <P>This is the footer.</P>
    </FsFooter>
  </Fieldset>

  <Notice type="error">This is an error message.</Notice>
  <Notice type="warn">This is a warning.</Notice>
  <Notice type="message">This is a message.</Notice>
  <Notice type="success">This is a success message.</Notice>

  </Container>
`