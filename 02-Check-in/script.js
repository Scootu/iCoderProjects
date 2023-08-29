const checkInput = document.getElementById("checkbox");
const animatePg = document.querySelector(".animatePg");
const cartContainer = document.querySelector(".container-check-in");

checkInput.addEventListener("click", () => {
  animatePg.classList.toggle("selcted");
  cartContainer.classList.toggle("dark-theme");
});
