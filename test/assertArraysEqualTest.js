const assert = require('chai').assert;
let assertArraysEqual = require('../index')
assertArraysEqual = assertArraysEqual.assertArraysEqual;

describe("#assertArraysEqual", () => {
  it("returns true for [1,2,3] & [1,2,3]", () => {
    assert.strictEqual(assertArraysEqual([1,2,3], [1,2,3]), true);
  });
  it("returns false for [1,2,3] & [1,2,4]", () => {
    assert.strictEqual(assertArraysEqual([1,2,3], [1,2,4]), false);
  });
  it("returns false for [1,2,3] & [1,2,'3']", () => {
    assert.strictEqual(assertArraysEqual([1,2,3], [1,2,'3']), false);
  });
});