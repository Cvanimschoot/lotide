const assert = require('chai').assert;
let eqObjects = require('../index')
eqObjects = eqObjects.eqObjects;

describe("#eqObjects", () => {
  it("returns { L: 2, H: 1 } for 'LHL'", () => {
    assert.deepEqual(countLetter('LHL'), { L: 2, H: 1 });
  });
  it("returns { A: 1, P: 2, L: 1, E: 1 } for 'Apple'", () => {
    assert.deepEqual(countLetter('Apple'), { A: 1, P: 2, L: 1, E: 1 }); 
  });
});

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true)); // => true
  
const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc), false)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc), true)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), false)); // => false