window.addEventListener('load', function() {
    const presentationSection = document.getElementById('presentation');
    const sectionTop = presentationSection.getBoundingClientRect().top + window.scrollY;
    
    scrollPosition = sectionTop - (window.innerHeight / 2) -150;
    if (window.innerWidth <= 1000) { 
        scrollPosition -= 10;
    }
    
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
});
