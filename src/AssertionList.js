const Equal = require("./Equal.js")
const Include = require("./Include.js")

class AssertionList {
  constructor(assertions) {
    this.assertions = assertions
  }

  checkAssertion(assertion) {
    assertion.check(this);
  }
  
  checkAll() {
    return this.assertions.every(assertion => {
      return assertion.check()
    })
  }
}


module.exports = AssertionList
