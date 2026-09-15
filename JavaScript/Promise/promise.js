// promise states -> pending, fulfilled, rejected
console.log("A")
const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Error after 5 seconds");
    }, 5000);
});
console.log("B");

promise.then((successRes) => {
    console.log("SUCCESS: " + successRes);
}).catch((errorRes) => {
    console.log("ERROR: " + errorRes);
}).finally(() => {
    console.log("Promise Completed");
})

console.log("C");

// promise methods

const getPromise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(1);
        }, 3000);
    })
}
const getPromise2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 6000);
    })
}
const getPromise3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(3);
        }, 4000);
    })
}

// all

const allPromise = Promise.all([getPromise1(), getPromise2(), getPromise3(), promise]);

allPromise.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err)
})

// race

const racePromise = Promise.race([getPromise1(), getPromise2(), getPromise3()]);

racePromise.then(res => {
    console.log("2 success" + res);
}).catch(err => {
    console.log("2 error" + err)
})

// any

const anyPromise = Promise.any([getPromise1(), getPromise2(), getPromise3()]);

anyPromise.then(res => {
    console.log("3 success" + res);
}).catch(err => {
    console.log("3 error" + err)
})

//

Promise.resolve(20);
Promise.reject(30);

// ----------------------------------------

Promise.resolve(20).then(res => {
    return res * 10;
}).then(secRes => {
    console.log(secRes);
})