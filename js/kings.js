// ============================================
// Kings Section — Scroll Animations
// ============================================

(function () {
    const kingsSection = document.querySelector('.kings-section');
    const title = document.querySelector('.kings-section__title');
    const category = document.querySelector('.kings-section__category');
    const cards = document.querySelectorAll('.kings-card');

    if (!kingsSection || !title || !category || cards.length === 0) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {

                    // Ativa o título principal
                    title.classList.add('animate');

                    // Ativa a categoria (BACON)
                    category.classList.add('animate');

                    // Ativa cada card individualmente
                    cards.forEach((card) => {
                        card.classList.add('animate');
                    });

                    // Uma vez animado, remove a observação para performance
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 } // Dispara quando 30% da seção aparecer na tela
    );

    observer.observe(kingsSection);
})();