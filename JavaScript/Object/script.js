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