// Load navigation menu from menu.html
document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch('menu.html');
        const menuHTML = await response.text();
        
        // Insert menu into all header containers
        const headers = document.querySelectorAll('header .container');
        headers.forEach(header => {
            header.innerHTML = menuHTML + header.innerHTML;
        });
    } catch (error) {
        console.error('Error loading menu:', error);
    }
});
