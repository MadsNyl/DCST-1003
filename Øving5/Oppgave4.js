

const input = document.getElementById("input");
const output = document.getElementById("output");
const button = document.getElementById("button");
const show = document.getElementById("show");
const list = [];


button.addEventListener("click", () => list.push(input.value));

show.addEventListener("click", () => {
    output.innerHTML = list;
});