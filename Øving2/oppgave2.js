

const button = document.getElementById("button");

button.addEventListener("click", () => {
    const firstName = document.getElementById("firstName").value;
    const middleName = document.getElementById("middleName").value;
    const lastName = document.getElementById("lastName").value;

    const output = document.getElementById("output");
    output.innerText = `${firstName} ${middleName} ${lastName}`;
});


