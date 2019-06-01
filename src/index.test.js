const integration = require('./index')

describe(`Our ZEIT Now Integration`, () => {
  it(`should do something`, () => {
    const result = integration.doSomething()
    const expectedResult = "doSomething"

    expect(result).toEqual(expectedResult)
  })
})