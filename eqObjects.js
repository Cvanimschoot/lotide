const assertEqual = function(actual, expected) {
  let truthy = `✅ Assertion Passed: ${actual} === ${expected}`;
  let falsy = `🛑 Assertion Failed: ${actual} !== ${expected}`;
  
  return (actual === expected) ? truthy : falsy;
};

const eqArrays = function(arrayOne, arrayTwo) {
  if(arrayOne.length <= 0 || arrayTwo.length <= 0 || arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (x in arrayOne) {
    if (arrayOne[x] !== arrayTwo[x]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
   if (Object.keys(object1).length !== Object.keys(object2).length) {
     return false;
  }
   keyArrayOne = Object.keys(object1);
   for (key of keyArrayOne) {
    if (!object2.hasOwnProperty(key)) {
       return false;
    } else {
       if (Array.isArray(object1[key])) {
         if (eqArrays(object1[key], object2[key]) === false) {
           return false;
        }
      };
    }
  }

  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true)); // => true
  
const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc), false)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc), true)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), false)); // => false