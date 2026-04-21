// ============================================
// Kids Menu — Carousel & Section Animations
// ============================================

(function () {
  const section = document.querySelector('.kids-section');
  const content = document.querySelector('.kids-section__content');
  const slides = document.querySelectorAll('.kids-carousel__slide');
  const dots = document.querySelectorAll('.kids-dot');
  const ctaButton = document.querySelector('.kids-section__cta');
  let current = 0;
  let timer;

  if (!section || slides.length === 0) return;

  // --- Função para mudar o Slide ---
  function goTo(index) {
    // Remove classe ativa de todos
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');

    // Calcula o próximo índice
    current = (index + slides.length) % slides.length;

    // Adiciona classe ativa no novo
    slides[current].classList.add('active');
    dots[current].classList.add('active');

    // Reinicia o tempo do autoplay ao clicar manualmente
    resetTimer();
  }

  // --- Funções de Autoplay ---
  function startTimer() {
    timer = setInterval(() => {
      goTo(current + 1);
    }, 3000); // 3 segundos
  }

  function resetTimer() {
    clearInterval(timer);
    startTimer();
  }

  // --- Event Listeners ---
  document.querySelector('.kids-section__arrow--prev')
    ?.addEventListener('click', () => goTo(current - 1));

  document.querySelector('.kids-section__arrow--next')
    ?.addEventListener('click', () => goTo(current + 1));

  // Permitir clicar nos dots diretamente
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goTo(i));
  });

  // --- Intersection Observer (Entrada da Seção) ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        content.classList.add('animate');
        startTimer(); // Só começa o carrossel quando o usuário chega na seção
        observer.unobserve(entry.target);

        if (entry.isIntersecting) {
          content.classList.add('animate');
          // Adicione esta linha:
          ctaButton.classList.add('animate');

          startTimer();
          observer.unobserve(entry.target);
        }

      }
    });
  }, { threshold: 0.3 });

  observer.observe(section);
})();