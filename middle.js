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

module.exports = middle;