document.addEventListener('DOMContentLoaded', function() {
    VANTA.NET({
        el: "#header",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3498db
})
    AOS.init();

    const arrow = document.querySelector('.arrow');
    if (arrow) {
        arrow.addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('projects').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    const scrollToTopButton = document.querySelector('#scrollToTop');
    if (scrollToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
                scrollToTopButton.classList.remove('hidden');
            } else {
                scrollToTopButton.classList.add('hidden');
            }
        });

        scrollToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});