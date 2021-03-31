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

const letterPositions = function(sentence) {
  const results = {};
  let pos = 0;

  for (let letter of sentence) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(pos);
      } else {
        results[letter] = [pos];
      }
    }
    pos++;
  }
  return results;
};

const test = 'hello';

assertArraysEqual(letterPositions(test).h, [0]);
assertArraysEqual(letterPositions('lighthouse in the house').i, [1, 11]);