function toggleMenu() {
    let menu = document.getElementById('menu');
    if (!menu) {
        menu = document.createElement('nav');
        menu.id = 'menu';
        menu.className = 'rounded-lg absolute top-full right-0 transition-transform transform translate-y-[-100%] md:relative md:top-0 md:flex md:items-center md:space-x-5 md:translate-y-0';
        menu.innerHTML = `
            <ul class="flex flex-col space-y-2 p-5 bg-gray-300 text-gray-900 rounded-lg md:flex-row md:space-y-0 md:space-x-5">
                <li><a href="index.html" class="text-gray-900">Accueil</a></li>
                <li><a href="creations.html" class="text-gray-900">Les Créations</a></li>
                <li><a href="createur.html" class="text-gray-900">Le Créateur</a></li>
                <li><a href="contact.html" class="text-gray-900">Contact</a></li>
            </ul>
        `;
        document.querySelector('header').appendChild(menu);
        menu.addEventListener('mouseleave', hideMenu);
        console.log('menu created');
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