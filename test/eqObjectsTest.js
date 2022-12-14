const assert = require('chai').assert;
let eqObjects = require('../index')
eqObjects = eqObjects.eqObjects;

// CONSTANTS FOR MOCHA AND CHAI TESTING
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

describe("#eqObjects", () => {
  it("returns true for ab and ba", () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it("returns false for ab and abc", () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });
  it("returns true for cd and dc", () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });
  it("returns false for cd and cd2", () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });
});