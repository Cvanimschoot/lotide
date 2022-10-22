const assert = require('chai').assert;
let countLetter = require('../index')
countLetter = countLetter.countLetters;

describe("#countLetter", () => {
  it("returns { L: 2, H: 1 } for 'LHL'", () => {
    assert.deepEqual(countLetter('LHL'), { L: 2, H: 1 });
  });
  it("returns { A: 1, P: 2, L: 1, E: 1 } for 'Apple'", () => {
    assert.deepEqual(countLetter('Apple'), { A: 1, P: 2, L: 1, E: 1 }); 
  });
});