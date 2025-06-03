/* FADE IN */
document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

/* BOTON HAMBURGUESA */
  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('headerNavList');

    toggle.addEventListener('click', () => {
      navList.classList.toggle('active');
    });

    // OPCIONAL: Cierra el menú al hacer clic en un enlace
    document.querySelectorAll('#headerNavList a').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('active');
      });
    });
  });