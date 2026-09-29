// let age = 20;

// age = "hello";

// age = true;

let age: number = 20;

let user_name: string = "John";

let sample: boolean = false;

let arr: (number | string | boolean)[] = [20, 30, 40, "data", true];

let num: (number | string) = "10";

let obj: { name: string; age: number; } = { name: "sample", age: 30 };

console.log(obj);

function sum(a: number, b: number): number {
    return a + b;
}

const res = sum(10, 20);

console.log(res);

function greet(name: string): void {
    console.log("Hello, " + name);
}

greet("John");