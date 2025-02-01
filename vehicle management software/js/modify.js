const form = document.getElementById("deliveryForm");
const tableBody = document.querySelector("#scheduleTable tbody");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form data
  const driverName = document.getElementById("driverName").value;
  const deliveryTime = document.getElementById("deliveryTime").value;
  const vehicleNumber = document.getElementById("vehicleNumber").value;
  const date = document.getElementById("date").value;

  // Check if table has 10 rows
  if (tableBody.rows.length >= 10) {
    alert("Maximum of 10 entries allowed!");
    return;
  }

  // Create a new row
  const row = document.createElement("tr");

  // Create cells and append data
  const driverCell = document.createElement("td");
  driverCell.textContent = driverName;
  row.appendChild(driverCell);

  const timeCell = document.createElement("td");
  timeCell.textContent = deliveryTime;
  row.appendChild(timeCell);

  const vehicleCell = document.createElement("td");
  vehicleCell.textContent = vehicleNumber;
  row.appendChild(vehicleCell);

  const dateCell = document.createElement("td");
  dateCell.textContent = date;
  row.appendChild(dateCell);

  // Append row to the table
  tableBody.appendChild(row);

  // Reset form
  form.reset();
});
