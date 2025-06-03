document.addEventListener("DOMContentLoaded", function() {
    const boton = document.querySelector(".button-toggle");
    const menuLinks = document.querySelector(".menu");

    boton.addEventListener("click", function() {
        menuLinks.classList.toggle("open");
    })

    const btnMiembros = document.getElementById('toggleMiembros');
    const lista = document.getElementById('listaMiembros');

    btnMiembros.addEventListener("click", function() {
        lista.classList.toggle("open");
    })
})