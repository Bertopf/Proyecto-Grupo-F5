console.log("Hola, caracola")

document.addEventListener("DOMContentLoaded", function () {
  const flipCard = document.querySelector(".flip-card");

  if (flipCard) {
    flipCard.addEventListener("click", function () {
      this.classList.toggle("flipped");
    });
  }
});

/*boon modo noche*/
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('modo-toggle');
  const body = document.body;

  // Al cargar la página: revisa si el usuario ya eligió modo noche
  const modoGuardado = localStorage.getItem('modo');

  if (modoGuardado === 'noche') {
    body.classList.add('modo-noche');
    toggleBtn.textContent = '☀️ Modo día';
  }

  // Al hacer clic en el botón
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('modo-noche');

    if (body.classList.contains('modo-noche')) {
      toggleBtn.textContent = '☀️ Modo día';
      localStorage.setItem('modo', 'noche');
    } else {
      toggleBtn.textContent = '🌙 Modo noche';
      localStorage.setItem('modo', 'dia');
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
 const boton = document.querySelector(".button-toggle");
 const menuLinks = document.querySelector(".menu");
 boton.addEventListener("click", function() {
    menuLinks.classList.toggle("open");
 })
}
)
document.addEventListener("DOMContentLoaded", function() {
 const boton = document.querySelector(".submenu-toggle");
 const menuLinks = document.querySelector(".menu2");
 boton.addEventListener("click", function() {
    menuLinks.classList.toggle("open");
 })
}
)

const btnMiembros = document.getElementById('toggleMiembros');
    const lista = document.getElementById('listaMiembros');
    btnMiembros.addEventListener("click", function() {
        lista.classList.toggle("open");
    })






