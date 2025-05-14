// filepath: interactive-periodic-table/interactive-periodic-table/src/scripts/app.js

document.addEventListener('DOMContentLoaded', () => {
    fetch('assets/data/elements.json')
        .then(response => response.json())
        .then(data => {
            const periodicTable = document.getElementById('periodic-table');
            data.elements.forEach(element => {
                const elementDiv = document.createElement('div');
                elementDiv.classList.add('element');
                elementDiv.innerHTML = `
                    <h2>${element.symbol}</h2>
                    <p>${element.name}</p>
                    <p>Atomic Number: ${element.atomicNumber}</p>
                    <p>Atomic Weight: ${element.atomicWeight}</p>
                `;
                elementDiv.addEventListener('click', () => {
                    alert(`Element: ${element.name}\nSymbol: ${element.symbol}\nAtomic Number: ${element.atomicNumber}\nAtomic Weight: ${element.atomicWeight}`);
                });
                periodicTable.appendChild(elementDiv);
            });
        })
        .catch(error => console.error('Error fetching the elements data:', error));
});