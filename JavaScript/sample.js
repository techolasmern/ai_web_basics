const arr = [10, 20, 30, 20, 40, 10, 50, 30];

const occur = {};
const dup = [];

for (const num of arr) {
    if (occur[num]) {
        occur[num] = ++occur[num];
    } else {
        occur[num] = 1;
    }
}

for (const key in occur) {
    if (occur[key] > 1) {
        dup.push(Number(key));
    }
}

console.log(dup);