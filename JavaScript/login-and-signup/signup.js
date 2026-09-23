const signup = document.getElementById("signup");

signup.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = {
        name: document.signup.name.value,
        number: document.signup.number.value,
        email: document.signup.email.value,
        password: document.signup.password.value
    }
    console.log(user);
    updateUsersArray(user);
});