document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Check local storage for dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️ Light Mode";
    }

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.textContent = "🌙 Dark Mode";
        }
    });
});
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Get input values
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        // Email validation regex
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Password validation regex (at least 6 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character)
        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        // Validate email
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate password
        if (!passwordPattern.test(password)) {
            alert("Password must be at least 6 characters long and include one uppercase letter, one lowercase letter, one number, and one special character.");
            return;
        }

        // If validation passes, redirect to aroma.html
        window.location.href = "aroma.html";
    });



