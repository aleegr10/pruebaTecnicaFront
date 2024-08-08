document.addEventListener('DOMContentLoaded', function() {
    var joinButtons = document.querySelectorAll('.join');
    var joinPopup = document.getElementById('joinPopup');
    var submitJoin = document.getElementById('submitJoin');
    var joinNameInput = document.getElementById('joinName');
    var joinEmailInput = document.getElementById('joinEmail');
    var joinPasswordInput = document.getElementById('joinPassword');
    var joinErrorMessage = document.getElementById('joinErrorMessage');

    joinButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            joinPopup.style.display = 'block';
        });
    });

    submitJoin.addEventListener('click', function() {
        var name = joinNameInput.value.trim();
        var email = joinEmailInput.value.trim();
        var password = joinPasswordInput.value.trim();
        var valid = true;

        if (name === '') {
            joinNameInput.classList.add('error');
            valid = false;
        } else {
            joinNameInput.classList.remove('error');
        }

        if (email === '') {
            joinEmailInput.classList.add('error');
            valid = false;
        } else {
            joinEmailInput.classList.remove('error');
        }

        if (password === '') {
            joinPasswordInput.classList.add('error');
            valid = false;
        } else {
            joinPasswordInput.classList.remove('error');
        }

        if (valid) {
            joinErrorMessage.style.display = 'none';
            alert('Join successful!');
            joinPopup.style.display = 'none';
        } else {
            joinErrorMessage.style.display = 'block';
            joinErrorMessage.textContent = 'Please fill out all fields.';
        }
    });

    // Close popup when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target !== joinPopup && !joinPopup.contains(event.target) && !Array.from(joinButtons).includes(event.target)) {
            joinPopup.style.display = 'none';
        }
    });
});
