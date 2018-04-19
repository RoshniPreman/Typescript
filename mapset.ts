let base = { a : 1 , b : 2};
let obj = Object.create(base);

for (const key in obj) {
    console.log(key);
}
