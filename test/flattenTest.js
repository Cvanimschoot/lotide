const assert = require('chai').assert;
let flatten = require('../index')
flatten = flatten.flatten;

describe("#flatten", () => {
  it("returns [1,2,3,4,5,6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
  });
});