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

const response = fetch("https://randomuser.me/api/");

response.then((apiResponse) => {
    return apiResponse.json();
}).then((successRes) => {
    const firstName = successRes.results[0].name.first;
    const p = document.createElement("p");
    p.innerText = firstName;
    document.body.appendChild(p);
}).catch((err) => {
    alert(err.message);
})