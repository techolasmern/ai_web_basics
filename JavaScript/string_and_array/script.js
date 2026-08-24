// string -> collection of char.
// array -> collection of elements.

// const str = "Hello World";
// str[0] = "J";
// console.log(str); // string is immutable
//  Hello World! 
// string methods

const str = "Hello World!  ";

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

// Array - Methods

const arr = [1, 2, 3, 4, 5, 6, 4];

console.log(arr.length);
console.log(arr.at(2));
console.log(arr.indexOf(4, 4));
console.log(arr.includes(30))

arr.push(7, 10, 40);
arr.pop();

arr.unshift(0, -1, -2, 5);
arr.shift();

arr[2] = 50;

// splice

console.log(arr.splice(2, 0, 100, 200, 300));

console.log(arr);

console.log(arr.reverse())

console.log(arr.join(""));

// number hide

const phone = 8976545360;
const phoneString = phone.toString();
const phoneStart = phoneString.slice(0, 2);
const phoneEnd = phoneString.slice(-2);
const h = phoneStart + "********" + phoneEnd;
console.log(h);

// email hide

const email = "john12387@example.com";

// joh*******@gmail.com

const emailArr = email.split("@");
const username = emailArr[0];
const domain = emailArr[1];

const usernameStart = username.slice(0, -5);
const hide = usernameStart + "********";

const newEmail = hide + "@" + domain;
console.log(newEmail);

// array methods -> yarra sdohtem

const txt = "array methods";
const sp = txt.split(" ");
const res = [];
for (let i = 0; i < sp.length; i++){
    const rev = sp[i].split("").reverse().join(""); // yarra
    res.push(rev);
}

console.log(res.join(" "));