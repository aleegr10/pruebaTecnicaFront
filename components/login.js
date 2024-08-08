document.addEventListener('DOMContentLoaded', function() {
    var loginButton = document.getElementById('login');
    var loginPopup = document.getElementById('loginPopup');
    var submitLogin = document.getElementById('submitLogin');
    var emailInput = document.getElementById('loginEmail');
    var passwordInput = document.getElementById('loginPassword');
    var errorMessage = document.getElementById('loginErrorMessage');

    loginButton.addEventListener('click', function() {
        loginPopup.style.display = 'block';
    });

    submitLogin.addEventListener('click', function() {
        var email = emailInput.value.trim();
        var password = passwordInput.value.trim();
        var valid = true;

        if (email === '') {
            emailInput.classList.add('error');
            valid = false;
        } else {
            emailInput.classList.remove('error');
        }

        if (password === '') {
            passwordInput.classList.add('error');
            valid = false;
        } else {
            passwordInput.classList.remove('error');
        }

        if (valid) {
            errorMessage.style.display = 'none';
            alert('Login successful!');
            loginPopup.style.display = 'none';
        } else {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Please fill out all fields.';
        }
    });

    // Close popup when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target !== loginPopup && !loginPopup.contains(event.target) && event.target !== loginButton) {
            loginPopup.style.display = 'none';
        }
    });
});