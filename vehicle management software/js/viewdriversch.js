// Function to load and display the driver data from localStorage
function loadDriverData() {
    const drivers = JSON.parse(localStorage.getItem('drivers')) || [];
    
    // Get the table body where data will be displayed
    const tableBody = document.getElementById("driverTableBody");

    // Loop through each driver and create a table row
    drivers.forEach(driver => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${driver.driverID}</td>
            <td>${driver.driverName}</td>
            <td>${driver.timeInput}</td>
            <td>${driver.vehicleNumber}</td>
            <td>${driver.date}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Call the function to load data when the page is loaded
loadDriverData();
