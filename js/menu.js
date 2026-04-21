// ============================================
// Menu Section — Entrance Animations
// ============================================

(function () {
    const menuSection = document.querySelector('.menu-section');
    const menuHeader  = document.querySelector('.menu-section__header');
    const menuGrid    = document.querySelector('.menu-grid');

    if (!menuSection || !menuHeader || !menuGrid) return;

    const menuObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ativa o cabeçalho (Título + Subtítulo)
                menuHeader.classList.add('animate');
                
                // Ativa o grid de cards
                menuGrid.classList.add('animate');

                // Para de observar para economizar recursos
                menuObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    menuObserver.observe(menuSection);
})();

// ---- Menu Section: Flip + Filtro ----

// Flip ao clicar no card
document.querySelectorAll('.menu-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

// Filtro por categoria
document.querySelectorAll('.menu-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    // Atualiza botão ativo
    document.querySelectorAll('.menu-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    document.querySelectorAll('.menu-card').forEach(card => {
      const match = filter === 'todos' || card.dataset.category === filter;
      card.classList.toggle('hidden', !match);
      // Reseta flip ao filtrar
      card.classList.remove('flipped');
    });
  });
});