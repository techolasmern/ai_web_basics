// const btn = document.getElementById("btn");
// console.log(btn);

// btn.addEventListener("click", function () {
//     // code to be executed
//     console.log("context menu is open");
// });
// document.addEventListener("contextmenu", function (event) {
//     event.preventDefault();
//     console.log(event);
//     console.log("context menu is open");
// })
// document.addEventListener("keydown", function (event) {
//     if (event.shiftKey && event.altKey && event.code == "Enter") {
//         console.log("Shift + Alt + Enter is pressed");
//     }
// })
// document.addEventListener("mousemove", function (e) {
//     console.log(e);
// })

// const mouseFollow = document.createElement("div");
// const ms = mouseFollow.style;
// mouseFollow.id = "mf"
// ms.height = "10px";
// ms.width = "10px";
// ms.backgroundColor = "red";
// ms.position = "absolute";
// ms.top = 0;
// ms.left = 0;
// ms.transition = "0.4s";
// document.body.appendChild(mouseFollow);

// document.addEventListener("mousemove", function (event) {
//     ms.top = event.clientY + "px";
//     ms.left = event.clientX + "px";
// });

// ----------------------------------------------------------------------------

const loginForm = document.getElementById("login");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // const username = document.login.username.value;
    // const password = document.login.password.value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log(username, password);
})

const un = document.getElementById("username");
const word_count = document.getElementById("word_count");
un.addEventListener("input", function (event) {
    console.log(event.target.value);
    const len = event.target.value.length;
    if (len < 5) {
        word_count.innerText = "Min 5 char."
    } else {
        word_count.innerText = "";
    }

})
