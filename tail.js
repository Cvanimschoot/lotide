const assertEqual = function(actual, expected) {
  let truthy = `✅ Assertion Passed: ${actual} === ${expected}`;
  let falsy = `🛑 Assertion Failed: ${actual} !== ${expected}`;

  for (let x in actual) {
    if (actual[x] !== expected[x]) {
      return falsy;
    }
    return truthy;
  }
};

const tail = function(array) {
  let returnArray = [];
  
  if (array.length > 1) {
    for (let i = 1; i < array.length; i++) {
      returnArray.push(array[i]);
    }
  }
  
  return returnArray;
};

console.log(assertEqual(["Hello", "Lighthouse", "Labs"], ["Lighthouse", "Labs"]));
console.log(assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]));