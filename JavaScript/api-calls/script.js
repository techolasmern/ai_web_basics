// async - promise

const p = new Promise((resolve, reject) => {
    resolve("error");
});

p.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log("err: " + err);
}).finally(() => {
    console.log("Completed");
})

//

const promise = Promise.resolve(30)

promise.then((response) => {
    return response * 20;
}).then((response) => {
    console.log(response);
});

// JSON 

const jsonString = '{ "name": "John", "age": 30, "city": "Kozhikode" }';

const res = JSON.parse(jsonString);

console.log(res);

const toStr = JSON.stringify(res);

console.log(toStr);

// API FETCHING ->

// const response = fetch("https://randomuser.me/api/");

// response.then((apiResponse) => {
//     return apiResponse.json();
// }).then((successRes) => {
//     const firstName = successRes.results[0].name.first;
//     const p = document.createElement("p");
//     p.innerText = firstName;
//     document.body.appendChild(p);
//     const res = fetch("https://randomuser.me/api/");
//     res.then(response => {
//         return response.json()
//     }).then(res => {
//         // statement
//         const res = fetch("https://randomuser.me/api/");
//         res.then(response => {
//             return response.json()
//         }).then(res => {
//             // statement
//             const res = fetch("https://randomuser.me/api/");
//             res.then(response => {
//                 return response.json()
//             }).then(res => {
//                 // statement
//             }).catch(err => {
//                 console.log(err)
//             })
//         }).catch(err => {
//             console.log(err)
//         })
//     }).catch(err => {
//         console.log(err)
//     })
// }).catch((err) => {
//     alert(err.message);
// })

// ASYNC AWAIT

// status code -> 200, 201, 400, 401, 404, 425, 409, 500, 502, 503

async function call_api() {
    try {
        const apiResponse = await fetch("https://randomuser.me/api/");
        if (!apiResponse.ok) {
            throw new Error("Something went wrong");
        }
        const response = await apiResponse.json();
        console.log(response);
    } catch (err) {
        console.log(err.message);
    } finally {
        console.log("Completed")
    }
}

call_api();