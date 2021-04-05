const head = require('../head');
const assertEqual = require('../assertEqual');

console.log(head([1]));
console.log(head([]));

assertEqual(head([4,5,6]), 4);
assertEqual(head(["Hello", "Mister", "Anderson"]), "Hello");
assertEqual(head(["Hello", "Mister", "Anderson"]), "Mister");