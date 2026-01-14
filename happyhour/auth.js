function saveUser(email, password) {
    sessionStorage.setItem("userEmail", email);
    sessionStorage.setItem("userPassword", password);
}

function getUser() {
    return {
        email: sessionStorage.getItem("userEmail"),
        password: sessionStorage.getItem("userPassword")
    };
}

function isLoggedIn() {
    return sessionStorage.getItem("loggedIn") === "true";
}

function loginUser() {
    sessionStorage.setItem("loggedIn", "true");
}

function logoutUser() {
    sessionStorage.clear();
    window.location.href = "login.html";
}

function protectPage() {
    if (!isLoggedIn()) {
        window.location.href = "login.html";
    }
}
