// // var, let, const
// // rules -> starts with letter, _ or $, and include numbers.

// // camel case -> firstName
// var a = 10;
// console.log(a);
// var a = "hello";
// console.log(a);
// a = 30;
// console.log(a);

// // let b = 20;
// // var b = 30;
// // let b;
// // var b;

// let b;
// {
//     b = 10;
// }
// console.log(b);

// // const pi;

// const num = "20";
// // const type = typeof num;
// console.log(typeof "hello");

// console.log(10 + Number("hello")); // 1010

// console.log(100 === "100");

// console.log(NaN == NaN);



for (let i = 1; i < 5; i++){
    let str = "";
    for (let j = 1; j <= i; j++){
        str += ((i * (i - 1)) / 2 + j) + " ";
    }
    console.log(str);
}