// Load navigation menu and footer from external files
document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Load and inject menu
        const menuResponse = await fetch('menu.html');
        const menuHTML = await menuResponse.text();
        
        const headers = document.querySelectorAll('header .container');
        headers.forEach(header => {
            header.innerHTML = menuHTML + header.innerHTML;
        });

        // Load and inject footer
        const footerResponse = await fetch('footer.html');
        const footerHTML = await footerResponse.text();
        
        const body = document.body;
        body.appendChild(document.createRange().createContextualFragment(footerHTML));

        // Handle hamburger menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const mainNav = document.querySelector('.main-nav');
        
        if (menuToggle && mainNav) {
            menuToggle.addEventListener('click', function() {
                mainNav.classList.toggle('active');
            });

            // Close menu when a link is clicked
            document.querySelectorAll('.header-links a').forEach(link => {
                link.addEventListener('click', function() {
                    mainNav.classList.remove('active');
                });
            });
        }
    } catch (error) {
        console.error('Error loading menu or footer:', error);
    }
});
