

const button = document.getElementById("button");
const input = document.getElementById("age");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    const age = input.value;

    if (age < 18) {
        output.innerText = "Du er ikke myndig enda.";
    } else if (age >= 18 && age <=67) {
        output.innerText = "Du er myndig.";
    } else {
        output.innerText = "Du er dessuten pensjonist.";
    }
});