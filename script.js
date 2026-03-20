/* MUSIC — muted autoplay (allowed by browsers), unmute on first interaction */
  const music = document.getElementById('music');
  const btn   = document.getElementById('musicBtn');
  let unlocked = false;

  function unlock() {
    if (unlocked) return;
    unlocked = true;
    music.muted = false;
    music.volume = 0.7;
    btn.classList.add('playing');
    btn.title = 'Music playing (click to pause)';
  }

  // Start muted autoplay immediately
  music.play().catch(() => {});

  // Unmute on any first touch/click/scroll
  ['click','touchstart','scroll','keydown'].forEach(evt => {
    document.addEventListener(evt, unlock, { once: true, passive: true });
  });

  // Button: toggle play/pause & mute
  btn.addEventListener('click', e => {
    e.stopPropagation();
    if (music.paused) {
      music.muted = false;
      music.play();
      btn.textContent = '♪';
      btn.classList.add('playing');
      unlocked = true;
    } else if (!music.muted) {
      music.muted = true;
      btn.textContent = '♪';
      btn.classList.remove('playing');
      btn.title = 'Click to play music';
    } else {
      music.muted = false;
      btn.classList.add('playing');
      btn.title = 'Music playing (click to mute)';
    }
  });

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
