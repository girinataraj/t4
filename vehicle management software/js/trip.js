document.addEventListener('DOMContentLoaded', () => {
    const addTripButton = document.getElementById('addTripButton');
    const tripForm = document.getElementById('tripForm');
    const tripInputForm = document.getElementById('tripInputForm');
    const tripTable = document.getElementById('tripTable').querySelector('tbody');
  
    // Show/hide the form when clicking the Add Trip button
    addTripButton.addEventListener('click', () => {
      tripForm.classList.toggle('hidden');
    });
  
    // Handle form submission to add trip data to the table
    tripInputForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Get form values
      const driverName = document.getElementById('driverName').value;
      const driverId = document.getElementById('driverId').value;
      const vehicleId = document.getElementById('vehicleId').value;
      const tripDate = document.getElementById('tripDate').value;
      const tripTime = document.getElementById('tripTime').value;
  
      // Create a new row for the table
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${driverName}</td>
        <td>${driverId}</td>
        <td>${vehicleId}</td>
        <td>${tripDate}</td>
        <td>${tripTime}</td>
      `;
  
      // Add the row to the table
      tripTable.appendChild(row);
  
      // Reset the form and hide it
      tripInputForm.reset();
      tripForm.classList.add('hidden');
    });
  });
  