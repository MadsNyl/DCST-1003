

const lookupTable = {
    "Melk": 20,
    "Egg": 32,
    "Ost": 130
};


const input = document.getElementById("input");
const output = document.getElementById("output");
const button = document.getElementById("button");


button.addEventListener("click", () => {
    if (lookupTable[input.value]) {
        output.innerText = `Varen med navn ${input.value} koster ${lookupTable[input.value]}`;
    } else {
        output.innerText = `Kunne ikke finne varen med navn ${input.value}`
    }
});