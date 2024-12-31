window.addEventListener('load', function() {
    const presentationSection = document.getElementById('presentation');
    const sectionTop = presentationSection.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = sectionTop - (window.innerHeight / 2) -150;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
});

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
    this.classList.toggle('hidden');
    console.log('toggle');
}

function hideMenu() {
    const menu = document.getElementById('menu');
    let menuBurger = document.getElementById('menu-toggle');
    menu.classList.add('hidden');
    menuBurger.classList.toggle('hidden');
}

document.getElementById('menu-toggle').addEventListener('click', toggleMenu);
document.getElementById('menu').addEventListener('mouseleave', hideMenu);

