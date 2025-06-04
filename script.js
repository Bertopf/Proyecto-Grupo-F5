console.log("Hola, caracola")

document.addEventListener("DOMContentLoaded", function () {
  const flipCard = document.querySelector(".flip-card");

  if (flipCard) {
    flipCard.addEventListener("click", function () {
      this.classList.toggle("flipped");
    });
  }
});
