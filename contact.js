let form = document.querySelector(".form");
let customInputs = document.querySelectorAll(".custom");
let popup = document.getElementById("popup");
let closePopup = document.getElementById("closePopup");
let btn = document.getElementById("button");
let phone = document.getElementById("phone");
let count = 0;

phone.addEventListener("keyup", () => {
  count = phone.value.length;
  if (count > 10) {
    phone.value = phone.value.substring(0, 10);
  }
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  showPopup();
});

closePopup.addEventListener("click", () => {
  hidePopup();
  form.reset();
});

function showPopup() {
  popup.classList.add("pop");
  popup.classList.remove("popup");
}

function hidePopup() {
  popup.classList.add("popup");
  popup.classList.remove("pop");
}
