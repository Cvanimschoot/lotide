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

module.exports = without;