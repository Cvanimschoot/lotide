const assert = require('chai').assert;
let assertObjectsEqual = require('../index')
assertObjectsEqual = assertObjectsEqual.assertObjectsEqual;

// CONSTANTS FOR MOCHA AND CHAI TESTING
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

describe("#eqObjects", () => {
  it("returns true for ab and ba", () => {
    assert.deepEqual(assertObjectsEqual(ab, ba), true);
  });
  it("returns false for ab and abc", () => {
    assert.deepEqual(assertObjectsEqual(ab, abc), false);
  });
});