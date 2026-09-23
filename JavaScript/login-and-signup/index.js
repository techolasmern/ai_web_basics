const loginBtn = document.getElementById("login-btn");
const singupBtn = document.getElementById("signup-btn");

loginBtn.addEventListener("click", () => {
    window.location.href = "./login.html"
});

singupBtn.addEventListener("click", () => {
    window.location.href = "./signup.html"
});