const filter = (arr = [], callback) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 1) {
            callback(arr[i]);
        }
    }
}

const res = [];
const handleFilter = (element) => {
    res.push(element);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
filter(arr, handleFilter);

console.log(res);

// -----------------------------------------------------------------------------

// array methods

// forEach, find, filter, map, reduce

// forEach

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.forEach(function (element, index, arr) {
    // console.log(element, index, arr);
});

// find

const resNum = array.find(function (element) { 
    if (element == 2) {
        return element;
    }
});

console.log(resNum);

const fruits = ["apple", "banana", "mango", "orange", "grapes", 6];

const resFruits = fruits.find((element) => {
    if (element.length == 5) {
        return true;
    }
});

console.log(resFruits);


// filter

const resFilter = array.filter((element, index, arr) => {
    if (element % 3 == 0) {
        return true;
    }
});

console.log(resFilter);

// map

const resMap = array.map((element, index) => {
    if (element % 2 == 0) {
        return element / 2;
    }
    return element;
});

console.log(resMap);

// reduce

// let sum = 0;
// for (let i = 1; i <= 10; i++){
//     sum = sum + i; // 3
// }
// console.log(sum);

const resReduce = array.reduce((total, element, index, arr) => {
    return total + element;
});

console.log(resReduce);
