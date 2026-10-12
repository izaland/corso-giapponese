document.addEventListener('DOMContentLoaded', () => {
  const base = '/corso-giapponese/';
  const menu = document.createElement('div');
  menu.className = 'site-menu';
  menu.innerHTML = `
    <button class="site-menu-toggle" aria-label="Apri il menu" aria-expanded="false">⋮</button>
    <nav class="site-menu-panel hidden" aria-label="Menu del corso">
      <a href="${base}index.html">Home</a>
      <a href="${base}lezioni/lezione-01.html">Lezione 1</a>
      <a href="${base}lezioni/lezione-02.html">Lezione 2</a>
      <a href="${base}lezioni/lezione-03.html">Lezione 3</a>
      <a href="${base}lezioni/lezione-04.html">Lezione 4</a>
      <a href="${base}lezioni/lezione-05.html">Lezione 5</a>
      <a href="${base}lezioni/lezione-06.html">Lezione 6</a>
      <a href="${base}lezioni/lezione-07.html">Lezione 7</a>
      <a href="${base}lezioni/lezione-08.html">Lezione 8</a>
      <a href="${base}lezioni/lezione-09.html">Lezione 9</a>
      <a href="${base}lezioni/lezione-10.html">Lezione 10</a>
      <a href="${base}pratica/hiragana.html">Esercitazione</a>
      <a href="${base}materiali/guida-romaji-kana.html">Guida kana</a>
    </nav>
  `;

  document.body.prepend(menu);

  const toggle = menu.querySelector('.site-menu-toggle');
  const panel = menu.querySelector('.site-menu-panel');

  toggle.addEventListener('click', () => {
    const isOpen = !panel.classList.contains('hidden');
    panel.classList.toggle('hidden', isOpen);
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.textContent = isOpen ? '✕' : '⋮';
  });

  document.addEventListener('click', event => {
    if(!menu.contains(event.target)){
      panel.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '⋮';
    }
  });

  const footer = document.createElement('footer');
  footer.style.cssText = 'background:#b91c1c;color:#fff;padding:24px 20px;text-align:center;margin-top:40px';
  footer.innerHTML = `
    <div style="font-weight:700">Corso di giapponese per principianti · materiali didattici</div>
    <div style="margin-top:6px;opacity:.9">© 2026-2026 · Realizzato da Chiaramonte Davide</div>
    <a href="https://chat.whatsapp.com/ELiD1NmTkKvGf3AxhArQPg?s=cl&p=a&mlu=4&ilr=4" target="_blank" rel="noopener" style="display:inline-block;margin-top:12px;padding:10px 18px;border-radius:999px;background:#fff;color:#b91c1c;font-weight:700;text-decoration:none">Contatta il gruppo WhatsApp</a>
  `;
  document.body.appendChild(footer);
});
