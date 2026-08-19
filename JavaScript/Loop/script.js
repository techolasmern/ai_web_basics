// Loops in JavaScript

// for, while, do while, for in, for of
// 1 - 10 print
for (let i = 1; i <= 10; i++) {
    console.log(i); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}
console.log("Loop end");

// while

let k = 1;
while (k <= 10) {
    console.log(k);
    k++;
}

console.log("While end");

let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 0);

console.log("do while end");


for (let i = 1; i <= 5; i++) {
    console.log("Inner Loop ok");
    for (let j = 1; j <= 5; j++) {
        console.log(j); // 1, 2, 3, 4, 5
    }
    console.log("Outer loop end")
}
console.log("Final log")

// questions

const num = 11;

let is_prime = true;
for (let p = 2; p <= num / 2; p++) {
    if (num % p == 0) {
        is_prime = false;
        break;
    }
}

if (is_prime) {
    console.log("is prime");
} else {
    console.log("is not a prime");
}

// palindrome

// 123 ->

const pNumber = 123;

let tempNumber = pNumber;
let rev = 0;

while (tempNumber > 0) {
    const rem = tempNumber % 10;
    rev = rev * 10 + rem;
    tempNumber = parseInt(tempNumber / 10);
}

console.log(pNumber == rev);