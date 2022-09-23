const assertEqual = function(actual, expected) {
  let truthy = `✅ Assertion Passed: ${actual} === ${expected}`;
  let falsy = `🛑 Assertion Failed: ${actual} !== ${expected}`;
  
  return (actual === expected) ? truthy : falsy;
};

const head = function(array) {
  return array[0];
}

console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(head([]));