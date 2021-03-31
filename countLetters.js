const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}✅`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}🛑`);
  }

};

const countLetters = function(string) {
  const result = {};

  for (let letter of string) {
    if (letter !== ' ') {
      if (result[letter]) {
        result[letter] ++;
      } else {
        result[letter] = 1;
      }
    }
  }

  return result;
};

const result1 = countLetters('Lighthouse in the house');

assertEqual(result1['L'], 1);
assertEqual(result1['d'], undefined);
assertEqual(result1['h'], 4);