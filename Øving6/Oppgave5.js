
const table = []

const getNumbers = () => {
    for (let i = 1; i <= 10; i++) {
        const row = [];
        for (let j = 1; j <= 10; j++) {
            row.push(i / j);
        }

        table.push(row);
    }
}

const showTable = () => {
    const myTable = document.createElement("table");

    for (let i = 0; i < 10; i++) {
        const row = document.createElement("td");
        for (let j = 0; j < 10; j++) {
            const number = document.createElement("tr");
            number.innerText = table[i][j];
            row.appendChild(number);
        }   

        myTable.appendChild(row);
    } 

    document.body.appendChild(myTable);
}

getNumbers();
showTable();