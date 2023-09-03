

const input = document.getElementById("input");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    const numberValue = input.value;
    const half = numberValue / 2;
    const double = numberValue * 2;
    const triple = numberValue ** 3;
    const square = numberValue ** numberValue;
    
    document.getElementById("half").innerText = `Halvparten av ${numberValue} er: ${half}`;
    document.getElementById("double").innerText = `Det dobbelte av ${numberValue} er: ${double}`;
    document.getElementById("triple").innerText = `Det tredobbelte av ${numberValue} er: ${triple}`;
    document.getElementById("square").innerText = `${numberValue} ganget med seg selv er: ${square}`;
});