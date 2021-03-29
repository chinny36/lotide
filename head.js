const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}✅`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}🛑`);
  }

};

const head = function(array) {
  return array[0];
};

//TEST CODE
console.log(head([1]));
console.log(head([]));

assertEqual(head([4,5,6]), 4);
assertEqual(head(["Hello", "Mister", "Anderson"]), "Hello");
assertEqual(head(["Hello", "Mister", "Anderson"]), "Mister");