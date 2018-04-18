let add = (a,b) => a + b

console.log(add(1 , 2));

setTimeout(function(){
    console.log("called set timeout");
} , 1000);

let obj = {
        name : 'Roshni',
        printName : () => {

            setTimeout(() => {
                console.log(this.name);

                //  the value of this in a function depends on how the function is called.
                // if we use fat arrow functions the value of this inside a fat arrow function will be the same as the value of this outside the fat arrow function.

                //It uses the value of this from the surrounding code for its context. i.e. whatever this points to in the surrounding code, 
                // this will point to in the function body of the fat arrow function.

            }, 1000);           
        }
}

obj.printName();