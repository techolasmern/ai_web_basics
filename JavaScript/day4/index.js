let age = 25;

function getAge() {
    return age;
}

const ag = getAge();
console.log(ag);

function getAnotherAge() {
    console.log(age);
}

age = 26

getAnotherAge()
//

function sampleBlock() {
    var a = 10;
    {
        console.log(a) // undefined
        var a = 20;
        console.log(a); // 20
    }
    console.log(a); // 10
}

sampleBlock();

// closure

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count = count + 5;
        console.log(count);
    }
    return innerFunction;
}
const inner = outerFunction();

inner();
inner();
inner();
inner();
inner();
inner();
inner();
inner();
inner();
inner();

// currying

// string

const txt = "Hello"; // index
console.log(txt.length);
console.log(txt[3]);

const array = ["Maths", "Science", "English", "Hindi", "Social", "Computer"];
console.log(array.length)
// const str = array[1][0];
// console.log(str);

// palindrome

const str = "malayalam";
const len = str.length;
let isPal = true;
for (let i = 0; i < len / 2; i++){
    const sc = str[i]; // 0, 1, 2, 3, 4
    const ec = str[len - 1 - i]; // 8, 7, 6, 5, 4
    if (sc != ec) {
        isPal = false;
        break;
    }
}
console.log(isPal);

// prime

const checkIsPrime = number => {
    if (number == 0 || number == 1) {
        return false;
    }
    for (let i = 2; i <= number / 2; i++){
        if(number % i == 0) {
            return false;
        }
    }
    return number;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 47, 83, 81, 101];

for (let i = 0; i < arr.length; i++){
    const element = arr[i];
    const res = checkIsPrime(element)
    if (res) {
        console.log(res)
    }
}

// largest

let num1 = 10;
let num2 = 20;

// let temp = num1;
// num1 = num2;
// num2 = temp;

console.log("num1 -> " + num1, "num2 ->" + num2);

// // largest
// const ar = [1, 5, 12, 2, 5, 3, 18, 6, 7, 8];

// let largest = ar[0];
// for (let i = 1; i < ar.length; i++){
//     const elem = ar[i]
//     if (elem > largest) {
//         largest = elem
//     }
// }
// console.log(largest);

// second largest
const arrList = [1, 5, 12, 2, 5, 3, 18, 18, 17, 6, 7, 8];

let largest = arrList[0];
let secondLarget = -Infinity;
for (let i = 1; i < arrList.length; i++) {
    const elem = arrList[i]
    if (elem > largest) {
        secondLarget = largest;
        largest = elem;
    } else if (elem != largest && elem > secondLarget) {
        secondLarget = elem;
    }
}
console.log(largest, secondLarget);