

const list = [];

for (let i = 0; i < 5; i++) list.push(prompt("Skriv inn en vare"));

const output = document.createElement("p");
output.innerHTML = list;

document.body.appendChild(output);
