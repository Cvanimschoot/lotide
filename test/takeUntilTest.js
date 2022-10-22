const assert = require('chai').assert;
let takeUntil = require('../index')
takeUntil = takeUntil.takeUntil;

// CONSTANTS FOR MOCHA AND CHAI TESTING
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

describe("#takeUntil", () => {
  it("returns [1,2,5,7,2] for 'x < 0'", () => {
    assert.deepEqual(results1, [1,2,5,7,2]);
  });
  it("returns ['I've', 'been', 'to', 'Hollywood'] for ','", () => {
    assert.deepEqual(results2, ["I've", "been", "to", "Hollywood"]);
  });
});