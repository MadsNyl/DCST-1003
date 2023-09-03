

const button = document.getElementById("button");
const input = document.getElementById("input");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    const inputValue = input.value.toLowerCase();
    
    if (inputValue === "h") {
        output.innerText = "Hjemme";
    } else if (inputValue === "u") {
        output.innerText = "Uavgjort";
    } else if (inputValue === "b") {
        output.innerText = "Borte";
    } else {
        output.innerText = "Du må skrive inn H, U eller B."; 
    }
});