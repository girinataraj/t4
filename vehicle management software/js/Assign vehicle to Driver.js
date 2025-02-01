document.getElementById("assign-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let vehicleId = document.getElementById("vehicle-id").value;
    let registrationId = document.getElementById("registration-id").value;
    let driverId = document.getElementById("driver-id").value;
    let driverName = document.getElementById("driver-name").value;
    let shiftMode = document.getElementById("shift-mode").value;

    if (!driverName.includes(driverId.split(" - ")[1])) {
        alert("Driver Name does not match Driver ID!");
        return;
    }

    let table = document.getElementById("assigned-list");
    let newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${vehicleId}</td>
        <td>${registrationId}</td>
        <td>${driverId.split(" - ")[0]}</td>
        <td>${driverName}</td>
        <td>${shiftMode}</td>
    `;

    alert("Driver Assigned Successfully!");
});

function updateDriverName() {
    let driverSelection = document.getElementById("driver-id").value;
    document.getElementById("driver-name").value = driverSelection.split(" - ")[1];
}

function goBack() {
    window.location.href = "/html/Admin.html";  // Change to the actual home page link
}
