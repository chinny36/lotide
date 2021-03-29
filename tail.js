const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}✅`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}🛑`);
  }

};

const tail = function(array) {
  return (array.slice(1));
};

//TEST CODE
const words = ['Yo Yo', 'Lighthouse', 'Labs'];
console.log(tail(words));
assertEqual(words.length, 3);
console.log(tail([]));
console.log(tail([5]));