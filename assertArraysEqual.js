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

assertArraysEqual([1,2,3],[1,2,3]); //true
assertArraysEqual([1,2,3],[1,2,4]); //false
assertArraysEqual([1,2,3],[1,2,'3']); //false