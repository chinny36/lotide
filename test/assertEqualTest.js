const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp"); //false
assertEqual(1, 1); //true
assertEqual("bumps", "bumps"); //true
assertEqual(2, 9000); //false