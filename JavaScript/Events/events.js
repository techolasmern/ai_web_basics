const btn = document.getElementById("btn");

console.log(btn);

btn.addEventListener("click", function () {
    // code to be executed
    console.log("context menu is open");
});

document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    console.log(event);
    console.log("context menu is open");
})

document.addEventListener("keydown", function (event) {
    if (event.shiftKey && event.altKey && event.code == "Enter") {
        console.log("Shift + Alt + Enter is pressed");
    }
})

document.addEventListener("mousemove", function (e) {
    console.log(e);
})

