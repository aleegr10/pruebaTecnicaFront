document.addEventListener('DOMContentLoaded', function() {
    var suscribeInput = document.getElementById('suscribeEmail');
    var suscribeButton = document.getElementById('suscribeButton');
    var popup = document.getElementById('suscribePopup');

    suscribeButton.addEventListener('click', function() {
        if (suscribeInput.value.trim() === '') {
            suscribeInput.classList.add('error');
        } else {
            suscribeInput.classList.remove('error');
            popup.style.display = 'block';
            
            setTimeout(function() {
                popup.style.display = 'none';
            }, 3000);
        }
    });
});
