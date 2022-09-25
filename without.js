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

const without = (originalArray, notIncludedArray) => {
  let returnArray = originalArray;
  
  for (x in originalArray) {
    for (y in notIncludedArray) {
      if (originalArray[x] === notIncludedArray[y]) {
        returnArray.splice(x, 1);
      }
    }
  }

  return returnArray;
};

console.log(without([1,2,3,4,5], [1,3,5]));
console.log(assertArraysEqual((without([1,2,3,4,5], [1,3,5])), [2,4]));
console.log(assertArraysEqual((without([1,2,3,4,5], [1])), [2,3,4,5]));