// ============================================
// HMMMM Section — Scroll Animations
// ============================================

(function () {
    const section = document.querySelector('.hmmm-section');
    const header  = document.querySelector('.hmmm-section__header');
    const visual  = document.querySelector('.hmmm-section__image-frame');
    const details = document.querySelector('.hmmm-section__details');

    if (!section || !header || !visual || !details) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Dispara o Header
                header.classList.add('animate');
                
                // Dispara a imagem do nugget
                visual.classList.add('animate');
                
                // Dispara o conteúdo da direita
                details.classList.add('animate');

                // Para de observar após a primeira execução
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25 });

    observer.observe(section);
})();