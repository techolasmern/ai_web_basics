// Functions
display()
function display() {
    console.log("Hello");    
}

// display();
// sampleFun();
// Anonymous function
var sampleFun = function () {
    console.log("Hey");
}

sampleFun();

// Hoisting

// can be access variables before declaration.
console.log(a);
var a = 10;

// 2 phase -> memory allocation, code exe.

function sum(fn, sn) { // para
    console.log(fn + sn);
}

sum(10, 20); // arg
sum(20, 50); // arg
sum(100, 600); // arg
sum(1, 3); // arg