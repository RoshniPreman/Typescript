// destructuring is a way of extracting values into variables from data stored in objects and arrays.
// Object destructuring
var obj = { first: 'Roshni', last: 'Preman', Age: 25 };
// one way
var f = obj.first, l = obj.last;
// console.log(`f ${f}`);
// console.log(`l ${l}`);
// second way
var first = obj.first, last = obj.last;
// console.log(`first ${f}`);
// console.log(`last ${l}`);
// Array destructuring
//  it extracts based of the index in the array
var array = [1, 2];
var x = array[0], y = array[1];
console.log("x " + x);
console.log("y " + y);
