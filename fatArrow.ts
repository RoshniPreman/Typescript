let add = (a,b) => a + b

console.log(add(1 , 2));

setTimeout(function(){
    console.log("called set timeout");
} , 1000);

let obj = {
        name : 'Roshni',
        printName : function(){

            setTimeout(() => {
                console.log(this.name);
            }, 1000);           
        }
}

obj.printName();