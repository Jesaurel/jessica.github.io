// script.js
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'pass') {
        alert('Login successful!');
    } else {
        alert('Incorrect username or password. Please try again.');
    }
});