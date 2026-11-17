/* Aplica el tema guardado (claro/oscuro) lo antes posible para evitar parpadeos. */
(function () {
  try {
    var saved = localStorage.getItem('portal-theme');
    if (saved === 'dark' || saved === 'light') document.documentElement.dataset.theme = saved;
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.dataset.theme = 'dark';
  } catch (e) { /* sin almacenamiento: se queda el tema claro */ }
})();
