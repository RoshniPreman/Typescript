// create a file called hello.ts.
// We can compile a typescript file into a javascript file by calling:
// tsc hello.ts
// This generates a file called hello.js
// And we can execute that file by using  'node hello.js'
// We can watch a typescript file for changes and compile it automatically with: tsc -w hello.ts

//Both let and const create variables that are block-scoped – they only exist within the innermost block that surrounds them.


console.log("Hello");

var funcs = [];
for (let i = 0; i < 5; i += 1) {
  funcs.push(function () {
    console.log(i);
  })
}
funcs.forEach(function (arr) {
  arr()
});