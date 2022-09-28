const assertEqual = function(actual, expected) {
  let truthy = `✅ Assertion Passed: ${actual} === ${expected}`;
  let falsy = `🛑 Assertion Failed: ${actual} !== ${expected}`;

  return (actual === expected) ? truthy : falsy;
};

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