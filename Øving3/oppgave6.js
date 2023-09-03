

const button = document.getElementById("button");
const age = document.getElementById("age");
const km = document.getElementById("km");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    const ageValue = age.value;
    const kmValue = km.value;

    if (!ageValue || !kmValue) {
        output.innerText = "Begge felter må fylles inn.";
        return;
    }

    let totalPrice = 0;
    
    totalPrice += (3.52 * kmValue);

    if (ageValue < 12) {
        totalPrice *= 0.5;
    } else if (ageValue > 67) {
        totalPrice *= 0.8;
    }

    output.innerText = `Total pris for turen er: ${totalPrice.toFixed(2)}`;
});