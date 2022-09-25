const assertEqual = function(actual, expected) {
  let truthy = `✅ Assertion Passed: ${actual} === ${expected}`;
  let falsy = `🛑 Assertion Failed: ${actual} !== ${expected}`;
  
  return (actual === expected) ? truthy : falsy;
};

const eqArrays = function(arrayOne, arrayTwo) {
  if(arrayOne.length <= 0 || arrayTwo.length <= 0) {
    return false;
  }
  for (x in arrayOne) {
    if (arrayOne[x] !== arrayTwo[x]) {
      return false;
    }
  }
  return true;
};

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false));
console.log(assertEqual(eqArrays([], [1, 2, 3]), false));