const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  const isEqual = (currentElement, currentIndex) => currentElement === arrayTwo[currentIndex];
  return arrayOne.every(isEqual);
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅Assertion Passed: Arrays are equal✅`);
  } else {
    console.log(`🛑Assertion Failed: Arrays are not equal🛑`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const result = [];

  for (let item of array) {
    result.push(callback(item));
  }
  return result;
};

const results1 = map(words, word => word[0]);

//TEST CODE
assertArraysEqual(map(['abc','def','ghi'], ltr => ltr[0]), ['a','d','g']);
assertArraysEqual(map([567,-44,76], num => num > 0), [true, false, true]);
assertArraysEqual(map([35,45,'fifty five',65,75], num => Number.isInteger(num)), [true, true, false, true, true]);
