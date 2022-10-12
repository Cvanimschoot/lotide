const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail')

console.log(assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]));
console.log(assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]));