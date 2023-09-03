

const button = document.getElementById("button");
const output = document.getElementById("output");
button.addEventListener("click", () => {
    output.innerText = "Hello World i det første avsnittet";
});

const dateButton = document.getElementById("today");
const dateOutput = document.getElementById("dateOutput");
dateButton.addEventListener("click", () => {
    dateOutput.innerText = new Date().toLocaleDateString();
});