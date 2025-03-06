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

document.addEventListener("DOMContentLoaded", function () {
    const addToCart = document.getElementById("cart-btn");
    const cartCounter = document.getElementById("cart-count");

    // Retrieve cart count from localStorage or set to 0
    // let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
    let cartCount =  0;
    cartCounter.textContent = cartCount;

    addToCart.addEventListener("click", function () {
        cartCount++; // Increment cart count
        // localStorage.setItem("cartCount", cartCount);
        cartCounter.textContent = cartCount; // Update UI
    });
});

