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