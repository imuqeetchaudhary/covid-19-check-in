var vm = new Vue({
    el: '#app',
    data: {
        venue_owner: false
    }
});

function back() {
    window.location.href = "/login.html";
}

function register() {
    return true;
}

function validatePassword() {
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("password-confirm");

    if (String(password.value) != String(confirmPassword.value)) {
        confirmPassword.setCustomValidity("Passwords must match.");
    } else {
        confirmPassword.setCustomValidity("");
    }
}