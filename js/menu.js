// Menu espandibile/collassabile con tre puntini.
// Il menu viene inserito automaticamente in ogni pagina che include questo script.

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.createElement('div');
  menu.className = 'site-menu';
  menu.innerHTML = `
    <button class="site-menu-toggle" aria-label="Apri il menu" aria-expanded="false">⋮</button>
    <nav class="site-menu-panel hidden" aria-label="Menu del corso">
      <a href="../index.html">Home</a>
      <a href="../lezioni/lezione-01.html">Lezione 1</a>
      <a href="../lezioni/lezione-02.html">Lezione 2</a>
      <a href="../lezioni/lezione-03.html">Lezione 3</a>
      <a href="../lezioni/lezione-04.html">Lezione 4</a>
      <a href="../lezioni/lezione-05.html">Lezione 5</a>
      <a href="../lezioni/lezione-06.html">Lezione 6</a>
      <a href="../lezioni/lezione-07.html">Lezione 7</a>
      <a href="../lezioni/lezione-08.html">Lezione 8</a>
      <a href="../lezioni/lezione-09.html">Lezione 9</a>
      <a href="../lezioni/lezione-10.html">Lezione 10</a>
      <a href="../pratica/hiragana.html">Esercitazione</a>
      <a href="../materiali/guida-romaji-kana.html">Guida kana</a>
    </nav>
  `;

  document.body.prepend(menu);

  const toggle = menu.querySelector('.site-menu-toggle');
  const panel = menu.querySelector('.site-menu-panel');

  toggle.addEventListener('click', () => {
    const isOpen = !panel.classList.contains('hidden');
    panel.classList.toggle('hidden', isOpen);
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.textContent = isOpen ? '⋮' : '✕';
  });

  document.addEventListener('click', event => {
    if(!menu.contains(event.target)){
      panel.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '⋮';
    }
  });
});