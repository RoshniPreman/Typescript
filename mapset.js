var base = { a: 1, b: 2 };
var obj = Object.create(base);
for (var key in obj) {
    console.log(key);
}
