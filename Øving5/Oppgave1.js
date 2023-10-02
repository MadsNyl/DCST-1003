

const age = document.getElementById("age");
const output = document.getElementById("output");
const button = document.getElementById("button");


button.addEventListener("click", () => {
    if (age.value >= 13 && age.value <= 19) {
        output.innerText = "Du er en tenåring.";
    } else {
        output.innerText = "Du er ikke en tenåring.";
    }
});