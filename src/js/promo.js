// ============================================
// King em Dobro — Animations & Counters
// ============================================

(function () {
    const section = document.querySelector('.promo-banner');
    const offerHeading = document.querySelector('.promo-banner__offer-heading');
    const priceDisplay = document.querySelector('.promo-banner__price');
    const productGrid = document.querySelector('.promo-banner__product-grid');

    // Elementos dos números para o contador
    const numBurgers = document.querySelector('.promo-banner__offer-number');
    const priceValue = document.querySelector('.promo-banner__price-value');
    const priceDecimals = document.querySelector('.promo-banner__price-decimals');

    if (!section) return;

    // Função para animar os números
    function animateValue(element, start, end, duration, prefix = "") {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Formata se for centavo (mantendo a vírgula)
            let current = Math.floor(progress * (end - start) + start);
            element.innerHTML = prefix + (current < 10 && element === priceDecimals ? '0' + current : current);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ativa animações de CSS
                offerHeading.classList.add('animate');
                priceDisplay.classList.add('animate');
                productGrid.classList.add('animate');

                // Inicia os contadores após um pequeno delay da entrada do texto
                setTimeout(() => {
                    if (numBurgers) animateValue(numBurgers, 0, 2, 800);
                    if (priceValue) animateValue(priceValue, 0, 25, 1000);
                    if (priceDecimals) animateValue(priceDecimals, 0, 90, 1000, ",");
                }, 500);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(section);
})();