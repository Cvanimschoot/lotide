const assertEqual = function(actual, expected) {
  let truthy = `✅ Assertion Passed: ${actual} === ${expected}`;
  let falsy = `🛑 Assertion Failed: ${actual} !== ${expected}`;
  
  return (actual === expected) ? truthy : falsy;
};

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual("Lighthouse Labs", "Lighthouse Labs"));
console.log(assertEqual(1, 1));
console.log(assertEqual(1, 21));