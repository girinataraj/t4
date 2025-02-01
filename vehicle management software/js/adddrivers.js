document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("driverForm");
    const phoneNumberInput = document.getElementById("phoneNumber");
    const emergencyNumberInput = document.getElementById("emergencyNumber");
    const aadharInput = document.getElementById("aadharNumber");
    const dobInput = document.getElementById("dob");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const backButton = document.getElementById("backButton");

    // Restrict phone and emergency number to 10 digits
    [phoneNumberInput, emergencyNumberInput].forEach(input => {
        input.addEventListener("input", function () {
            this.value = this.value.replace(/\D/g, "").substring(0, 10);
        });
    });

    // Restrict Aadhar number to 16 digits
    aadharInput.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").substring(0, 16);
    });

    // Convert name to uppercase and prevent special characters
    [firstName, lastName].forEach(input => {
        input.addEventListener("input", function () {
            this.value = this.value.replace(/[^a-zA-Z\s]/g, "").toUpperCase();
        });
    });

    // Validate DOB and calculate age
    dobInput.addEventListener("change", function () {
        const dob = new Date(this.value);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        if (today < new Date(dob.setFullYear(today.getFullYear()))) age--;
        if (age < 18) {
            alert("Driver must be at least 18 years old.");
            this.value = "";
        }
    });

    // Back button functionality
    backButton.addEventListener("click", function () {
        window.location.href = "/html/Admin.html"; // Change to your home page URL
    });

    // Form submission validation
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Form submitted successfully!");
        form.submit();
    });
});
