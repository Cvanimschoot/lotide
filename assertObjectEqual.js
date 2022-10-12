const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
  }
    keyArrayOne = Object.keys(object1);
    for (key of keyArrayOne) {
    if (!object2.hasOwnProperty(key)) {
        return false;
    } else {
        if (Array.isArray(object1[key])) {
          if (eqArrays(object1[key], object2[key]) === false) {
            return false;
        }
      };
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  let truthy = `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  let falsy = `🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;

  return (eqObjects(actual, expected)) ? truthy : falsy;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

console.log(assertObjectsEqual(ab, ba), true);
console.log(assertObjectsEqual(ab, abc), false);