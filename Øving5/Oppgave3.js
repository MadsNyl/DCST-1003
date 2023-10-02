

const input = document.getElementById("input");
const output = document.getElementById("output");
const button = document.getElementById("button");


button.addEventListener("click", () => {
    output.innerText = input.value * input.value;
});