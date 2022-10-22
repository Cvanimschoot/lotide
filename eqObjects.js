const eqArrays = require('./eqArrays')

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

module.exports = eqObjects;