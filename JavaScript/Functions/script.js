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

// default parameter

function greeting(name="Guest") {
    console.log("Hello " + name);
}

greeting("Alex");
greeting();
greeting("Amal");

// 18%
function getTotalPrice(price, gst = 18) {
    const amt = price * gst / 100;
    console.log(price + amt);
}

getTotalPrice(1000);

// arrow function

function calc(value) {
    return value;
}

const res = calc(10);

console.log(res);

function findSum(a, b) {
    return a+b;
}

const res1 = findSum(10, 20);
console.log(res1);


function area(l, b) {
    return l * b;
}

function volume(ar, h) {
    return ar * h;
}

const resArea = area(10, 20);
console.log(resArea);
const vol = volume(resArea, 30);
console.log(vol);

// ex. return
// const arrowFunc = (a, b) => {
//     const res = a + b;
//     return res;
// }

// const res2 = arrowFunc(10, 20);
// console.log(res2)

// imp. return
// const arrowFunc = (a, b) => a + b;

// const res2 = arrowFunc(10, 20);
// console.log(res2)

// single para
const arrowFunc = n => n * n;

const res2 = arrowFunc(10);
console.log(res2)

// sum of n number

const sumOfNNumbers = n => (n * (n + 1)) / 2;

console.log(sumOfNNumbers(100))