// ============================================
// Ingredients Section — Scroll Animations
// ============================================

(function () {
    const section = document.querySelector('.ingredients-section');
    const header = document.querySelector('.ingredients-section__header');
    const cards = document.querySelectorAll('.ingredient-card');

    if (!section || !header) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ativa o cabeçalho (Título e Subtítulo)
                header.classList.add('animate');

                // Ativa os cards um por um
                cards.forEach(card => {
                    card.classList.add('animate');
                });

                // Para de observar para economizar recursos
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(section);
})();