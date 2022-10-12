const eqArrays = function(arrayOne, arrayTwo) {
  if(arrayOne.length <= 0 || arrayTwo.length <= 0) {
    return false;
  }
  for (x in arrayOne) {
    console.log(arrayOne[x]);
    console.log(arrayTwo[x]);
    if (arrayOne[x] != arrayTwo[x]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arrayOne, arrayTwo) => {
  let truthy = `✅ Assertion Passed: ${arrayOne} == ${arrayTwo}`;
  let falsy = `🛑 Assertion Failed: ${arrayOne} != ${arrayTwo}`;
  let returnedBoolean = eqArrays(arrayOne, arrayTwo);

  return (returnedBoolean) ? truthy : falsy;
};

const letterPositions = function(sentence) {
  const results = {};
  
  for(letters in sentence) {
    if (sentence[letters] !== ' ') {
      if (sentence[letters].toUpperCase() in results) {
        results[sentence[letters].toUpperCase()].push(letters);
      } else {
        results[sentence[letters].toUpperCase()] = [letters];
      }
    }
  }

  return results;
};

module.exports = letterPositions;

console.log(assertArraysEqual(letterPositions("hello").E, [1]));