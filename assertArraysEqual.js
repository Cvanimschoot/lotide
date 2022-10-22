const eqArrays = require('./eqArrays')

const assertArraysEqual = (arrayOne, arrayTwo) => {
  let returnedBoolean = eqArrays(arrayOne, arrayTwo);

  return (returnedBoolean) ? true : false;
};

module.exports = assertArraysEqual;