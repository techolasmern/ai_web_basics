const a = 10;
const b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** 3); // 10 * 10 * 10
console.log(a ** 3);

console.log(10 % 3);

let num = 10;
// const inc = num++; // post increment
const inc = ++num; // pre increment
console.log(inc, num);

let n = 10;
const d = --n;
console.log(n, d);

console.log(5 == 54)
console.log(5 === "5")
console.log(5 !== "5")
console.log(10 > 2.0)
console.log(10 < 20)
console.log(10 <= 9)
console.log(9 >= 10)

console.log(true && true && false && true);
console.log(false || false || true || false);
console.log(!!true);

console.log(!20 && 20 == 20);

// false value -> 0, null, undefined, ""

console.log(10 < 20 || 2 == 4);

const pass = "asdfgsdsh";
console.log(pass.length >= 8 && pass.length <= 16)

// if, if else, else if

if (5 == 5) {
    console.log("This is true statement");
} else {
    console.log("This is false statement");
}

const n1 = 10;
const n2 = 20;
const n3 = 30;

if (n1 > n2 && n1 > n3) {
    console.log("n1 is greater value");
} else if(n2 > n3){
    console.log("n2 is greater value");
} else {
    console.log("n3 is greater value")
}

// switch

const day = 10;
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid input");
}

if (11 % 2 == 0) {
    console.log("Number is even")
} else {
    console.log("Number is odd");
}

const rem = 11 % 2;
switch (rem) {
    case 0:
        console.log("even")
        break;
    case 1:
        console.log("odd")
        break;
}