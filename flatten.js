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

const flatten = function(array) {
  let newArray = [];

  for (let i in array) {
    if (array[i] instanceof Array) {
      for (let j in array[i]) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, [3, 4, 10, 45], 5, [6, 4646, 666]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);