// ============================================
// Mobile Menu Logic
// ============================================

const menuBtn = document.querySelector('.menu-toggle__label');
const closeBtn = document.querySelector('.drawer__close');
const drawer = document.querySelector('.drawer');
const overlay = document.querySelector('.drawer__overlay');
const drawerLinks = document.querySelectorAll('.drawer__link');

// Função para abrir/fechar
const toggleMenu = () => {
    drawer.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = drawer.classList.contains('active') ? 'hidden' : '';
};

// Eventos
menuBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Fecha o menu ao clicar em qualquer link (importante!)
drawerLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});