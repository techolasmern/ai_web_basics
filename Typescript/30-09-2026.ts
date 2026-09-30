let a: string = "hello";
a = "str";

const arr: (string | number | null)[] = ["sdf", 20, null];

let sample: (null | number) = null;

function sampleFun(value: number): number {
    return value;
}

// object

// interface, type

interface Student{
    name: string;
    age: number;
    city: string;
}

const obj: Student = {
    name: "john",
    age: 20,
    city: "kozhikode"
}

const obj2: Student = {
    name: "rahul",
    age: 40,
    city: "mlp"
}

