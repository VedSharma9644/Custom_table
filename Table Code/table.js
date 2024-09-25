let table; 
let rowCount = 0;
let columnCount = 0;

function createTable() {
    // Get the values of rows and columns from input fields
    rowCount = parseInt(document.getElementById('row-count-number').value);
    columnCount = parseInt(document.getElementById('column-count-number').value);

    // Basic validation to make sure numbers of rows and columns are not in negative
    if (isNaN(rowCount) || isNaN(columnCount) || rowCount <= 0 || columnCount <= 0) {
        alert("Please enter valid positive numbers for both rows and columns to create the table.");
        return;
    }

    // Create table function run
    table = document.createElement('table');
    
    for (let i = 0; i < rowCount; i++) {
        let row = table.insertRow();
        for (let j = 0; j < columnCount; j++) {
            let cell = row.insertCell();
            cell.textContent = `Row ${i + 1} Col ${j + 1}`;
        }
    }

    // Clear any existing table and append the new one
    const container = document.getElementById('table-container');
    container.innerHTML = ''; // Clear the container
    container.appendChild(table);

    // Enable the add row and add column buttons
    document.getElementById('add-row-btn').disabled = false;
    document.getElementById('add-column-btn').disabled = false;
}

function addRow() {
    if (!table) return; // Prevent adding rows if no table exists

    let newRow = table.insertRow();
    for (let i = 0; i < columnCount; i++) {
        let newCell = newRow.insertCell();
        newCell.textContent = `Row ${table.rows.length} Col ${i + 1}`;
    }
}

function addColumn() {
    if (!table) return; // This will check whether there is any existing column. If no then button will not be clickable. 

    // Add a new column to the table
    for (let i = 0; i < table.rows.length; i++) {
        let newCell = table.rows[i].insertCell();
        newCell.textContent = `Row ${i + 1} Col ${table.rows[i].cells.length}`;
    }

    columnCount++; // Keep track of the new column count
}
