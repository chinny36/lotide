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

const without = function(source, itemsToRemove) {
  let newArray = [];
  
  // for each item in itemsToRemove, if item does NOT exist in source, add to new array
  source.forEach(element => {
    if (!itemsToRemove.includes(element)) {
      newArray.push(element);
    }
  });

  return newArray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["foo", "bar", "sux"], ['foo', 2, "3"])); // ["bar", "sux"]
console.log(without([1,2,3], [1, 2, 3])); // []

const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']);
assertArraysEqual(words, ['hello', 'world', 'lighthouse']); // Confirm original array has not been modified