'use strict'

// foreach downsides
// You can’t break out of this loop using a break statement or move to the next iteration with continue.
// You can’t return from the enclosing function using a return statement.


// for-in loop in javascript
// designed for iterating over object properties

let obj = {a : 1 , b : 2};

for (const key in obj) {
   console.log(`in ${key}`);
}

// for-of with array

let array = [10,20,30];
for (let key of array) {
  console.log(key);
}

// for-of in ES6 avoid pitfalls of for-in
// for looping over the values in an array.
// It works with break, continue, and return