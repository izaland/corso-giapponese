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

  document.querySelectorAll('footer').forEach(f => f.remove());

  const footer = document.createElement('footer');
  footer.style.cssText = 'background:#b91c1c;color:#fff;padding:24px 20px;text-align:center;margin-top:40px';
  footer.innerHTML = `
    <div style="font-weight:700">Corso di giapponese per principianti · materiali didattici</div>
    <div style="margin-top:6px;opacity:.9">© 2026-2026 · Realizzato da Chiaramonte Davide</div>
    <a href="https://chat.whatsapp.com/ELiD1NmTkKvGf3AxhArQPg?s=cl&p=a&mlu=4&ilr=4" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;margin-top:12px;padding:10px 18px;border-radius:999px;background:#fff;color:#b91c1c;font-weight:700;text-decoration:none">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 01-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24s-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.7-.8-.23-.09-.4-.12-.56.12-.17.25-.64.8-.78.96-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/></svg>
      Contatta il gruppo WhatsApp
    </a>
  `;
  document.body.appendChild(footer);
});
