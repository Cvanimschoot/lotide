const min = function(numbers) {
  let smallestNum = numbers[0];
  for (let x in numbers) {
    if (numbers[x] < smallestNum) {
      smallestNum = numbers[x];
    }
  }

  return smallestNum;
};

module.exports = min;
