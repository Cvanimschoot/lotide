const assertEqual = function(actual, expected) {
  let truthy = `✅ Assertion Passed: ${actual} === ${expected}`;
  let falsy = `🛑 Assertion Failed: ${actual} !== ${expected}`;
  
  return (actual === expected) ? truthy : falsy;
};

module.exports = assertEqual;