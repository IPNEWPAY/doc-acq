window.addEventListener('DOMContentLoaded', () => {
  const observer = new MutationObserver(() => {
    document.querySelectorAll('h2 span[data-v-653ceb53]').forEach(el => {
      if (el.innerText === 'Authentication') {
        el.style.fontSize = '1rem';
        el.style.fontWeight = '500';
        el.style.color = '#555';
        el.innerText = 'Autenticación'; // Cambiá esto por lo que quieras
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});
