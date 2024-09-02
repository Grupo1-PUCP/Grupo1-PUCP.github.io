document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in');

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Ejecutar al cargar la página
});
