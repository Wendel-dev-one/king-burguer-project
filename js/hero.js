// ============================================
// Hero Section — Animations
// ============================================

(function () {
  const content = document.querySelector('.hero__content');
  const image   = document.querySelector('.hero__image');
  const cta     = document.querySelector('.hero__cta');
  const badge   = document.querySelector('.hero__badge');

  if (!content || !image || !cta || !badge) return;

  // Usa IntersectionObserver para disparar só quando o hero estiver visível
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        // Entrada do conteúdo (esquerda → direita)
        content.classList.add('animate');

        // Dispara a animação de "Pop/Bounce" do badge
        // Ela terá o delay que definimos no CSS (0.4s) para não atropelar o título
        badge.classList.add('animate');

        // Entrada da imagem (direita → esquerda) com delay
        image.classList.add('animate');

        // Pulso do botão começa após as entradas terminarem
        setTimeout(() => {
          cta.classList.add('pulse');
        }, 1900);

        // Para de observar após disparar uma vez
        observer.disconnect();
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(document.querySelector('.hero'));
})();