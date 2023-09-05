

const start = document.getElementById("start");
const end = document.getElementById("end");
const output = document.getElementById("output");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    for (let i = start.value; i <= end.value; i++) {
        output.innerText += `${i} `;
    }
});