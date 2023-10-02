

const list = [];

for (let i = 0; i < 5; i++) list.push(Number(prompt("Skriv inn en pris")));


const getSum = () => {
    return list.reduce((a, b) => a + b, 0);
}

const average = document.createElement("p");
const sum = document.createElement("p");
const min = document.createElement("p");
const max = document.createElement("p");

average.innerText = `Gjennomsnitt: ${getSum() / list.length}`;
sum.innerText = `Sum: ${getSum()}`;
min.innerText = `Minste verdi: ${list.reduce((a, b) => Math.min(a, b))}`;
max.innerText = `Største verdi: ${list.reduce((a, b) => Math.max(a, b))}`;

document.body.appendChild(average);
document.body.appendChild(sum);
document.body.appendChild(min);
document.body.appendChild(max);
