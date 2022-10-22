const assert = require('chai').assert;
let map = require('../index')
map = map.map;

// CONSTANTS FOR MOCHA AND CHAI TESTS
const words = ["ground", "control", "to", "major", "tom"];
const nums = [1,2,3,4,5,6];

const results1 = map(words, word => word[0]);
const results2 = map(nums, number => number * 2);
const results3 = map(words, word => word.length);

describe("#map", () => {
  it("returns ['g','c','t','m','t'] for word[0]", () => {
    assert.deepEqual(results1, ['g','c','t','m','t']);
  });
  it("returns [2,4,6,8,10,12] for number * 2", () => {
    assert.deepEqual(results2, [2,4,6,8,10,12]);
  });
  it("returns [6,7,2,5,3] for word.length", () => {
    assert.deepEqual(results3, [6,7,2,5,3]);
  });
});