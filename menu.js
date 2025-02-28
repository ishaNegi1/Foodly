let order = document.querySelectorAll(".order");
let popup = document.getElementById("popup");
let closePopup = document.getElementById("closePopup");

order.forEach((element) => {
  element.addEventListener("click", () => {
    showPopup();
  });
});

closePopup.addEventListener("click", () => {
  hidePopup();
});

function showPopup() {
  popup.classList.add("pop");
  popup.classList.remove("popup");
}

function hidePopup() {
  popup.classList.add("popup");
  popup.classList.remove("pop");
}
