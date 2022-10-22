const eqArrays = require('./eqArrays')

const assertArraysEqual = (arrayOne, arrayTwo) => {
  //let truthy = `✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`;
  //let falsy = `🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`;
  let returnedBoolean = eqArrays(arrayOne, arrayTwo);

  return (returnedBoolean) ? true : false;
};

module.exports = assertArraysEqual;