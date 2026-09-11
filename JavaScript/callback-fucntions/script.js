// Date();, // Math, Callback

const date = new Date();

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours() + ":" + date.getMinutes());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }).toUpperCase());

console.log(date.toISOString());

// Math

console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.LOG10E);

console.log(Math.sqrt(81));
console.log(Math.pow(9, 3));

const arr1 = [1, 2, 3, 7, 4, 23, 6, 8, 4];
console.log(Math.max(...arr1));
console.log(Math.min(...arr1));

console.log(Math.round(3.49));
console.log(Math.floor(3.99));
console.log(Math.ceil(3.01));

console.log(Math.random()); 0.0 < 1;

const str = "Hello World!"
console.log(Math.floor(Math.random() * str.length));

const getPass = (len = 10) => {
    const str = "abcdef0123456789ABCDEF!@#$%^&*_+";
    const arr = [];
    while (arr.length < len) {
        const ridx = Math.floor(Math.random() * str.length);
        const rltr = str[ridx];
        arr.push(rltr);
    }
    return arr.join("");
}
console.log(getPass(50));

// -----------------------------------------------------------------------------------------

// Callback -> A function that is passed as an argument to another function as a parameter.

const display = (value, cb) => {
    console.log("The value is: ", value);
    cb();
}

const fn = function () {
    console.log("Callback invoke");
};

display(10, fn);

const handleLoop = (element, index, array) => {
    console.log(element, index, array);
}

const loop = (arr = [], callback) => {
    for (let i = 0; i < arr.length; i++){
        callback(arr[i], i, arr);
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// method 1
loop(arr, handleLoop);

console.log("-------------------------------------------------------------");

// method 2
loop(arr, (element, index, array) => {
    console.log(element, index, array);
});

console.log("----------------------------------------------------------")

// callback with error and data;

// const getUser = () => {

// }

// setTimeout, setInterval

setTimeout(() => {
    console.log("Hello after 2 second");
}, 2000); // in ms

const time = document.getElementById("time")


setInterval(() => {
    time.innerHTML = new Date().toLocaleString();
}, 1000); // time in ms

const getUser = (callback) => {
    setTimeout(() => {
        const user = { name: "Fasil", age: 20, city: "Kozhikode" };
        callback(user);
    }, 5000);
}

const handleCallback = (user) => {
    console.log(user);
}

getUser(handleCallback)

// -------------------------

const div = (fn, sn, callback) => {
    if (fn == 0 && sn == 0) {
        callback("Math Error", null);
    }
    const res = fn / sn;
    callback(null, res);
}

div(0, 10, (err, result) => {
    if (err) {
        console.log(err + ": is error")
    } else {
        console.log(result);
    }
});

const displayRes = (res) => {
    console.log(res);
}

const getArea = (l, b, callback) => {
    const a = l * b;
    callback(a, 20, displayRes);
}

const getVol = (area, h, callback) => {
    const v = area * h
    callback(v);
}

getArea(10, 20, getVol);   