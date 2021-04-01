const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}✅`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}🛑`);
  }

};

const findKey = function(obj, callback) {
  const keys = Object.keys(obj);

  for (let key of keys) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};


//TEST CODE
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));// => "noma"

assertEqual(findKey({'a': {num: 1}, 'b': {num: 2}, 'c': {num: 3}}, x => x.num === 2), 'b');
assertEqual(findKey({'a': {num: 1}, 'b': {num: 2}, 'c': {num: 'stupid'}}, x => x.num === 'stupid'), 'c');

