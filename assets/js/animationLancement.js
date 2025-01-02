window.addEventListener('load', function() {
    const presentationSection = document.getElementById('presentation');
    const sectionTop = presentationSection.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = sectionTop - (window.innerHeight / 2) -150;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
});
