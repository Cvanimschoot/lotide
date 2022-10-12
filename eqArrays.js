const eqArrays = function(arrayOne, arrayTwo) {
  if(arrayOne.length <= 0 || arrayTwo.length <= 0 || arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (x in arrayOne) {
    if (arrayOne[x] !== arrayTwo[x]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;