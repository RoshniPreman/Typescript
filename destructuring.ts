// destructuring is a way of extracting values into variables from data stored in objects and arrays.

 // Object destructuring
const obj = { first : 'Roshni' , last : 'Preman' , Age : 25};

// one way
const { first : f , last : l} = obj; 

// console.log(`f ${f}`);
// console.log(`l ${l}`);

// second way

const { first, last} = obj;

// console.log(`first ${f}`);
// console.log(`last ${l}`);

// Array destructuring
//  it extracts based of the index in the array
const array = [ 1 , 2];
const [x , y] = array;

console.log(`x ${x}`);
console.log(`y ${y}`);