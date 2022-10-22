const assert = require('chai').assert;
let min = require('../index')
min = min.min;

// CONSTANTS FOR MOCHA AND CHAI TESTS
const flightPrices = [1260, 490, 599, 1400, 820];
const golfScores = [-1, 3, 0, -4, 1, 4, -2];
const pageNumbers = [232];
const temperatures = [45, 10, -20, 0, 3, -20];

describe("#min", () => {
  it("returns 490 for [1260, 490, 599, 1400, 820]", () => {
    assert.deepEqual(min(flightPrices), 490);
  });
  it("returns -4 for [-1, 3, 0, -4, 1, 4, -2]", () => {
    assert.deepEqual(min(golfScores), -4);
  });
  it("returns 232 for [232]", () => {
    assert.deepEqual(min(pageNumbers), 232);
  });
  it("returns -20 for [45, 10, -20, 0, 3, -20", () => {
    assert.deepEqual(min(temperatures), -20);
  });
});