window.addEventListener('load', function() {
    const presentationSection = document.getElementById('presentation');
    const sectionTop = presentationSection.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = sectionTop - (window.innerHeight / 2) -150;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
});



function toggleMenu() {
    let menu = document.getElementById('menu');
    if (!menu) {
        menu = document.createElement('nav');
        menu.id = 'menu';
        menu.className = 'absolute top-full right-0 text-white transition-transform transform translate-y-[-100%] md:relative md:top-0 md:flex md:items-center md:space-x-5 md:translate-y-0';
        menu.innerHTML = `
            <ul class="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-5">
                <li><a href="index.html" class="text-white">Accueil</a></li>
                <li><a href="creations.html" class="text-white">Les Créations</a></li>
                <li><a href="createur.html" class="text-white">Le Créateur</a></li>
                <li><a href="contact.html" class="text-white">Contact</a></li>
            </ul>
        `;
        document.querySelector('header').appendChild(menu);
        menu.addEventListener('mouseleave', hideMenu);
    }
    this.classList.add('hidden');
}

function hideMenu() {
    const menu = document.getElementById('menu');
    let menuBurger = document.getElementById('menu-toggle');
    if (menu) {
        menu.remove();
        menuBurger.classList.remove('hidden');
    }
}

document.getElementById('menu-toggle').addEventListener('click', toggleMenu);

document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const menuToggle = document.getElementById('menu-toggle');
    if (menu && !menu.contains(event.target) && !menuToggle.contains(event.target)) {
        hideMenu();
    }
});