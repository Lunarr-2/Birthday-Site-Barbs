/* MUSIC */
  document.body.addEventListener('click', () => {
    document.getElementById('music').play().catch(() => {});
  }, { once: true });

  /* HERO PARALLAX */
  const heroImg = document.getElementById('heroImage');
  window.addEventListener('scroll', () => {
    heroImg.style.transform = `scale(1.15) translateY(${window.scrollY * 0.15}px)`;
  }, { passive: true });

  /* Q&A */
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');
      document.querySelectorAll('.card').forEach(c => c.classList.remove('open'));
      if (!isOpen) card.classList.add('open');
    });
  });

  /* SCROLL REVEAL */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* FLOATING HEARTS */
  const EMOJIS = ['❤️','🌸','💕','✨','💖'];
  setInterval(() => {
    const h = document.createElement('div');
    h.className = 'heart';
    h.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    h.style.left = (Math.random() * 100) + 'vw';
    h.style.animationDuration = (4 + Math.random() * 5) + 's';
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 9000);
  }, 800);
