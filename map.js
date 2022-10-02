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

const map = (array, callback) => {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const nums = [1,2,3,4,5,6];

const results1 = map(words, word => word[0]);
const results2 = map(nums, number => number * 2);
const results3 = map(words, word => word.length);

console.log(assertArraysEqual(results1, ['g','c','t','m','t']));
console.log(assertArraysEqual(results2, [2,4,6,8,10,12]));
console.log(assertArraysEqual(results3, [6,7,2,5,3]));