'use strict';
/* VICE CLIPS · página de download (sem frameworks) */
(() => {
  const cfg = window.VICE_CLIPS || {};
  const link = String(cfg.linkDownload || '').trim();
  const $$ = (s) => [...document.querySelectorAll(s)];

  // botões de download: apontam para o Google Drive (nova aba); sem link configurado, levam à seção e avisam
  const aviso = document.getElementById('aviso');
  let avisoT = 0;
  $$('[data-download]').forEach((a) => {
    if (link) {
      a.href = link; a.target = '_blank'; a.rel = 'noopener';
    } else {
      a.addEventListener('click', (e) => {
        if (a.closest('#baixar')) e.preventDefault();
        if (!aviso) return;
        aviso.classList.add('ativo'); clearTimeout(avisoT);
        avisoT = setTimeout(() => aviso.classList.remove('ativo'), 3800);
      });
    }
  });
  const pre = (sel, v) => { if (v) $$(sel).forEach((el) => { el.textContent = v; }); };
  pre('[data-versao]', cfg.versao); pre('[data-tamanho]', cfg.tamanho); pre('[data-sha256]', cfg.sha256);

  // brilho que segue o ponteiro nos botões de vidro (igual ao app)
  document.addEventListener('pointermove', (e) => {
    const el = e.target.closest && e.target.closest('.btn');
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  }, { passive: true });

  // entrada suave ao rolar
  const reduzido = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const alvos = $$('.surge, .recurso.largo');
  if ('IntersectionObserver' in window && !reduzido) {
    const io = new IntersectionObserver((ents) => ents.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('visivel'); io.unobserve(en.target); }
    }), { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    alvos.forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 60}ms`; io.observe(el); });
  } else {
    alvos.forEach((el) => el.classList.add('visivel'));
  }

  // legenda do celular: troca de frase como nos cortes (poucas palavras por vez, com "pulo" na entrada)
  if (!reduzido) {
    $$('[data-legenda]').forEach((el, k) => {
      const frases = el.dataset.legenda.split('|');
      let i = 0;
      setTimeout(() => setInterval(() => {
        i = (i + 1) % frases.length;
        const s = document.createElement('span');
        s.textContent = frases[i];
        el.replaceChildren(s);
      }, 1100), k * 450);
    });
  }
})();
