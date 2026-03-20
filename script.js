/* ── CURSOR ── */
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});
document.querySelectorAll('a, .card, .polaroid, button').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('big'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
});

/* ── MUSIC ── */
document.body.addEventListener('click', () => {
  document.getElementById('music').play().catch(() => {});
}, { once: true });

/* ── HERO PARALLAX ── */
const heroImg = document.getElementById('heroImage');
window.addEventListener('scroll', () => {
  const s = window.scrollY;
  heroImg.style.transform = `scale(1.15) translateY(${s * 0.18}px)`;
}, { passive: true });

/* ── Q&A TOGGLE ── */
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const ans = card.querySelector('.answer');
    const isOpen = card.classList.contains('open');
    // close all
    document.querySelectorAll('.card').forEach(c => {
      c.classList.remove('open');
      c.querySelector('.answer').style.maxHeight = null;
    });
    if (!isOpen) {
      card.classList.add('open');
      ans.style.maxHeight = ans.scrollHeight + 'px';
    }
  });
});

/* ── SCROLL REVEAL ── */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

/* ── FLOATING HEARTS ── */
const EMOJIS = ['❤️', '🌸', '💕', '✨', '💖'];
setInterval(() => {
  const h = document.createElement('div');
  h.className = 'heart';
  h.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
  h.style.left = Math.random() * 100 + 'vw';
  h.style.animationDuration = (4 + Math.random() * 5) + 's';
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 9000);
}, 700);
