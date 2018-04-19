'use strict';
// foreach downsides
// You can’t break out of this loop using a break statement or move to the next iteration with continue.
// You can’t return from the enclosing function using a return statement.
// for-in loop in javascript
// designed for iterating over object properties
var obj = { a: 1, b: 2 };
for (var key in obj) {
    console.log("in " + key);
}
// for-of with array
var array = [10, 20, 30];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var key = array_1[_i];
    console.log(key);
}
