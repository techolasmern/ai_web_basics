//

// const arr = ["kochi", "ktym"];
// console.log(arr[0]);

// { property: value };
// this is a global object / represent current object

const obj = {
    place: "Kochi",
    state: "Keralam",
    age: 25,
    sampleKey: 238476,
    get_age: function () {
        return this.age;
    }
};

const sampleKey = "place";

console.log(obj[sampleKey]);
console.log(obj.get_age());

obj[sampleKey] = "Kozhikode";

console.log(obj);

console.log(obj[sampleKey]);
console.log(obj["state"])

// camel -> firstName
// Pascal -> FirstName
// snake -> first_name
// kebab -> first-name

// destructuring array and object;

const arr = [1, 2, 3, 4, 5];

// const fn = arr[0];
// const sn = arr[1];

const [fn, sn, tn, fnm, fin] = arr;

console.log(fn, sn, tn, fnm, fin);

// obj

const ob = { 
    name: "John",
    age: 20,
    city: "TVM",
    sample: "hai",

}

// const name = ob.name;
// const age = ob.age;
// const city = ob.city;

const { name, city: changedName, age, sample = "hello" } = ob;

console.log(name, age, changedName, sample);

// spread, rest

const st1 = {
    name: "Amal",
    mark: 80
}

const st2 = {
    name: "Aswin"
}

const { name: st_name, mark = 0 } = st2;
console.log(st_name, mark);

// ...
const array = [1, 2, 3];
const newArr = [...array];
newArr.push(4);
console.log(array, newArr);

const userObj = { name: "Amal", age: 30 };
const user = {...userObj};
user.name = "Aswin"
console.log(userObj, user);

// rest

const users = ["user1", "user2", "user3", "user4", "user5"];

const [u1, u2, ...restUsers] = users;

console.log(u1, u2);
console.log(restUsers);


const student_1 = { name: "Alex", age: 20, course: "AI WEB", hub: "Kozhikode" };

const { name: user_name, hub, ...restStudentInfo } = student_1;

console.log(user_name, hub, restStudentInfo);

// array -> collection of elements -> dup.
// set -> Collection of unique elements

const arr2 = [1, 2, 3, 45, 6, 2, 3];
console.log(arr2);

const set = new Set();

set.add(10);
set.add(20);
set.add(30);

console.log(set.has(100))

set.delete(20);
console.log("Size of set: ", set.size);
set.clear();

console.log(set);

// [1,2,3,4,2,5,1,7,3,2,1];

const uniqueElements = new Set([1, 2, 3, 4, 2, 5, 1, 7, 3, 2, 1]);

// console.log([...uniqueElements]);
console.log(Array.from(uniqueElements))

// [1, 2, 3]; => [1,2,3]
// {1,2,3} => [1,2,3]
// { age: 20, place: "kkd"} => {age: 20, place: "kkd"}

// loop -> for of, for in

const numbers = [80, 34, 72, 91, 61, 90];

for (const number of numbers){
    console.log(number);
}

const obj2 = {
    name: "Amal",
    age: 20,
    place: "Kozhikode"
}

for (const key in obj2){
    console.log(obj2[key]);
}


for (const sv of uniqueElements) {
    console.log(sv);
}

// Map -> key value pair

const map = new Map();

map.set("name", "Amal");
map.set("age", 20);
map.set("city", "Kozhikode");

map.set("age", 30)

console.log(map.get("name"))

map.delete("age");

console.log(map.has("age"));

console.log(map.size);

// map.clear();

console.log(map); // [ [key, value], [key, value], [key, value] ]

for (const val of map.keys()) {
    console.log(val);
}