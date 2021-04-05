# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my studies at Lighthouse Labs. 

## Usage

**Install:**

`npm install @wjb8/lotide`

**Require it:**

`const _ = require('@wjb8/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arrayOne, arrayTwo)`: compare two arrays and return true if equal
* `assertEqual(actual, expected)`: return true if actual === expected
* `assertObjectsEqual(obj1, obj2)`: compare two objects and return true if equal
* `countLetters(string)`: return an object of letters and their occurences in the string
* `countOnly(allItems, itemsToCount)`: returns an object of only the items listed in the second parameter
* `eqArrays(arrayOne, arrayTwo)`: used with assertArraysEqual to compare two arrays
* `eqObjects(obj1, obj2)`: used with assertObjectsEqual to compare two objects
* `findKey(obj, callback)`: returns keys in an object that match the callback function result
* `findKeyByValue(object, val)`: similarly returns key that holds the passed value argument
* `flatten(array)`: returns a new array of all elements in the passed array ignoring nested arrays
* `head(array)`: returns the first element of an array
* `letterPositions(sentence)`: returns the positions in the string of the passed letter
* `map(array, callback)`: executes a callback function on each element of the array and returns a new array of the results
* `middle(array)`: returns the middle element of an array (middle two elements if odd)
* `tail(array)`: returns the array with the head removed
* `takeUntil(arr, callback)`: returns elements in the array until the callback function returns false
* `without(source, itemsToRemove)`: returns new array without the list of items to remove