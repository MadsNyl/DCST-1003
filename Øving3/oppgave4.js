

const button = document.getElementById("button");
const input = document.getElementById("input");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    const inputValue = input.value.toLowerCase();
    
    switch (inputValue) {
        case "h":
            output.innerText = "Hjemme";
            break;

        case "u":
            output.innerText = "Uavgjort";
            break;

        case "b":
            output.innerText = "Borte";
            break;
    
        default:
            output.innerText = "Du må skrive inn H, U eller B."; 
            break;
    }
});