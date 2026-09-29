const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const error = document.querySelectorAll('.error');

signupForm.oninput = () => {
    for (let i = 0; i < error.length; i++) {
        error[i].innerHTML = '';
    }
}

loginForm.oninput = () => {
    for (let i = 0; i < error.length; i++) {
        error[i].innerHTML = '';
    }
}

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
});

signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if(!name || !email || !number || !password || !confirmPassword) {
        alert('All fields are required');
        return;
    }

    const user = {
        name: name,
        email: email,
        number: number,
        password: password
    }

    localStorage.setItem("user", JSON.stringify(user));
});