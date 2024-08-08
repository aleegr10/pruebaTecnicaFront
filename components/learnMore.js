document.addEventListener('DOMContentLoaded', function() {
    var learnMoreButtons = document.querySelectorAll('.learnMore');
    var popup = document.getElementById('learnMorePopup');

    learnMoreButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            popup.style.display = 'block';
            
            setTimeout(function() {
                popup.style.display = 'none';
            }, 3000);
        });
    });
    
});
