const countLetter = (string) => {
  let results = {};

  for(letters of string) {
    if (letters !== ' ') {
      if (letters.toUpperCase() in results) {
        results[letters.toUpperCase()] += 1;
      } else {
        results[letters.toUpperCase()] = 1;
      }
    }
  }
  
  return results;
}

module.exports = countLetter;