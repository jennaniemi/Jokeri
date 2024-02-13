let jokeriMaara = 0;

const addRow = () => {
    const table = document.getElementById('taulukko');
    const newRow = table.insertRow();

    for (let i = 0; i < 7; i++) {
        const newCell = newRow.insertCell();
        const randomNum = Math.floor(Math.random() * 10);
        newCell.textContent = randomNum;
    }

    jokeriMaara++;
    const jokeriMaaraElementti = document.getElementById('jokeriMaara');
    jokeriMaaraElementti.textContent = 'Valmiita rivejä: ' + jokeriMaara;
};

document.getElementById('uusiRiviBtn').addEventListener('click', addRow);
