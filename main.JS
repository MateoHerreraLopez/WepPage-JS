document.querySelector('.slide-menu').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show-menu')
})

ScrollReveal().reveal('.principal-new');
ScrollReveal().reveal('.news-cards', { delay: 5000 });
ScrollReveal().reveal('.banner1', { delay: 5000 });
ScrollReveal().reveal('.banner2', { delay: 500 });