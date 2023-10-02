

const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const button = document.getElementById("button");
const output = document.getElementById("output");


button.addEventListener("click", () => {
    output.innerText =  Math.max(number1.value, number2.value);
});