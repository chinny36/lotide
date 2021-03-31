const eqArrays = function(arrayOne, arrayTwo) {
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

const middle = function(array) {
  let newArray = [];

  if (array.length <= 2) {
    return newArray;
  }

  if (array.length % 2 !== 0) {
    newArray.push(array[Math.floor(array.length / 2)]);
  } else {
    newArray.push(array[Math.floor((array.length / 2) - 1)]);
    newArray.push(array[Math.floor(array.length / 2)]);
  }
  return newArray;
};


// TEST CODE
console.log(middle([1])); // => []
console.log(middle([1, 2]));// => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6]));// => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);