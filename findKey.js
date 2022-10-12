const assertEqual = function(actual, expected) {
  let truthy = `✅ Assertion Passed: ${actual} === ${expected}`;
  let falsy = `🛑 Assertion Failed: ${actual} !== ${expected}`;

  return (actual === expected) ? truthy : falsy;
};

const findKey = (object, callback) => {
  const keys = Object.keys(object);

  for (const key of keys) {
    if(callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;

const result1 = (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"

console.log(assertEqual(result1, 'noma'));

// --- IGNORE THIS. TESTING DESTRUCTURING --- //
/*
const findKey = (object, callback) => {
  
  const keys = Object.keys(object);

  const { 'Blue Hill': bluehill } = object;
  
  console.log(bluehill.stars);
};
*/