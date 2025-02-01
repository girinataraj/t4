document.addEventListener("DOMContentLoaded", function () {
    // Make and Model Selection Logic
    const makeSelect = document.getElementById("make");
    const modelInput = document.getElementById("model");

    // Weight Calculation Based on Number Units
    const numberUnitInput = document.getElementById("numberUnit");
    const weightInput = document.getElementById("weight");

    numberUnitInput.addEventListener("input", function () {
        let unit = parseInt(numberUnitInput.value) || 0;
        weightInput.value = unit * 50; // Assume 50kg per unit
    });

    // Submit Button Alert
    document.getElementById("vehicleForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Vehicle details submitted successfully!");
    });

    // Home Button Functionality
    document.getElementById("homeButton").addEventListener("click", function () {
        window.location.href = "/html/Admin.html"; // Change to your home page URL
    });
});
