window.addEventListener('load', function() {
    const presentationSection = document.getElementById('presentation');
    const sectionTop = presentationSection.getBoundingClientRect().top + window.scrollY;
    
    scrollPosition = sectionTop - (window.innerHeight / 2) -200;

    if (window.innerWidth <= 1000) { 
        scrollPosition -= 50;
    }
    
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
});


const diapo = ['bagueOr.jpg', 'bagueSurVerre.jpg', 'ronanNoirBlanc.jpg'];
let index = 0;

function animLancement() {
    const fond = document.getElementById('fond');
    setInterval(() => {
        index = (index + 1) % diapo.length;
        fond.src = 'assets/images/diapoFond/' + diapo[index];
        console.log("Index :", index);  // Affiche une seule fois par passe
    }, 3000);
}

// Lancement unique après le chargement complet de la page
window.onload = animLancement;
