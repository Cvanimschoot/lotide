const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length <= 0 || arrayTwo.length <= 0) {
    return false;
  }
  for (let x in arrayOne) {
    if (arrayOne[x] !== arrayTwo[x]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arrayOne, arrayTwo) => {
  let truthy = `✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`;
  let falsy = `🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`;
  let returnedBoolean = eqArrays(arrayOne, arrayTwo);

  return (returnedBoolean) ? truthy : falsy;
};

const takeUntil = (array, callback) => {
  const results = [];

  for (let item of array) {
    if (callback(item) === false) {
      results.push(item);
    } else {
      return results;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log(assertArraysEqual(results1, [1,2,5,7,2]));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]));