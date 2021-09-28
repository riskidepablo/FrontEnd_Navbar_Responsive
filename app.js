const NSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navlinks');
    const navLinks = document.querySelectorAll('.navlinks li');

    //Toggle
    burger.addEventListener('click', () => {
        nav.classList.toggle('hamburgeractive');
    });

    //Animation Toggle Nav
    navLinks.forEach((link, index) => {
        link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s';


    });
}

NSlide();