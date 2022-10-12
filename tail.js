const tail = function(array) {
  let returnArray = [];
  
  if (array.length > 1) {
    for (let i = 1; i < array.length; i++) {
      returnArray.push(array[i]);
    }
  }
  
  return returnArray;
};

module.exports = tail;