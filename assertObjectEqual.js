const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  return (eqObjects(actual, expected)) ? true : false;
};

module.exports = assertObjectsEqual;