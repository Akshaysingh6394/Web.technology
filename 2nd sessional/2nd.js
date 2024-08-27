const validUsers = [
    { username: "admin", password: "12345" },
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

function validateLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    let user = validUsers.find(user => user.username === username && user.password === password);

    if (user) {
        message.innerText = "Login successful!";
        message.style.color = "green";
    } else {
        message.innerText = "Invalid username or password!";
        message.style.color = "red";
    }
}
