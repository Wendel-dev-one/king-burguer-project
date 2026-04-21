// ============================================
// App Section — Interaction & Entrance
// ============================================

(function() {
  const appSection = document.querySelector('.app-section');
  const badges = document.querySelectorAll('.app-badge');

  if (!appSection) return;

  // --- Efeito Ripple nos Botões ---
  badges.forEach(badge => {
    badge.addEventListener('click', function(e) {
      // Cria o elemento da onda
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      this.appendChild(ripple);

      // Posiciona a onda no local do clique
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size/2}px`;
      ripple.style.top = `${e.clientY - rect.top - size/2}px`;

      // Remove após a animação
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });

  // --- Observer para Entrada da Seção ---
  const appObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        appSection.classList.add('animate');
        appObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  appObserver.observe(appSection);
})();