const assert = require('chai').assert;
let findKey = require('../index')
findKey = findKey.findKey;

// CONSTANTS FOR MOCHA AND CHAI TESTING
const result1 = (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"

const result2 = (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3)) // => "Akaleri"

describe("#findKey", () => {
  it("returns 'noma' for x.stars === 2", () => {
    assert.deepEqual(result1, 'noma');
  });
  it("returns 'Akaleri' for x.stars === 3", () => {
    assert.deepEqual(result2, 'Akaleri');
  });
});