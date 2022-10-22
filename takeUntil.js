const takeUntil = (array, callback) => {
  const results = [];

  for (let item of array) {
    if (callback(item) === false) {
      results.push(item);
    } else {
      return results;
    }
  }
};

module.exports = takeUntil;