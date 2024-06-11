const AssertionList = require("./src/AssertionList.js")
const Equal = require("./src/Equal.js")
const Include = require("./src/Include.js")

const equalAssertion = new Equal(1, 1)
const includeAssertion = new Include([1,2,3], 3)
const assertionList = new AssertionList([equalAssertion, includeAssertion])

console.log(equalAssertion.check())
console.log(includeAssertion.check())
console.log(assertionList.checkAll())


