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

const middle = (array) => {
  let returnArray = [];
  
  if (array.length <= 2) {
    return returnArray;
  }

  if (array.length % 2 === 0) {
    returnArray.push(array[(array.length / 2) - 1]);
    returnArray.push(array[(array.length / 2)]);
  } else {
    returnArray.push(array[Math.floor(array.length / 2)])
  }

  return returnArray;
};

console.log(assertArraysEqual((middle([1,2,3,4])), [2,3]));
console.log(assertArraysEqual((middle([1,2,3,4,5])), [3]));