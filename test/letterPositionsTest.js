const assert = require('chai').assert;
let letterPositions = require('../index')
letterPositions = letterPositions.letterPositions;

describe("#letterPositions", () => {
  it("returns [1] for ('hello').E", () => {
    assert.deepEqual(letterPositions("hello").E, [1]);
  });
});