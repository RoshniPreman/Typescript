var add = function (a, b) { return a + b; };
console.log(add(1, 2));
setTimeout(function () {
    console.log("called set timeout");
}, 1000);
