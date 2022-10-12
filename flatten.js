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

const assertArraysEqual = (arrayOne, arrayTwo) => {
  let truthy = `✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`;
  let falsy = `🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`;
  let returnedBoolean = eqArrays(arrayOne, arrayTwo);

  return (returnedBoolean) ? truthy : falsy;
};

const flatten = (array) => {
  let returnArray = [];
  
  for (x in array) {
    if (Array.isArray(array[x]) === true) {
      for (let i = 0; i < array[x].length; i++) {
        returnArray.push(array[x][i]);
      }
    } else {
      returnArray.push(array[x]);
    }
  }

  return returnArray;
}

module.exports = flatten;

console.log(assertArraysEqual((flatten([1, 2, [3, 4], 5, [6]])), [1,2,3,4,5,6]));