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

let obj: Student = {
    name: "john",
    age: 20,
    city: "kozhikode"
}

const obj2: Student = {
    name: "rahul",
    age: 40,
    city: "mlp"
}

console.log(obj, obj2);

interface EcommerceUser{
    name: string;
    age: number;
    city: string;
    balance?: number;
    role?: string;
}

interface EcommerceBase {
    name: string;
    age: number;
    city: string;
}

interface Seller extends EcommerceBase {
    balance: number;
}

interface Admin extends Seller {
    role: string;
}

const customer: EcommerceBase = {
    name: "john",
    age: 20,
    city: "kozhikode"
}

const seller: Seller = {
    name: "rahul",
    age: 40,
    city: "mlp",
    balance: 2000,
}

const admin: Admin = {
    name: "admin",
    age: 30,
    city: "kozhikode",
    role: "admin",
    balance: 2000
}


const customer1: EcommerceUser = {
    name: "john",
    age: 20,
    city: "kozhikode"
}

const seller1: EcommerceUser = {
    name: "rahul",
    age: 40,
    city: "mlp",
    balance: 2000,
}

const admin1: EcommerceUser = {
    name: "admin",
    age: 30,
    city: "kozhikode",
    role: "admin",
    balance: 2000
}