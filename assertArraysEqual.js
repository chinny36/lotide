const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅Assertion Passed: Arrays are equal✅`);
  } else {
    console.log(`🛑Assertion Failed: Arrays are not equal🛑`);
  }
};

module.exports = assertArraysEqual;