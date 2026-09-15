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