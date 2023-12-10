let btn = document.getElementById("button");
btn.addEventListener("click", booked);

function booked() {
    let customInputs = document.querySelectorAll(".custom");

    let isAnyEmpty = Array.from(customInputs).some(input => input.value === "");

    if (isAnyEmpty) {
        alert("Fill required details to submit.");
    } else {
        alert("Thank you. We have recieved your message. Reply will be send soon. 😊");
        
    }
    let form = document.querySelector(".form");
    form.reset();
}
