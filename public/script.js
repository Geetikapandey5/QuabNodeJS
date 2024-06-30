document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/data');
        const data = await response.json();

        const tableBody = document.querySelector('#tickerTable tbody');
        tableBody.innerHTML = '';

        data.forEach(ticker => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = ticker.name;
            row.appendChild(nameCell);

            const lastCell = document.createElement('td');
            lastCell.textContent = ticker.last;
            row.appendChild(lastCell);

            const buyCell = document.createElement('td');
            buyCell.textContent = ticker.buy;
            row.appendChild(buyCell);

            const sellCell = document.createElement('td');
            sellCell.textContent = ticker.sell;
            row.appendChild(sellCell);

            const volumeCell = document.createElement('td');
            volumeCell.textContent = ticker.volume;
            row.appendChild(volumeCell);

            const baseUnitCell = document.createElement('td');
            baseUnitCell.textContent = ticker.base_unit;
            row.appendChild(baseUnitCell);

            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
