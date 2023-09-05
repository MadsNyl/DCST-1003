

for (let i = 10; i > 0; i--) {
    const div = document.createElement("div");
    div.innerHTML = `
        <p>
            ${i} green ${i === 1 ? "bottle" : "bottles"}, hanging on a wall,
        </p>
        <br>
        <p>
            ${i} green ${i === 1 ? "bottle" : "bottles"}, hanging on a wall,
        </p>
        <br>
        <p>
            If 1 green bottle were to accidentally fall
        </p>
        <br>
        <p>
            There would be ${i - 1} green bottles, hanging on the wall
        </p>
        <br>
    `;

    document.body.appendChild(div);
}