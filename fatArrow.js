var add = function (a, b) { return a + b; };
console.log(add(1, 2));
setTimeout(function () {
    console.log("called set timeout");
}, 1000);
var obj = {
    name: 'Roshni',
    printName: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.name);
        }, 1000);
    }
};
obj.printName();
