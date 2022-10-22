const assert = require('chai').assert;
let eqArrays = require('../index')
eqArrays = eqArrays.eqArrays;

describe("#eqArrays", () => {
  it("returns true for [1,2,3] & [1,2,3]", () => {
    assert.strictEqual(eqArrays([1,2,3], [1,2,3]), true);
  });
  it("returns false for [1,2,3] & [1,2,4]", () => {
    assert.strictEqual(eqArrays([1,2,3], [1,2,4]), false);
  });
  it("returns false for [1,2,3] & [1,2,'3']", () => {
    assert.strictEqual(eqArrays([1,2,3], [1,2,'3']), false);
  });
  it("returns false for [] & [1,2,3]", () => {
    assert.strictEqual(eqArrays([], [1,2,3]), false);
  });
});