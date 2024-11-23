// Store user data in local storage
const users = [];

// Registration form submission
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password === confirmPassword) {
        const user = { username, password };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful!');
        window.location.href = 'login.html';
    } else {
        alert('Passwords do not match!');
    }
});
// // Login form submission
// document.getElementById('login-form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const storedUsers = JSON.parse(localStorage.getItem('users'));

//     storedUsers.forEach((user) => {
//         if (user.username === username}
