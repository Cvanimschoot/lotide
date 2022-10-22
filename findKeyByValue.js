const findKeyByValue = (object, value) => {
  for (let values in object) {
    if (object[values] === value) {
      return values;
    }
  }
};

module.exports = findKeyByValue;