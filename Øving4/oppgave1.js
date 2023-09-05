

let i = 1;

while (i <= 7) {
    const text = document.createElement("p");
    text.innerText = `Jeg er tall nummer ${i}`;
    document.body.appendChild(text);
    i++;
}