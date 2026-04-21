window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const topBanner = document.querySelector('.top-banner');
    
    // Verifica se o scroll passou de 50 pixels
    if (window.scrollY > 100) {
        header.classList.add('shrink');
        
        // Se quiser que o banner amarelo suma suavemente além de apenas sair do fluxo
        if(topBanner) {
            topBanner.style.marginTop = `-${topBanner.offsetHeight}px`;
            topBanner.style.opacity = '0';
            topBanner.style.transition = 'margin-top 0.4s, opacity 0.3s';
        }
    } else if(window.scrollY < 50) {
        header.classList.remove('shrink');
        
        if(topBanner) {
            topBanner.style.marginTop = '0';
            topBanner.style.opacity = '1';
        }
    }
});

