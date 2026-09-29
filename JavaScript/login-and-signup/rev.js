const obj = {
    name: "John",
    age: 30,
    city: "New York"
}

// destructuring
// const name = obj.name;
// const age = obj.age;
// const city = obj.city;

const { name: changedName, age } = obj;

console.log(name, age);

const arr = [1, 2, 3, 4];

const [fn, sn] = arr;

console.log(fn, sn);

// spread

const arr1 = arr; // pass by reference

arr.push(5);

console.log(arr1);

console.log([...arr]); // pass by value

const obj1 = { ...obj };

console.log(obj1);

// merge array

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const mArray = [...a1, ...a2];

console.log(mArray);

// rest

const obj2 = {
    name: "John",
    age: 30,
    city: "New York"
}

const { city, ...rest } = obj;

console.log(rest);

const arr4 = [1, 2, 3, 4, 5];

const [fnm, sdf, ...arr5] = arr4;

console.log(arr5);

// set

const set = new Set([1, 2, 3, 1, 2, 3, 4, 5, 4, 5, 6]);

set.add(7);
set.add(7);
set.add(7);
set.add(7);
set.add(7);

const res = set.has(70);
console.log(set, res);

const map = new Map();

map.set("name", "john");

const res1 = map.get("sdfsdf");

console.log(res1);

// callback

function display(data) {
    console.log("The data is: ", data);
}

function sampleFun(callback) {

    console.log(display, callback);
    const res = 10 + 20;
    callback(res);
}

sampleFun(display);
let counter = 1;

const handleInterval = () => {
    console.log(counter++);
}

// setInterval(handleInterval, 1000);

//map, foreach, filter

const fruits = [
    "Apple",
    "Banana",
    "Cherry",
    "Grapes",
    "Guava",
    "Kiwi",
    "Mango",
    "Orange",
    "Papaya",
    "Pineapple",
    "Pomegranate",
    "Strawberry",
    "Watermelon"
];

fruits.forEach((fruit) => {
    console.log(fruit);
});

const arrF = fruits.filter((fruit) => fruit.length > 7);

console.log(arrF)

const arrM = fruits.map((fruit) => fruit.length > 7 ? fruit.toUpperCase() : fruit);
console.log(arrM)

const arrM2 = fruits.map((fruit) => {
    if(fruit.length > 7) {
        return fruit.toUpperCase();
    }
    return fruit;
});
console.log(arrM2);

// fetch;

fetch("https://randomuser.me/api/").then((responseData) => {
    return responseData.json();
}).then((data) => {
    console.log(data.results[0]);
}).catch((err) => {
    console.log("Error", err);
})

// async await 

const fetchData = async () => {
    try {
        const responseData = await fetch("https://randomuser.me/api/");
        const data = await responseData.json();
        console.log(data.results);
    } catch (err) {
        console.log(err);
    }
}

fetchData();

// while
let i = 0;

while (i < 10) {
    console.log(i); // 9
    i++; // 10
}
