function toggleMenu() {
    const menuContent = document.getElementById('menuContent');
    const isVisible = menuContent.classList.contains('visible');
    
    if (isVisible) {
        // Close the menu
        menuContent.classList.remove('visible');
        menuContent.classList.add('hidden');
    } else {
        // Open the menu
        menuContent.classList.remove('hidden');
        menuContent.classList.add('visible');
    }
}

// Close the menu if clicked outside
window.onclick = function(event) {
    const menuButton = document.getElementById('menuButton');
    const menuContent = document.getElementById('menuContent');
    
    if (!menuButton.contains(event.target) && !menuContent.contains(event.target)) {
        if (menuContent.classList.contains('visible')) {
            menuContent.classList.remove('visible');
            menuContent.classList.add('hidden');
        }
    }
}