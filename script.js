document.addEventListener("DOMContentLoaded", function() {

    // --- Mobile Menu Toggle ---
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const iconOpen = document.getElementById("menu-icon-open");
    const iconClose = document.getElementById("menu-icon-close");

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        iconOpen.classList.toggle("hidden");
        iconClose.classList.toggle("hidden");
    });

    // --- Close Mobile Menu on Link Click ---
    // Get all links inside the mobile menu
    const mobileLinks = document.querySelectorAll("#mobile-menu a");

    // Add click listener to each link
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden"); // Hide the menu
            iconOpen.classList.remove("hidden");  // Show the hamburger icon
            iconClose.classList.add("hidden");    // Hide the 'X' icon
        });
    });

    // --- Contact Form Handling ---
    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    contactForm.addEventListener("submit", function(e) {
        // Prevent the default form submission (which reloads the page)
        e.preventDefault();

        // Display a success message
        // In a real application, you'd send this data to a server
        formMessage.textContent = "Thank you! Your message has been sent.";
        formMessage.style.color = "green"; // Make sure message is visible

        // Clear the form fields
        contactForm.reset();

        // Optional: Hide the message after a few seconds
        setTimeout(() => {
            formMessage.textContent = "";
        }, 5000);
    });
});