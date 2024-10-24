function toggleMenu() {
    const burgerMenu = document.getElementById('burger-menu');
    const dropdownMenu= document.getElementById('dropdown-menu');
    burgerMenu.classList.toggle('active');
    dropdownMenu.classList.toggle('active');
}
// Effects management.
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.fade-in-section');
    // const otherSections = document.querySelectorAll('.other-section');
    // const allSections = [...sections, ...otherSections, etc.]
    const options = {
        threshold: 0.1 // La section devient visible quand au moins 10% est dans la vue
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Arrête d'observer cette section après l'avoir rendue visible
            }
        });
    }, options);
    // allSections.forEach(section => { observer.observe(section); });
    sections.forEach(section => {
        observer.observe(section);
    });
});

