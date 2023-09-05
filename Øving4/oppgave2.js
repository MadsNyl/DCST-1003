

let i = 12;

while (i <= 98) {
    const text = document.createElement("p");
    text.innerText = `Jeg er tall nummer ${i}`;
    document.body.appendChild(text);
    i += 5;
}