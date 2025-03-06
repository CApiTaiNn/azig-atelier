function toggleMenu() {
    let menu = document.getElementById('menu');
    if (!menu) {
        menu = document.createElement('nav');
        menu.id = 'menu';
        menu.className = 'rounded-lg absolute top-full right-0 transition-transform transform translate-y-[-100%] md:relative md:top-0 md:flex md:items-center md:space-x-5 md:translate-y-0';
        menu.innerHTML = `
            <ul class="flex flex-row m-5 gap-4 md:gap-8">
                <li>
                    <a href="index.html" class="text-white hover:text-yellow-400">Accueil</a>
                </li>
                <li>
                    <a href="createur.html" class="text-white hover:text-yellow-400">Créations</a>
                </li>
                <li>
                    <a href="creations.html" class="text-white hover:text-yellow-400">Créateur</a>
                </li>
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