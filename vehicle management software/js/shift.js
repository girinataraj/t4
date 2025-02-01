const driverForm = document.getElementById("driverForm");
const shiftTableBody = document.getElementById("shiftTableBody");

driverForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Get input values
  const driverName = document.getElementById("driverName").value;
  const driverId = document.getElementById("driverId").value;
  const vehicleId = document.getElementById("vehicleId").value;
  const vehicleType = document.getElementById("vehicleType").value;
  const shiftTime = document.getElementById("shiftTime").value;

  // Create a new row
  const newRow = document.createElement("tr");

  // Add data to the row
  newRow.innerHTML = `
    <td>${driverName}</td>
    <td>${driverId}</td>
    <td>${vehicleId}</td>
    <td>${vehicleType}</td>
    <td>${shiftTime}</td>
  `;

  // Append the row to the table
  shiftTableBody.appendChild(newRow);

  // Clear form inputs
  driverForm.reset();
});