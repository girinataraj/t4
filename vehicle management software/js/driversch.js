// Function to add driver details to localStorage
function addDriver() {
    const driverID = document.getElementById("driverID").value.trim();
    const driverName = document.getElementById("driverName").value.trim();
    const timeInput = document.getElementById("timeInput").value;
    const vehicleNumber = document.getElementById("vehicleNumber").value.trim();
    const date = document.getElementById("date").value;

    if (!driverID || !driverName || !timeInput || !vehicleNumber || !date) {
        alert("All fields are required!");
        return;  
    }

    // Create an object to store driver details
    const driverData = {
        driverID,
        driverName,
        timeInput,
        vehicleNumber,
        date
    };

    // Get existing driver data from localStorage (or initialize an empty array)
    const drivers = JSON.parse(localStorage.getItem('drivers')) || [];

    // Add the new driver to the array
    drivers.push(driverData);

    // Save updated driver data back to localStorage
    localStorage.setItem('drivers', JSON.stringify(drivers));

    // Redirect to the schedule view page
    window.location.href = '/html/viewdriversch.html';
}
