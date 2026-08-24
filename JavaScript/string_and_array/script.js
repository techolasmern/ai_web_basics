// string -> collection of char.
// array -> collection of elements.

// const str = "Hello World";
// str[0] = "J";
// console.log(str); // string is immutable
//  Hello World! 
// string methods

const str = "Hello World!";

console.log(str.length);
console.log(str[4]);
console.log(str.at(1))
console.log(str.charAt(1))
console.log(str.indexOf("Hello"));
console.log(str.indexOf("ld!", 4));
console.log(str.includes("hello"));

console.log(str.startsWith("He"));
console.log(str.endsWith("World!"));

console.log(str.trim());

console.log(str.slice(6, 11));
console.log(str.slice(-3));
console.log(str.slice(0, -3));

console.log(str.replace("Hello", "Hey"));
console.log(str.replace("l", "5"));
console.log(str.replaceAll("l", "5"));

console.log(str.split("-"));
console.log(str.split(""));