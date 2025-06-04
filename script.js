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