const assert = require('chai').assert;
let without = require('../index')
without = without.without;

describe("#without", () => {
  it("returns [2,4] for without([1,2,3,4,5], [1,3,5])", () => {
    assert.deepEqual(without([1,2,3,4,5], [1,3,5]), [2,4]);
  });
  it("returns [2,3,4,5] for without([1,2,3,4,5], [1])", () => {
    assert.deepEqual(without([1,2,3,4,5], [1]), [2,3,4,5]);
  });
});