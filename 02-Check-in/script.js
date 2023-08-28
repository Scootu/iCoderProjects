const btnMode = document.querySelector(".toggle-mode");
const cartContainer = document.querySelector(".container-check-in");
function addEventListenerToBtnMode() {
  btnMode.addEventListener("click", () => {
    cartContainer.classList.toggle("dark-theme");
  });
}
addEventListenerToBtnMode();
