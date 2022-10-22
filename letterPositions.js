const letterPositions = function(sentence) {
  const results = {};
  
  for(letters in sentence) {
    if (sentence[letters] !== ' ') {
      if (sentence[letters].toUpperCase() in results) {
        results[sentence[letters].toUpperCase()].push(Number(letters));
      } else {
        results[sentence[letters].toUpperCase()] = [Number(letters)];
      }
    }
  }

  return results;
};

module.exports = letterPositions;